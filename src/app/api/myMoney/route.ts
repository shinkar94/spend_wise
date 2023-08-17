import {NextResponse} from "next/server";
import {connectMongoDB} from "@/lib/mogodb";
import User from "@/models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

/**
 * @openapi
 * components:
 *  schemas:
 *   CreateUserInput:
 *    type: object
 *    required:
 *     - fullName
 *     - email
 *     - password
 *     - avatarUrl
 *    properties:
 *     fullName:
 *      type: string
 *      default: Roman Shinkarenko
 *     email:
 *      type: string
 *      default: test2023test@gmail.com
 *     password:
 *      type: string
 *      default: asdlasd123lkj1,n23.12,3l1k23j
 *     avatarUrl:
 *      type: string
 *      default: "https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png"
 *   CreateUserRespons:
 *    type: object
 *    properties:
 *     fullName:
 *      type: string
 *     email:
 *      type: string
 *     avatarUrl:
 *      type: string
 *     _id:
 *      type: string
 *     createdAt:
 *      type: string
 *     updatedAt:
 *      type: string
 *     token:
 *      type: string
 *   CreateUserResponsBad:
 *    type: object
 *    properties:
 *     type:
 *      type: string
 *     msg:
 *      type: string
 *     path:
 *      type: string
 *     location:
 *      type: string
 *   CreateUserResponsError:
 *    $ref: '#/components/schemas/CreateUserResponsError'
 *    type: object
 *    properties:
 *     message:
 *      type: string
 */
export async function POST(req: Request){
   const {email,password } = await req.json()
   await connectMongoDB()
   const user = await User.findOne({email: email})
   if(!user){
      console.log('this email not found!!')
   }
   const isValidPass = await bcrypt.compare(password, user._doc.passwordHash)
   if(!isValidPass){
      console.log('error not validate')
   }
   const token = jwt.sign({
      _id: user._id,
   }, 'secret123',{
      expiresIn: '30d',
   })
   const {passwordHash, ...userData} = user._doc;

   return NextResponse.json({...userData, token})
}

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
/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags:
 *       - AUTH
 *     summary: Register a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateUserRespons'
 *       400:
 *         description: Conflict
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateUserResponsBad'
 *       500:
 *         description: Conflict
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateUserResponsError'
 */
export async function registerUser(req: Request){
   return NextResponse.json({message: 'test message'})
}