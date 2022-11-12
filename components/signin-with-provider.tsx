"use client";

import { signIn } from "next-auth/react";
import { useEffect, useRef } from "react";
import { GitHubLogo } from "./vectors/logos/github";
import { GoogleLogo } from "./vectors/logos/google";

export function SigninWithProviderPanel() {
    // Despite my use of the "use client" directive,
    // the framework shows a ReferenceError caused by the 'document' object unless I wrap it in a 'useEffect' hook.
    //
    // Complaint: If the file is marked with the "use client" directive,
    // there should be no errors or warnings caused by the usage of browser APIs.
    const callbackUrl = useRef("");

    useEffect(() => {
        callbackUrl.current = document.referrer.includes(
            document.location.origin
        )
            ? document.referrer
            : document.location.origin;
    }, []);

    return (
        <section className="grid grid-cols-2 grid-rows-1 gap-4">
            <SigninWithGoogle callbackUrl={callbackUrl.current} />
            <SigninWithGitHub callbackUrl={callbackUrl.current} />
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
