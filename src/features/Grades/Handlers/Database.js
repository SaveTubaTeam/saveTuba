import grade2 from "./grade2.json";
import grade3 from "./grade3.json";
import { db, storage } from "../../../../firebase.js";
import boilerplateLesson from  "./boilerplateLesson.json";

import AsyncStorage from "@react-native-async-storage/async-storage";

//***all documentation falls under web api
//documentation for count() https://firebase.google.com/docs/firestore/query-data/aggregation-queries 
//documentation for set() https://firebase.google.com/docs/firestore/manage-data/add-data#node.js_1
//documentation for get() https://firebase.google.com/docs/firestore/query-data/get-data
//navigating the firestore database tree should be done as seen in postBoilerplate() via reference to doc() or collection().

// This will pull the grade data and save it in a list, each element being the data for a single Grade
// Look at the Firebase and inspect the structure of each level (Grade ==> Chapter ==> Lessons ==> Lesson ==> Minigames ==> Minigames)
// The reason this is important is because when you query the DB you will only get one level at a time. So when I pull the Grade data I am essentially just
// getting a pointer that will take me to the next level. That is why there are so many functions in this file.

// @param grade **This is just the grade that you are querying for
// @return chapterList **This will return the list of Chapters in the Grade, but not the data held by the chapters
async function getGradeData(grade) {

    const result = await getCacheObject(grade).then((result) => {
        console.log("Result: ", result);
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
        console.log(chapterList); //logging chapterList array
        await setCache(grade, chapterList);
        //console.log(getCacheObject("grades")); //logging cache under key "grades"
        return chapterList; // This returns the array
    //}
}

// This will pull the lesson data and then save it in a format that we can use. Its really long because I just decided to keep it all in one 
// function and copy/paste the code for formatting the objects in each language. This could be refactored to look neater pretty easily.

// @param grade **Specifies the grade 

// @param chpt **Specifies the chapter

// @param numLessons **This made it easier to query from the DB as there were quite a few issues with pulling dynamically. 
// Plus when you pull the Chapter data I have an attribute attached to the metadata of each Grade that has the number of lessons in the Grade, as that is static

// @param language **This is a part of the state, I have not fully figured out how to make sure that the language will be the phone's default lang, but it provide the ability to pull the specific language from the DB in the future

//@ return lessons **This is just a list of the JSON formatted lessons 
async function getLessonsData(grade, chpt, numLessons, language) {
    const result = await getCacheObject("lessons").then((result) => {
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
        console.log("lang ", language);
        grade = "Grade".concat(grade.toString());
        chpt = "Chapter".concat(chpt.toString());
        for (var i = 1; i <= numLessons; i++) {
            var lessonObject = new Map(); // may need to move back up
            // const minigameList = new Map(); // Tried map and did not work due to the FlatList loading the minigame components
            const minigameList = [];
            const lessonNum = "Lesson".concat(i.toString());

            // This will pull data from each language in the DB. Could have been done in less lines but ctrl c was easier
            if (language === "en") { //English
                const docName = "English";

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
            } else if (language === "ru") { //Russian
                const docName = "Russian";

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
            } else if (language === "kk") { //Kazakh
                const docName = "Kazakh";

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
            }
        }
        console.log("Lessons: ", lessons); //logging lessons array
        await setCache("lessons", lessons);
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
// Leaving it in for propriety 
//TODO: rewrite to take any formatted lesson .json file
async function postData() {
    // Grade 2
    const chapters2 = grade2.Grade2.chapters;
    const gradeName2 = Object.keys(grade2)[0];
    for (var chapters2Iter = 0; chapters2Iter < chapters2.length; chapters2Iter++) {
        var chapter2 = (chapters2Iter + 1).toString();
        var chapterDoc2 = "Chapter".concat(chapter2);
        var lessons2 = grade2.Grade2.chapters[chapters2Iter].lessons;

        for (var lessons2Iter = 0; lessons2Iter < lessons2.length; lessons2Iter++) {
            var lesson2 = (lessons2Iter + 1).toString();
            var lessonCollection2 = "Lesson".concat(lesson2);
            var minigames2 = grade2.Grade2.chapters[chapters2Iter].lessons[lessons2Iter].minigames;

            const data = {
                title: lessons2[lessons2Iter].title,
                thumbnail: lessons2[lessons2Iter].thumbnail,
                backgroundColor: lessons2[lessons2Iter].backgroundColor,
                navigation: "Lesson".concat((lessons2Iter + 1).toString())
            };


            await db.collection(gradeName2).doc(chapterDoc2).collection(lessonCollection2).doc("English").set(data)
                .then(() => {
                    console.log("Chapter ", (chapters2Iter + 1), " Lesson ", (lessons2Iter + 1), "successfully updated!");
                })
                .catch((error) => {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });


            for (var minigames2Iter = 0; minigames2Iter < minigames2.length; minigames2Iter++) {
                var minigameName2 = minigames2[minigames2Iter].navigation;
                await db.collection(gradeName2).doc(chapterDoc2).collection(lessonCollection2).doc("English").collection("minigames").doc(minigameName2).set(minigames2[minigames2Iter])
                    .then(() => {
                        console.log("Chapter ", (chapters2Iter + 1), " Lesson ", (lessons2Iter + 1), "successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }
            var mastery = grade2.Grade2.chapters[chapters2Iter].lessons[lessons2Iter].mastery;
            var mastery_2 = grade2.Grade2.chapters[chapters2Iter].lessons[lessons2Iter].mastery_2;
            if (mastery_2 === undefined || mastery_2 === null) {
                await db.collection(gradeName2).doc(chapterDoc2).collection(lessonCollection2).doc("English").collection("mastery").doc("mastery").set(mastery)
                    .then(() => {
                        console.log("Mastery for Chapter ", (chapters2Iter + 1), " Lesson ", (lessons2Iter + 1), "successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            } else {

                await db.collection(gradeName2).doc(chapterDoc2).collection(lessonCollection2).doc("English").collection("mastery").doc("mastery").set(mastery)
                    .then(() => {
                        console.log("Mastery for Chapter ", (chapters2Iter + 1), " Lesson ", (lessons2Iter + 1), "successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });

                await db.collection(gradeName2).doc(chapterDoc2).collection(lessonCollection2).doc("English").collection("mastery").doc("mastery_2").set(mastery_2)
                    .then(() => {
                        console.log("Mastery_2 for Chapter ", (chapters2Iter + 1), " Lesson ", (lessons2Iter + 1), "successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
            }

        }
    }

    // Grade 3
    // const chapters3 = grade3.Grade3.chapters;
    // const gradeName3 = Object.keys(grade3)[0];
    // for (var chapters3Iter = 0; chapters3Iter < chapters3.length; chapters3Iter++) {
    //     var chapter3 = (chapters3Iter + 1).toString();
    //     var chapterDoc3 = "Chapter".concat(chapter3);
    //     var lessons3 = grade3.Grade3.chapters[chapters3Iter].lessons;

    //     for (var lessons3Iter = 0; lessons3Iter < lessons3.length; lessons3Iter++) {
    //         var lesson3 = (lessons3Iter + 1).toString();
    //         var lessonCollection3 = "Lesson".concat(lesson3);
    //         var minigames3 = grade3.Grade3.chapters[chapters3Iter].lessons[lessons3Iter].minigames;

    //         const data = {
    //             title: lessons3[lessons3Iter].title,
    //             thumbnail: lessons3[lessons3Iter].thumbnail,
    //             backgroundColor: lessons3[lessons3Iter].backgroundColor,
    //             navigation: "Lesson".concat((lessons3Iter + 1).toString())
    //         };

    //         await db.collection(gradeName3).doc(chapterDoc3).collection(lessonCollection3).doc("English").set(data)
    //             .then(() => {
    //                 console.log("Chapter ", (chapters3Iter + 1), " Lesson ", (lessons3Iter + 1), "successfully updated!");
    //             })
    //             .catch((error) => {
    //                 // The document probably doesn't exist.
    //                 console.error("Error updating document: ", error);
    //             });



    //         for (var minigames3Iter = 0; minigames3Iter < minigames3.length; minigames3Iter++) {
    //             var minigameName3 = minigames3[minigames3Iter].navigation;
    //             await db.collection(gradeName3).doc(chapterDoc3).collection(lessonCollection3).doc("English").collection("minigames").doc(minigameName3).set(minigames3[minigames3Iter]).then(() => {
    //                 console.log("Chapter ", (chapters3Iter + 1), " Lesson ", (lessons3Iter + 1), "successfully written!");
    //             })
    //                 .catch((error) => {
    //                     console.error("Error writing document: ", error);
    //                 });
    //         }

    //         var mastery = grade3.Grade3.chapters[chapters3Iter].lessons[lessons3Iter].mastery;
    //         var mastery_2 = grade3.Grade3.chapters[chapters3Iter].lessons[lessons3Iter].mastery_2;
    //         if (mastery_2 === undefined || mastery_2 === null) {
    //             await db.collection(gradeName3).doc(chapterDoc3).collection(lessonCollection3).doc("English").collection("mastery").doc("mastery").set(mastery)
    //                 .then(() => {
    //                     console.log("Mastery for Chapter ", (chapters3Iter + 1), " Lesson ", (lessons3Iter + 1), "successfully written!");
    //                 })
    //                 .catch((error) => {
    //                     console.error("Error writing document: ", error);
    //                 });
    //         } else {

    //             await db.collection(gradeName3).doc(chapterDoc3).collection(lessonCollection3).doc("English").collection("mastery").doc("mastery").set(mastery)
    //                 .then(() => {
    //                     console.log("Mastery for Chapter ", (chapters3Iter + 1), " Lesson ", (lessons3Iter + 1), "successfully written!");
    //                 })
    //                 .catch((error) => {
    //                     console.error("Error writing document: ", error);
    //                 });

    //             await db.collection(gradeName3).doc(chapterDoc3).collection(lessonCollection3).doc("English").collection("mastery").doc("mastery_2").set(mastery_2)
    //                 .then(() => {
    //                     console.log("Mastery_2 for Chapter ", (chapters3Iter + 1), " Lesson ", (lessons3Iter + 1), "successfully written!");
    //                 })
    //                 .catch((error) => {
    //                     console.error("Error writing document: ", error);
    //                 });
    //         }
    //     }
    // }

} //END OF postData()


//use the below function to push boilerplate lesson templates into database for empty chapters. WARNING: CAN ERASE EXISTING DATA
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
    }

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