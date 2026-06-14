import { PrismaClient } from "../generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const globalForPrisma = global;

export const db =
  globalForPrisma.prisma ||
  (function () {
    const adapter = new PrismaLibSql({
      url: process.env.TURSO_DATABASE_URL || "libsql://nayepankh-akash062.aws-ap-south-1.turso.io",
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
    return new PrismaClient({ adapter });
  })();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
