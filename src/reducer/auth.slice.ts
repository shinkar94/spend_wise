import {createSlice} from "@reduxjs/toolkit";
export type ResponseType = {
    data: UserType
}
type Action<T> = {
    type: string;
    payload: T;
};
export type NewResponseType = {
    avatarUrl: string;
    email: string;
    fullName: string;
    token: string;
    id: string;
}

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
        getUser: (state, action: Action<NewResponseType>) =>{
            return {
                ...state,
                avatarUrl: action.payload.avatarUrl,
                email: action.payload.email,
                fullName: action.payload.fullName,
                token: action.payload.token,
                _id: action.payload.id
            }

        }
    },
    extraReducers: builder => {

    }
})

export const authReducer = slice.reducer
export const authAction = slice.actions