import {connectMongoDB} from "@/lib/mogodb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {NextResponse} from "next/server";
import cookie from "cookie";
import Token from "@/models/token-model";
import mongoose from "mongoose";

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
export async function POST(req: Request) {
    const {email, password} = await req.json()
    await connectMongoDB()
    const user = await User.findOne({email: email})
    if (!user) {
        return NextResponse.json({message: 'this email not found!!'})
    }
    const isValidPass = await bcrypt.compare(password, user._doc.passwordHash)
    if (!isValidPass) {
        return NextResponse.json({message: 'invalid login or password'})
    }

    const refreshToken = process.env.NEXT_JWT_REFRESH_SECRET && jwt.sign({_id: user._id}, process.env.NEXT_JWT_REFRESH_SECRET, {expiresIn: '30d'})
    const token = process.env.NEXT_JWT_ACCESS_SECRET && jwt.sign({_id: user._id,}, process.env.NEXT_JWT_ACCESS_SECRET, {expiresIn: '30m',})

    const tokenDB = await Token.findOne({user: new mongoose.Types.ObjectId(user._id)})

    if (tokenDB) {
        tokenDB.refreshToken = refreshToken;
        await tokenDB.save();
    } else {
        const newRefreshToken = new Token({
            user: user._id,
            refreshToken: refreshToken
        })
        await newRefreshToken.save()
    }

    const cookieOptions = {
        httpOnly: true, // Кука не будет доступна через JavaScript
        maxAge: 30 * 24 * 60 * 60 * 1000, // Время жизни куки в миллисекундах (30 дней)
    };

    const refreshTokenCookie = refreshToken && cookie.serialize('refreshToken', refreshToken, cookieOptions);


    let headers = {}
    if (refreshTokenCookie) {
        headers = {
            'Set-Cookie': refreshTokenCookie,
        }
    }

    const {passwordHash, ...userData} = user._doc;

    return NextResponse.json({...userData, token}, {
        headers: headers
    })
}