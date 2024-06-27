import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   grade: "",
   chapter: "",
   lesson: "",
   activity: ""
};

const curriculumSlice = createSlice({
   name: 'curriculum',
   initialState: initialState,
   reducers: {
      addGrade(state, action) {
         const { grade } = action.payload;
         state.grade = grade;
         console.log(`Current Location: ${grade}`);
      },
      addChapter(state, action) {
         const { chapter } = action.payload;
         state.chapter = chapter;
         console.log(`Current Location: ${state.grade} ${chapter}`);
      },
      addLesson(state, action) {
         const { lesson } = action.payload;
         state.lesson = lesson;
         console.log(`Current Location: ${state.grade} ${state.chapter} ${lesson}`);
      },
      addActivity(state, action) {
         const { activity } = action.payload;
         state.activity = activity;
         console.log(`Current Location: ${state.grade} ${state.chapter} ${state.lesson} ${activity}`);
      },
      pageBack(state, action) {
         const { curriculumLayer } = action.payload;
         console.log(`Moved out of ${state[curriculumLayer]}`);
         state[curriculumLayer] = ""; //resetting layer
      }
   }
});

export const { addGrade, addChapter, addLesson, addActivity, pageBack } = curriculumSlice.actions;
export default curriculumSlice.reducer //exports all reducers from const usersSlice