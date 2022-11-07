import { NavbarLogo } from "./navbar-logo";

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white p-4 shadow-lg">
            <NavbarLogo />
        </header>
    );
}
