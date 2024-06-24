import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    userData: { emptyUser: 'empty' },
    completions: [],
    classroom: {}
}

//slice boilerplate
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        signInUser(state, action) {
            const { userData } = action.payload;
            state.userData = userData;
            console.log("getUser dispatched signInUser | USER:", userData);
        },
        signOutUser(state, action) {
            console.log("signOutUser successfully dispatched to userSlice!")
            return initialState; //reset state
        },
        addCompletions(state, action) {
            const { completions } = action.payload;
            state.completions = completions;
            console.log("getCompletionsArray dispatched addCompletions | COMPLETIONS:", completions);
        },
        addClassroom(state, action) {
            const { classroomObject } = action.payload;
            state.classroom = classroomObject;
            console.log("getClassroom dispatched addClassroom | CLASSROOM:", classroomObject);
        }
    }
});

export const { signInUser, signOutUser, addCompletions, addClassroom } = userSlice.actions;
export default userSlice.reducer //exports all reducers from const usersSlice

//writing a small selector function for the user state within userSlice. 
//The purpose of this is to define a reusable selector function which does not need to be changed even when changing data formats in the reducer.
export const selectCurrentUser = state => state.user.userData;
