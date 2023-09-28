import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { checkCache, createImageMap, getCacheObject } from '../../src/features/Grades/Handlers/Database';

const initialState = {
    loading: "idle",
    imageData: { title: "ttest", id: "test1" },
    error: null,
};

export const fetchImages = createAsyncThunk("mapSlice/fetchImages", async () => {
    console.log("fetchIM");
    const imageMap = {};
    if (await checkCache("image", "images")) {
        console.log("fetchIM 2");
        return await getCacheObject("image", "images").then((result) => {
            return result;
        });
    } else if (await checkCache("content", "lessons")) {
        console.log("fetchIM 3");
        const map = await createImageMap("assets", imageMap).then((result) => {
            return result;

        }).catch((error) => {
            console.log("Error in setting state: ", error);
            return error.message;
        });
        console.log("Images Fetched");
        return map;
    } else {
        console.log("Issues with caching system");
    }

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
    }
});

// Old method without async functions
// export const { setImageMap } = mapSlice.actions; 
export default mapSlice.reducer;