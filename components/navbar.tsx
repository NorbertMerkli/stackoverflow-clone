import Link from "next/link";

import { isAuthorized } from "@lib/auth";
import { AppLogo } from "@components/app-logo";

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 shadow-lg">
            <AppLogo />
            {isAuthorized() ? (
                <span>SignOutButton</span>
            ) : (
                <Link href="/auth/signin">SignIn</Link>
            )}
        </header>
    );
}
