import {NextResponse} from "next/server";
import { cookies } from 'next/headers'
import jwt, {JwtPayload} from "jsonwebtoken";
import User from "@/models/User";
import Token from "@/models/token-model";
import {ValidateAccessToken} from "@/app/service/validate/validate-token/validateAccessToken";

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateCard:
 *       type: object
 *       required:
 *         - name
 *         - sumCard
 *         - dataActive
 *         - user
 *         - nameCard
 *         - currency
 *         - wallet_type
 *       properties:
 *         name:
 *           type: string
 *           default: test name
 *         wallet_type:
 *           type: string
 *           default: card
 *         user:
 *           type: object
 *           properties:
 *            name:
 *             type: string
 *             default: Roman
 *            lastName:
 *             type: string
 *             default: Shinkarenko
 *         currency:
 *           type: string
 *           default: BYN
 *         nameCard:
 *           type: string
 *           default: MasterCard
 *         sumCard:
 *           type: number
 *           default: 12000
 *     CreateCardSuccess:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         wallet_type:
 *           type: string
 *         currency:
 *           type: string
 *         nameCard:
 *           type: string
 *         dataActive:
 *           type: string
 *         sumCard:
 *           type: number
 *         user:
 *           type: object
 *           properties:
 *            name:
 *             type: string
 *            lastName:
 *             type: string
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string
 *     LoginUser:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           default: test2023test@gmail.com
 *         password:
 *           type: string
 *           default: 112211
 *     LoginUserSuccess:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         fullName:
 *           type: string
 *         email:
 *           type: string
 *         avatarUrl:
 *           type: string
 *         _id:
 *           type: string
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string
 *         __v:
 *           type: string
 *         token:
 *           type: string
 *     CreateUserInput:
 *       type: object
 *       required:
 *         - fullName
 *         - email
 *         - password
 *         - avatarUrl
 *       properties:
 *         fullName:
 *           type: string
 *           default: Roman Shinkarenko
 *         email:
 *           type: string
 *           default: test2023test@gmail.com
 *         password:
 *           type: string
 *           default: asdlasd123lkj1,n23.12,3l1k23j
 *         avatarUrl:
 *           type: string
 *           default: "https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png"
 *     CreateUserRespons:
 *       type: object
 *       properties:
 *         fullName:
 *           type: string
 *         email:
 *           type: string
 *         avatarUrl:
 *           type: string
 *         _id:
 *           type: string
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string
 *         token:
 *           type: string
 *     CreateUserResponsBad:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 *         msg:
 *           type: string
 *         path:
 *           type: string
 *         location:
 *           type: string
 *     CreateUserResponsError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 */

/**
 * @swagger
 * /api/myMoney:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */

export async function GET(req: Request){
   const cookieStore = cookies()
   const accessToken = cookieStore.get('accessToken')
   console.log(accessToken)
   function validateRefreshToken(token: string){
      try {
         const tokenData = process.env.NEXT_JWT_REFRESH_SECRET && jwt.verify(token, process.env.NEXT_JWT_REFRESH_SECRET) as JwtPayload & { _id: string }
         console.log("VALIDATE-REFRESH",tokenData)
         return tokenData
      }catch (e) {
         console.log(e)
         console.log('INVALID-REFRESH-TOKEN')
         console.log('RECONECT-ON-REGISTER')
      }
   }
   async function refreshData(id: string){
      try {
         const tokenData = await Token.findOne({_id: id})
         console.log('TOKEN-DATA', tokenData)
      }catch (e) {
         console.log(e)
      }
   }

   async function getRefreshToken(id: string){
      try {
         const tokenData = await Token.findOne({_id: id})
         console.log('TOKEN-REFRESH-DATA', tokenData)
         return tokenData
      }catch (e) {
         return null
      }
   }


   let data = {}
   if(accessToken){
      const checkToken = ValidateAccessToken(accessToken.value)
      console.log("TOKEN-STATUS", checkToken)
      if(checkToken){
         console.log('OPEN-IN-DATA')
         const userData = await User.findOne({_id: checkToken.id})
         data = {...data, userData, checkToken}
      }else{
         // const tokenData = getRefreshToken(accessToken.id)
         // if(refreshToken){
         //    const newRefreshToken = validateRefreshToken(refreshToken.value)
         //    console.log("REFRESHTOKEN-STATUS", newRefreshToken)
         //    if(newRefreshToken){
         //       refreshData(newRefreshToken._id)
         //    }
         // }else{
         //    console.log("REFRESHTOKEN-NOT-FOUND")
         // }
      }
   }

   return NextResponse.json(data)
}

