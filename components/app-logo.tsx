import { Stackoverflow } from "./vectors/logos/stackoverflow";

export function AppLogo() {
    return (
        <div className="flex flex-row justify-center items-center">
            <Stackoverflow />
            <h1 className="text-3xl font-logo text-dark ml-2">
                stack<span className="font-bold">overflow</span>
                <span className="text-grey italic">clone</span>
            </h1>
        </div>
    );
}
