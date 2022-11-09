import { SignInWithGitHub, SignInWithGoogle } from "@components/auth-buttons";

export default function SignIn() {
    return (
        <main className="w-3/6 mx-auto p-4 bg-white shadow-lg rounded-lg text-center">
            <SignInWithGoogle />
            <SignInWithGitHub />
        </main>
    );
}
