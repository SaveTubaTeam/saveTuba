// import grade2 from "./grade2.json";
// import grade3 from "./grade3.json";
import { db, storage } from "../../../../firebase.js";


async function getGradeData(grade) {
    // const chapters = new Map();
    const chapterList = [];

    await db.collection(grade).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => { // moving through the snapshot objects individually
                // console.log("Snapshot => ", doc.id, " => ", doc.data());
                chapterList.push(doc.data()); // Pushing new object onto the array
            });
        }).catch((error) => {
            console.log("Error: ", error);
        });

    // chapters.set("chapters", chapterList); // sets the map with the key "chapters" and the data being the array of objects
    // let map = await setIconMap();
    // return chapters; // This returns the map
    return chapterList; // This returns the array
}

async function getLessonData(grade, chpt, numLessons) {
    // Use a map to more easily access correct minigames
    const lessons = [];

    grade = "Grade".concat(grade.toString());
    chpt = "Chapter".concat(chpt.toString());
    for (var i = 1; i <= numLessons; i++) {
        var lessonObject = new Map(); // may need to move back up
        const minigameList = new Map();
        const lessonNum = "Lesson".concat(i.toString());

        await db.collection(grade).doc(chpt).collection(lessonNum).get().then((snapshot) => {
            snapshot.forEach((doc) => { // moving through the snapshot objects individually
                // console.log(lessonNum, " => ", doc.id, " => ", doc.data());
                // console.log("Snapshot => ", doc.id);
                if (doc.id !== "metadata") {
                    minigameList.set(doc.id, doc.data());
                } else {
                    lessonObject.set("backgroundColor", doc.data().backgroundColor);
                    lessonObject.set("navigation", doc.data().navigation);
                    lessonObject.set("thumbnail", doc.data().thumbnail);
                    lessonObject.set("title", doc.data().title);

                }
            });
            lessonObject.set("minigames", minigameList);
            lessons.push(lessonObject);
        }).catch((error) => {
            console.log("Error in Database.js: ", error);
        });
    }
    return lessons;
}


async function createImageMap(folder, imageMap) {
    // let iconMap = new Map(); // cannot use a map as it is not serializable and the redux toolkit cannot pass it without error
    // let iconMap = Object.create(null);
    let result = await storage.child(folder).listAll();

    
    let urlPromises = result.items.map(url => url.getDownloadURL());
    let pathPromises = result.items.map(path => path.getMetadata());
    
    let urlResolved = await Promise.all(urlPromises);
    let pathResolved = await Promise.all(pathPromises);
    
    for (var x = 0; x < urlResolved.length; x++) {
        // iconMap.set(pathResolved[x].fullPath, urlResolved[x]); // cannot use a map as it is not serializable and the redux toolkit cannot pass it without error
        Object.defineProperty(imageMap, pathResolved[x].fullPath, {
            value: urlResolved[x],
            writable: true,
            enumerable: true,
            configurable: true
        });
    }
    console.log("Database images: ", Object.values(imageMap));
    
    result.prefixes.forEach((folderRef) => {
        folderRef = folder.concat("/" + folderRef);
        createImageMap(folderRef);
    });

    return imageMap;
}

// async function createImageMap(folder, iconMap) {

//     if (folder === "assets") {
//         // iconMap = Object.create(null);
//         let result = await storage.child(folder).list({ maxResults: 200 });
//         Object.assign(iconMap, createImageHelper(folder, result, iconMap).then((result) => {
//             return result;
//         }));

//         // All nested folders => /assets/...
//         for (const nestedFolder in result.prefixes) {
//             Object.assign(iconMap,
//                 createImageHelper(nestedFolder, result, iconMap).then((result) => {
//                     return result;
//                 }));
//             return createImageMap(nestedFolder).then((result) => {
//                 return result;
//             });
//         }
//         console.log("IM1: ", iconMap);
//     } else {
//         let result = await storage.child(folder).list({ maxResults: 200 });
//         Object.assign(iconMap,
//             createImageHelper(folder, result, iconMap).then((result) => {
//                 return result;
//             }));

//         // All nested folders => /assets/...
//         for (const nestedFolder in result.prefixes) {

//             Object.assign(iconMap,
//                 createImageHelper(nestedFolder, result, iconMap).then((result) => {
//                     return result;
//                 }));
//             return createImageMap(nestedFolder).then((result) => {
//                 return result;
//             });
//         }
//         console.log("IM2: ", iconMap);
//     }
//     // Initial folder => /assets

//     console.log("IM3: ", iconMap);
//     return iconMap;
// }

// async function createImageHelper(folderName, result, map) {

