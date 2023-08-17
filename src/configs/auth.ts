import type {AuthOptions} from "next-auth";
import GoggleProvider from 'next-auth/providers/google'

export const authConfig: AuthOptions = {
    providers: [
        GoggleProvider({
            clientId: '',
            clientSecret: ''
        })
    ]
}