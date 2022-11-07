import Link from "next/link";
import { isAuthorized } from "../lib/auth";
import { NavbarLogo } from "./navbar-logo";
import { SignOutButton } from "./signout-button";

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center bg-white p-4 shadow-lg">
            <NavbarLogo />
            {isAuthorized() ? (
                <SignOutButton />
            ) : (
                <Link href="/auth/signin">SignIn</Link>
            )}
        </header>
    );
}
