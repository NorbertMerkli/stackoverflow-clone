import { useEffect, useRef } from "react";

export function useCallbackURL(): string {
    const callbackUrl = useRef("");

    useEffect(() => {
        if (!callbackUrl.current)
            callbackUrl.current = document.referrer.includes(
                document.location.origin
            )
                ? document.referrer
                : document.location.origin;
    }, []);

    return callbackUrl.current;
}
