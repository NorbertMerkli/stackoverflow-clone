"use client";

import { signIn } from "next-auth/react";

import { GitHubLogo } from "./vectors/logos/github";
import { GoogleLogo } from "./vectors/logos/google";
import { useCallbackURL } from "../lib/routing";

export function SigninWithProviderPanel() {
    const callbackUrl = useCallbackURL();

    return (
        <section className="grid grid-cols-2 grid-rows-1 gap-4">
            <button
                className="button-outlined-light"
                onClick={() => signIn("google", { callbackUrl })}
            >
                <GoogleLogo />
                Google
            </button>
            <button
                className="button-outlined-light"
                onClick={() => signIn("github", { callbackUrl })}
            >
                <GitHubLogo />
                GitHub
            </button>
        </section>
    );
}