//     let urlPromises = result.items.map(url => url.getDownloadURL());
//     let pathPromises = result.items.map(path => path.getMetadata());

//     let urlResolved = await Promise.all(urlPromises);
//     let pathResolved = await Promise.all(pathPromises);

//     for (var x = 0; x < urlResolved.length; x++) {
//         // iconMap.set(pathResolved[x].fullPath, urlResolved[x]); // cannot use a map as it is not serializable and the redux toolkit cannot pass it without error
//         Object.defineProperty(map, pathResolved[x].fullPath, {
//             value: urlResolved[x],
//             writable: true,
//             enumerable: true,
//             configurable: true
//         });
//     }
//     // console.log("Database images: ", Object.values(iconMap));
//     console.log("Map: ", map);
//     return map;
// }

// This is meant to change large sets of similarly formatted data at a single time 
// async function changeData() {
//     const g2_chapters = grade2.Grade2.chapters;
//     for (var i = 0; i < g2_chapters.length; i++) {

// ---------------------------------------------------------
// to change the chapter metadata
// ---------------------------------------------------------
// const g2_lessons = grade2.Grade2.chapters[i].lessons;
// const data = {
//     backgroundImage: g2_chapters[i].backgroundImage,
//     colorOne: g2_chapters[i].colorOne,
//     colorTwo: g2_chapters[i].colorTwo,
//     icon: g2_chapters[i].icon,
//     name: g2_chapters[i].name,
//     navigation: "Chapter".concat((i + 1).toString()),
//     title: g2_chapters[i].title,
//     numLessons: g2_lessons.length
// };
// await db.collection("Grade2").doc(g2_chapters[i].navigation).set(data)
//     .then(() => {
//         console.log("Chapter " + (i + 1) + " Lesson " + (i + 1) + "  successfully updated!");
//     })
//     .catch((error) => {
//         // The document probably doesn't exist.
//         console.error("Error updating document: ", error);
//     });

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
//     await db.collection("Grade3").doc(g2_chapters[i].navigation).collection(g2_lessons[u].navigation).doc("metadata").set(data)
//         .then(() => {
//             console.log("Chapter " + (i + 1) + " Lesson " + (u + 1) + "  successfully updated!");
//         })
//         .catch((error) => {
//             // The document probably doesn't exist.
//             console.error("Error updating document: ", error);
//         });
// }
//     }
// }

// This was meant to push all of the hardcoded data to the database as there was no admin console when it was written
// Leaving it in for propriety 
// async function postData() {
// Grade 2
// const chapters2 = grade2.Grade2.chapters;
// const gradeName2 = Object.keys(grade2)[0];
// for (var chapters2Iter = 0; chapters2Iter < chapters2.length; chapters2Iter++) {
//     var chapter2 = (chapters2Iter + 1).toString();
//     var chapterDoc2 = "Chapter".concat(chapter2);
//     var lessons2 = grade2.Grade2.chapters[chapters2Iter].lessons;

//     for (var lessons2Iter = 0; lessons2Iter < lessons2.length; lessons2Iter++) {
//         var lesson2 = (lessons2Iter + 1).toString();
//         var lessonCollection2 = "Lesson".concat(lesson2);
//         var minigames2 = grade2.Grade2.chapters[chapters2Iter].lessons[lessons2Iter].minigames;

//         for (var minigames2Iter = 0; minigames2Iter < minigames2.length; minigames2Iter++) {
//             var minigameName2 = minigames2[minigames2Iter].navigation;
//             await db.collection(gradeName2).doc(chapterDoc2).collection(lessonCollection2).doc(minigameName2).set(minigames2[minigames2Iter])
//                 .then(() => {
//                     console.log("Chapter ", (chapters2Iter + 1), " Lesson ", (lessons2Iter + 1), "successfully written!");
//                 })
//                 .catch((error) => {
//                     console.error("Error writing document: ", error);
//                 });
//         }
//     }
// }

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

//         for (var minigames3Iter = 0; minigames3Iter < minigames3.length; minigames3Iter++) {
//             var minigameName3 = minigames3[minigames3Iter].navigation;
//             await db.collection(gradeName3).doc(chapterDoc3).collection(lessonCollection3).doc(minigameName3).set(minigames3[minigames3Iter])
//                 .then(() => {
//                     console.log("Chapter ", (chapters3Iter + 1), " Lesson ", (lessons3Iter + 1), "successfully written!");
//                 })
//                 .catch((error) => {
//                     console.error("Error writing document: ", error);
//                 });
//         }
//     }
// }
// }




export { getGradeData, createImageMap, getLessonData };