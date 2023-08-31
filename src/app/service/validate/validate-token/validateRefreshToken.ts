import jwt, {JwtPayload} from "jsonwebtoken";

export function validateRefreshToken(token: string){
    try {
        return process.env.NEXT_JWT_REFRESH_SECRET && jwt.verify(token, process.env.NEXT_JWT_REFRESH_SECRET) as JwtPayload & {
            id: string
        }
    }catch (e) {
        return null
    }
}