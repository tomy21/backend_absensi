import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  Attendance,
  AttendanceOut,
  getAllAttendance,
  getByIdAttendance,
} from "../controllers/Attendance";
import { upload } from "../config/upload";
// import { signatureMiddleware } from "../middleware/signatureMiddleware";

const router = express.Router();
router.use(authMiddleware as express.RequestHandler);
// router.use(signatureMiddleware as express.RequestHandler);

router.post("/In", upload.single("photo"), Attendance);
router.post("/Out", upload.single("photo"), AttendanceOut);
router.get("/get-all", getAllAttendance);
router.get("/get-byid/", getByIdAttendance);

export default router;
