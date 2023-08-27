import {connectMongoDB} from "@/lib/mogodb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {NextResponse} from "next/server";
import cookie from "cookie";

/**
 * @openapi
 * /api/myMoney/login:
 *   post:
 *     tags:
 *       - AUTH
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/LoginUser'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginUserSuccess'
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

    const cookieOptions = {
        httpOnly: true, // Кука не будет доступна через JavaScript
        maxAge: 30 * 24 * 60 * 60 * 1000, // Время жизни куки в миллисекундах (30 дней)
    };

    const TokenCookie = cookie.serialize('Token', token, cookieOptions);

    return NextResponse.json({...userData, token},{
        headers: {
            'Set-Cookie': TokenCookie
        }
    })
    }