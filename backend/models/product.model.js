import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      thumbnail: { type: String, required: true },
      mobile: { type: String, required: true },
      tablet: { type: String, required: true },
      desktop: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
