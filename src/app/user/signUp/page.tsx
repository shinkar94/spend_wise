'use client'
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {SignUpPage} from "@/components/user/signUp/signUp";


export default function signUp(){
    return(
        <Provider store={store}>
            <SignUpPage />
        </Provider>
    )
}