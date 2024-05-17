import { db, storage } from "../../../../firebase.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

import en_grade2 from "../Data/en_grade2.json"
import en_grade3 from "../Data/en_grade3.json"
import en_grade4 from "../Data/en_grade4.json"

//***all documentation falls under web-namespaced api
//documentation for set() https://firebase.google.com/docs/firestore/manage-data/add-data#web-namespaced-api_1
//documentation for get() https://firebase.google.com/docs/firestore/query-data/get-data#web-namespaced-api_2
//navigating the firestore database tree should be done via reference to doc() or collection().

// This will pull the grade data and save it in a list, each element being the data for a single Grade
// Look at the Firebase and inspect the structure of each level (Grade ==> Chapter ==> Lessons ==> Lesson ==> MasteryAndMinigames)
// @param grade a string, e.g. 'Grade2', which is the grade that you are querying for
// @return chapterList **This will return an array of Chapters in the Grade, but NOT the data held by the chapters. This data is used to render each card in 'ChaptersComponent'
async function getGradeData(grade) {
    console.log(`\n\tgetGradeData() called. Now in ${grade} Chapters`);

    const result = await getCacheObject(grade).then((result) => {
        //console.log("Result: ", result);
        return result;
    }).catch((error) => {
        console.log("Error with getCacheObj in getGradeData: ", error);
    });

    /*if (result != null) {
        console.log("Pulling grades from cache: ", result);
        return result;
    } else {*/
        console.log("Pulling grades from DB");
        let chapterList = []; // Creating the list of chapters

        await db.collection(grade).get() // Pulling the grade data and storing it to the above list
            .then((snapshot) => {
                snapshot.forEach((doc) => { // moving through the snapshot objects individually
                    chapterList.push(doc.data()); // Pushing new object onto the array
                });
            }).catch((error) => {
                console.log("Error: ", error);
            });
        
        console.log("chapterList array:", chapterList); //logging chapterList array
        //await setCache(grade, chapterList);
        //console.log(getCacheObject("grades")); //logging cache under key "grades"
        return chapterList; // This returns the array
    //}
}

// getLessonsData() will pull the lesson data and then save it in a format that we can use. Its really long because I just decided to keep it all in one function.

// @param grade a string e.g. 'Grade2' the grade
// @param chpt a string e.g. 'Chapter1' which specifies the chapter
// @param languageCode **currently always set to "en"
// @return lessonsList **This is just a list of the JSON formatted lessons 
async function getLessonsData(grade, chpt, languageCode) {
    console.log(`\n\tgetLessonsData() called. Now in ${grade} ${chpt} Lessons\n\t\tLANGUAGE_CODE:`, languageCode);

    const result = await getCacheObject(`${grade}-${chpt}-${languageCode}`).then((result) => {
        console.log("Result: ", result);
        return result;
    }).catch((error) => {
        console.log("Error with getCacheObj in getLessonsData: ", error);
    });

    /*if (result != null) {
        console.log("Pulling lessons from cache");
        return result;
    } else {*/
        console.log("Pulling lessons from DB");
        let lessonsList = [];

        let i = 1;
        while (i<100) { //safeguarding against infinite loops
            try {
                let lessonReference = db.collection(grade).doc(chpt).collection(`Lesson${i}`).doc(languageCode);
                let lessonSnapshot = await lessonReference.get()
                if (!lessonSnapshot.exists) { break; }// Break the loop if the document doesn't exist
                
                let lessonObject = { //initializing lessonObject
                    backgroundColor: "",
                    navigation: "",
                    thumbnail: "",
                    title: "",
                    masteryAndMinigames: []
                };

                await lessonReference.get().then((doc) => { //setting lesson metadata
                    lessonObject.backgroundColor = doc.data().backgroundColor;
                    lessonObject.navigation =  doc.data().navigation;
                    lessonObject.thumbnail = doc.data().thumbnail;
                    lessonObject.title = doc.data().title;
                }).catch((error) => {
                    console.log("Error in getLessonsData():", error);
                });

                // now getting masteryAndMinigames array
                let masteryAndMinigamesList = []; 
                await lessonReference.collection("masteryAndMinigames").get().then((snapshot) => {
                    snapshot.forEach((doc) => { // moving through the snapshot objects individually
                        masteryAndMinigamesList.push(doc.data());
                    });
                    lessonObject.masteryAndMinigames = masteryAndMinigamesList;
                }).catch((error) => {
                    console.log("Error in getLessonsData():", error);
                });

                lessonsList.push(lessonObject);
                i++;

            } catch (error) {
                console.log("ERROR:", error);
                break;
            }
        }

        console.log("Lessons: ", lessonsList); //logging lessons array
        //await setCache(`${grade}-${chpt}-${languageCode}`, lessonsList); //cache key looks like "Grade1-Chapter3-en"
        return lessonsList;
    //}
}



