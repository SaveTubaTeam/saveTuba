import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from "../../firebase";
import { getDoc } from "firebase/firestore";

const initialState = {
    userData: { emptyUser: 'empty' },
}

//slice boilerplate
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        signInUser(state, action) {
            const { userData } = action.payload;
            state.userData = userData;
            console.log("getUser dispatched signInUser and retrieved user from store:", userData);
        },
        signOutUser(state, action) {
            state.userData = { emptyUser: 'empty' };
            console.log("signOutUser successfully dispatched to userSlice!")
        },
        addExperienceToUser(state, action) {
            const { newExperiencePoints } = action.payload;
            state.userData.experiencePoints += newExperiencePoints; 
            console.log(`added +${newExperiencePoints}xp to userSlice`);
        }
    }
});

export const { signInUser, signOutUser, addExperienceToUser } = userSlice.actions;
export default userSlice.reducer //exports all reducers from const usersSlice

//writing a small selector function for the user state within userSlice. 
//The purpose of this is to define a reusable selector function which does not need to be changed even when changing data formats in the reducer.
export const selectCurrentUser = state => state.user.userData;
