import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import roleRoutes from "./routes/roleRoutes";
import detailUserRoute from "./routes/detailUserRoutes";
import locationRoutes from "./routes/locationRoutes";
import attendanceRoute from "./routes/attendanceRoute";
import signatureRoute from "./routes/signatureRoute";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/v1/api/auth", authRoutes);
app.use("/v1/api/users", userRoutes);
app.use("/v1/api/roles", roleRoutes);
app.use("/v1/api/detail-users", detailUserRoute);
app.use("/v1/api/location", locationRoutes);
app.use("/v1/api/attendance", attendanceRoute);
app.use("/v1/api/signature", signatureRoute);

export default app;