//On the topic of local vs cloud file storage:
//
// @hjo224 | Hayden: The below imageMap is just a map taking the path and then returning the URL to pull from the DB. 
//                   I honestly dont know if it makes more sense to just keep this local. 
//
// @jac927 | James: I think Hayden's decision to use db file storage over local file storage is correct for the current use case.
//                  This is because I am moving to expo-image due to RN's Image component causing unwanted flickering.
//                  For expo-image, specifying a uri with imageMap is much more maintainable than alternatives (e.g. hardcoded local filepaths w/ expo-asset).


//BENCHMARK 4/16/24: fetchImages done in 25.53 seconds. This is horrible.
// @param folder **the folder directory that stores the image in the Firebase storage ('/assets') is passed in from fetchImages thunk.
// @param imageMap **an empty map object is passed in from the fetchImages thunk
// @return imageMap **The filled map object in the form <image path, image URL>
async function createImageMap(folder, imageMap) {
    console.log("Pulling images from DB");
    // Going through the DB and finding all of the potential directories holding images
    const list = await createImageMapHelper(folder, [], 0).then((listResult) => {
        return listResult;
    });

    // Pushing the root directory (param folder is 'assets') onto our list of directories that contain images
    list.push(folder);

    // Looping through list of paths and creating the map with the above format
    for (const path of list) { //iterating over the values of the list array
        let result = await storage.child(path).listAll(); // Get all files and subdirectories in the current path.
        // Create promises to fetch the download URLs and metadata for each file
        let urlPromises = result.items.map(url => url.getDownloadURL());
        let pathPromises = result.items.map(path => path.getMetadata());
        // await to resolve all promises
        let urlResolved = await Promise.all(urlPromises);
        let pathResolved = await Promise.all(pathPromises);

        for (let i = 0; i < urlResolved.length; i++) {//now populating imageMap
            try {
                // console.log("=>", pathResolved[i].fullPath);
                imageMap[pathResolved[i].fullPath] = urlResolved[i];
            } catch (error) {
                console.log("Error: ", error);
            }
        }
    }
    return imageMap;
}

// This !!recursively!! creates a list of all directory paths in the Firebase storage 
// @param folder The directory storing the image
// @param pathList This is a list of paths that gets accumulated as the function recurses.
// @param depth tracks the current depth of the recursion, with 0 being passed in initially indicating the top-level directory.
async function createImageMapHelper(folder, pathList, depth) {
    // below is a Recursive Failsafe to check if the current depth exceeds the maximum allowed depth
    // (think of nested folders like a binary tree where the depth of the folders corresponds to the height of the tree).
    if (depth > 5) { //5 is an arbitrary number/cap to stop infinite loops beyond 5 layers of nesting
        console.log("ERROR: Recursion limit reached, stopping further directory exploration.");
        return pathList;
    }

    try{
        let result = await storage.child(folder).listAll(); // get all items and subdirectories in the current folder.
        //console.log(result.prefixes.length);
        if (result.prefixes.length === 0) { //we check if the array (does the current folder have any arrays?) is empty (this is our main stop condition)
            return pathList;
        }

        for (const folderRef of result.prefixes) { //iterating over each subdirectory found in the folder
            pathList.push(folderRef.fullPath); //pushing the folder onto pathList
            await createImageMapHelper(folderRef.fullPath, pathList, depth+1); //we call again and increment depth
        }
    } catch(error) {
        console.log("Error =====> ", error);
    }
    return pathList
}


