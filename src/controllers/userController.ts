import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { TokeUserPayload } from "../types/TokenPayloadDecode";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import { dbMain } from "../prisma/client";
import { Record } from "../../prisma/generated/client-main";

export const getUserAll = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const totalItems = await dbMain.users.count({
      where: { Record: Record.Active },
    });

    const users = await dbMain.users.findMany({
      where: { Record: Record.Active },
      select: {
        Id: true,
        Username: true,
        Email: true,
        RoleId: true,
        CreatedAt: true,
        UpdatedAt: true,
        Record: true,
        role: {
          select: {
            Name: true,
          },
        },
      },
      skip,
      take: limit,
    });
    res
      .status(200)
      .json(
        createPaginatedResponse(
          "USER",
          "READ",
          "Success",
          users,
          page,
          limit,
          totalItems
        )
      );
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("USER", "ERROR", "Server error", null));
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // const userId = req.TokeUserPayload?.id;
    const { id } = req.params;
    const user = await dbMain.users.findUnique({
      where: { Id: id },
      select: {
        Id: true,
        Username: true,
        Email: true,
        RoleId: true,
        CreatedAt: true,
        UpdatedAt: true,
        Record: true,
        role: {
          select: {
            Name: true,
          },
        },
      },
    });
    if (!user) {
      res
        .status(404)
        .json(createResponse("USER", "ERROR", "User not found", null));
      return;
    }

    res.status(200).json(createResponse("USER", "READ", "Success", user));
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("USER", "ERROR", "Server error", null));
  }
};

// Contoh createUser (pastikan role adalah Id role yang valid)
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.TokeUserPayload?.id;
    const { Username, Email, Password, RoleId } = req.body;

    const userCreate = await dbMain.users.findUnique({ where: { Id: userId } });

    // Validasi duplikasi
    const existingUser = await dbMain.users.findFirst({
      where: {
        OR: [{ Username }, { Email }],
      },
    });

    if (existingUser) {
      res
        .status(400)
        .json(createResponse("USER", "ERROR", "User already exists", null));
      return;
    }

    // Cek apakah RoleId valid
    const role = await dbMain.role.findUnique({ where: { Id: RoleId } });
    if (!role) {
      res
        .status(400)
        .json(createResponse("USER", "ERROR", "Invalid role", null));
      return;
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const newUser = await dbMain.users.create({
      data: {
        Username,
        Email,
        Password: hashedPassword,
        RoleId: RoleId,
        CreatedBy: userCreate?.Username || "System",
      },
      select: {
        Id: true,
        Username: true,
        Email: true,
        RoleId: true,
        CreatedAt: true,
      },
    });

    res.status(201).json(createResponse("USER", "CREATE", "Success", newUser));
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("USER", "ERROR", "Server error", null));
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { Username, Email, Password, RoleId } = req.body;

    const user = await dbMain.users.findUnique({ where: { Id: id } });
    if (!user) {
      res
        .status(404)
        .json(createResponse("USER", "ERROR", "User not found", null));
      return;
    }

    // Cek apakah RoleId valid (opsional, tapi direkomendasikan)
    if (RoleId) {
      const role = await dbMain.role.findUnique({ where: { Id: RoleId } });
      if (!role) {
        res
          .status(400)
          .json(createResponse("USER", "ERROR", "Invalid role", null));
        return;
      }
    }

    const hashedPassword = Password
      ? await bcrypt.hash(Password, 10)
      : undefined;

    const updatedUser = await dbMain.users.update({
      where: { Id: id },
      data: {
        Username,
        Email,
        Password: hashedPassword,
        RoleId: RoleId,
      },
      select: {
        Id: true,
        Username: true,
        Email: true,
        RoleId: true,
        UpdatedAt: true,
      },
    });

    res
      .status(200)
      .json(createResponse("USER", "UPDATE", "Success", updatedUser));
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("USER", "ERROR", "Server error", null));
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await dbMain.users.update({
      where: { Id: id },
      data: { Record: Record.Inactive },
    });
    res.status(200).json(createResponse("USER", "DELETE", "Success", null));
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("USER", "ERROR", "Server error", null));
  }
};

export const restoreUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await dbMain.users.update({
      where: { Id: id },
      data: { Record: Record.Active },
    });
    res
      .status(200)
      .json(createResponse("USER", "UPDATE", "Restore success", user));
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("USER", "ERROR", "Server error", null));
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // true di production
    });
    res.status(200).json(createResponse("USER", "UPDATE", "Success", null));
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("USER", "ERROR", "Server error", null));
  }
};
