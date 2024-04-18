import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createImageMap, getCacheObject, setCache } from '../../src/features/Grades/Handlers/Database';

const initialState = {
    loading: "idle",
    imageData: { title: "ttest", id: "test1" },
    error: null,
};

//Note to self: if performance of imageMap is an issue, might have to use a memoized selector instead of 
//regular useSelector() wherever imageSlice is refered to.

//If not already cached, fetchImages pulls the images from db, puts them in an imageMap, and sets the map as "images" in the cache.
export const fetchImages = createAsyncThunk("mapSlice/fetchImages", async () => {
    // console.log("fetchIM");
    const imageMap = {};

    const result = await getCacheObject("images").then((result) => {
        // console.log("Result: ", result);
        return result;
    }).catch(() => {
        console.log("Error in fetchImages getCacheObject");
    });

    if (result == null) {
        console.log("Pulling from firebase in fetchImageMap");
        const map = await createImageMap("assets", imageMap).then((result) => {
            // console.log("R: ", result);
            // console.log("ImageMap Test =======> ", result["assets/badges/badge1.png"]);
            return result;
        }).catch((error) => {
            console.log("Error in setting state: ", error);
            return error.message;
        });
        await setCache("images", map);
        return map;
    }else{
        console.log("imageSlice.js: Pulling images from cache");
        return result;
    }
}); //end of fetchImages thunk

const mapSlice = createSlice({
    name: 'imageMap',
    initialState,
    extraReducers: builder => { //defining load cases (boilerplate Async Thunk)
        builder.addCase(fetchImages.pending, (state) => {
            state.loading = "loading";
            console.log("fetchImages status: " + state.loading);
        });
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            // console.log("Payload: ", action.meta);
            state.imageData = (action.payload);
            state.loading = "finished";
            console.log("fetchImages status: " + state.loading);
            state.error = null;
        });
        builder.addCase(fetchImages.rejected, (state, action) => {
            state.loading = "rejected";
            console.log("fetchImages status: " + state.loading);
            state.imageData = (Object.create(null));
            state.error = action.error.message;
        });
    }
});

export default mapSlice.reducer;