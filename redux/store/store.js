import { configureStore } from "@reduxjs/toolkit";
//import { combineReducers } from "redux";
/* import { user } from "../reducers/user";
import { achievements } from "../reducers/user-achievements";
import { achievementsModals } from "../reducers/achievementModal"; */

import mapSlice from "../slices/imageSlice";
import languageSlice from "../slices/languageSlice";
import userSlice from "../slices/userSlice";

// const rootReducer = combineReducers({
//     user: userSlice,
//     imageMap: mapSlice,
//     languageSelector: languageSlice,
// });

//configureStore() automatically adds thunk middleware via RTK toolkit
export const store = configureStore({
    reducer: {
        user: userSlice,
        imageMap: mapSlice,
        languageSelector: languageSlice,
    }
});