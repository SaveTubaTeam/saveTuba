import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from "../../../firebase";
import { getDoc } from "firebase/firestore";

const initialState = {
    user: null
}

//thunk fetchUser() is called after successful firebase api sign-in. We've already checked that the object is not null within LoginScreen.js.
//We then fetch the user who matches auth.currentUser.email from the firestore database
//and populate initialState. (remember that auth.currentUser.email is actually a phone number with '@x.x' appended to the end lol)
export const fetchUser = createAsyncThunk("userSlice/fetchUser", async() => {
    //auth refers to the current firebase.auth object
    const phoneNumber = auth.currentUser.email.replace('@x.x', ''); //removing '@x.x' to get the cleaned phone number

    //matching user within "users" collection via phone number
    const userFound = await getDoc(db, "users", phoneNumber); //getting a match
    if(userFound.exists()) {
        console.log("User found:", userFound.data()); //data() returns an object w/ the user's metadata
        return userFound.data();
    } else { //user was not found; document is undefined. This logic should be unreachable...
        console.log("User not found after calling fetchUser().");
    }
})

//thunk slice boilerplate
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) { //I'm not checking for fetchUser() failure here but it might be a nice failsafe check.
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            console.log("fetchUsers status: fulfilled");
            state.user = action.payload; //Immer replaces the existing state completely with whatever we return, which in our case is an object containing the user metadata.
        })
    }
});

export default userSlice.reducer //exports all reducers from const usersSlice

//writing a small selector function for the user state within userSlice. 
//The purpose of this is to define a reusable selector function which does not need to be changed even when changing data formats in the reducer.
export const selectCurrentUser = state => state.user.user;
