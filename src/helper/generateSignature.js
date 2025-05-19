// generateSignature.js
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.SIGNATURE_SECRET; // secret key yang sama dengan backend
const body = "{}";
const timestamp = Math.floor(Date.now() / 1000).toString();

const hmac = crypto.createHmac("sha256", secret);
hmac.update(body + timestamp);
const signature = hmac.digest("hex");

console.log("timestamp:", timestamp);
console.log("signature:", signature);
