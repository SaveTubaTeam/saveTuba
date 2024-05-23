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
        while (i<50) { //safeguarding against infinite loops. 50 is an arbitrary number/cap
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
//                  For expo-image, specifying a uri with imageMap is better than alternatives imo.


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
        console.error("ERROR: Recursion limit reached, stopping further directory exploration.");
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


// The following three variables should be changed every time you run the function.
const GRADE_NAME = "Grade5"; //string specifying the grade, e.g. 'Grade2' 
const LANGUAGE_CODE = "ru"; //specifies the language, e.g. 'en', 'ru', 'kk'
const CHAPTERS = en_grade5_FIELDWORK.chapters; //needs to be specified from import

//this one is different from the postData in PostData.js as it does not check
//for the existence of documents and overwrites everything.
const postDataHard = () => {
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
    const chapterReference = db.collection(GRADE_NAME).doc(chapterData.navigation);

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
    const lessonData = {
        navigation: lesson.navigation,
        title: lesson.title,
        thumbnail: lesson.thumbnail,
        backgroundColor: lesson.backgroundColor
    }
    const lessonLanguageReference =  chapterReference.collection(lessonData.navigation).doc(LANGUAGE_CODE);

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

        postMasteryAndMinigameData(currentObject, lessonLanguageReference); //see below
    })

    // console.log("\t\tmasteryAndMinigames:");
    // lesson.content.forEach((element) => { console.log(`\t\t\t${element.navigation}`); })
}

//@param currentObject the current mastery or minigame object
//@param lessonLanguageReference a reference to the current language within our current lesson down our firebase tree.
const postMasteryAndMinigameData = async(currentObject, lessonLanguageReference) => {
    const masteryAndMinigamesReference = lessonLanguageReference.collection("masteryAndMinigames").doc(currentObject.navigation);

    try{
        await masteryAndMinigamesReference.set(currentObject);
        console.log(`\t\t${currentObject.navigation} set successfully!`);
    } catch(error) {
        console.error("postMasteryAndMinigameData() ERROR:", error);
    }
}

export { getGradeData, createImageMap, getLessonsData, getCacheObject, setCache, postDataHard };