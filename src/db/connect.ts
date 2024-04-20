import mongoose from "mongoose";
import { DATABASE } from "../env";

export async function connectDB() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${DATABASE}`);
}

export default connectDB;
