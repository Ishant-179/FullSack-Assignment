import express from "express";
import { registerUser, getUsers } from "../controllers/userController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Routes
router.post("/register", upload.single("profilePic"), registerUser);
router.get("/", getUsers); 

export default router;
