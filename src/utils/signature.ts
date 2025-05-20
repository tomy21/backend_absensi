import crypto from "crypto";

const SHARED_SECRET = process.env.SIGNATURE_SECRET!;

export const generateHMAC = (data: string, timestamp: string) => {
  return crypto
    .createHmac("sha256", SHARED_SECRET)
    .update(data + timestamp)
    .digest("hex");
};

export const verifyHMAC = (
  signature: string,
  data: string,
  timestamp: string
) => {
  const stringifiedData =
    typeof data === "string" ? data : JSON.stringify(data);
  const expected = generateHMAC(stringifiedData, timestamp);
  return expected === signature;
};
