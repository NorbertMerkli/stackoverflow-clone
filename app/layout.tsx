import { Navbar } from "../components/navbar";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body className="bg-light">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
