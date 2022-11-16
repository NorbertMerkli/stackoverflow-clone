import Link from "next/link";
import { Stackoverflow } from "./vectors/logos/stackoverflow";

export function AppLogo() {
    return (
        <Link
            href="/"
            className="flex flex-col min-[370px]:flex-row justify-center items-center"
        >
            <Stackoverflow />
            <h1 className="mt-4 min-[370px]:mt-0 text-3xl font-logo text-dark ml-2">
                stack<span className="font-bold">overflow</span>
                <span className="text-grey italic">clone</span>
            </h1>
        </Link>
    );
}
