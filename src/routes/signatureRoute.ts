import express from "express";
import {
  AddSignatureUserAccount,
  AddSignatureUserDetail,
  GetSignature,
} from "../controllers/GenerateSignature";

const router = express.Router();

router.get("/signatureAddUser", AddSignatureUserAccount);
router.get("/signatureAddUserDetail", AddSignatureUserDetail);
router.get("/signatureGet", GetSignature);

export default router;
