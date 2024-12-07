import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.DATABASE_URL) {
      console.error(
        "DATABASE_URL is not defined in the environment variables."
      );
      process.exit(1);
    }

    mongoose.set("strictQuery", true);

    await mongoose.connect(process.env.DATABASE_URL);

    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
