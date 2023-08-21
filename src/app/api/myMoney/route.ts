import {NextResponse} from "next/server";

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
   const {searchParams} = new URL(req.url)
   const query = searchParams.get('q');
   let currentPosts = {message: 'test'}
   if(query){
      currentPosts = {message: `test query  = ${query}`}
   }
   return NextResponse.json(currentPosts)
}

