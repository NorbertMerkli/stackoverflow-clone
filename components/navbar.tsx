import { AppLogo } from "@components/app-logo";
import { SignoutButton } from "./signout-button";
import { unstable_getServerSession } from "next-auth";
import { asyncComponentWrapper } from "../lib/async";

async function AsyncNavbar() {
    const session = await unstable_getServerSession();

    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white shadow-lg">
            <AppLogo />
            {session ? <SignoutButton /> : <a href="/auth/signin">SignIn</a>}
        </header>
    );
}

export const Navbar = asyncComponentWrapper(AsyncNavbar);
