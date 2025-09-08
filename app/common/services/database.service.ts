import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const initDB = async () => {
  return prisma;
};
