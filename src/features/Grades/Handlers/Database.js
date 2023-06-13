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
    const docRef = await db.collection(grade).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                // console.log("Snapshot => ", doc.id, " => ", doc.data());
                // chapters.set(doc.id, doc.data());
                chapterList.push(doc.data());
            });
        }).catch((error) => {
            console.log("Error: ", error);
        });

    chapters.set("chapters", chapterList);
    // console.log("Chapters: ", chapters);
    return chapters;
}

async function getChapterData(grade, chapter) {
    // console.log("ChapterData: \n");

    // var lessons = [];
    // const docRef = db.collection(grade).doc(chapter).get()
    //     .then((doc) => {
    //         console.log(doc.data());
    //         // snapshot.forEach((doc) => {
    //         //     // doc.data() is never undefined for query doc snapshots
    //         //     console.log(doc.id, " => ", doc.data());
    //         //     // lessons.push(doc.data);
    //         // });
    //     }).catch((error) => {
    //         console.log("Error: ", error);
    //     });
}

async function getLessonData(grade, chapter, lesson) {
    // console.log("LessonData: \n");

    var minigames = [];
    const docRef = db.collection(grade).doc(chapter).collection(lesson).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                // minigames.push(doc.data);
            });
        }).catch((error) => {
            console.log("Error: ", error);
        });
}

export { getChapterData, getGradeData, getLessonData };