import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BestBefore — Nigeria's Near Due-Date Grocery Marketplace",
  description:
    "BestBefore connects supermarkets and retailers with shoppers to recover value from near due-date, defective packaging, and oversupply inventory. Turn loss into revenue.",
  keywords: [
    "near due-date groceries Nigeria",
    "food waste reduction Nigeria",
    "supermarket clearance deals Lagos",
    "cheap groceries Lagos Abuja",
    "BestBefore waitlist",
    "Nigerian food marketplace",
  ],
  openGraph: {
    title: "BestBefore — Near Due-Date Grocery Marketplace Nigeria",
    description: "Earn from your near due-date groceries. Don't throw away profit. Nigeria's first marketplace for recovering value from near due-date inventory.",
    type: "website",
    siteName: "BestBefore",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
