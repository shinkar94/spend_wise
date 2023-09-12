import {connectMongoDB} from "@/lib/mogodb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import {NextResponse} from "next/server";
import {userDTO} from "@/app/service/dto/dto";
import {generateToken} from "@/app/service/generate-token/generateToken";
import {SaveRefreshToken} from "@/app/service/save-token/saveRefreshToken";
import {ResponseUserType} from "@/reducer/auth.slice";

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
export async function POST(req: Request):Promise<NextResponse<ResponseUserType | {message: string}>> {
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

    const userDto = userDTO(user)
    const tokens = generateToken(userDto)
    const {refreshToken,token} = tokens
    await SaveRefreshToken(user._id, refreshToken)

    const {passwordHash, ...userData} = user._doc;
    const responseUser:ResponseUserType = {...userData, token}
    return NextResponse.json(responseUser)
}