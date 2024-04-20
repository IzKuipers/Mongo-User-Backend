import connectDB from "./connect";

export async function startDB() {
  try {
    await connectDB();

    console.log(`Connected MongoDB.`);
  } catch (e) {
    throw e;
  }
}
