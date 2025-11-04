import express from "express";
import { SignUp, SignIn } from "../controllers/auth.controller.js";

const router = express.Router();

// POST /api/auth/signup
router.post("/signup", SignUp);

// POST /api/auth/signin
router.post("/signin", SignIn);

// EXPORT ROUTER
export default router;
