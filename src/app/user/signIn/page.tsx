'use client'
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {SignInPage} from "@/components/user/signIn/signIn";

export default function SignIn(){
    return(
        <Provider store={store}>
            <SignInPage />
        </Provider>
    )
}