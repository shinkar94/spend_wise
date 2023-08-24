import {NextResponse} from "next/server";
import Cards from "@/models/Crads";
/**
 * @openapi
 * /api/myMoney/card/createCard:
 *   post:
 *     tags:
 *       - CARDS
 *     summary: Create card
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/CreateCard'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateCardSuccess'
 */
export async function POST(req: Request){
    const {name, sumCard, dataActive,user, nameCard,currency,wallet_type} = await req.json()
    const doc = new Cards({
        name: name,
        sumCard: sumCard,
        dataActive: dataActive,
        user: user,
        nameCard: nameCard,
        currency: currency,
        wallet_type: wallet_type
    })
    const card = await doc.save()
    return NextResponse.json({card})
}