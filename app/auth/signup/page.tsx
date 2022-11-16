import Link from "next/link";

import { AppLogo } from "@components/app-logo";
import { SignupForm } from "@components/signup-form";
import { Underline } from "@components/vectors/underline";

export default function Signin() {
    return (
        <div className="center h-screen">
            <main className="sm:shape sm:shadow-lg flex flex-col justify-center w-full sm:w-[500px] lg:max-w-[50%] h-full sm:h-auto sm:py-16 px-8 bg-white">
                <AppLogo />
                <SignupForm />
                <p className="mt-8 text-center text-grey">
                    Do you have an account?
                    <Link
                        className="group relative ml-2 font-bold text-dark"
                        href="/auth/signin"
                    >
                        Sign in with it
                        <Underline />
                    </Link>
                </p>
            </main>
        </div>
    );
}
