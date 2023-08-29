import jwt, {JwtPayload} from "jsonwebtoken";


export const ValidateAccessToken = (token: string) => {
    console.log('OPEN-VALIDATOR',token)
    try {
        const tokenData = process.env.NEXT_JWT_ACCESS_SECRET && jwt.verify(token, process.env.NEXT_JWT_ACCESS_SECRET) as JwtPayload & {
            id: string
        };
        console.log('TOKEN-DATA',tokenData)
        return tokenData
    } catch (e) {
        return null
    }
}