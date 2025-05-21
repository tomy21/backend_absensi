// controllers/attendanceController.ts
import { Request, Response } from "express";
import ExcelJS from "exceljs";
import { dbMain } from "../prisma/client";

export const exportAttendance = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;

    const attendanceList = await dbMain.attendance.findMany({
      where: {
        Date: {
          gte: new Date(startDate as string),
          lte: new Date(endDate as string),
        },
      },
      orderBy: { Date: "asc" },
    });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Attendance");

    worksheet.columns = [
      { header: "ID", key: "Id", width: 10 },
      { header: "User ID", key: "UserId", width: 20 },
      { header: "Fullname", key: "Fullname", width: 20 },
      { header: "Date", key: "Date", width: 15 },
      { header: "In Time", key: "InTime", width: 15 },
      { header: "Out Time", key: "OutTime", width: 15 },
      { header: "Location", key: "LocationName", width: 20 },
      { header: "Address", key: "Address", width: 25 },
      { header: "Duration (min)", key: "Duration", width: 15 },
      { header: "Status", key: "Status", width: 15 },
      { header: "Description", key: "Description", width: 30 },
    ];

    attendanceList.forEach((record) => {
      worksheet.addRow({
        ...record,
        Date: record.Date.toISOString().split("T")[0],
        InTime: record.InTime.toTimeString().split(" ")[0],
        OutTime: record.OutTime
          ? record.OutTime.toTimeString().split(" ")[0]
          : "-",
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=attendance-export.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error("Export error:", err);
    res
      .status(500)
      .json({ status: "ERROR", message: "Failed to export attendance" });
  }
};
