import mongoose, {Schema} from "mongoose";

interface IUser {
    name: string;
    lastName: string;
}

interface ICards extends Document {
    name: string;
    wallet_type: string;
    currency: string;
    nameCrd: string;
    dataActive: Date;
    sumCard: number;
    user: IUser;
}


const CardsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    wallet_type:{
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    nameCrd: {
        type: String,
        required: true
    },
    dataActive: {
        type: Date
    },
    sumCard: {
        type: Number,
        required: true
    },
    user: {
        type: {
            name: String,
            lastName: String,
        },
    },
},{
    timestamps: true,
});

const Cards = mongoose.models.Cards || mongoose.model<ICards>("Cards", CardsSchema)
export default Cards