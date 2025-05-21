import { promises } from "dns";
import { GenerateSignature } from "../helper/generateSignature";
import { Request, Response } from "express";
import { createResponse } from "../helper/responseCode";

export const AddSignatureUserAccount = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { Username, Email, Password, RoleId } = req.body;
    const body = {
      Username,
      Email,
      Password,
      RoleId,
    };
    const signature = await GenerateSignature(body);

    res.status(200).json({ signature });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const GetSignature = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const body = req.body || {};
    const signature = await GenerateSignature(body);

    res.status(200).json({ signature });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const AddSignatureUserDetail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
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

    const file = req.file;
    if (!file) {
      res
        .status(400)
        .json(createResponse("USER", "ERROR", "Photo is required", null));
      return;
    }

    const photoPath = `uploads/${file.filename}`;
    const finalJoinDate = JoinDate ? new Date(JoinDate) : new Date();

    const body = {
      Username,
      Email,
      RoleId,
      KTPNo,
      Name,
      Departement,
      Divisi,
      Address,
      DOB: new Date(DOB),
      NoTlp,
      LocationCode,
      Gender,
      StatusKaryawan,
      JoinDate: finalJoinDate,
      ProfilePath: photoPath,
    };
    const signature = await GenerateSignature(body);

    res.status(200).json({ signature });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
