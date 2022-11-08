export function NavbarLogo() {
    return (
        <div className="flex flex-row items-center">
            <Logo />
            <h1 className="text-2xl font-logo ml-2">
                stack<span className="font-bold">overflow</span>
                <span className="text-disabled italic">clone</span>
            </h1>
        </div>
    );
}

function Logo() {
    return (
        <svg
            width="21"
            height="24"
            viewBox="0 0 21 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_1_2)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0323 15.4839H19.1613V24H0V15.4839H2.12903V21.871H17.0323V15.4839Z"
                    fill="#BBBBBB"
                />
                <path
                    d="M4.44926 14.851L14.9057 17.0487L15.3453 14.9584L4.88881 12.7597L4.44926 14.851ZM5.83294 9.84406L15.5193 14.3553L16.4216 12.4181L6.73507 7.90683L5.83294 9.84406ZM8.5132 5.09186L16.7251 11.9301L18.0927 10.2879L9.88081 3.4498L8.5132 5.09186ZM13.8139 0.0371552L12.0991 1.31264L18.4761 9.88683L20.1909 8.61154L13.8139 0.0371552ZM4.25806 19.7419H14.9032V17.6129H4.25806V19.7419Z"
                    fill="#F58025"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_2">
                    <rect width="20.3226" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
