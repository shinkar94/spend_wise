import {NextResponse} from "next/server";
import {connectMongoDB} from "@/libs/mogodb";
import User from "@/models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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