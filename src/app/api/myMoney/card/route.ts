import {NextResponse} from "next/server";
import Cards from "@/models/Crads";

/**
 * @openapi
 * /api/myMoney/card:
 *   get:
 *     tags:
 *       - CARDS
 *     summary: GET_ALL_CARDS
 *     responses:
 *       200:
 *         description: Success
 */
export async function GET(req: Request){
    try {
        const cards = await Cards.find().exec()
        return NextResponse.json({cards})
    }catch (e) {
        return NextResponse.json({error: e})
    }
}