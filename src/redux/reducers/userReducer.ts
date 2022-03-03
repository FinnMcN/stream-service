import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    isSignIn: boolean;
}

const initialState: UserState = {
    isSignIn: false,
};

const reducerName = "user";

const userReducer = createSlice({
    name: reducerName,
    initialState,
    reducers: {
        signIn(state) {
            state.isSignIn = true;
        },
        signOut(state) {
            state.isSignIn = false;
        },
    },
});

export default userReducer;
