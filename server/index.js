import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db_connect.js";
import searchFlights from "./src/routes/flights.js";

dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      process.env.CLIENT_URL,
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      undefined, // For SSR or curl requests without origin
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked from origin: ${origin}`));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
// app.options("*", cors(corsOptions)); // Handle preflight requests

const PORT = process.env.PORT || 3000;

app.use("/api/flights", searchFlights);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
