import { TokeUserPayload } from "../../utils/jwt"; // sesuaikan path

declare global {
  namespace Express {
    interface Request {
      TokeUserPayload?: TokeUserPayload;
    }
  }
}
