import mongoose from "mongoose";
import OrderInterface from '../interfaces/order.interface';

const { Schema } = mongoose;

const orderSchema = new Schema<OrderInterface>(
  {
    customer: {
      type: String,
      required: true,
    },
    address: { type: String, required: true },
    total: { type: Number, required: true },
    status: { type: Number, required: true },
    method: {
      type: Number,
      required : true
  },
  { timestamps: true }
);

export default mongoose.model<OrderInterface>("product", orderSchema);
