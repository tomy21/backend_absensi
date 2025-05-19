import { promises } from "dns";
import { GenerateSignature } from "../helper/generateSignature";
import { Request, Response } from "express";

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
    const body = "{}";
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
      Name,
      NIK,
      Departement,
      Divisi,
      Address,
      NoTlp,
      LocationCode,
      StatusKaryawan,
    } = req.body;
    const body = {
      Username,
      Email,
      RoleId,
      Name,
      NIK,
      Departement,
      Divisi,
      Address,
      NoTlp,
      LocationCode,
      StatusKaryawan,
    };
    const signature = await GenerateSignature(body);

    res.status(200).json({ signature });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
