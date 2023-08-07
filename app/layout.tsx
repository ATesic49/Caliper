import { Ubuntu } from "next/font/google";

import Navbar from "./components/Navbar";
import "../public/globals.css";
export const metadata = {
  title: "Caliper - Enterijeri | Nameštaj po meri | Dizajnerske ručice",
  description:
    "Od koncept dizajna do realizacije! Enterijeri | Stambeni | Poslovni | Nameštaj po meri Dizajnerske ručice i kuke renomiranog brenda Viefe",
};

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
