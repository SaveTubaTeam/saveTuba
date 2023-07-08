import { createSlice } from '@reduxjs/toolkit';
import { createImageMap } from '../../src/features/Grades/Handlers/Database';

const initialState = {
    imageData: Object.create(null),
};

const mapSlice = createSlice({
    name: 'imageMap',
    initialState,
    reducers: {
        setImageMap: (state) => {
            createImageMap().then((result) => {
                state.imageData = result;
            }).catch((error) => {
                console.log("Error in setting state: ", error);
            });
        }
    }
});

export const { setImageMap } = mapSlice.actions;

export default mapSlice.reducer;