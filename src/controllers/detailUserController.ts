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
      orderBy: {
        CreatedAt: "desc",
      },
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
      KTPNo,
      Name,
      Departement,
      Divisi,
      Address,
      DOB,
      NoTlp,
      LocationCode,
      Gender,
      StatusKaryawan,
      JoinDate,
    } = req.body;
    const finalJoinDate = JoinDate ? new Date(JoinDate) : new Date();

    const userCreated = await dbMain.users.findUnique({
      where: { Id: userId },
    });

    const file = req.file;
    if (!file) {
      res
        .status(400)
        .json(createResponse("USER", "ERROR", "Photo is required", null));
      return;
    }

    const photoPath = `uploads/${file.filename}`;

    // Cek apakah Email sudah digunakan
    const emailExist = await dbMain.users.findUnique({ where: { Email } });
    if (emailExist) {
      res
        .status(400)
        .json(createResponse("USER", "ERROR", "Email sudah digunakan", null));
      return;
    }
    const UsernameExist = await dbMain.users.findUnique({
      where: { Username },
    });
    if (UsernameExist) {
      res
        .status(400)
        .json(
          createResponse("USER", "ERROR", "Username sudah digunakan", null)
        );
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

    // Generate password & hash
    const rawPassword = generatePassword(); // fungsi generatePassword harus kamu buat
    const hashedPassword = await bcrypt.hash(rawPassword, 10);

    // Generate NIK dari tanggal sekarang
    const now = new Date();
    const YYYY = now.getFullYear().toString();
    const MM = String(now.getMonth() + 1).padStart(2, "0");
    const DD = String(now.getDate()).padStart(2, "0");
    const datePart = `${YYYY}${MM}${DD}`;
    const uniquePart = Math.floor(10000 + Math.random() * 90000).toString();
    const NIK = `${datePart}${uniquePart}`;

    // Transaction untuk create user dan detail user
    const result = await dbMain.$transaction(async (tx) => {
      const createAcount = await tx.users.create({
        data: {
          Username,
          Email,
          Password: hashedPassword,
          RoleId: Number(RoleId),
          CreatedBy: userCreated?.Username || "System",
        },
        select: {
          Id: true,
          Username: true,
          Email: true,
          RoleId: true,
          CreatedAt: true,
        },
      });

      const detailUser = await tx.detailUsers.create({
        data: {
          UserId: createAcount.Id,
          NIK,
          KTPNo,
          DOB: new Date(DOB),
          Gender,
          JoinDate: finalJoinDate,
          ProfilePath: photoPath,
          Name,
          Departement,
          Divisi,
          Address,
          NoTlp,
          LocationCode,
          StatusKaryawan,
          Status: "Active",
          Record: "Active",
          CreatedBy: userCreated?.Username || "System",
        },
        select: {
          Id: true,
          UserId: true,
          NIK: true,
          Name: true,
          KTPNo: true,
          DOB: true,
          Gender: true,
          JoinDate: true,
          ProfilePath: true,
          Departement: true,
          Divisi: true,
          Address: true,
          NoTlp: true,
          LocationCode: true,
          StatusKaryawan: true,
          Status: true,
        },
      });

      return { createAcount, detailUser };
    });

    // Response sukses
    res.status(200).json(
      createResponse("USER", "CREATE", "Success", {
        ...result.detailUser,
        rawPassword, // password mentah, bisa dikirim email, hati2 jangan expose sembarangan
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
    const userId = req.TokeUserPayload?.id;

    const userUpdated = await dbMain.users.findUnique({
      where: { Id: userId },
    });

    const file = req.file;
    if (!file) {
      res
        .status(400)
        .json(createResponse("USER", "ERROR", "Photo is required", null));
      return;
    }

    const photoPath = `uploads/${file.filename}`;

    const {
      KTPNo,
      Departement,
      Divisi,
      Name,
      Address,
      Gender,
      Email,
      DOB,
      NoTlp,
      LocationCode,
      StatusKaryawan,
      JoinDate,
      Status,
    } = req.body;

    const existing = await dbMain.detailUsers.findUnique({ where: { Id: id } });
    if (!existing) {
      res
        .status(404)
        .json(createResponse("USER", "ERROR", "User not found", null));
      return;
    }

    // Mulai transaksi Prisma
    const [updateEmail, detailUser] = await dbMain.$transaction([
      dbMain.users.update({
        where: { Id: userId },
        data: {
          Email,
          UpdatedBy: userUpdated?.Username || "System",
        },
      }),
      dbMain.detailUsers.update({
        where: { Id: id },
        data: {
          KTPNo,
          Name,
          Departement,
          Divisi,
          Address,
          NoTlp,
          LocationCode,
          Gender,
          DOB: new Date(DOB),
          JoinDate: new Date(JoinDate),
          StatusKaryawan,
          Status,
          ProfilePath: photoPath,
          UpdatedBy: userUpdated?.Username || "System",
        },
      }),
    ]);

    // Jika berhasil semua
    res
      .status(200)
      .json(createResponse("USER", "UPDATE", "Success to update", detailUser));
  } catch (error) {
    console.error("Update failed:", error);
    res
      .status(500)
      .json(createResponse("USER", "ERROR", "Failed to update data", null));
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
