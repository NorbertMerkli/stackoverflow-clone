import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-row items-center p-4">
            <Image alt="logo" src={"/logo.png"} width="28" height="28" />
            <h1 className="text-3xl font-logo ml-2">
                stack<span className="font-bold">overflow</span>
            </h1>
            <span className="text-base font-bold bg-yellow rounded p-1 text-white ml-2">
                clone
            </span>
        </div>
    );
}
