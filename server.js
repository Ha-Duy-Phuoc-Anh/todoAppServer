// Get library
import express from "express";
import cors from "cors";
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log("🟡 Incoming content-type:", req.headers["content-type"]);
  next();
});


// Routes
import authRouter from "./src/modules/auth/auth.index.js";
import todoRouter from "./src/modules/posts/todo.index.js";

app.use("/api/auth", authRouter);
app.use("/api/todo", todoRouter);

// Middleware error
app.use((req, res, next) => {
  console.error("404 Route not found:", req.originalUrl);
  res.status(404).json({ message: "Route not found" });
});

// Port listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
