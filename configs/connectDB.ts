import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;

const connectDB = async () =>  await mongoose.connect(DB_URL!);

export default connectDB;