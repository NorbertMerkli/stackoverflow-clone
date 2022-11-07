import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

export function isAuthorized(): boolean {
    return cookies().get("next-auth.session-token") !== undefined;
}

export async function getUserData(): Promise<{
    name: string;
    email: string;
    picture: string;
} | null> {
    let userData = null;
    const cookie = cookies().get("next-auth.session-token");

    if (cookie) {
        const token = cookie.value;
        const secret = process.env.NEXTAUTH_SECRET as string;

        const data = await decode({ token, secret });

        if (data) {
            userData = {
                name: data.name as string,
                email: data.email as string,
                picture: data.picture as string,
            };
        }
    }

    return userData;
}
