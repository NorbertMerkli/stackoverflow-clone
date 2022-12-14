"use client";

import {
    ChangeEvent,
    ChangeEventHandler,
    FormEvent,
    ReactNode,
    RefObject,
    useCallback,
    useMemo,
    useRef,
    useState,
} from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import { useCallbackURL } from "../lib/routing";

export function SigninWithCredentialsForm() {
    const router = useRouter();
    const callbackUrl = useCallbackURL();

    const emailFieldRef = useRef<HTMLInputElement>(null);
    const passwordFieldRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const togglePasswordVisibility = useCallback(() => {
        setPasswordVisibility((visibilityState) => !visibilityState);
    }, []);

    const updateEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }, []);

    const updatePassword = useCallback(
        (event: ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value),
        []
    );

    const signinWithCredentials = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const authentication = await signIn("credentials", {
                email: emailFieldRef.current?.value,
                password: passwordFieldRef.current?.value,
                redirect: false,
            });

            if (authentication?.ok) {
                router.push(callbackUrl);
            } else {
                setErrorMessage("Invalid email or password");
            }
        },
        [callbackUrl, router]
    );

    const emailField = useMemo(
        () => (
            <InputField
                elementRef={emailFieldRef}
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                changeHandler={updateEmail}
            />
        ),
        [email, updateEmail]
    );

    const passwordField = useMemo(
        () => (
            <InputField
                elementRef={passwordFieldRef}
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                value={password}
                placeholder="Password"
                className="mt-4 mb-8"
                changeHandler={updatePassword}
            >
                {isPasswordVisible ? (
                    <EyeIcon
                        className="icon"
                        onClick={togglePasswordVisibility}
                    />
                ) : (
                    <EyeSlashIcon
                        className="icon"
                        onClick={togglePasswordVisibility}
                    />
                )}
            </InputField>
        ),
        [password, updatePassword, isPasswordVisible, togglePasswordVisibility]
    );

    const submitButton = useMemo(SubmitButton, []);

    return (
        <form onSubmit={signinWithCredentials}>
            <p className="px-8 my-8 text-center text-dark">
                {errorMessage ? (
                    <span className="text-red-500 font-bold">
                        {errorMessage}
                    </span>
                ) : (
                    "Enter your details to get sign in to your account"
                )}
            </p>
            {emailField}
            {passwordField}
            {submitButton}
        </form>
    );
}

type InputFieldProps = {
    elementRef: RefObject<HTMLInputElement>;
    type: string;
    name: string;
    value: string;
    placeholder: string;
    className?: string;
    children?: ReactNode;
    changeHandler: ChangeEventHandler<HTMLInputElement>;
};

function InputField(props: InputFieldProps) {
    return (
        <div
            className={
                "input-wrapper" + (props.className ? " " + props.className : "")
            }
        >
            <input
                className="text-input w-full"
                required
                ref={props.elementRef}
                type={props.type}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.changeHandler}
            />
            {props.value && props.children}
        </div>
    );
}

function SubmitButton() {
    return (
        <input
            className="button-primary w-full"
            type="submit"
            value="Sign in"
        />
    );
}
