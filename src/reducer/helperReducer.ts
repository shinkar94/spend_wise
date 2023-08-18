import {createSlice} from "@reduxjs/toolkit";

export type HelperType = {
    statusBarBtn: boolean
    statusAddBtn: boolean
}

const initialState: HelperType = {
    statusBarBtn: false,
    statusAddBtn: false,
}

export const slice = createSlice({
    name: 'helper',
    initialState,
    reducers: {
        onBlur: (state, action)=>{
            const status = action.payload.status
            if(status === 'sideBarBtn'){
                state.statusBarBtn = !state.statusBarBtn
            }else{
                state.statusAddBtn = !state.statusAddBtn
            }

        }
    },
    extraReducers: builder => {

    }
})

export const helperReducer = slice.reducer
export const helperAction = slice.actions