import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: "na"
};

const languageSlice = createSlice({
    name: 'languageSelector',
    initialState,
    reducers: {
        setEnglish: (state) => {
            state.language = "en";
        },
        setRussian: (state) => {
            state.language = "ru";
        },
        setKazakh: (state) => {
            state.language = "kk";
        }
    },
});

export const { setEnglish, setKazakh, setRussian } = languageSlice.actions;
export default languageSlice.reducer;