// DID NOT HAVE ANYTHING IN THIS FILE ORRIGNALLY::::::::::::::::::::::::::
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { user } from "../reducers/user";
import { achievements } from "../reducers/user-achievements";
import { achievementsModals } from "../reducers/achievementModal";

import mapSlice from "../slices/imageSlice";
import languageSlice from "../slices/languageSlice";

const rootReducer = combineReducers({
    userState: user,
    userAchievements: achievements,
    modals: achievementsModals,
    imageMap: mapSlice,
    languageSelector: languageSlice,
});

//configureStore() automatically adds thunk middleware via RTK toolkit
export const store = configureStore({
    reducer: rootReducer
    
});