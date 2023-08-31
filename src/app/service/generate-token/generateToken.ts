import jwt from "jsonwebtoken";
import {SetCooke} from "@/app/service/set-cooke/setCooke";

export type PayloadType = {
    id: string,
    email: string,
    fullName: string,
    avatarUrl: string
}
export const generateToken = (payload: PayloadType) =>{
    const refreshToken = process.env.NEXT_JWT_REFRESH_SECRET && jwt.sign({payload}, process.env.NEXT_JWT_REFRESH_SECRET, {expiresIn: '30d'})
    const token = process.env.NEXT_JWT_ACCESS_SECRET && jwt.sign({payload}, process.env.NEXT_JWT_ACCESS_SECRET,{expiresIn: '5m',})
    SetCooke(token)
    return {refreshToken, token}
}