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
      type: String,
      required: true,
    },
    image: {
      data: { type: Buffer, required: true },
      contentType: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
