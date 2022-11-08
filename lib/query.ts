import { User } from "@prisma/client";
import { User as FederatedUser } from "next-auth/core/types";
import db from "./db";

// CREATE

export async function createUser(user: FederatedUser): Promise<User | never> {
    return (
        (await getUserById(user.id)) || (await db.user.create({ data: user }))
    );
}

// REED

export async function getUserById(id: string): Promise<User | null> {
    return await db.user.findUnique({ where: { id: id } });
}

// UPDATE

// DELETE
