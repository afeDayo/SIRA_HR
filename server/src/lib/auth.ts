import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function isAdminSetUp() {
  return Boolean(process.env.ADMIN_PASSWORD && process.env.JWT_SECRET);
}

export function isCorrectPassword(password: unknown) {
  return typeof password === "string" && password === process.env.ADMIN_PASSWORD;
}

export function createToken() {
  return jwt.sign({ role: "admin" }, process.env.JWT_SECRET!, { expiresIn: "8h" });
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace("Bearer ", "") ?? "";

  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    next();
  } catch {
    res.status(401).json({ ok: false, message: "Your session has expired. Please log in again." });
  }
}
