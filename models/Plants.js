import mongoose from "mongoose";


const plantsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        type: {
            type: String,
            require: true
        },
        dormancy: {
            type: Boolean
        },
        price: {
            type: Number
        },
        stock: { 
            type: Number,
            default: 0 ,
            rerquire: true
        },
    },
    {
        timestamps: true,
    }
);


export default mongoose.model("Plants", plantsSchema);
