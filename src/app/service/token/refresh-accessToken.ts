import {PayloadType} from "@/app/service/generate-token/generateToken";
import jwt from "jsonwebtoken";
import {SetCooke} from "@/app/service/set-cooke/setCooke";

export function refreshAccessToken(payload: PayloadType){
    const token = process.env.NEXT_JWT_ACCESS_SECRET && jwt.sign({payload}, process.env.NEXT_JWT_ACCESS_SECRET,{expiresIn: '5m',})
    SetCooke(token)
    return token
}