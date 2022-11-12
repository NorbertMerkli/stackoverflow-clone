"use client";

import {
    ChangeEvent,
    ChangeEventHandler,
    FormEvent,
    ReactNode,
    RefObject,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";

export function SigninWithCredentialsForm({ referrer }: { referrer: string }) {
    // Despite my use of the "use client" directive,
    // the framework shows a ReferenceError caused by the 'document' object unless I wrap it in a 'useEffect' hook.
    //
    // Complaint: If the file is marked with the "use client" directive,
    // there should be no errors or warnings caused by the usage of browser APIs.
    const callbackUrl = useRef("");

    useEffect(() => {
        callbackUrl.current = referrer.includes(document.location.origin)
            ? referrer
            : document.location.origin;
    }, [referrer]);

    const emailFieldRef = useRef<HTMLInputElement>(null);
    const passwordFieldRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = useCallback(() => {
        setPasswordVisibility((visibilityState) => !visibilityState);
    }, []);

    const updateEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checkValidity());

        setEmail(event.target.value);
    }, []);

    const updatePassword = useCallback(
        (event: ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value),
        []
    );

    const signinWithCredentials = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            signIn("credentials", {
                email: emailFieldRef.current?.value,
                password: passwordFieldRef.current?.value,
                callbackUrl: callbackUrl.current,
            });
        },
        [callbackUrl]
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
