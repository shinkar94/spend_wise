import {NextResponse} from "next/server";
import Token from "@/models/token-model";
import mongoose from "mongoose";


export const SaveRefreshToken = async (id: string, refreshToken: string | undefined) => {
    try {
        const tokenDB = await Token.findOne({user: new mongoose.Types.ObjectId(id)})

        if (tokenDB) {
            tokenDB.refreshToken = refreshToken;
            await tokenDB.save();
        } else {
            const newRefreshToken = new Token({
                user: id,
                refreshToken: refreshToken
            })
            await newRefreshToken.save()
        }
    }catch (e) {
        return NextResponse.json({messages: e})
    }
}