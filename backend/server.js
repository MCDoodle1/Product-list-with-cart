import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./db/connectDB.js";
import { Product } from "./models/product.model.js";
import { fileURLToPath } from "url";

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
  const products = await Product.find();
  if (!products) {
    return res.json({ message: "No products in the database" });
  } else res.json(products);
});

app.post("/products", async (req, res) => {
  const { image, name, category, price } = req.body;

  if (!image || !name || !category || typeof price !== "number") {
    return res.status(400).json({ message: "Invalid data format." });
  }

  try {
    const newProduct = new Product({ image, name, category, price });
    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.use(
  "/images",
  express.static(path.join(__dirname, "../frontend/assets/images/"))
);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error.message);
    process.exit(1);
  }
};

startServer();
