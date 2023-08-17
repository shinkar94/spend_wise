import {NextResponse} from "next/server";
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
    return NextResponse.json({messages: 'testing new route'})
}