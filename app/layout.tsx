import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Laundry Rent",
  description: "Rent a washer & dryer without the upfront cost. $45/month, delivery, installation, and maintenance included.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
