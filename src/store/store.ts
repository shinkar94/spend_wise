import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {allStateReducer} from "@/reducer/allStateReducer";

import {helperReducer} from "@/reducer/helperReducer";
import {cardReducer} from "@/reducer/cardsReducer";

import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        allState: allStateReducer,
        helper: helperReducer,
        wallets: cardReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;