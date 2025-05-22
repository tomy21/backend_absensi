import { Request, Response } from "express";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import { dbMain, dbSecondary } from "../prisma/client";
import { getDistanceFromLatLonInKm } from "../utils/havesine";

export const Attendance = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.TokeUserPayload?.id;
    const { longitude, latitude } = req.body;

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0); // 00:00:00.000

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999); // 23:59:59.999

    const now = new Date();
    const utc7Date = new Date(now.getTime() + 7 * 60 * 60 * 1000);

    const file = req.file;
    if (!file) {
      res
        .status(400)
        .json(createResponse("ATTENDANCE", "ERROR", "Photo is required", null));
      return;
    }

    const photoPath = `uploads/${req.file?.filename}`;

    const locationUser = await dbMain.detailUsers.findFirst({
      where: {
        UserId: userId,
      },
      select: {
        LocationCode: true,
        Name: true,
        Departement: true,
        Divisi: true,
        Address: true,
        NoTlp: true,
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

    if (!locationUser) {
      res
        .status(404)
        .json(createResponse("USER", "ERROR", "User not found", null));
      return;
    }

    const refLocationUser = await dbSecondary.location_area.findFirst({
      where: {
        location_code: locationUser.LocationCode || "",
      },
      select: {
        location_name: true,
        address: true,
        coordinate: true,
      },
    });

    if (!refLocationUser) {
      res
        .status(404)
        .json(createResponse("LOCATION", "ERROR", "Location not found", null));
      return;
    }
    const response = JSON.parse(refLocationUser.coordinate);

    const locationRadius = getDistanceFromLatLonInKm(
      response.latitude,
      response.longitude,
      latitude,
      longitude
    );

    if (locationRadius > 3) {
      res
        .status(404)
        .json(
          createResponse("ATTENDANCE", "ERROR", "Location not found", null)
        );
      return;
    }

    const lastAttendance = await dbMain.attendance.findFirst({
      where: {
        UserId: userId,
        Date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      orderBy: {
        Date: "desc",
      },
    });

    if (lastAttendance) {
      res
        .status(404)
        .json(
          createResponse(
            "ATTENDANCE",
            "ERROR",
            "Kamu sudah lakukan absen masuk",
            null
          )
        );
      return;
    }

    const attendance = await dbMain.attendance.create({
      data: {
        UserId: userId || "",
        LocationCode: locationUser.LocationCode || "",
        LocationName: refLocationUser.location_name || "",
        Fullname: locationUser.Name || "",
        Address: refLocationUser.address || "",
        InTime: utc7Date,
        Date: utc7Date,
        Duration: 0,
        pathIn: photoPath,
        Status: "Hadir",
        Description: "-",
        CreatedBy: locationUser.Name || "",
      },
      select: {
        UserId: true,
        LocationCode: true,
        LocationName: true,
        Fullname: true,
        InTime: true,
        Duration: true,
        Status: true,
      },
    });

    res
      .status(200)
      .json(createResponse("ATTENDANCE", "READ", "Success", attendance));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("ATTENDANCE", "ERROR", "Server error", null));
  }
};

export const AttendanceOut = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.TokeUserPayload?.id;
    const { longitude, latitude } = req.body;

    const now = new Date();
    const utc7Date = new Date(now.getTime() + 7 * 60 * 60 * 1000);

    // Cari attendance hari ini
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const file = req.file;
    if (!file) {
      res
        .status(400)
        .json(createResponse("ATTENDANCE", "ERROR", "Photo is required", null));
      return;
    }

    const photoPath = `uploads/${req.file?.filename}`;

    const locationUser = await dbMain.detailUsers.findFirst({
      where: {
        UserId: userId,
      },
      select: {
        LocationCode: true,
        Name: true,
        Departement: true,
        Divisi: true,
        Address: true,
        NoTlp: true,
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

    if (!locationUser) {
      res
        .status(404)
        .json(createResponse("USER", "ERROR", "User not found", null));
      return;
    }

    const refLocationUser = await dbSecondary.location_area.findFirst({
      where: {
        location_code: locationUser.LocationCode || "",
      },
      select: {
        location_name: true,
        coordinate: true,
      },
    });

    if (!refLocationUser) {
      res
        .status(404)
        .json(createResponse("LOCATION", "ERROR", "Location not found", null));
      return;
    }
    const response = JSON.parse(refLocationUser.coordinate);

    const locationRadius = getDistanceFromLatLonInKm(
      response.latitude,
      response.longitude,
      latitude,
      longitude
    );

    if (locationRadius > 3) {
      res
        .status(404)
        .json(
          createResponse("ATTENDANCE", "ERROR", "Location not found", null)
        );
      return;
    }

    const getInTime = await dbMain.attendance.findFirst({
      where: {
        UserId: userId || "",
        Date: {
          gte: todayStart,
        },
      },
      select: {
        Id: true,
        InTime: true,
      },
    });

    if (!getInTime) {
      res
        .status(404)
        .json(
          createResponse(
            "ATTENDANCE",
            "ERROR",
            "Kamu belum absen masuk hariu",
            null
          )
        );
      return;
    }

    const durationMs = utc7Date.getTime() - getInTime.InTime.getTime();
    const durationHours = durationMs / (1000 * 60 * 60);
    const durationInt = Math.floor(durationHours);

    if (durationInt < 0) {
      res
        .status(404)
        .json(
          createResponse(
            "ATTENDANCE",
            "ERROR",
            "No attendance record found today",
            null
          )
        );
      return;
    }

    const updated = await dbMain.attendance.update({
      where: {
        Id: getInTime.Id || undefined,
        Date: {
          gte: todayStart,
        },
      },
      data: {
        LocationCode: locationUser.LocationCode || "",
        LocationName: refLocationUser.location_name || "",
        Fullname: locationUser.Name || "",
        OutTime: utc7Date,
        pathOut: photoPath,
        Duration: durationInt,
        Status: "Hadir",
        Description: "-",
        UpdatedBy: locationUser.Name || "",
      },
    });

    res
      .status(200)
      .json(createResponse("ATTENDANCE", "UPDATE", "Success", updated));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("ATTENDANCE", "ERROR", "Server error", null));
  }
};

export const getAllAttendance = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalItems = await dbMain.attendance.count();
    const totalKaryawan = await dbMain.users.count({
      where: {
        Record: "Active",
      },
    });
    const totalHadir = await dbMain.attendance.count({
      where: {
        Status: "Hadir",
      },
    });
    const totalIzin = await dbMain.attendance.count({
      where: {
        Status: "Izin",
      },
    });
    const totalSakit = await dbMain.attendance.count({
      where: {
        Status: "Sakit",
      },
    });
    const totalCuti = await dbMain.attendance.count({
      where: {
        Status: "Cuti",
      },
    });
    const totalAbsen = await dbMain.attendance.count({
      where: {
        Status: "Absen",
      },
    });

    const attendance = await dbMain.attendance.findMany({
      select: {
        Id: true,
        UserId: true,
        Fullname: true,
        Date: true,
        LocationName: true,
        pathIn: true,
        pathOut: true,
        Address: true,
        InTime: true,
        OutTime: true,
        Duration: true,
        Status: true,
        Description: true,
      },
      skip,
      take: limit,
      orderBy: {
        CreatedAt: "desc",
      },
    });

    const Response = [
      {
        Summary: {
          Karyawan: totalKaryawan,
          Hadir: totalHadir,
          Izin: totalIzin,
          Sakit: totalSakit,
          Cuti: totalCuti,
          Absen: totalAbsen,
        },
      },
      {
        data: attendance,
      },
    ];

    res
      .status(200)
      .json(
        createPaginatedResponse(
          "ATTENDANCE",
          "READ",
          "Success",
          Response,
          page,
          limit,
          totalItems
        )
      );
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("ATTENDANCE", "ERROR", "Server error", null));
  }
};

export const getByIdAttendance = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.TokeUserPayload?.id;
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0); // 00:00:00.000

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999); // 23:59:59.999
    const attendance = await dbMain.attendance.findFirst({
      where: {
        UserId: userId,
        Date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      select: {
        Id: true,
        UserId: true,
        Date: true,
        LocationName: true,
        Address: true,
        InTime: true,
        OutTime: true,
        Duration: true,
        Status: true,
        Description: true,
      },
      orderBy: {
        Date: "desc",
      },
    });

    res
      .status(200)
      .json(createResponse("ATTENDANCE", "READ", "Success", attendance));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("ATTENDANCE", "ERROR", "Server error", null));
  }
};
