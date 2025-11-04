// IMPORT EXPRESS ROUTER AND CONTROLLERS
import express from "express";
import { AddTask, CompleteTask, DeleteTask, GetAllTask } from "../controllers/todo.controller.js";
const router = express.Router();

// POST /api/todo/add
router.post("/add", AddTask);

// GET /api/todo/getAll/:username
router.get("/get-all/:username", GetAllTask);

// PATCH /api/todo/:id/complete
router.patch("/:id/complete", CompleteTask);

// DELETE /api/todo/:id
router.delete("/:id", DeleteTask);

// EXPORT ROUTER
export default router;
