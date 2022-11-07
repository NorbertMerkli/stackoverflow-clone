import { PrismaClient } from "@prisma/client";

type Global = typeof globalThis & { db: PrismaClient | undefined };

let db: PrismaClient;

if (process.env.NODE_ENV === "production") {
    db = new PrismaClient();
} else {
    db = (global as Global).db ?? new PrismaClient();
}

export default db;
