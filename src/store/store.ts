import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {allStateReducer} from "@/reducer/allStateReducer";

import {helperReducer} from "@/reducer/helperReducer";
import {cardReducer} from "@/reducer/cardsReducer";

import {configureStore} from '@reduxjs/toolkit'
import {baseApi} from "@/app/api-query/base-api";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        allState: allStateReducer,
        helper: helperReducer,
        wallets: cardReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;