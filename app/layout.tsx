import { Ubuntu } from "next/font/google";

import Navbar from "./components/Navbar";
import "../public/globals.css";
import Footer from "./components/Footer";
import AuthContext from "./context/context";
import prisma from "@/lib/prisma";
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const galerija = await prisma.galerija.findMany({
    select: {
      name: true,
    },
  });
  const rucice = await prisma.rucice.findMany({
    select: {
      name: true,
      slug: true,
    },
  });
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <AuthContext>
          <Navbar rucice={rucice} galerija={galerija} />
          {children}
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
