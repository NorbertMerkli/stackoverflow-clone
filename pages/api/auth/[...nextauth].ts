import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import argon2 from "argon2";

import db from "@db/connection";
import { getUserByEmail } from "@db/query/user";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            // According to the official documentation,
            // the content of the 'credentials' field is mainly used to generate a form on the default sign-in page.
            // Currently, I'm using a self-made sign-in page so these values are irrelevant in my case.
            // That's why they are empty.
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (credentials) {
                    const user = await getUserByEmail(credentials.email);

                    if (
                        user &&
                        user.password &&
                        (await argon2.verify(
                            user.password,
                            credentials.password
                        ))
                    )
                        return user;
                }

                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
    ],
    pages: {
        signIn: "/auth/signin",
        // signOut: "/auth/signout",
        // error: "/auth/error", // Error code passed in query string as ?error=
        // verifyRequest: "/auth/verify-request", // (used for check email message)
        // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
    },
};

export default NextAuth(authOptions);
