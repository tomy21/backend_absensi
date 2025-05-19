import { Request, Response, NextFunction, RequestHandler } from "express";

// asyncHandler menerima fungsi async dengan signature Express middleware,
// lalu mengembalikan middleware Express yang menangani error otomatis.
export const asyncHandler =
  (fn: RequestHandler): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);
