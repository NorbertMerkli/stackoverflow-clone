import { signIn } from "next-auth/react";

export default function SignIn() {
    return (
        <div>
            <main>
                <button
                    onClick={() =>
                        signIn("google", {
                            callbackUrl: "http://localhost:3000",
                        })
                    }
                >
                    Sign in with Google
                </button>
                <button
                    onClick={() =>
                        signIn("github", {
                            callbackUrl: "http://localhost:3000",
                        })
                    }
                >
                    Sign in with GitHub
                </button>
            </main>
        </div>
    );
}
