//@ts-check

import { db, storage } from "../../../firebaseConfig.js"; 
import AsyncStorage from "@react-native-async-storage/async-storage";

//***all documentation falls under web-namespaced api
//documentation for set() https://firebase.google.com/docs/firestore/manage-data/add-data#web-namespaced-api_1
//documentation for get() https://firebase.google.com/docs/firestore/query-data/get-data#web-namespaced-api_2
//navigating the firestore database tree should be done via reference to doc() or collection().

// This will pull the grade data and save it in a list, each element being the data for a single Grade
// Look at the Firebase and inspect the structure of each level (Grade ==> Chapter ==> Lessons ==> Lesson ==> Activities)
// @param {string} grade a string, e.g. 'Grade2', which is the grade that you are querying for
// @return {Object[]} chapterList **This will return an array of Chapters in the Grade, but NOT the data held by the chapters. This data is used to render each card in 'ChaptersComponent'
async function getGradeData(grade) {
    console.log(`\n\tgetGradeData() called. Now in ${grade} Chapters`);
    const start = performance.now(); 

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

    const elapsedTimeSeconds = (performance.now() - start) / 1000;
    console.log(`\t\t\t\tgetGradeData done in ${elapsedTimeSeconds.toFixed(2)} seconds\n`);
    console.log("chapterList array:", chapterList); //logging chapterList array

    return chapterList; // This returns the array
}

// getLessonsData() will pull the lesson data and then save it in a format that we can use.

//BENCHMARK 6/12/24: this is the slowest function by a mile. For large chapters with many lessons, load time is ~2 seconds, which will most definitely be a higher value in KZ
//Performance improvements could be made by having this function perform concurrently

//BENCHMARK 6/14/24: with concurrency this function now runs in less than 1 second regarless of the number of lessons!

// @param {string} grade a string e.g. 'Grade2' the grade
// @param {string} chpt a string e.g. 'Chapter1' which specifies the chapter
// @param {int} numLessons the number of lessons in the given chapter
// @param {string} languageCode **currently always set to "en"
// @return {Object[]} lessonsList **This is just a list of the JSON formatted lessons 
async function getLessonsData(grade, chpt, numLessons, languageCode) {
    console.log(`\n\tgetLessonsData() called. Now in ${grade} ${chpt} Lessons\n\t\tLANGUAGE_CODE:`, languageCode);
    const start = performance.now(); 

    console.log("Pulling lessons from DB");
    const lessonPromises = [];

    for(let i=1; i<=numLessons; i++) {
        lessonPromises.push(getIndividualLessonData(grade, chpt, `Lesson${i}`, languageCode));
    }

    //resolving all promises, filtering out nulls
    const lessonsList = (await Promise.all(lessonPromises)).filter(lesson => lesson !== null);

    const elapsedTimeSeconds = (performance.now() - start) / 1000;
    console.log(`\t\t\t\tgetLessonsData done in ${elapsedTimeSeconds.toFixed(2)} seconds\n`);
    console.log("Lessons: ", lessonsList); //logging lessons array

    return lessonsList;

}

//getLessonsData helper!
//@param {string} e.g. 'Lesson2'
async function getIndividualLessonData(grade, chpt, lesson, languageCode) {
    try {
        let lessonReference = db.collection(grade).doc(chpt).collection(lesson).doc(languageCode);
        let lessonSnapshot = await lessonReference.get();

        if (lessonSnapshot.exists) {
            return lessonSnapshot.data();
        } else {
            return null; //to break the getLessonsData loop
        }
    } catch (error) {
        console.log("ERROR in getLessonsData:", error);
    }
}

/** 
 * @param {string} grade e.g. 'Grade2'
 * @param {string} chpt e.g. 'Chapter1'
 * @param {string} lesson e.g. 'Lesson1'
 * @param {string} languageCode e.g. 'en'
*/
async function getActivitiesData(grade, chpt, lesson, languageCode) {
    console.log(`\n\tgetActivities() called. Now in ${grade} ${chpt} ${lesson}\n\t\tLANGUAGE_CODE:`, languageCode);
    console.log(`Pulling ${lesson} mastery and minigames from DB`);

    let activitiesReference = db.collection(grade).doc(chpt).collection(lesson).doc(languageCode).collection("masteryAndMinigames");

    // now getting Activities array
    let activitiesList = []; 
    await activitiesReference.get().then((snapshot) => {
        snapshot.forEach((doc) => { // moving through the snapshot objects individually
            activitiesList.push(doc.data());
        });
    }).catch((error) => {
        console.log("Error in getLessonsData():", error);
    });

    console.log("activities:", activitiesList);
    return activitiesList;
}

//On the topic of local vs cloud file storage:
//
// hjo224 | Hayden: The below imageMap is just a map taking the path and then returning the URL to pull from the DB. 
// I honestly dont know if it makes more sense to just keep this local. 
//
// jac927 | James: database file storage over local file storage is better for our use case imo.

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

export { getGradeData, getLessonsData, getIndividualLessonData, getActivitiesData, getCacheObject, setCache };