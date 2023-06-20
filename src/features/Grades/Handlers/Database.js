import {
    SortingImages,
    QuizImages,
    TestImages,
} from "../../../components/Grades/minigames/IMAGES";
import { Translation } from "react-i18next";
import { db, app } from "../../../../firebase.js";
import React, { useState, useEffect } from "react";

// console.log("App: \n", app);
// console.log("DB: \n", db);

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

    // console.log("Chapters: ", chapters);
    chapters.set("chapters", chapterList); // sets the map with the key "chapters" and the data being the array of objects
    return chapters; // This returns the map
    // return chapterList; // This returns the array
}

// async function getChapterData(grade) {
    // console.log("ChapterData: \n");

    // const gradeData = getGradeData(grade);

    // await db.collection(grade).get()
    //     .then((chapter) => {
    //         chapter.forEach((lesson) => { // moving through the snapshot objects individually
    //             console.log(lesson.id, ": ", lesson.data());

    //             db.collection(grade).doc(lesson.id).collection("Lesson1").get().then((games) => {
    //                 games.forEach((game) => {
    //                     console.log(game.id, ": ", game.data());
    //                 });
    //             }).catch((error) => {
    //                 console.log("Error: ", error);
    //             });
    //         });
    //     }).catch((error) => {
    //         console.log("Error: ", error);
    //     });

// }

// async function getLessonData(grade, chapter, lesson) {
//     // console.log("LessonData: \n");

//     var minigames = [];
//     const docRef = db.collection(grade).doc(chapter).collection(lesson).get()
//         .then((snapshot) => {
//             snapshot.forEach((doc) => {
//                 // doc.data() is never undefined for query doc snapshots
//                 console.log(doc.id, " => ", doc.data());
//                 // minigames.push(doc.data);
//             });
//         }).catch((error) => {
//             console.log("Error: ", error);
//         });
// }

async function post(data) {
    await db.collection(grade).doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

export { getChapterData, getGradeData, getLessonData };