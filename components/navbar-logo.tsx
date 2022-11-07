import Image from "next/image";

export function NavbarLogo() {
    return (
        <div className="flex flex-row items-center">
            <Image alt="logo" src={"/logo.png"} width="24" height="24" />
            <h1 className="text-2xl font-logo ml-2">
                stack<span className="font-bold">overflow</span>
                <span className="text-disabled italic">clone</span>
            </h1>
        </div>
    );
}
