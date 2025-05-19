import { Duffel } from "@duffel/api";
import dotenv from "dotenv";
dotenv.config();

// ✅ Add this line to test the environment variable
// console.log("Duffel API Key:", process.env.DUFFEL_API_KEY);
const duffel = new Duffel({
  token: process.env.DUFFEL_API_KEY,
});

export default duffel;
