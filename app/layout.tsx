// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import AOSWrapper from "@/components/AOSWrapper";
import { DM_Sans, Pacifico } from "next/font/google";
import ConditionalLayout from "@/components/ConitionalLayout";


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  display: "swap",
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bonton Cables",
  description: "Bonton Cables India Pvt. Ltd.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <AOSWrapper>
          <ConditionalLayout>{children}</ConditionalLayout>
        </AOSWrapper>
      </body>
    </html>
  );
}
