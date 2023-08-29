import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/User";
import Token from "@/models/token-model";
import mongoose from "mongoose";
import {userDTO} from "@/app/service/dto/dto";
import {generateToken} from "@/app/service/generate-token/generateToken";

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
            return NextResponse.json({messages: `Пользователь с таким email уже существует!!`})
        }

        const doc = new User({
            email: email,
            fullName: fullName,
            avatarUrl: avatarUrl,
            passwordHash: hash
        })

        const user = await doc.save()
        const userDto = userDTO(user)
        const tokens = generateToken(userDto)
        const {refreshToken,token} = tokens
        const tokenDB = await Token.findOne({user: new mongoose.Types.ObjectId(user._id)})

        if (tokenDB) {
            tokenDB.refreshToken = refreshToken;
            await tokenDB.save();
        } else {
            const newRefreshToken = new Token({
                user: userDto.id,
                refreshToken: refreshToken
            })
            await newRefreshToken.save()
        }

        const {passwordHash,...userData} = user._doc
        return NextResponse.json({ ...userData, token });
    }catch (e) {
        return NextResponse.json({messages: e})
    }
}