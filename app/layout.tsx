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
        <body className="min-w-[400px]">{children}</body>
        </html>
    );
}
