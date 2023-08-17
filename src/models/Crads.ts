import mongoose, {Schema} from "mongoose";



const CardsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    idCard: {
        type: Number,
        required: true,
        unique: true
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
        type: Object,
        name: {
            type: String
        },
        lastName: {
            type: String
        }
    },
},{
    timestamps: true,
});

const Cards = mongoose.models.Cards || mongoose.model("Cards", CardsSchema)
export default Cards