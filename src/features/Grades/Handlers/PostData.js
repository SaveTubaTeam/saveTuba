import { db } from "../../../../firebase.js";

import en_grade2 from "../Data/en_grade2.json"
import en_grade3 from "../Data/en_grade3.json"
import en_grade4 from "../Data/en_grade4.json"

// The following three variables MUST be changed for postData() every time you run the function.
const GRADE_NAME = "Grade2"; //string specifying the grade, e.g. 'Grade2' 
const LANGUAGE_CODE = "en"; //specifies the language, e.g. 'en', 'ru', 'kk'
const CHAPTERS = en_grade2.chapters; //needs to be specified from import

const postData = () => {
    CHAPTERS.forEach((chapter) => { //iterating through chapters array
        postChapterData(chapter); //see below
    })
}

// @param chapter the current chapter object in JSON
const postChapterData = async(chapter) => {
    const chapterData = {
        navigation: chapter.navigation,
        title: chapter.title,
        name: chapter.name,
        icon: chapter.icon,
        colorOne: chapter.colorOne,
        colorTwo: chapter.colorTwo
    }
    let chapterReference = db.collection(GRADE_NAME).doc(chapterData.navigation);

    chapterReference.get().then((doc) => {
      if(!doc.exists) { //if the chapter doc does not exist, we set it anew. else we do not reset.
         setChapterData(chapterData, chapterReference);
      }
    })

    chapter.lessons.forEach((lesson) => { //chapter.lessons is referring to our JSON file's structure
        postLessonData(lesson, chapterReference);
    })
}

const setChapterData = async(chapterData, chapterReference) => {
   try {
      await chapterReference.set(chapterData); //setting chapter metadata
      console.log(`${GRADE_NAME} ${chapterData.navigation} set successfully!`);
   } catch(error) {
      console.log("setChapterData() error:", error);
   }
}

//@param lesson the current lesson object in JSON
//@param chapterReference a reference to the current chapter within our firebase tree.
const postLessonData = async(lesson, chapterReference) => {
    let lessonData = {
        navigation: lesson.navigation,
        title: lesson.title,
        thumbnail: lesson.thumbnail,
        backgroundColor: lesson.backgroundColor
    }
    let lessonLanguageReference =  chapterReference.collection(lessonData.navigation).doc(LANGUAGE_CODE);

    lessonLanguageReference.get().then((doc) => {
      if(doc.exists) { //we want to modify only the title attribute
         updateLessonData(lessonData, lessonLanguageReference, doc);
      } else { //we set anew w/ the entire lesson object if the doc does not exist
         setLessonData(lessonData, lessonLanguageReference);
      }
    });

    let duplicates = {} //to count the number of duplicate objects
    let masteryAndMinigames = lesson.content; //in our JSON, lesson.content is the array containing all of the mastery and minigame objects

    //iterating through all the current mastery and minigame objects in our JSON (each object is referred to as 'currentObject' here)
    masteryAndMinigames.forEach((currentObject) => {
        let currentObjectName = currentObject.navigation

        //first checking for duplicates
        // Initialize this attribute's count to 1 if string is encountered for the first time, otherwise increment this attribute's count
        !duplicates[currentObjectName] ? duplicates[currentObjectName] = 1 : duplicates[currentObjectName]++;

        //if there are duplicates, we change the navigation and title accordingly. duplicates[currentObjectName] is an int
        if (duplicates[currentObjectName] > 1) {
            currentObject.navigation = `${currentObjectName} ${duplicates[currentObjectName]}`;
            currentObject.title = `${currentObject.title}${duplicates[currentObjectName]}`
        }

        postMasteryAndMinigames(currentObject, lessonLanguageReference); //see below
    })

    console.log("\t\tmasteryAndMinigames:");
    lesson.content.forEach((element) => { console.log(`\t\t\t${element.navigation}`); })
}

