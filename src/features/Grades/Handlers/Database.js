import grade2 from "./grade2.json";
import grade3 from "./grade3.json";
import grade3russian from "./grade3russian.json";
import { db, storage } from "../../../../firebase.js";
import boilerplateLesson from  "./boilerplateLesson.json";

import AsyncStorage from "@react-native-async-storage/async-storage";

//***all documentation falls under web-namespaced api
//documentation for set() https://firebase.google.com/docs/firestore/manage-data/add-data#web-namespaced-api_1
//documentation for get() https://firebase.google.com/docs/firestore/query-data/get-data#web-namespaced-api_2
//navigating the firestore database tree should be done via reference to doc() or collection().

// This will pull the grade data and save it in a list, each element being the data for a single Grade
// Look at the Firebase and inspect the structure of each level (Grade ==> Chapter ==> Lessons ==> Lesson ==> Minigames ==> Minigames)
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

// This is meant to alter the metadata or add pieces of metadata for large sets of similarly formatted data at a single time. It is split into two parts, one for chapters and one for lessons. 
async function changeData() {
    const g2_chapters = grade2.Grade2.chapters;
    for (var i = 0; i < g2_chapters.length; i++) {

        // ---------------------------------------------------------
        // to change the chapter metadata
        // ---------------------------------------------------------
        const g2_lessons = grade2.Grade2.chapters[i].lessons;
        const data = {
            backgroundImage: g2_chapters[i].backgroundImage,
            colorOne: g2_chapters[i].colorOne,
            colorTwo: g2_chapters[i].colorTwo,
            icon: g2_chapters[i].icon,
            name: g2_chapters[i].name,
            navigation: "Chapter".concat((i + 1).toString()),
            title: g2_chapters[i].title,
            numLessons: g2_lessons.length
        };
        await db.collection("Grade2").doc(g2_chapters[i].navigation).set(data)
            .then(() => {
                console.log("Chapter " + (i + 1) + " Lesson " + (i + 1) + "  successfully updated!");
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });

        // ---------------------------------------------------------
        // to change the lesson metadata
        // ---------------------------------------------------------

        // const g2_lessons = grade3.Grade3.chapters[i].lessons;
        // for (var u = 0; u < g2_lessons.length; u++) {
        //     const data = {
        //         title: g2_lessons[u].title,
        //         thumbnail: g2_lessons[u].thumbnail,
        //         backgroundColor: g2_lessons[u].backgroundColor,
        //         navigation: "Lesson".concat((u + 1).toString())
        //     };
        //     console.log("CH: ", g2_chapters[i].navigation, " LS: ", g2_lessons[u].navigation);
        //     await db.collection("Grade3").doc(g2_chapters[i].navigation).collection(g2_lessons[u].navigation).doc("English").update(data)
        //         .then(() => {
        //             console.log("Chapter " + (i + 1) + " Lesson " + (u + 1) + "  successfully updated!");
        //         })
        //         .catch((error) => {
        //             // The document probably doesn't exist.
        //             console.error("Error updating document: ", error);
        //         });
        // }
    }
}


// This was meant to push all of the hardcoded data to the database as there was no admin console when it was written. Setup for both grade 2 and grade 3 right now. Grade 4 should go directly into the DBs
async function postData() {
    // The following three variables should be adjusted as needed
    const grade = grade2.Grade; //this variable needs to be specified from import
    const gradeName = "Grade2"; //obviously needs to be specified
    const language = "Kazakh" //obviously needs to be specified

    const chapters = grade.chapters;
    //iterating through chapters
    for (var chaptersIter = 0; chaptersIter < chapters.length; chaptersIter++) {
         var chapter = (chaptersIter + 1).toString();
         var chapterDoc = "Chapter".concat(chapter);
         var lessons = grade.chapters[chaptersIter].lessons;

        //iterating through lessons
         for (var lessonsIter = 0; lessonsIter < lessons.length; lessonsIter++) {
             var lesson = (lessonsIter + 1).toString();
             var lessonCollection = "Lesson".concat(lesson);
             var minigames = grade.chapters[chaptersIter].lessons[lessonsIter].minigames;

            //setting metadata for doc
             const data = {
                 title: lessons[lessonsIter].title,
                 thumbnail: lessons[lessonsIter].thumbnail,
                 backgroundColor: lessons[lessonsIter].backgroundColor,
                 navigation: "Lesson".concat((lessonsIter + 1).toString())
             };

            //selecting language within lesson
             await db.collection(gradeName).doc(chapterDoc).collection(lessonCollection).doc(language).set(data)
                 .then(() => {
                     console.log("Chapter ", (chaptersIter + 1), " Lesson ", (lessonsIter + 1), "successfully updated!");
                 })
                 .catch((error) => {
                     // The document probably doesn't exist.
                     console.error("Error updating document: ", error);
                 });


            //iterating through minigames
             for (var minigamesIter = 0; minigamesIter < minigames.length; minigamesIter++) {
                 var minigameName = minigames[minigamesIter].navigation;
                 //selecting current minigame
                 await db.collection(gradeName).doc(chapterDoc).collection(lessonCollection).doc(language).collection("minigames").doc(minigameName).set(minigames[minigamesIter]).then(() => {
                     console.log("Chapter ", (chaptersIter + 1), " Lesson ", (lessonsIter + 1), "successfully written!");
                 })
                     .catch((error) => {
                         console.error("Error writing document: ", error);
                     });
             }

             //same for mastery
             var mastery = grade.chapters[chaptersIter].lessons[lessonsIter].mastery;
             var mastery_2 = grade.chapters[chaptersIter].lessons[lessonsIter].mastery_2;
             if (mastery_2 === undefined || mastery_2 === null) {
                 await db.collection(gradeName).doc(chapterDoc).collection(lessonCollection).doc(language).collection("mastery").doc("mastery").set(mastery)
                     .then(() => {
                         console.log("Mastery for Chapter ", (chaptersIter + 1), " Lesson ", (lessonsIter + 1), "successfully written!");
                     })
                     .catch((error) => {
                         console.error("Error writing document: ", error);
                     });
             } else { //case where mastery_2 exists
                 await db.collection(gradeName).doc(chapterDoc).collection(lessonCollection).doc(language).collection("mastery").doc("mastery").set(mastery)
                     .then(() => {
                         console.log("Mastery for Chapter ", (chaptersIter + 1), " Lesson ", (lessonsIter + 1), "successfully written!");
                     })
                     .catch((error) => {
                         console.error("Error writing document: ", error);
                    });

                await db.collection(gradeName).doc(chapterDoc).collection(lessonCollection).doc(language).collection("mastery").doc("mastery_2").set(mastery_2)
                    .then(() => {
                        console.log("Mastery_2 for Chapter ", (chaptersIter + 1), " Lesson ", (lessonsIter + 1), "successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
        }
    }

} //END OF postData()

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

export { getGradeData, createImageMap, getLessonsData, postData, changeData, getCacheObject, setCache, postBoilerplate };