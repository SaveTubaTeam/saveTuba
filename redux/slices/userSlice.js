import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from "../../firebase";
import { getDoc } from "firebase/firestore";

const initialState = {
    userData: {'emptyUser': 'empty'}
}

//thunk fetchUser() is called after successful firebase api sign-in. We've already checked that the auth object is not null within the login screens.
//We then fetch the user by matching an email or phone number (depending on params) and populate initialState's userData with the user's metadata.
//@param type either 'phoneNumber' or 'email' to query against collection
//@param input the actual number or email being passed from the login screens
export const fetchUser = createAsyncThunk("userSlice/fetchUser", async(type, input) => {
    //querying against the collection https://firebase.google.com/docs/firestore/query-data/queries
    const query = db.collection('users').where(type, '==', input);

    //using get() to retrieve query snapshot. Only one doc should exist within the snapshot. 
    //*There is a possiblity that duplicate phone numbers could exist...
    try {
        await query.get().then((doc) => {
            console.log(doc.id, " => ", doc.data());
            return doc.data();
        })
    } catch(error) {
        console.log('Error getting userData in fetchUser:', error);
    }
})

//thunk slice boilerplate
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        signOutUser(state, action) {
            state.userData = {'emptyUser': 'empty'}; //RTK Immer handles state mutation
            console.log("signOutUser dispatched to userSlice")
        }
    },
    extraReducers(builder) { //I'm not checking for fetchUser() failure here but it might be a nice failsafe check.
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            console.log("fetchUsers status: fulfilled");
            state.userData = action.payload; //Immer replaces the existing state completely with whatever we return, which in our case is an object containing the user metadata.
        })
    }
});

export const { signOutUser } = userSlice.actions;

export default userSlice.reducer //exports all reducers from const usersSlice

//writing a small selector function for the user state within userSlice. 
//The purpose of this is to define a reusable selector function which does not need to be changed even when changing data formats in the reducer.
export const selectCurrentUser = state => state.user.userData;
