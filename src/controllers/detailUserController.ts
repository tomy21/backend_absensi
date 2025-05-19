import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import generatePassword from "../helper/generatePassword";
import { dbMain } from "../prisma/client";

export const getAllDetailUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const totalItems = await dbMain.detailUsers.count({
      where: { Status: "Active" },
    });

    const detailUser = await dbMain.detailUsers.findMany({
      where: { Status: "Active" },
      select: {
        Id: true,
        UserId: true, // ganti ke String karena relasi ke Users.Id
        NIK: true,
        Name: true,
        Departement: true,
        Divisi: true,
        Address: true,
        NoTlp: true,
        LocationCode: true,
        StatusKaryawan: true,
        Status: true,
        CreatedBy: true,
        CreatedAt: true,
        UpdatedAt: true,
        UpdatedBy: true,
        DeletedAt: true,
        DeletedBy: true,
        Record: true,
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
          "Get data successfully",
          detailUser,
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

export const getDetailUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const detailUser = await dbMain.detailUsers.findUnique({
      where: { Id: id }, // Konversi ke number
      select: {
        Id: true,
        UserId: true, // ganti ke String karena relasi ke Users.Id
        NIK: true,
        Name: true,
        Departement: true,
        Divisi: true,
        Address: true,
        NoTlp: true,
        LocationCode: true,
        StatusKaryawan: true,
        Status: true,
        CreatedBy: true,
        CreatedAt: true,
        UpdatedAt: true,
        UpdatedBy: true,
        DeletedAt: true,
        DeletedBy: true,
        Record: true,
      },
    });
    if (!detailUser) {
      res
        .status(404)
        .json(createResponse("USER", "ERROR", "User not found", null));
      return;
    }
    res.status(200).json(createResponse("USER", "READ", "Success", detailUser));
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("USER", "ERROR", "Server error", null));
  }
};

export const createDetailUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.TokeUserPayload?.id;
    const {
      Username,
      Email,
      RoleId,
      Name,
      Departement,
      Divisi,
      Address,
      NoTlp,
      LocationCode,
      StatusKaryawan,
    } = req.body;

    const userCreate = await dbMain.users.findUnique({ where: { Id: userId } });

    // Cek apakah Email sudah digunakan
    const emailExist = await dbMain.users.findUnique({ where: { Email } });
    if (emailExist) {
      res
        .status(400)
        .json(createResponse("USER", "ERROR", "Email sudah digunakan", null));
      return;
    }

    // Cek apakah NoTlp sudah digunakan
    const phoneExist = await dbMain.detailUsers.findFirst({ where: { NoTlp } });
    if (phoneExist) {
      res
        .status(400)
        .json(createResponse("USER", "ERROR", "NoTlp sudah digunakan", null));
      return;
    }

    // Cek apakah UserId sudah punya detailUser
    const userDetailExist = await dbMain.detailUsers.findFirst({
      where: { UserId: userId },
    });
    if (userDetailExist) {
      res
        .status(400)
        .json(
          createResponse("USER", "ERROR", "UserId sudah punya detail", null)
        );
      return;
    }

    // Generate password & hash
    const rawPassword = generatePassword(); // kamu bisa log / kirim via email
    const hashedPassword = await bcrypt.hash(generatePassword(), 10);

    // Generate NIK dari tanggal
    const now = new Date();
    const YYYY = now.getFullYear().toString();
    const MM = String(now.getMonth() + 1).padStart(2, "0");
    const DD = String(now.getDate()).padStart(2, "0");
    const datePart = `${YYYY}${MM}${DD}`;
    const uniquePart = Math.floor(10000 + Math.random() * 90000).toString();
    const NIK = `${datePart}${uniquePart}`;

    // Buat akun user
    const createAcount = await dbMain.users.create({
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

    // Buat detail user
    const detailUser = await dbMain.detailUsers.create({
      data: {
        UserId: createAcount.Id,
        NIK,
        Name,
        Departement,
        Divisi,
        Address,
        NoTlp,
        LocationCode,
        StatusKaryawan,
        Status: "Active",
        Record: "Active",
        CreatedBy: userCreate?.Username || "System",
      },
      select: {
        Id: true,
        UserId: true,
        NIK: true,
        Name: true,
        Departement: true,
        Divisi: true,
        Address: true,
        NoTlp: true,
        LocationCode: true,
        StatusKaryawan: true,
        Status: true,
      },
    });

    res.status(200).json(
      createResponse("USER", "CREATE", "Success", {
        ...detailUser,
        rawPassword, // bisa dihapus kalau nggak mau expose
      })
    );
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("USER", "ERROR", "Server error", null));
  }
};

export const updateDetailUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const {
      NIK,
      Name,
      Departement,
      Divisi,
      Address,
      NoTlp,
      LocationCode,
      StatusKaryawan,
      Status,
      UpdatedBy,
    } = req.body;

    const existing = await dbMain.detailUsers.findUnique({ where: { Id: id } });
    if (!existing) {
      res
        .status(404)
        .json(createResponse("USER", "ERROR", "User not found", null));
      return;
    }

    const detailUser = await dbMain.detailUsers.update({
      where: { Id: id },
      data: {
        NIK,
        Name,
        Departement,
        Divisi,
        Address,
        NoTlp,
        LocationCode,
        StatusKaryawan,
        Status,
        UpdatedBy,
      },
    });

    res
      .status(200)
      .json(createResponse("USER", "UPDATE", "Success", detailUser));
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("USER", "ERROR", "Server error", null));
  }
};

export const deleteDetailUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await dbMain.detailUsers.delete({ where: { Id: id } });
    res.status(200).json(createResponse("USER", "DELETE", "Success", null));
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("USER", "ERROR", "Server error", null));
  }
};
