import express from "express";
import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
} from "../controllers/roleController";
import { authMiddleware } from "../middleware/authMiddleware";
import { signatureMiddleware } from "../middleware/signatureMiddleware";

const router = express.Router();
router.use(authMiddleware as express.RequestHandler);
router.use(signatureMiddleware as express.RequestHandler);

router.get("/get-all", getAllRoles);
router.get("/get-byid/:id", getRoleById);
router.post("/", createRole);
router.put("/updated/:id", updateRole);

export default router;
