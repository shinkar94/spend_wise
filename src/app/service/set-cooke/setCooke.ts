import {cookies} from "next/headers";


export const SetCooke = (accessToken: string | undefined) => {
    const cookieOptions = {
        httpOnly: true, // Кука не будет доступна через JavaScript
        maxAge: 30 * 24 * 60 * 60 * 1000 //30 дней
    };
    accessToken && cookies().set('accessToken', accessToken, cookieOptions)
}