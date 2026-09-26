import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import formRoutes from "./routes/forms.js";
import adminRoutes from "./routes/admin.js";
import { isAdminSetUp } from "./lib/auth.js";

const PORT = Number(process.env.PORT) || 4000;
const MONGODB_URI = process.env.MONGODB_URI;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

const allowedOrigins = CLIENT_URL.split(",").map((url) => url.trim());

const app = express();

app.set("trust proxy", 1);
app.use(helmet());
app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: "100kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, message: "SIRA HR API is running" });
});

app.use("/api/admin", adminRoutes);
app.use("/api", formRoutes);

app.use((_req, res) => {
  res.status(404).json({ ok: false, message: "Route not found." });
});

app.use(
  (
    error: Error & { status?: number },
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    if (error.status === 400) {
      res
        .status(400)
        .json({
          ok: false,
          message: "The data sent was not valid. Please try again.",
        });
      return;
    }

    console.error(error);
    res
      .status(500)
      .json({
        ok: false,
        message: "Something went wrong on our end. Please try again.",
      });
  },
);

async function startServer() {
  if (!MONGODB_URI) {
    console.error(
      "MONGODB_URI is missing. Add it to server/.env or to your Render environment variables.",
    );
    process.exit(1);
  }

  if (!isAdminSetUp()) {
    console.warn(
      "ADMIN_PASSWORD or JWT_SECRET is missing, so the admin dashboard is turned off.",
    );
  }

  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB");

  app.listen(PORT, (error) => {
    if (error) {
      console.error(`Could not start on port ${PORT}:`, error.message);
      process.exit(1);
    }

    console.log(`SIRA HR API running on http://localhost:${PORT}`);
    console.log(`Allowed origins: ${allowedOrigins.join(", ")}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start the server:", error);
  process.exit(1);
});
