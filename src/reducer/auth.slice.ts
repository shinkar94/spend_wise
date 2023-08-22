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