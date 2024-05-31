import type {Metadata} from "next";
import "./globals.css";
import '@fontsource/montserrat';
import '@fontsource/russo-one';


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="min-w-[375px]">{children}</body>
        </html>
    );
}
