import { Schema, model } from "mongoose";

export interface Token {
  value: string;
  userId: string;
}

const TokenSchema = new Schema<Token>({
  value: {
    type: String,
    required: [true, "A token value is required."],
  },
  userId: {
    type: String,
    required: [true, "A token requires a user ID."],
  },
});

export const Tokens = model<Token>("tokens", TokenSchema);
