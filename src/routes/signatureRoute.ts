import express from "express";
import {
  AddSignatureUserAccount,
  AddSignatureUserDetail,
  GetSignature,
} from "../controllers/GenerateSignature";
import { upload } from "../config/upload";

const router = express.Router();

router.post("/signatureAddUser", AddSignatureUserAccount);
router.post(
  "/signatureAddUserDetail",
  upload.single("photo"),
  AddSignatureUserDetail
);
router.get("/signatureGet", GetSignature);

export default router;
