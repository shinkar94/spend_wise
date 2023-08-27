import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import Token from "@/models/token-model";
import cookie from 'cookie';

/**
 * @openapi
 * /api/myMoney/register:
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
export async function POST(req: Request){
    try {
        const {email,password, fullName, avatarUrl } = await req.json()
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const candidate = await User.findOne({email})
        if(candidate){
            console.log(`Пользователь с таким email уже существует!!`)
        }

        const doc = new User({
            email: email,
            fullName: fullName,
            avatarUrl: avatarUrl,
            passwordHash: hash
        })

        const user = await doc.save()

        const refreshToken = process.env.NEXT_JWT_REFRESH_SECRET && jwt.sign({_id: user._id}, process.env.NEXT_JWT_REFRESH_SECRET, {expiresIn: '30d'})
        const token = process.env.NEXT_JWT_ACCESS_SECRET && jwt.sign({_id: user._id,}, process.env.NEXT_JWT_ACCESS_SECRET,{expiresIn: '30m',})

        const newRefreshToken = new Token({
            user: user._id,
            refreshToken: refreshToken
        })
        await newRefreshToken.save()

        const cookieOptions = {
            httpOnly: true, // Кука не будет доступна через JavaScript
            maxAge: 30 * 24 * 60 * 60 * 1000, // Время жизни куки в миллисекундах (30 дней)
        };

        const refreshTokenCookie = refreshToken && cookie.serialize('refreshToken', refreshToken, cookieOptions);
        let headers = {}
        if(refreshTokenCookie){
            headers = {'Set-Cookie': refreshTokenCookie}
        }

        const {passwordHash,...userData} = user._doc
        return NextResponse.json({ ...userData, token }, {
            headers: headers
        });
    }catch (e) {
        console.log('OPEN ERROR')
        return NextResponse.json({messages: e})
    }
}