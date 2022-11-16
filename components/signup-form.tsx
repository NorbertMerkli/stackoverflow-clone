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
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export function SignupForm() {
    const router = useRouter();

    const nameFieldRef = useRef<HTMLInputElement>(null);
    const emailFieldRef = useRef<HTMLInputElement>(null);
    const passwordFieldRef = useRef<HTMLInputElement>(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const togglePasswordVisibility = useCallback(
        () => setPasswordVisibility((visibilityState) => !visibilityState),
        []
    );

    const updateName = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value),
        []
    );

    const updateEmail = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value),
        []
    );

    const updatePassword = useCallback(
        (event: ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value),
        []
    );

    async function signupWithCredentials(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const response = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
            const isSignedUp = await response.json();

            if (isSignedUp) {
                router.push("/auth/signin");
            } else {
                setErrorMessage("Email is already taken");
            }
        }
    }

    const nameField = useMemo(
        () => (
            <InputField
                elementRef={nameFieldRef}
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                changeHandler={updateName}
            />
        ),
        [name, updateName]
    );

    const emailField = useMemo(
        () => (
            <InputField
                elementRef={emailFieldRef}
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                className="mt-4"
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
        <form onSubmit={signupWithCredentials}>
            <p className="px-8 my-8 text-center text-dark">
                {errorMessage ? (
                    <span className="text-red-500 font-bold">
                        {errorMessage}
                    </span>
                ) : (
                    "Enter your details to create an account"
                )}
            </p>
            {nameField}
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
            value="Sign up"
        />
    );
}
