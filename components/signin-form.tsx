"use client";

import {
    ChangeEventHandler,
    ReactNode,
    RefObject,
    useCallback,
    useMemo,
    useRef,
    useState,
} from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export function SigninWithCredentialsForm() {
    const emailFieldRef = useRef<HTMLInputElement>(null);
    const passwordFieldRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = useCallback(() => {
        setPasswordVisibility((visibilityState) => !visibilityState);
    }, []);

    const emailField = useMemo(
        () => (
            <InputField
                elementRef={emailFieldRef}
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                changeHandler={(event) => setEmail(event.target.value)}
            />
        ),
        [email]
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
                changeHandler={(event) => setPassword(event.target.value)}
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
        [password, isPasswordVisible, togglePasswordVisibility]
    );

    const submitButton = useMemo(SubmitButton, []);

    return (
        <form>
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
