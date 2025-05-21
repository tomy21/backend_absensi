// routes/attendance.ts
import express from "express";
import { exportAttendance } from "../controllers/ExportDataKaryawan";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();
router.use(authMiddleware as express.RequestHandler);
router.get("/attendance", exportAttendance);

export default router;
