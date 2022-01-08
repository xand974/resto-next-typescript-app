import mongoose from "mongoose";
import ProductInterface from "../interfaces/product.interface";

const { Schema } = mongoose;

const productSchema = new Schema<ProductInterface>(
  {
    title: {
      type: String,
      required: true,
      maxlength: 30,
    },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    prices: { type: [Number], required: true },
    extraOptions: {
      type: [
        {
          price: { type: Number, required: true },
          text: { type: String, required: true },
        },
      ],
    },
    withVegetables: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model<ProductInterface>("Product", productSchema);
