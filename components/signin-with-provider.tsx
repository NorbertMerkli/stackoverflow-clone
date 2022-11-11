"use client";

import { signIn } from "next-auth/react";
import { GitHubLogo } from "./vectors/logos/github";
import { GoogleLogo } from "./vectors/logos/google";

export function SigninWithProviderPanel() {
    const callbackUrl = document.referrer.includes(document.location.origin)
        ? document.referrer
        : document.location.origin;

    return (
        <section className="grid grid-cols-2 grid-rows-1 gap-4">
            <SigninWithGoogle callbackUrl={callbackUrl} />
            <SigninWithGitHub callbackUrl={callbackUrl} />
        </section>
    );
}

function SigninWithGoogle({ callbackUrl }: { callbackUrl: string }) {
    return (
        <button
            className="button-outlined-light"
            onClick={() => signIn("google", { callbackUrl })}
        >
            <GoogleLogo />
            Google
        </button>
    );
}

function SigninWithGitHub({ callbackUrl }: { callbackUrl: string }) {
    return (
        <button
            className="button-outlined-light"
            onClick={() => signIn("github", { callbackUrl })}
        >
            <GitHubLogo />
            GitHub
        </button>
    );
}
