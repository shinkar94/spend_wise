import mongoose, {Schema} from "mongoose";



const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash:{
        type: String,
        required: true
    },
    avatarUrl: String,
},{
    timestamps: true,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema)
export default User