//@param lessonData a reference to our current lessonData object
const updateLessonData = async(lessonData, lessonLanguageReference, doc) => {
   try {
      const existingLessonData = doc.data(); //getting the existing data object
      existingLessonData.title = lessonData.title; //we only want to update the 'title' attribute if the document exists
      await lessonLanguageReference.update({ ...existingLessonData }); //we perform a data merge using object destructuring. order matters here!
      console.log(`\t${lessonData.navigation}-${LANGUAGE_CODE} updated successfully!`);
   } catch(error) {
      console.log("updateLessonData() ERROR:", error)
   }
}

const setLessonData = async(lessonData, lessonLanguageReference) => {
   try {
      await lessonLanguageReference.set(lessonData); //setting lessonLanguage metadata
      console.log(`\t${lessonData.navigation}-${LANGUAGE_CODE} set successfully!`);
   } catch(error) {
      console.error("postLessonData() ERROR:", error)
   }
}

//@param currentObject the current mastery or minigame object
//@param lessonLanguageReference a reference to the current language within our current lesson down our firebase tree.
const postMasteryAndMinigames = async(currentObject, lessonLanguageReference) => {
   let masteryAndMinigamesReference = lessonLanguageReference.collection("masteryAndMinigames").doc(currentObject.navigation);

   masteryAndMinigamesReference.get().then((doc)=> {
      if(doc.exists) { //we only want to modify attributes that refer to texts (e.g. prompts, names, anything that can be translated)
         updateMasteryAndMinigames(currentObject, masteryAndMinigamesReference, doc);
      } else { //we set anew w/ the entire object if the doc does not exist
         setMasteryAndMinigames(currentObject, masteryAndMinigamesReference);
      }
   });
}

//We only want update attributes that contain curriculum text if the document exists and ignore updating images within content arrays. 
//Curriculum text attributes are either 'prompt' or stored within 'content' arrays.
//@param currentObject a reference to our currentObject
const updateMasteryAndMinigames = async(currentObject, masteryAndMinigamesReference, doc) => {
   try {
      const existingObjectData = doc.data(); //getting the existing data object

      //The 'content' attribute applies to Reorder, Quiz, Memory, and Mastery. However, each of these minigames has a differently structured array.
      //Only Memory and Mastery have content arrays that need to be directly modified element by element because they have images.
      if(currentObject.content) {
         if(currentObject.navigation.includes("Memory") || currentObject.navigation.includes("Mastery")) {
            existingObjectData.content = modifyContent(existingObjectData.content, currentObject.content);
         }
      };

      //The Sorting minigame is special because it has two arrays of content: 'categories' and 'options'
      //Here only the 'categories' array is modified because it has images.
      if(currentObject.navigation.includes("Sorting")) {
         existingObjectData.categories = modifyContent(existingObjectData.categories, currentObject.categories);
      }

      await masteryAndMinigamesReference.update({ ...existingObjectData }); //we perform a data merge using object destructuring. order matters here!
   } catch(error) {
      console.log("updateMasteryAndMinigames() ERROR:", error)
   }
}

//we modify the content array
//@return result the modified array
const modifyContent = (existingContent, newContent) => {
   const result = [];

   for(let i=0; i<newContent.length; i++) {
      let attributeToUpdate = "";
      if(existingContent[i]) {
         if (existingContent[i].name) {
            attributeToUpdate = 'name';
         } else if (existingContent[i].text) {
            attributeToUpdate = 'text';
         }

         if(existingContent[i].hasOwnProperty('image')) { //see here for hasOwnProperty(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
            if (attributeToUpdate) {
               existingContent[i][attributeToUpdate] = newContent[i][attributeToUpdate]; //we modify the existingContent's attribute with the newContent attribute
            }
         }

         result.push(existingContent[i]);

      } else {
         result.push(newContent[i]); //this case will only happen if someone changes the number of items in the minigame in the curriculum
      }
   }
   return result;
}

const setMasteryAndMinigames = async(currentObject, masteryAndMinigamesReference) => {
   try{
      await masteryAndMinigamesReference.set(currentObject);
   } catch(error) {
      console.error("postMasteryAndMinigames() ERROR:", error);
   }
}

export { postData }