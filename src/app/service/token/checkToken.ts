import {ValidateAccessToken} from "@/app/service/validate/validate-token/validateAccessToken";
import {parsingToken} from "@/app/service/token/parsing-token";
import {getRefreshToken} from "@/app/service/token/get-refreshToken";
import {refreshTokens} from "@/app/service/token/refresh-token";
import {PayloadType} from "@/app/service/generate-token/generateToken";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";

type TokenType = {
    name: string,
    value: string,
    path: string
}
export async function checkToken(accessToken: RequestCookie | undefined): Promise<PayloadType | { error: string; }>{
    if(accessToken){
        const checkToken = ValidateAccessToken(accessToken.value)
        if(checkToken){
            console.log('LIVE-TOKEN')
            return {...checkToken.payload, token: accessToken.value}
        }else{
            console.log('DEAD-TOKEN')
            const id = parsingToken(accessToken.value)
            const refreshToken = id ? await getRefreshToken(id) : null
            const newData = refreshTokens(refreshToken)
            return {...newData}
        }
    }else{
        return {error: 'REDIRECT-TO-REGISTER'}
    }
}