import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Sidebar } from "./_components/sidebar";

import LogoTransparent from "@/public/logo-transparent.svg";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./_components/nav-item";
import { HandCoinsIcon, TargetIcon } from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Task Remember",
  description: "Your Ideas, Your Space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen min-h-screen w-screen overflow-y-auto antialiased`}
      >
        <header className="flex w-full items-center justify-between border-b border-gray-200 px-20 py-3 shadow-sm">
          <Link href={"/"}>
            <Image width={224} src={LogoTransparent} alt="Logo" />{" "}
          </Link>

          <div className="flex items-center gap-4">
            <NavItem href={"/boards"} label="Boards" icon={TargetIcon} />
            <NavItem href={"/pricing"} label="Pricing" icon={HandCoinsIcon} />
          </div>

          <div className="flex w-56 items-center justify-end gap-4">
            <Button>Login</Button>
            <Button variant={"secondary"}>Sign up</Button>
          </div>
        </header>

        <div className="w-full px-20">{children}</div>
      </body>
    </html>
  );
}
