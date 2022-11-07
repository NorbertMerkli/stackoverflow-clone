import { User } from "@prisma/client";
import db from "./db";

export async function getAllUsers(): Promise<User[]> {
    return await db.user.findMany();
}
