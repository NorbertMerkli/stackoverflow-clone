import { AppLogo } from "@components/app-logo";
import { SignupForm } from "@components/signup-form";

export default function Signin() {
    return (
        <div className="center h-screen">
            <main className="sm:shape sm:shadow-lg flex flex-col justify-center w-full sm:w-auto h-full sm:h-auto sm:py-16 px-8 xl:px-16 bg-white">
                <AppLogo />
                <p className="px-8 my-8 text-center text-dark">
                    Enter your details to create a new account
                </p>
                <SignupForm />
            </main>
        </div>
    );
}