// The following three variables MUST be specified for postData()
const GRADE_NAME = "Grade4"; //string specifying the grade, e.g. 'Grade2' 
const LANGUAGE_CODE = "en"; //specifies the language, e.g. 'en', 'ru', 'kk'
const CHAPTERS = en_grade4.chapters; //needs to be specified from import

const postData = () => {
    CHAPTERS.forEach((chapter) => { //iterating through chapters array
        postChapterData(chapter); //see below
    })
}

// @param chapter the current chapter object
const postChapterData = async(chapter) => {
    let chapterData = {
        navigation: chapter.navigation,
        title: chapter.title,
        name: chapter.name,
        icon: chapter.icon,
        colorOne: chapter.colorOne,
        colorTwo: chapter.colorTwo
    }
    let chapterReference = db.collection(GRADE_NAME).doc(chapterData.navigation);

    try {
        await chapterReference.set(chapterData); //setting chapter metadata
        console.log(`${chapterData.navigation} set successfully!`);
    } catch(error) {
        console.error("postChapterData() ERROR:", error);
    }

    chapter.lessons.forEach((lesson) => {
        postLessonData(lesson, chapterReference); //see below
    })
}

//@param lesson the current lesson object
//@param chapterReference a reference to the current chapter within our firebase tree.
const postLessonData = async(lesson, chapterReference) => {
    let lessonData = {
        navigation: lesson.navigation,
        title: lesson.title,
        thumbnail: lesson.thumbnail,
        backgroundColor: lesson.backgroundColor
    }
    let lessonLanguageReference =  chapterReference.collection(lessonData.navigation).doc(LANGUAGE_CODE);

    try {
        await lessonLanguageReference.set(lessonData); //setting lessonLanguage metadata
        console.log(`\t${lessonData.navigation}-${LANGUAGE_CODE} set successfully!`);
    } catch(error) {
        console.error("postLessonData() ERROR:", error)
    }

    let duplicates = {} //counting the number of duplicate objects
    let masteryAndMinigames = lesson.content; //lesson.content is the array containing all of the mastery and minigame objects

    //iterating through all the mastery and minigame objects (each one is referred to as 'currentObject' here)
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

//@param currentObject the current mastery or minigame object
//@param lessonLanguageReference a reference to the current language within our current lesson down our firebase tree.
const postMasteryAndMinigames = async(currentObject, lessonLanguageReference) => {
    let masteryAndMinigamesReference = lessonLanguageReference.collection("masteryAndMinigames").doc(currentObject.navigation);

    try{
        await masteryAndMinigamesReference.set(currentObject);
    } catch(error) {
        console.error("postMasteryAndMinigames() ERROR:", error);
    }
}
//end of postData() functions


//for both getCacheObject and setCache, please see: https://reactnative.dev/docs/asyncstorage

async function getCacheObject(key) {
    // console.log("in getCacheObj");
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        console.log(`getCacheObject: getting "${key}" from cache`);
        console.log("all keys:", await AsyncStorage.getAllKeys());
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log("Error in getCacheObj: ", e);
        return null;
    }
}

async function setCache(key, value) {
    // console.log("in setCache");
    try {
        const jsonValue = JSON.stringify(value);
        //console.log("Setting Cache --> Value: ", jsonValue, " Key: ", key);
        await AsyncStorage.setItem(key, jsonValue);
        console.log(`setCache: "${key}" set to value of "${value}"`);
    } catch (e) {
        console.log("Error with storeData: ", e);
        // saving error
    }
}

