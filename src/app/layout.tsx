import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export const metadata: Metadata = {
    title: "Fullstack developer",
    description: "Seasoned Fullstack developer with more than 4 Years of Experience ",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};
const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${geist.variable}`}>
            <body>
                <Navbar />
                <TRPCReactProvider>{children}</TRPCReactProvider>
                <Footer />
            </body>
        </html>
    );
}
