import {v1} from 'uuid';
import {createSlice} from '@reduxjs/toolkit';


export type OperationsType =
    {
        id: string
        value: number
        type: string
        description: string
        category: string
        date: string
        name: string
        wallet: string
    };


const initialState: OperationsType[] = [
    {
        id: v1(),
        date: "2023-05-14",
        name: "test",
        value: 12500,
        type: "income",
        description: "sdfsdf",
        category: "auto",
        wallet: "cash"
    },
    {
        id: v1(),
        date: "2023-04-11",
        name: "milk",
        value: 12700,
        type: "outcome",
        description: "sdfsdf",
        category: "shop",
        wallet: "cash"
    },
    {
        id: v1(),
        date: "2023-03-17",
        name: "milk",
        value: 11700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "cash"
    },
    {
        id: v1(),
        date: "2023-01-14",
        name: "milk",
        value: 12700,
        type: "outcome",
        description: "sdfsdf",
        category: "shop",
        wallet: "cash"
    },
    {
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },
    {
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },
    {
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },
    {
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },
    {
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },
    {
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },
    {
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },{
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },{
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },{
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },{
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },{
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },{
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },{
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },{
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },{
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },{
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },{
        id: v1(),
        date: "2023-01-15",
        name: "milk",
        value: 12700,
        type: "income",
        description: "sdfsdf",
        category: "shop",
        wallet: "Wallet"
    },


]

export const slice = createSlice({
    name: 'allState',
    initialState,
    reducers:{
        addOperation(state, action){
            let newOperation = {...action.payload, value: Number(action.payload.value)}
            return [...state, newOperation]
        },
        sortDate(state,action){
            return state
        }
    },
    extraReducers: builder => {}
})
export const {addOperation,sortDate} = slice.actions
export const allStateReducer = slice.reducer