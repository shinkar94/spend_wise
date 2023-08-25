import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/User";
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

        const doc = new User({
            email: email,
            fullName: fullName,
            avatarUrl: avatarUrl,
            passwordHash: hash
        })

        const user = await doc.save()
        const {...userData} = user._doc
        return NextResponse.json({userData})
    }catch (e) {
        return NextResponse.json({messages: e})
    }
}