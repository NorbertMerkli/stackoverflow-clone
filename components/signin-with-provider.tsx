"use client";

import { signIn } from "next-auth/react";
import { useEffect, useRef } from "react";
import { GitHubLogo } from "./vectors/logos/github";
import { GoogleLogo } from "./vectors/logos/google";

export function SigninWithProviderPanel({ referrer }: { referrer: string }) {
    // Despite my use of the "use client" directive,
    // the framework shows a ReferenceError caused by the 'document' object unless I wrap it in a 'useEffect' hook.
    //
    // Complaint: If the file is marked with the "use client" directive,
    // there should be no errors or warnings caused by the usage of browser APIs.
    const callbackUrl = useRef("");

    useEffect(() => {
        callbackUrl.current = referrer.includes(document.location.origin)
            ? referrer
            : document.location.origin;
    }, [referrer]);

    return (
        <section className="grid grid-cols-2 grid-rows-1 gap-4">
            <button
                className="button-outlined-light"
                onClick={() =>
                    signIn("google", { callbackUrl: callbackUrl.current })
                }
            >
                <GoogleLogo />
                Google
            </button>
            <button
                className="button-outlined-light"
                onClick={() =>
                    signIn("github", { callbackUrl: callbackUrl.current })
                }
            >
                <GitHubLogo />
                GitHub
            </button>
        </section>
    );
}
