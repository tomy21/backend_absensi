// generateSignature.js
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

// Data yang akan dikirim
const bodyObject = {
  Username: "tomyagung3",
  Email: "tomy@gmail.com",
  RoleId: 2,
  Name: "Tomy Agung Saputro",
  Departement: "IT",
  Divisi: "IT Development",
  Address: "Tangerang",
  NoTlp: "+628123126111",
  LocationCode: "004SK",
  StatusKaryawan: "InHouse",
};

// 1. Stringify body
const body = JSON.stringify(bodyObject);

// 2. Timestamp in seconds
const timestamp = Math.floor(Date.now() / 1000).toString();

// 3. Generate HMAC signature
const secret = process.env.SIGNATURE_SECRET;
const hmac = crypto.createHmac("sha256", secret);
hmac.update(body + timestamp);
const signature = hmac.digest("hex");

// 4. Print
console.log("timestamp:", timestamp);
console.log("signature:", signature);
