import type {Metadata} from "next";
import "./globals.css";
import '@fontsource/poppins';
import "@fontsource/poppins/700.css";
import '@fontsource/russo-one';


export const metadata: Metadata = {
    title: "Continental Racing Team & Racing Academy",
    description: "Motorsports hub for drivers of all skill levels in the Middle East. Professional coaches, go-karting and kart racing training, track days, touring & GT competitions - push your racing career to the next level!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <body className="min-w-[400px]">{children}</body>
        </html>
    );
}
