import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from "../../firebase";
import { getDoc } from "firebase/firestore";

const initialState = {
    userData: { 'emptyUser': 'empty', 'email': "" },
    status: 'idle'
}

//thunk fetchUser() is called after successful firebase api sign-in. We've already checked that the auth object is not null within the login screens.
//We then fetch the user by matching an email or phone number (depending on params) and populate initialState's userData with the user's metadata.
//@param loginType either 'phoneNumber' or 'email' to query against collection
//@param input the actual number or email being passed from the login screens
export const fetchUser = createAsyncThunk("userSlice/fetchUser", async({loginType, input}) => {
    //input.includes("@") ? input = "email" : input = "phone"
    console.log(`loginType: ${loginType}, input: ${input}`);
    //querying against the collection https://firebase.google.com/docs/firestore/query-data/queries
    const query = db.collection('users').where(loginType, '==', input);

    //using get() to retrieve query snapshot. Only one doc should exist within the snapshot. 
    //*There is a possiblity that duplicate phone numbers could exist...
    try {
        const snapshot = await query.get() //snapshot is a 'docs' array
        if(!snapshot.empty) {
            const userData = snapshot.docs[0].data(); //getting only the first doc in the array
            return userData;
        } else { //no snapshot found, return empty object
            console.log("error in userSlice fetchUser(): NO SNAPSHOT FOUND")
            return {'emptyUser': 'empty', 'email': "" };
        }
        
    } catch(error) {
        console.log('Error getting userData in fetchUser:', error);
        throw error;
    }
})

//thunk slice boilerplate
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        signOutUser(state, action) {
            state.userData = {'emptyUser': 'empty', 'email': ""};
            state.status = 'idle';
            console.log("signOutUser successfully dispatched to userSlice!")
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.status = 'loading'
                console.log("fetchUser status:", state.status);
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.userData = action.payload; //Immer replaces the existing state completely with whatever we return, which in our case is an object containing the user metadata.
                state.status = 'finished'
                console.log("fetchUser status:", state.status);
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'rejected'
                console.log("fetchUser status:", state.status, "\nError:", action.error.message);
            })
    }
});

export const { signOutUser } = userSlice.actions;

export default userSlice.reducer //exports all reducers from const usersSlice

//writing a small selector function for the user state within userSlice. 
//The purpose of this is to define a reusable selector function which does not need to be changed even when changing data formats in the reducer.
export const selectCurrentUser = state => state.user.userData;
