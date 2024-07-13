//@ts-check

import { db, storage } from "../../../../firebase.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

import en_grade2 from "../Data/en_grade2.json"
import en_grade3 from "../Data/en_grade3.json"
import en_grade4 from "../Data/en_grade4.json"
import en_grade5_FIELDWORK from "../Data/en_grade5_FIELDWORK.json"

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
// @hjo224 | Hayden: The below imageMap is just a map taking the path and then returning the URL to pull from the DB. 
// I honestly dont know if it makes more sense to just keep this local. 
//
// @jac927 | James: I think Hayden's decision to use db file storage over local file storage is correct for our use case.
// This is because I am moving to expo-image due to RN's Image component causing unwanted flickering.
// For expo-image, specifying a uri with imageMap is better than alternatives imo.


//BENCHMARK 4/16/24: fetchImages done in 25.53 seconds. This is horrible. Update 4/19: I'm in Kazakhstan and fetchImages now takes 68.03 seconds waahhhh
// @param folder **the folder directory that stores the image in the Firebase storage ('/assets') is passed in from fetchImages thunk.
// @param imageMap **an empty map object is passed in from the fetchImages thunk
// @return imageMap **The filled map object in the form <image path, image URL>
async function createImageMap(folder, imageMap) {
    console.log("Pulling images from DB");
    // Going through the DB and finding all of the potential directories holding images

    const start = performance.now(); // Start performance timer
    const list = await createImageMapHelper(folder, [], 0).then((listResult) => {
        const helperEnd = performance.now();
        const elapsedTimeSeconds = (helperEnd - start) / 1000;
        console.log(`createImageMapHelper done in ${elapsedTimeSeconds.toFixed(2)} seconds`);
        return listResult;
    });

    // Pushing the root directory (param folder is 'assets') onto our list of directories that contain images
    list.push(folder);

    // Fetching URLs and metadata concurrently for all files in each directory
    await Promise.all(list.map(async (path) => {
        try {
            const result = await storage.child(path).listAll(); // Get all files and subdirectories in the current path.
            // console.log("RESULT ARRAY", result.items);
            // console.log("PREFIXES ARRAY", result.prefixes);

            // Creating promises to fetch the download URLs and metadata for each file
            const urlPromises = result.items.map(url => url.getDownloadURL());
            const pathPromises = result.items.map(path => path.getMetadata());

            // await to resolve all promises. i think this is a batch process but i am probably wrong
            const [urlResolved, pathResolved] = await Promise.all([
                Promise.all(urlPromises), 
                Promise.all(pathPromises)
            ]); // await to resolve all promises.

            // console.log("urlResolved object:", urlResolved[0]);
            // console.log("pathResolved object:", pathResolved[0]);

            // Populating imageMap
            for (let i = 0; i < urlResolved.length; i++) {
                imageMap[pathResolved[i].fullPath] = urlResolved[i];
            }
        } catch (error) {
            console.log("Error:", error);
        }
    }));

    const promisesEnd = performance.now();
    const elapsedTimeSeconds = (promisesEnd - start) / 1000;
    console.log(`createImageMap done in ${elapsedTimeSeconds.toFixed(2)} seconds`);

    return imageMap;
}

// This !!recursively!! creates a list of all directory paths in the Firebase storage 
// @param folder The directory storing the image
// @param pathList This is a list of paths that gets accumulated as the function recurses.
// @param depth tracks the current depth of the recursion, with 0 being passed in initially indicating the top-level directory.
async function createImageMapHelper(folder, pathList, depth) {
    // below is a Recursive Failsafe to check if the current depth exceeds the maximum allowed depth
    // (think of nested folders like a binary tree where the depth of the folders corresponds to the height of the tree).
    if (depth > 10) { //10 is an arbitrary number/cap to stop infinite loops beyond 10 layers of nesting
        console.warn("ERROR: Recursion limit reached, stopping further directory exploration.");
        return pathList;
    }

    try{
        let result = await storage.child(folder).listAll(); // get all items and subdirectories in the current folder.
        //console.log(result.prefixes.length);
        //we check if the array is empty (this is our main stop condition, basically asking: does the current folder have any folders?)
        if (result.prefixes.length === 0) {
            return pathList;
        }

        // .map() initiates operations in the array concurrently
        const promises = result.prefixes.map((folderRef) => { //iterating over each subdirectory found in the folder
            pathList.push(folderRef.fullPath); //pushing the folder onto pathList
            return createImageMapHelper(folderRef.fullPath, pathList, depth + 1); //we call again and increment depth
        });

        await Promise.all(promises); // Wait for all recursive calls to complete

    } catch(error) {
        console.log("Error =====> ", error);
    }
    return pathList
}

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

export { getGradeData, createImageMap, getLessonsData, getIndividualLessonData, getActivitiesData, getCacheObject, setCache };