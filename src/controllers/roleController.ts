import { Request, Response } from "express";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import { dbMain } from "../prisma/client";

export const getAllRoles = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const roles = await dbMain.role.findMany({
      select: { Id: true, Name: true },
      skip,
      take: limit,
    });
    res
      .status(200)
      .json(
        createPaginatedResponse(
          "ROLE",
          "READ",
          "Get data successfully",
          roles,
          page,
          limit,
          roles.length
        )
      );
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("ROLE", "ERROR", "Server error", null));
  }
};

export const getRoleById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const role = await dbMain.role.findUnique({
      where: { Id: parseInt(id) }, // Konversi ke number
      select: { Id: true, Name: true },
    });
    if (!role) {
      res
        .status(404)
        .json(createResponse("ROLE", "ERROR", "Role not found", null));
      return;
    }
    res.status(200).json(createResponse("ROLE", "READ", "Success", role));
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("ROLE", "ERROR", "Server error", null));
  }
};

export const createRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { Name } = req.body;
    const role = await dbMain.role.create({ data: { Name } });
    res.status(200).json(createResponse("ROLE", "CREATE", "Success", role));
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("ROLE", "ERROR", "Server error", null));
  }
};

export const updateRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const { Name } = req.body;
    const role = await dbMain.role.update({
      where: { Id: id },
      data: { Name },
    });
    res.status(200).json(createResponse("ROLE", "UPDATE", "Success", role));
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("ROLE", "ERROR", "Server error", null));
  }
};
