import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        username: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "username", 
            required: true 
        },
        products: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Plants"
            }],
        total: { 
            type: Number,
            required: true
            },
        status: { 
            type: String,
            enum: ["pending", "shipped", "delivered"], 
            default: "pending"
         }
    }, 
    { 
        timestamps: true
  }
);

export default mongoose.model("Order", OrderSchema);