import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;
export interface TokeUserPayload {
  id: string;
  email: string;
  role: string;
}

export const generateToken = (payload: object) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });
};

export const verifyToken = (token: string): TokeUserPayload => {
  return jwt.verify(token, JWT_SECRET) as TokeUserPayload;
};
