import { PrismaClient as PrismaMain } from "../../prisma/generated/client-main";
import { PrismaClient as PrismaSecondary } from "../../prisma/generated/client-secondary";

export const dbMain = new PrismaMain();
export const dbSecondary = new PrismaSecondary();
