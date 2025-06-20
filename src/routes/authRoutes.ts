import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { signatureMiddleware } from "../middleware/signatureMiddleware";
import { login, logout } from "../controllers/authController";

const router = express.Router();

// Contoh route login TIDAK perlu auth/signature
router.post("/login", login);
router.post("/logout", logout);

// Route yang butuh both auth dan signature
router.post(
  "/secure-action",
  signatureMiddleware, // 👉 validasi HMAC & timestamp dulu
  authMiddleware, // 👉 validasi JWT token dari cookie
  (req, res) => {
    res.json({ message: "Secure data accessed!" });
  }
);

export default router;
