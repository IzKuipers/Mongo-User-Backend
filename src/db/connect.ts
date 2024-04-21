import mongoose from "mongoose";
import { DATABASE, MONGO_HOST, MONGO_PORT } from "../env";

export async function connectDB() {
  await mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${DATABASE}`);
}

export default connectDB;
