import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies?.token;
  if (!token) {
    res.status(401).json({ message: "No token" });
    return;
  }

  try {
    const user = verifyToken(token);
    req.TokeUserPayload = user;
    return next(); // tambahkan return agar type-nya jelas void
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
    return;
  }
};
