import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import curriculumSlice from "../slices/curriculumLocationSlice";
import { apiSlice } from "../slices/apiSlice";

//configureStore() automatically adds thunk middleware via RTK toolkit
//re: https://redux-toolkit.js.org/tutorials/quick-start
//middleware is boilerplate from RTK Query setup docs
export const store = configureStore({
    reducer: {
        user: userSlice,
        curriculum: curriculumSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});