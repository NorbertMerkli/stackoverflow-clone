export function asyncComponentWrapper<T, R>(
    fn: (props: R) => Promise<T>
): (props: R) => T {
    return fn as (props: R) => T;
}
