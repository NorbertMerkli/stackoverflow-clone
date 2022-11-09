import "./globals.css";

import { Navbar } from "@components/navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body className="bg-light pt-20">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
