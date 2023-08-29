import {cookies} from "next/headers";


export const SetCooke = (accessToken: string | undefined) => {
    const cookieOptions = {
        httpOnly: true, // Кука не будет доступна через JavaScript
        maxAge: 30 * 60 * 1000, // 30 минут (в миллисекундах)
    };
    accessToken && cookies().set('accessToken', accessToken, cookieOptions)
}