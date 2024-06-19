import { configureStore } from "@reduxjs/toolkit";
import mapSlice from "../slices/imageSlice";
import languageSlice from "../slices/languageSlice";
import userSlice from "../slices/userSlice";
import { apiSlice } from "../apiSlice";

//configureStore() automatically adds thunk middleware via RTK toolkit
//middleware is boilerplate from RTK Query setup docs
export const store = configureStore({
    reducer: {
        user: userSlice,
        imageMap: mapSlice,
        languageSelector: languageSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});