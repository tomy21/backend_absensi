import { Request, Response, NextFunction } from "express";
import { verifyHMAC } from "../utils/signature";

export const signatureMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const signature = req.headers["x-signature"] as string;
  const timestamp = req.headers["x-timestamp"] as string;

  const now = Math.floor(Date.now() / 1000);
  const diff = Math.abs(now - Number(timestamp));

  if (diff > 300) {
    res.status(400).json({ message: "Signature expired" });
    return;
  }

  const body = JSON.stringify(req.body || {});
  const valid = verifyHMAC(signature, body, timestamp);
  console.log(signature, body, timestamp);
  if (!valid) {
    res.status(401).json({ message: "Invalid signature" });
    return;
  }

  return next(); // tambahkan return agar eksplisit void
};
