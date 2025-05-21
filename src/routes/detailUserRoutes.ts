import express from "express";
import {
  createDetailUser,
  deleteDetailUser,
  getAllDetailUser,
  getDetailUserById,
  updateDetailUser,
} from "../controllers/detailUserController";
import { authMiddleware } from "../middleware/authMiddleware";
// import { signatureMiddleware } from "../middleware/signatureMiddleware";
import { upload } from "../config/upload";

const router = express.Router();
router.use(authMiddleware as express.RequestHandler);
// router.use(signatureMiddleware as express.RequestHandler);

router.get("/get-all", getAllDetailUser);
router.get("/get-byid/:id", getDetailUserById);
router.put("/updated/:id", upload.single("photo"), updateDetailUser);
router.post("/", upload.single("photo"), createDetailUser);
router.delete("/delete/:id", deleteDetailUser);

export default router;
