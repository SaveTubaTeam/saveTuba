import { createSlice, AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { createImageMap } from '../../src/features/Grades/Handlers/Database';

const initialState = {
    loading: false,
    imageData: { title: "ttest", id: "test1" },
    error: "",
};

export const fetchImages = createAsyncThunk("mapSlice/fetchImages", async () => {
    createImageMap().then((result) => {
        // console.log("R: ", result);
        return result;
    }).catch((error) => {
        console.log("Error in setting state: ", error);
    });
});

const mapSlice = createSlice({
    name: 'imageMap',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchImages.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            console.log("Payload: " , action.payload);
            state.loading = false;
            state.imageData = action.payload;
            state.error = "";
        });
        builder.addCase(fetchImages.rejected, (state, action) => {
            state.loading = false;
            state.imageData = Object.create(null);
            state.error = action.error.message;
        });
        // Async functions without async function

        // setImageMap: (state) => { 
        //     createImageMap().then((result) => {
        //         console.log("R: ", result);
        //         state.imageData = result;
        //     }).catch((error) => {
        //         console.log("Error in setting state: ", error);
        //     });
        // }
    }
});

// Old method without async functions
// export const { setImageMap } = mapSlice.actions; 

export default mapSlice.reducer;