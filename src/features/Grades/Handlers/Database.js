import { db, storage } from "../../../../firebase.js";


async function getGradeData(grade) {
    const chapters = new Map();
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

    chapters.set("chapters", chapterList); // sets the map with the key "chapters" and the data being the array of objects
    await setIcons(chapterList);
    console.log("CH: ", chapters);
    return chapters; // This returns the map
    // return chapterList; // This returns the array
}

async function getLessonData(grade, chpt) {
    const lessons = new Map();
    const minigameList = [];

    await db.collection(grade).doc(chpt).get().then((snapshot) => {
        snapshot.forEach((doc) => { // moving through the snapshot objects individually
            console.log("Snapshot => ", doc.id, " => ", doc.data());
            minigameList.push(doc.data()); // Pushing new object onto the array
        });
    }).catch((error) => {
        console.log("Error: ", error);
    });

    lessons.set("minigames", minigameList); 
    return lessons; 
}


// This is meant to change large sets of similarly formatted data at a single time 
// async function changeData() {
//     const g2_chapters = grade2.Grade2.chapters;
//     for (var i = 0; i < g2_chapters.length; i++) {
//         const g2_lessons = grade2.Grade2.chapters[i].lessons;
//         for (var u = 0; u < g2_lessons.length; u++) {
//             const data = {
//                 title: g2_lessons[u].title,
//                 thumbnail: g2_lessons[u].thumbnail,
//                 backgroundColor: g2_lessons[u].backgroundColor
//             };
//             await db.collection("Grade2").doc(g2_chapters[i].navigation).collection(g2_lessons[u].navigation).doc("metadata").set(data)
//                 .then(() => {
//                     console.log("Chapter " + (i + 1) + " Lesson " + (u + 1) + "  successfully updated!");
//                 })
//                 .catch((error) => {
//                     // The document probably doesn't exist.
//                     console.error("Error updating document: ", error);
//                 });
//         }
//     }
// }

// This was meant to push all of the hardcoded data to the database as there was no admin console when it was written
// Leaving it in for propriety 
// async function postData() {
//     // Grade 2
//     const chapters2 = grade2.Grade2.chapters;
//     const gradeName2 = Object.keys(grade2)[0];
//     for (var chapters2Iter = 0; chapters2Iter < chapters2.length; chapters2Iter++) {
//         var chapter2 = (chapters2Iter + 1).toString();
//         var chapterDoc2 = "Chapter".concat(chapter2);
//         var lessons2 = grade2.Grade2.chapters[chapters2Iter].lessons;

//         for (var lessons2Iter = 0; lessons2Iter < lessons2.length; lessons2Iter++) {
//             var lesson2 = (lessons2Iter + 1).toString();
//             var lessonCollection2 = "Lesson".concat(lesson2);
//             var minigames2 = grade2.Grade2.chapters[chapters2Iter].lessons[lessons2Iter].minigames;

//             for (var minigames2Iter = 0; minigames2Iter < minigames2.length; minigames2Iter++) {
//                 var minigameName2 = minigames2[minigames2Iter].navigation;
//                 await db.collection(gradeName2).doc(chapterDoc2).collection(lessonCollection2).doc(minigameName2).set(minigames2[minigames2Iter])
//                     .then(() => {
//                         console.log("Chapter ", (chapters2Iter + 1), " Lesson ", (lessons2Iter + 1), "successfully written!");
//                     })
//                     .catch((error) => {
//                         console.error("Error writing document: ", error);
//                     });
//             }
//         }
//     }

//     // Grade 3
//     const chapters3 = grade3.Grade3.chapters;
//     const gradeName3 = Object.keys(grade3)[0];
//     for (var chapters3Iter = 0; chapters3Iter < chapters3.length; chapters3Iter++) {
//         var chapter3 = (chapters3Iter + 1).toString();
//         var chapterDoc3 = "Chapter".concat(chapter3);
//         var lessons3 = grade3.Grade3.chapters[chapters3Iter].lessons;

//         for (var lessons3Iter = 0; lessons3Iter < lessons3.length; lessons3Iter++) {
//             var lesson3 = (lessons3Iter + 1).toString();
//             var lessonCollection3 = "Lesson".concat(lesson3);
//             var minigames3 = grade3.Grade3.chapters[chapters3Iter].lessons[lessons3Iter].minigames;

//             for (var minigames3Iter = 0; minigames3Iter < minigames3.length; minigames3Iter++) {
//                 var minigameName3 = minigames3[minigames3Iter].navigation;
//                 await db.collection(gradeName3).doc(chapterDoc3).collection(lessonCollection3).doc(minigameName3).set(minigames3[minigames3Iter])
//                     .then(() => {
//                         console.log("Chapter ", (chapters3Iter + 1), " Lesson ", (lessons3Iter + 1), "successfully written!");
//                     })
//                     .catch((error) => {
//                         console.error("Error writing document: ", error);
//                     });
//             }
//         }
//     }
// }

async function setIcons(data) {
    // console.log("Initial Data: ", data);
    for (var i = 0; i < data.length; i++) {
        const urlSplit = data[i].icon.split("/");
        var imagePath = "";
        for (var u = 0; u < urlSplit.length; u++) {
            if (!(urlSplit[u] === "..")) {
                imagePath = imagePath.concat("/" + urlSplit[u]);
            }
        }

        // Get the download URL
        var imgRef = storage.child(imagePath);
        await imgRef.getDownloadURL()
            .then((url) => {
                // Insert url into an <img> tag to "download"
                // console.log("Download URL: ", url);
                data[i].icon = url;

            })
            .catch((error) => {
                console.log("Error: ", error.code);
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors

            });
        // console.log("Data: ", data);
        // return downloadURL;
    }
}


export { getGradeData, setIcons, getLessonData };