// generateSignature.js
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

export const GenerateTimestamp = () => {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  return timestamp;
};

export const GenerateSignature = (body: {} = {}) => {
  const secret = process.env.SIGNATURE_SECRET; // secret key yang sama dengan backend
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const hmac = crypto.createHmac("sha256", secret || "");
  hmac.update(body + timestamp);
  const signature = hmac.digest("hex");
  const response = { timestamp, signature };
  return response;
};
