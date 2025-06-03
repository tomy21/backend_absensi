import express from "express";
import {
  createMasterTariff,
  deleteMasterTariff,
  getAllMasterTariff,
  getMasterTariffById,
  getMasterTariffByLocation,
  updateMasterTariff,
} from "../controllers/MasterTariff";

const router = express.Router();

router.get("/get-all", getAllMasterTariff);
router.get("/get-byid/:id", getMasterTariffById);
router.get("/get-location/:code", getMasterTariffByLocation);
router.post("/", createMasterTariff);
router.put("/updated/:id", updateMasterTariff);
router.delete("/delete/:id", deleteMasterTariff);

export default router;
