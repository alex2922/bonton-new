// components/ConditionalLayout.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

type Props = {
  children: React.ReactNode;
};

export default function ConditionalLayout({ children }: Props) {
  const pathname = usePathname() || "/";
  // Hide header/footer for /admin and any nested admin routes like /admin/*:
  const hideLayout = pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
      {!hideLayout && <ScrollToTop />}
      {!hideLayout && <WhatsAppButton />}
    </>
  );
}
