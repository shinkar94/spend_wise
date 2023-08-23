import {createSlice} from "@reduxjs/toolkit";
export type UserType = {
    avatarUrl: string;
    createdAt: string;
    email: string;
    fullName: string;
    token: string;
    updatedAt: string;
    __v: number;
    _id: string;
};
const initialState:UserType = {
    avatarUrl: "",
    createdAt: "",
    email: "",
    fullName: "",
    token: "",
    updatedAt: "",
    __v: 0,
    _id: ""
}
export const slice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        getUser: (state, action) =>{
            return action.payload.dataUser.data
        }
    },
    extraReducers: builder => {

    }
})

export const authReducer = slice.reducer
export const authAction = slice.actions