import "@styles/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body className="bg-gradient-to-tr from-light via-light to-primary/10">
                {children}
            </body>
        </html>
    );
}
