import jwt, {JwtPayload} from "jsonwebtoken";


export const ValidateAccessToken = (token: string) => {
    try {
        return process.env.NEXT_JWT_ACCESS_SECRET && jwt.verify(token, process.env.NEXT_JWT_ACCESS_SECRET) as JwtPayload & {
            id: string
        }
    } catch (e) {
        return null
    }
}