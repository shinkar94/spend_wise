import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: '',
    name: '',
    lastName: ''
}
export const slice = createSlice({
    name: 'auth',
    initialState,
    reducers:{

    },
    extraReducers: builder => {

    }
})

export const AuthReducer = slice.reducer
export const AuthAction = slice.actions