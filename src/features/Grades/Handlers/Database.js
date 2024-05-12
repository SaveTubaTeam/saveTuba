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
// The reason this is important is because when you query the DB you will only get one level at a time. So when I pull the Grade data I am essentially just
// getting a pointer that will take me to the next level. That is why there are so many functions in this file.

// @param grade **This is just the grade that you are querying for
// @return chapterList **This will return the list of Chapters in the Grade, but not the data held by the chapters
async function getGradeData(grade) {
    console.log(`\n\tNow in ${grade} Chapters`);

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
        // Creating the list of chapters
        const chapterList = [];
        // Pulling the grade data and storing it to the above list
        await db.collection(grade).get()
            .then((snapshot) => {
                snapshot.forEach((doc) => { // moving through the snapshot objects individually
                    chapterList.push(doc.data()); // Pushing new object onto the array
                });
            }).catch((error) => {
                console.log("Error: ", error);
            });
        console.log("chapterList array:", chapterList); //logging chapterList array
        await setCache(grade, chapterList);
        //console.log(getCacheObject("grades")); //logging cache under key "grades"
        return chapterList; // This returns the array
    //}
}

// getLessonsData() will pull the lesson data and then save it in a format that we can use. Its really long because I just decided to keep it all in one 
// function and copy/paste the code for formatting the objects in each language. This could be refactored to look neater pretty easily.

// @param grade **Specifies the grade 
// @param chpt **Specifies the chapter
// @param numLessons **This made it easier to query from the DB as there were quite a few issues with pulling dynamically. 
//                   Plus when you pull the Chapter data I have an attribute attached to the metadata of each Grade that has the number of lessons in the Grade, as that is static
// @param language **currently always set to "English"
// @return lessons **This is just a list of the JSON formatted lessons 
async function getLessonsData(grade, chpt, numLessons, language) {
    grade = "Grade".concat(grade.toString());
    chpt = "Chapter".concat(chpt.toString());
    console.log(`\n\tNow in ${grade} ${chpt} Lessons\n  lang:`, language);

    const result = await getCacheObject(`${grade}-${chpt}-${language}`).then((result) => {
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
        // Use a map to more easily access correct minigames
        var lessons = [];

        //iterating through lessons
        for (var i = 1; i <= numLessons; i++) {
            var lessonObject = new Map(); // may need to move back up
            // const minigameList = new Map(); // Tried map and did not work due to the FlatList loading the minigame components
            const minigameList = [];
            const lessonNum = "Lesson".concat(i.toString());

            // This will pull data from the specified language in the DB.
            let docName;
            if (language === "en") { //English
                 docName = "English";
            } else if(language == "ru") {
                docName = "Russian";
            } else if(language =="kk") {
                docName = "Kazakh";
            }
            // pulling the metadata
            await db.collection(grade).doc(chpt).collection(lessonNum).doc(docName).get().then((doc) => {
                // moving through the snapshot objects individually
                lessonObject.set("backgroundColor", doc.data().backgroundColor);
                lessonObject.set("navigation", doc.data().navigation);
                lessonObject.set("thumbnail", doc.data().thumbnail);
                lessonObject.set("title", doc.data().title);

            }).catch((error) => {
                console.log("Error in Database.js metadata: ", error);
            });

            // pulling the minigames
            await db.collection(grade).doc(chpt).collection(lessonNum).doc(docName).collection("minigames").get().then((snapshot) => {
                snapshot.forEach((doc) => { // moving through the snapshot objects individually
                    minigameList.push(doc.data());

                });
                lessonObject.set("minigames", minigameList);
            }).catch((error) => {
                console.log("Error in Database.js minigames: ", error);
            });

            //pulling the mastery 
            await db.collection(grade).doc(chpt).collection(lessonNum).doc(docName).collection("mastery").get().then((snapshot) => {
                snapshot.forEach((doc) => { // moving through the snapshot objects individually
                    lessonObject.set(doc.id, doc.data());

                });
            }).catch((error) => {
                console.log("Error in Database.js mastery: ", error);
            });
            lessons.push(lessonObject);
        }//end of lessons iteration

        console.log("Lessons: ", lessons); //logging lessons array
        await setCache(`${grade}-${chpt}-${language}`, lessons); //cache key looks like "Grade1-Chapter3"
        //console.log(getCacheObject("lessons")); //see lessons in cache
        return lessons;
    //}
}

// The imageMap is just a map taking the path and then returning the URL to pull from the DB. I honestly dont know if it makes more sense to just keep this local.
// @param folder **This is the folder directory that stores the image in the Firebase storage
// @param imageMap **This is the empty map object that will be passed from the handlers
// @return imageMap **The filled map object in the form <image path, image URL>
async function createImageMap(folder, imageMap) {
    console.log("Pulling images from DB");
    // Going through the DB and finding all of the potential directories holding images
    var list = await createImageMapHelper(folder, []).then((listResult) => {
        return listResult;
    });

    // Pushing the current directory
    list.push(folder);

    // Looping through list of paths and creating the map with the above format
    for (const path in list) {
        let result = await storage.child(list[path]).listAll();

        let urlPromises = result.items.map(url => url.getDownloadURL());
        let pathPromises = result.items.map(path => path.getMetadata());

        let urlResolved = await Promise.all(urlPromises);
        let pathResolved = await Promise.all(pathPromises);

        for (var x = 0; x < urlResolved.length; x++) {
            try {
                // console.log("=>", pathResolved[x].fullPath);
                imageMap[pathResolved[x].fullPath] = urlResolved[x];
            } catch (error) {
                console.log("Error: ", error);
            }
        }
    }
    return imageMap;
}

// This creates a list of all directory paths in the Firebase storage 
// @param folder **Same as the above function, it is the directory storing the image
// @param pathList **This is a list of paths, I needed to create this first as the paths were necessary for pulling images and there is no efficient way to do this that I found.
async function createImageMapHelper(folder, pathList) {
    let result = await storage.child(folder).listAll();
    for (const folderRef of result.prefixes) {
        try {
            pathList.push(folderRef.fullPath);
            await createImageMapHelper(folderRef.fullPath, pathList);

        } catch (error) {
            console.log("Error =====> ", error);
        }
    }
    //This is the number of nested folders. This will need to be updated if the images directories are changed
    if (pathList.length === 14) {
        return pathList;
    }
}

// The following three variables MUST be specified for postData()
const GRADE_NAME = "Grade4"; 
const LANGUAGE_CODE = "en" 
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

        //if there are duplicates, we change the navigation name accordingly
        if (duplicates[currentObjectName] > 1) {
            currentObject.navigation = `${currentObjectName} ${duplicates[currentObjectName]}`;
        }

        postMasteryAndMinigames(currentObject, lessonLanguageReference); //see below
    })

    console.log("\t\tmasteryAndMinigames:");
    lesson.content.map((element) => { console.log(`\t\t\t${element}`) })
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


