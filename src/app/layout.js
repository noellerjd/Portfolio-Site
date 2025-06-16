import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jbm = JetBrains_Mono({
  variable: "--font-jbm",
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeNoeller",
  description: "Justin Noeller's Website Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${jbm.variable}`}>{children}</body>
    </html>
  );
}
