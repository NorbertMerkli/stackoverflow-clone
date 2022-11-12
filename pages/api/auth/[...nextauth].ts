import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { createUser, getUserByEmail } from "@lib/query";

export const authOptions: NextAuthOptions = {
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
                        (await bcrypt.compare(
                            credentials.password,
                            user.password
                        ))
                    ) {
                        return user;
                    }
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
    events: {
        async signIn(message) {
            if (
                message.account?.provider === "google" ||
                message.account?.provider === "github"
            ) {
                await createUser(message.user);
            }
        },
    },
};

export default NextAuth(authOptions);
