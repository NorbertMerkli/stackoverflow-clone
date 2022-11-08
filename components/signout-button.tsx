"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
        >
            Sign out
        </button>
    );
}