import { User } from "@prisma/client";
import { User as FederatedUser } from "next-auth/core/types";

import db from "@lib/db";

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

export async function getUserByEmail(email: string): Promise<User | null> {
    return await db.user.findUnique({ where: { email: email } });
}

// UPDATE

// DELETE
