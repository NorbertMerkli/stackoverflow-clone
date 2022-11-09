"use client";

import { signIn, signOut } from "next-auth/react";

export function SignInWithGoogle() {
    return <SignInButton provider="google" label="Google" className="mb-4" />;
}

export function SignInWithGitHub() {
    return <SignInButton provider="github" label="GitHub" />;
}

function SignInButton({
    provider,
    label,
    className,
}: {
    provider: string;
    label: string;
    className?: string;
}) {
    return (
        <button
            className={
                "w-full py-2 text-center border-2 border-black rounded-lg" +
                (className ? " " + className : "")
            }
            onClick={() =>
                signIn(provider, {
                    callbackUrl: "http://localhost:3000",
                })
            }
        >
            Sign in with {label}
        </button>
    );
}

export function SignOutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
        >
            Sign out
        </button>
    );
}
