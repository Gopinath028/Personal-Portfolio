import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contact.routes.js";
import errorHandler from "./middleware/errorHandler.js";


  // FIRST

dotenv.config();

connectDB();

const app = express();

// CORS configuration
const allowedOrigin = process.env.FRONTEND_URL || "https://gopinathkofficial.netlify.app/";
app.use(
  cors({
    origin: allowedOrigin,
  })
);

// Built-in middleware
app.use(express.json());

// Logging (only in development)
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Backend is running" });
});

app.post("/api/test", (req, res) => {
  res.json({ message: "Test route works" });
});
// API routes
app.use("/api", contactRoutes);

// Global error handler (must be after routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`✅ CORS allowed origin: ${allowedOrigin}`);
});

console.log("SMTP_HOST:", process.env.SMTP_HOST);
console.log("SMTP_PORT:", process.env.SMTP_PORT);
