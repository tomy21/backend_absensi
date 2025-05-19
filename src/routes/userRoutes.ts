import { Router } from "express";
import {
  getUserAll,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  logout,
  restoreUser,
} from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";
import { signatureMiddleware } from "../middleware/signatureMiddleware";
import express from "express";

const router = Router();

router.use(authMiddleware as express.RequestHandler);
router.use(signatureMiddleware as express.RequestHandler);

router.get("/get-all", getUserAll);
router.get("/get-byid/:id", getUserById);
router.post("/", createUser);
router.put("/updated/:id", updateUser);
router.put("/restore-user/:id", restoreUser);
router.delete("/delete/:id", deleteUser);
router.post("/logout", logout);

export default router;
