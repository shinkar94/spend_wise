import {validateRefreshToken} from "@/app/service/validate/validate-token/validateRefreshToken";
import {refreshAccessToken} from "@/app/service/token/refresh-accessToken";
import {PayloadType} from "@/app/service/generate-token/generateToken";

export function refreshTokens(refreshToken:string | null):PayloadType | {error: string}{
    if(refreshToken) {
        const checkToken = validateRefreshToken(refreshToken)
        if(checkToken){
            const newAccessToken = refreshAccessToken(checkToken.payload)
            return {...checkToken.payload, token: newAccessToken}
        }else{
           return {error: 'REDIRECT-TO-LOGIN'}
        }
    }else{
        return {error: 'REDIRECT-TO-REGISTER'}
    }
}

