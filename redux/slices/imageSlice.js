import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createImageMap, getCacheObject } from '../../src/features/Grades/Handlers/Database';

const initialState = {
    loading: "idle",
    imageData: { title: "ttest", id: "test1" },
    error: null,
};

export const fetchImages = createAsyncThunk("mapSlice/fetchImages", async () => {
    console.log("fetchIM");
    const imageMap = {};

    const result = await getCacheObject("images").then(async (result) => {
        console.log("Result: ", result);
        return result;
    }).catch(() => {
        console.log("Error in fetchImages getCacheObject");
    });
    if (result == null) {
        const map = await createImageMap("assets", imageMap).then((result) => {
            // console.log("R: ", result);
            // console.log("ImageMap Test =======> ", result["assets/badges/badge1.png"]);
            return result;
        }).catch((error) => {
            console.log("Error in setting state: ", error);
            return error.message;
        });
        return map;
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

export default mapSlice.reducer;