import Link from "next/link";

import { AppLogo } from "@components/app-logo";
import { Underline } from "@components/vectors/underline";
import { SigninWithProviderPanel } from "@components/signin-with-provider";
import { SigninWithCredentialsForm } from "@components/signin-form";

export default function Signin() {
    return (
        <div className="center h-screen">
            <main className="sm:shape sm:shadow-lg flex flex-col justify-center w-full sm:w-auto h-full sm:h-auto sm:py-16 px-8 xl:px-16 bg-white">
                <AppLogo />
                <p className="px-8 my-8 text-center text-grey">
                    Enter your details to get sign in to your account
                </p>
                <SigninWithCredentialsForm />
                <div className="center my-8">
                    <div className="divider-h w-8 mr-4"></div>
                    <p className="text-grey">or continue with</p>
                    <div className="divider-h w-8 ml-4"></div>
                </div>
                <SigninWithProviderPanel />
                <p className="mt-8 text-center text-grey">
                    Don&apos;t have an account?
                    <Link
                        className="group relative ml-2 font-bold text-dark"
                        href=""
                    >
                        Sign up for free
                        <Underline />
                    </Link>
                </p>
            </main>
        </div>
    );
}
