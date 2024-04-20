import { Schema, model } from "mongoose";

export interface User {
  username: string;
  passwordHash: string;
  nickname: string;
  color?: Color;
  _id: string;
}

type Color = "red" | "green" | "orange" | "yellow" | "blue" | "aqua" | "purple";

const UserSchema = new Schema<User>(
  {
    username: {
      type: String,
      required: [true, "A username is required."],
    },
    passwordHash: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const Users = model<User>("users", UserSchema);
