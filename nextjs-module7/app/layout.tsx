
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "My First Next.js App",
  description: "Learning Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
