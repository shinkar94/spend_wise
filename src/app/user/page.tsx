'use client'
import {UserPage} from "@/components/user/user";
import {Provider} from "react-redux";
import {store} from "@/store/store";

export default function User(){
    return(
        <Provider store={store}>
            <UserPage />
        </Provider>

    )
}