// // This is meant to alter the metadata or add pieces of metadata for large sets of similarly formatted data at a single time. It is split into two parts, one for chapters and one for lessons. 
// async function changeData() {
//     const g2_chapters = grade2.Grade2.chapters;
//     for (var i = 0; i < g2_chapters.length; i++) {

//         // ---------------------------------------------------------
//         // to change the chapter metadata
//         // ---------------------------------------------------------
//         const g2_lessons = grade2.Grade2.chapters[i].lessons;
//         const data = {
//             backgroundImage: g2_chapters[i].backgroundImage,
//             colorOne: g2_chapters[i].colorOne,
//             colorTwo: g2_chapters[i].colorTwo,
//             icon: g2_chapters[i].icon,
//             name: g2_chapters[i].name,
//             navigation: "Chapter".concat((i + 1).toString()),
//             title: g2_chapters[i].title,
//             numLessons: g2_lessons.length
//         };
//         await db.collection("Grade2").doc(g2_chapters[i].navigation).set(data)
//             .then(() => {
//                 console.log("Chapter " + (i + 1) + " Lesson " + (i + 1) + "  successfully updated!");
//             })
//             .catch((error) => {
//                 // The document probably doesn't exist.
//                 console.error("Error updating document: ", error);
//             });

//         // ---------------------------------------------------------
//         // to change the lesson metadata
//         // ---------------------------------------------------------

//         // const g2_lessons = grade3.Grade3.chapters[i].lessons;
//         // for (var u = 0; u < g2_lessons.length; u++) {
//         //     const data = {
//         //         title: g2_lessons[u].title,
//         //         thumbnail: g2_lessons[u].thumbnail,
//         //         backgroundColor: g2_lessons[u].backgroundColor,
//         //         navigation: "Lesson".concat((u + 1).toString())
//         //     };
//         //     console.log("CH: ", g2_chapters[i].navigation, " LS: ", g2_lessons[u].navigation);
//         //     await db.collection("Grade3").doc(g2_chapters[i].navigation).collection(g2_lessons[u].navigation).doc("English").update(data)
//         //         .then(() => {
//         //             console.log("Chapter " + (i + 1) + " Lesson " + (u + 1) + "  successfully updated!");
//         //         })
//         //         .catch((error) => {
//         //             // The document probably doesn't exist.
//         //             console.error("Error updating document: ", error);
//         //         });
//         // }
//     }
// }

export { getGradeData, createImageMap, getLessonsData, postData, getCacheObject, setCache, postBoilerplate };