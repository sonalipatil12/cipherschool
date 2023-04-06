import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {
        addUser: (state, action) => {
            return action?.payload
        },
        removeUser: (stat, action) => {
            return { _id: "", role: "" }
        }
    }

})
export const { addUser, removeUser } = AuthSlice.actions
export const selectUser = state => state.auth;
export default AuthSlice.reducer