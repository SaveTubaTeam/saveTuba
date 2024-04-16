import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user: null
}

export const fetchUser = createAsyncThunk("userSlice/fetchUser", async() => {

})



