import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import curriculumSlice from "../slices/curriculumLocationSlice";
import { apiSlice } from "../apiSlice";

//configureStore() automatically adds thunk middleware via RTK toolkit
//middleware is boilerplate from RTK Query setup docs
export const store = configureStore({
    reducer: {
        user: userSlice,
        curriculum: curriculumSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});