import express from "express";
import {
  createLocation,
  deleteLocation,
  getLocation,
  getLocationById,
  updateLocation,
} from "../controllers/locationController";
// import { authMiddleware } from "../middleware/authMiddleware";
// import { signatureMiddleware } from "../middleware/signatureMiddleware";

const router = express.Router();
// router.use(authMiddleware as express.RequestHandler);
// router.use(signatureMiddleware as express.RequestHandler);

router.get("/get-all", getLocation);
router.get("/get-byid/:id", getLocationById);
router.post("/", createLocation);
router.put("/updated/:id", updateLocation);
router.delete("/delete/:id", deleteLocation);

export default router;
