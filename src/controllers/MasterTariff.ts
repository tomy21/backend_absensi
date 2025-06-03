import { Request, Response } from "express";
import { dbThird } from "../prisma/client";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import { create } from "domain";

export const getAllMasterTariff = async (
  req: Request,
  res: Response
): Promise<void> => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;

  const totalItems = await dbThird.masterTariff.count({
    where: { RecordStatus: "Active" },
  });

  const masterTariff = await dbThird.masterTariff.findMany({
    where: { RecordStatus: "Active" },
    select: {
      Id: true,
      LocationCode: true,
      LocationName: true,
      FirstTariffMobilWeekDay: true,
      SecondTariffMobilWeekDay: true,
      MaximalTariffMobilWeekDay: true,
      FirstTariffMobilWeekEnd: true,
      SecondTariffMobilWeekEnd: true,
      MaximalTariffMobilWeekEnd: true,
      FirstTariffMotorWeekDay: true,
      SecondTariffMotorWeekDay: true,
      MaximalTariffMotorWeekDay: true,
      FirstTariffMotorWeekEnd: true,
      SecondTariffMotorWeekEnd: true,
      MaximalTariffMotorWeekEnd: true,
      FirstTarrifValetWeekDay: true,
      SecondTariffValetWeekDay: true,
      MaximalTariffValetWeekDay: true,
      FirstTariffValetWeekEnd: true,
      SecondTariffValetWeekEnd: true,
      MaximalTariffValetWeekEnd: true,
      FirstTariffVIPWeekDay: true,
      SecondTariffVIPWeekDay: true,
      MaximalTariffVIPWeekDay: true,
      FirstTariffVIPWeekEnd: true,
      SecondTariffVIPWeekEnd: true,
      MaximalTariffVIPWeekEnd: true,
      RecordStatus: true,
      CreatedAt: true,
      UpdatedAt: true,
    },
    skip,
    take: limit,
  });
  res
    .status(200)
    .json(
      createPaginatedResponse(
        "MASTERTARIFF",
        "READ",
        "Get data successfully",
        masterTariff,
        page,
        limit,
        totalItems
      )
    );
};

export const getMasterTariffById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id);

  try {
    const data = await dbThird.masterTariff.findUnique({
      where: { Id: id },
    });

    if (!data || data.RecordStatus !== "Active") {
      res.status(404).json({ message: "Data not found" });
      return;
    }

    res.status(200).json({
      status: "success",
      message: "Data retrieved",
      data,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
};

export const getMasterTariffByLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  const locationCode = req.params.code;

  try {
    const data = await dbThird.masterTariff.findFirst({
      where: { LocationCode: locationCode },
    });

    if (!data || data.RecordStatus !== "Active") {
      res.status(404).json({ message: "Data not found" });
      return;
    }

    res.status(200).json({
      status: "success",
      message: "Data retrieved",
      data,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
};

export const createMasterTariff = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newData = await dbThird.masterTariff.create({
      data: {
        ...req.body,
        RecordStatus: "Active",
        CreatedAt: new Date(),
        CreatedBy: req.body.CreatedBy || "system",
      },
    });

    res
      .status(201)
      .json(
        createResponse("MASTERTARIFF", "CREATE", "Success create", newData)
      );
  } catch (err) {
    res
      .status(400)
      .json(createResponse("MASTERTARIFF", "ERROR", "Server error", null));
  }
};

export const updateMasterTariff = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id);

  try {
    const updatedData = await dbThird.masterTariff.update({
      where: { Id: id },
      data: {
        ...req.body,
        UpdatedAt: new Date(),
        UpdatedBy: req.body.UpdatedBy || "system",
      },
    });

    res
      .status(200)
      .json(createResponse("MASTERTARIFF", "UPDATE", "Success", updatedData));
  } catch (err) {
    res
      .status(400)
      .json(createResponse("MASTERTARIFF", "ERROR", "Server error", null));
  }
};

export const deleteMasterTariff = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id);

  try {
    await dbThird.masterTariff.update({
      where: { Id: id },
      data: {
        RecordStatus: "Inactive",
        UpdatedAt: new Date(),
        UpdatedBy: req.body.UpdatedBy || "system",
      },
    });

    res.status(200).json({
      status: "success",
      message: "Data deleted (soft) successfully",
    });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete data", error: err });
  }
};
