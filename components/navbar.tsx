import { cookies } from "next/headers";

import { AppLogo } from "@components/app-logo";
import { SignoutButton } from "./signout-button";

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 shadow-lg">
            <AppLogo />
            {cookies().get("next-auth.session-token") ? (
                <SignoutButton />
            ) : (
                <a href="/auth/signin">SignIn</a>
            )}
        </header>
    );
}
