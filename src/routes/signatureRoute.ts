import express from "express";
import {
  AddSignatureUserAccount,
  AddSignatureUserDetail,
  GetSignature,
} from "../controllers/GenerateSignature";

const router = express.Router();

router.post("/signatureAddUser", AddSignatureUserAccount);
router.post("/signatureAddUserDetail", AddSignatureUserDetail);
router.get("/signatureGet", GetSignature);

export default router;
