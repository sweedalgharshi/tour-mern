import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import {
  createBooking,
  getAllBooking,
  getSingleBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", verifyUser, createBooking);

router.get("/:id", verifyUser, getSingleBooking);

router.get("/", verifyAdmin, getAllBooking);

export default router;
