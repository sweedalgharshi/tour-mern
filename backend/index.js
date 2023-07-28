import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// database connection

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Mongo DB database connected");
  } catch (err) {
    console.log("MongoDb database connection failed", port);
  }
};

// for testing
// app.get("/", (req, res) => {
//   res.send("app is working");
// });

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/tours", tourRoute);
app.use("/users", userRoute);

app.listen(port, () => {
  connect();
  console.log(`server listening on port ${port}`);
});
