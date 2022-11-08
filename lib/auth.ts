import { cookies } from "next/headers";
import { decode, JWT } from "next-auth/jwt";

export function isAuthorized(): boolean {
    return cookies().get("next-auth.session-token") !== undefined;
}

export async function getUserData(): Promise<JWT | null> {
    const cookie = cookies().get("next-auth.session-token");

    if (cookie) {
        const token = cookie.value;
        const secret = process.env.NEXTAUTH_SECRET as string;

        const data = await decode({ token, secret });

        if (data) return data;
    }

    return null;
}
