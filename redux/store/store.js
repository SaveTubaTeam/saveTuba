// DID NOT HAVE ANYTHING IN THIS FILE ORRIGNALLY::::::::::::::::::::::::::
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { user } from "../reducers/user";
import { achievements } from "../reducers/user-achievements";
import { achievementsModals } from "../reducers/achievementModal";
import resetMap from "../slices/imageSlice";


const rootReducer = combineReducers({
    userState: user,
    userAchievements: achievements,
    modals: achievementsModals,
    imageMap: resetMap,
});

export const store = configureStore({
    reducer: rootReducer
});