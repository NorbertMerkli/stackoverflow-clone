"use client";

import { signOut } from "next-auth/react";

export function SignoutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: document.location.pathname })}
        >
            SignOut
        </button>
    );
}
