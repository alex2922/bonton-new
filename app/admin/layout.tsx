"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineHome, HiOutlineDocumentText, HiOutlineUserGroup, HiOutlineBriefcase } from "react-icons/hi2";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen] = useState(false);

  const navData = [
    { name: "Dashboard", link: "/admin/dashboard", icon: <HiOutlineHome /> },
    { name: "Blogs", link: "/admin/blogs", icon: <HiOutlineDocumentText /> },
    { name: "Contacts", link: "/admin/contacts", icon: <HiOutlineUserGroup /> },
    { name: "Job Applications", link: "/admin/job-applications", icon: <HiOutlineBriefcase /> },
  ];

  return (

    <div className="bg-[var(--accent3)] flex w-[100%] ">
      <div className="w-64 h-screen bg-[var(--white)]/5 flex flex-col gap-4 border-r border-white/20 ">

      <div className="w-full h-16 border-b border-white/20 flex items-center justify-between px-4">
        <Image src="/logo.webp" alt="logo" width={140} height={100} />
      </div>
      
      <div className="px-4 flex flex-col gap-4">
      {navData.map((item, index) => (
        <Link key={index} href={item.link} className="flex items-center">
          {item.icon}
          {isOpen ? null : item.name}
        </Link>
      ))}
      </div>
      
      </div>

      <div className={` w-[100%] h-screen`}>{children}</div>
    </div>

  );
}
