import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createImageMap } from '../../src/features/Grades/Handlers/Database';

const initialState = {
    loading: "idle",
    imageData: { title: "ttest", id: "test1" },
    error: null,
};

export const fetchImages = createAsyncThunk("mapSlice/fetchImages", async () => {
    const imageMap = Object.create(null);
    const map = await createImageMap("assets", imageMap).then((result) => {
        return result;
    }).catch((error) => {
        console.log("Error in setting state: ", error);
        return error.message;
    });
    // console.log("R: ", map);
    return map;
});

const mapSlice = createSlice({
    name: 'imageMap',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchImages.pending, (state) => {
            state.loading = "loading";
        });
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            // console.log("Payload: ", action.meta);
            state.imageData = (action.payload);
            state.loading = "finished";
            state.error = null;
        });
        builder.addCase(fetchImages.rejected, (state, action) => {
            state.loading = "rejected";
            state.imageData = (Object.create(null));
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