//use the below function to push boilerplate lesson templates into database for a specified empty chapter. WARNING: CAN ERASE EXISTING DATA
//See LoginScreen for function call location (this function will not work for params that do not exist!);
//WARNING: If your params are incorrect you run the risk of erasing data!! Big no-no!
//Chapter metadata MUST be manually defined beforehand, specifically numLessons attribute.
    //@param gradeNumber grade num should be specified as such: "Grade1", "Grade2", etc. 
    //@param chapterNumber specify as "Chapter1", "Chapter2", etc.
    //function will fill boilerplate for all lessons in given chapter for all languages "English", "Kazakh", "Russian"
    async function postBoilerplate(gradeNumber, chapterNumber) {
        const chapterData = await db.collection(gradeNumber).doc(chapterNumber).get();
        const numLessons = chapterData.data().numLessons; //getting number of lessons from chapter metadata

        const mastery = boilerplateLesson.mastery; //grabbing mastery attribute
        const minigames = boilerplateLesson.minigames; //grabbing all minigames (including objects within minigames)
        
        const languageArray = ["English", "Kazakh", "Russian"]; //array of languages
        const backgroundColor = ["#2C3653", "#87CB28", "#004AAD", "#00C2CB", "#87CEFA", "#8C77AA", //collection of background colors for lesson cards
                                "#B25C3E", "#AA1A44", "#F9F0D7", "#76220C", "#76B9F0", "#FC6467",
                                "#6040AC", "#C85004", "#2A8FE5", "#603A70", "#56AEFF", "#F9A949",
                                "#49326B", "#02084B", "#F6E134", "#80B673", "#9DCD5A", "#98DFEC",
                                "#065D40", "#159D52", "#F9943B", "#53020C", "#060644", "#2A731D"];

        for(let lessonIter=1; lessonIter<=numLessons; lessonIter++) {//iterating through lessons as defined in params.
            let lessonNumber = "Lesson" + lessonIter //concatenating index of iterator to lesson for correct formatting. JavaScript forces lessonIter to a string for proper concatenation.
            let data = { //grabbing metadata for each lesson
                title: boilerplateLesson.title,
                thumbnail: boilerplateLesson.thumbnail,
                backgroundColor: backgroundColor[Math.floor(Math.random()*backgroundColor.length)], //gets random background color from predefined array
                navigation: lessonNumber
            };

            for(let languageIter = 0; languageIter < languageArray.length; languageIter++) { //languageIter iterates through languageArray to select a language
                let language = languageArray[languageIter] //language defined as current index

                //setting metadata for initial lesson's language document (i.e. metadata for "English", "Kazakh", "Russian")
                await db.collection(gradeNumber).doc(chapterNumber).collection(lessonNumber).doc(language).set(data)
                .then(() => {
                    console.log("Current Language:", language);
                    console.log("Boilerplate for", gradeNumber, chapterNumber, lessonNumber, " successfully pushed!");
                })
                .catch((error) => {
                    console.error("Error updating language document: ", language, error);
                });

                //looping through all minigames in boilerplateLesson.json and setting boilerplate for each minigame in firestore.
                for(let minigamesIter = 0; minigamesIter < minigames.length; minigamesIter++) {
                    let minigameName = minigames[minigamesIter].navigation; //getting minigame name from minigame navigation attribute
                        await db.collection(gradeNumber).doc(chapterNumber).collection(lessonNumber).doc(language).collection("minigames").doc(minigameName).set(minigames[minigamesIter])
                            .then(() => {
                                //pass
                            }).catch((error) => {
                                console.error("Error writing minigame: ", minigameName, error);
                            });
                } //end of minigames loop
                console.log("Boilerplate for Minigames for ", gradeNumber, chapterNumber, lessonNumber, " successfully pushed!")

                //setting mastery boilerplate in firestore
                await db.collection(gradeNumber).doc(chapterNumber).collection(lessonNumber).doc(language).collection("mastery").doc("mastery").set(mastery)
                            .then(() => {
                                console.log("Boilerplate for Mastery for ", gradeNumber, chapterNumber, lessonNumber, " successfully written!");
                            })
                            .catch((error) => {
                                console.error("Error writing mastery: ", error);
                            });

            } //end of language loop

        } //end of lesson number loop
    }//end of postBoilerplate

export { getGradeData, createImageMap, getLessonsData, postData, getCacheObject, setCache, postBoilerplate };