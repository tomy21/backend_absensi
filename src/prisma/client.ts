import { PrismaClient as PrismaMain } from "../../prisma/generated/client-main";
import { PrismaClient as PrismaSecondary } from "../../prisma/generated/client-secondary";
import { PrismaClient as PrismaThird } from "../../prisma/generated/client-third";

export const dbMain = new PrismaMain();
export const dbSecondary = new PrismaSecondary();
export const dbThird = new PrismaThird();
