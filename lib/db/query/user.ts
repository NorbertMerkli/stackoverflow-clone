import db from "@db/connection";
import { User } from "@prisma/client";

export async function getUserById(id: string): Promise<User | null> {
    return await db.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: string): Promise<User | null> {
    return await db.user.findFirst({ where: { email } });
}

export async function createUser(
    name: string,
    email: string,
    password: string,
    image?: string
): Promise<User | null> {
    const existingUser =
        (await getUserByEmail(email)) || (await getUserById(email));

    if (existingUser) return null;

    const newUser = await db.user.create({
        data: { name, email, password, image },
    });

    return newUser;
}
