import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";
import { dbMain } from "../prisma/client";
import { Record } from "../../prisma/generated/client-main";

export const login = async (req: Request, res: Response): Promise<void> => {
  const { identifier, password, remember } = req.body;
  const now = new Date();
  const utc7Date = new Date(now.getTime() + 7 * 60 * 60 * 1000);

  const user = await dbMain.users.findFirst({
    where: {
      OR: [{ Username: identifier }, { Email: identifier }],
      Record: Record.Active,
    },
  });
  if (!user) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }

  const valid = await bcrypt.compare(password, user.Password);
  if (!valid) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }
  await dbMain.users.update({
    where: { Id: user.Id },
    data: { LastLogin: utc7Date },
  });

  const token = generateToken({ id: user.Id, role: user.RoleId });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // set ke true di production
    sameSite: "lax",
    ...(remember && {
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 hari kalau remember
    }),
  });

  res.json({
    message: "Login success",
    user: { id: user.Id, username: user.Username, role: user.RoleId },
  });
};
