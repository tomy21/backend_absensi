import { Request, Response } from "express";
import { dbSecondary } from "../prisma/client";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import { extractCoordinates, generateNextKID } from "../helper/generateCode";

export const createLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      location_code,
      location_name,
      Create_by,
      Update_by,
      address,
      urlLocation,
      minimum_point,
      region_coordinator,
      category,
      vendor,
      region,
      total_lot,
      total_lot_mobil,
      total_lot_motor,
    } = req.body;

    const coordinate = extractCoordinates(urlLocation);
    if (!coordinate) {
      res
        .status(400)
        .json(createResponse("LOCATION", "ERROR", "URL tidak valid", null));
      return;
    }

    const lastLocation = await dbSecondary.location_area.findFirst({
      orderBy: { id: "desc" },
    });

    const nextKID = generateNextKID(lastLocation?.KID ?? null);

    const location = await dbSecondary.location_area.create({
      data: {
        location_code,
        location_name,
        KID: nextKID,
        Create_by,
        Update_by,
        address,
        coordinate,
        minimum_point,
        region_coordinator,
        category,
        vendor,
        region,
        total_lot,
        total_lot_mobil,
        total_lot_motor,
      },
    });
    res.status(200).json(createResponse("ROLE", "CREATE", "Success", location));
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("ROLE", "ERROR", "Server error", null));
  }
};

export const getLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const totalItems = await dbSecondary.location_area.count();

    const location = await dbSecondary.location_area.findMany({
      skip,
      take: limit,
      select: {
        location_name: true,
        location_code: true,
        KID: false,
        Create_by: false,
        Update_by: false,
        address: false,
        coordinate: false,
        minimum_point: false,
        region_coordinator: false,
        category: false,
        vendor: false,
        region: false,
        total_lot: false,
        total_lot_mobil: false,
        total_lot_motor: false,
      },
    });

    res
      .status(200)
      .json(
        createPaginatedResponse(
          "LOCATION",
          "READ",
          "Success",
          location,
          page,
          limit,
          totalItems
        )
      );
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("ROLE", "ERROR", "Server error", null));
  }
};

export const getLocationById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const location = await dbSecondary.location_area.findUnique({
      where: { id: Number(id) },
    });
    res
      .status(200)
      .json(createResponse("LOCATION", "READ", "Success", location));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("LOCATION", "ERROR", "Server error", null));
  }
};

export const updateLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      location_code,
      location_name,
      Update_by,
      address,
      urlLocation,
      minimum_point,
      region_coordinator,
      category,
      vendor,
      region,
      total_lot,
      total_lot_mobil,
      total_lot_motor,
    } = req.body;

    const { id } = req.params;

    const coordinate = extractCoordinates(urlLocation);
    if (!coordinate) {
      res
        .status(400)
        .json(createResponse("LOCATION", "ERROR", "URL tidak valid", null));
      return;
    }

    const location = await dbSecondary.location_area.update({
      where: { id: Number(id) },
      data: {
        location_code,
        location_name,
        Update_by,
        address,
        coordinate,
        minimum_point,
        region_coordinator,
        category,
        vendor,
        region,
        total_lot,
        total_lot_mobil,
        total_lot_motor,
      },
    });

    res
      .status(200)
      .json(createResponse("LOCATION", "UPDATE", "Success", location));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("LOCATION", "ERROR", "Server error", null));
  }
};

export const deleteLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const location = await dbSecondary.location_area.delete({
      where: { id: Number(id) },
    });
    res
      .status(200)
      .json(createResponse("LOCATION", "DELETE", "Success", location));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("LOCATION", "ERROR", "Server error", null));
  }
};
