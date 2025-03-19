import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    },
    {
        timestamps: true,
    }
);

userSchema.index({username: 1});
userSchema.index({email: 1});


export default mongoose.model("User", userSchema);