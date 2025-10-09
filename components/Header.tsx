"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaAngleDown } from "react-icons/fa6";


gsap.registerPlugin(useGSAP);

const Header = () => {
  const navData = [
    { title: "Home", link: "/" },
 
    {
      title: "Our Company",
      link: "/contact",
      submenu: [
        { name: "About Us", link: "/about" },
        { name: "Our Team", link: "/our-team" },
        { name: "Awards and Accolades", link: "/awards_and_accolades" },
        { name: "Sectors of Work", link: "/sectors_of_work" },
        {
          name: "Corporate Social Responsibility",
          link: "/corporate-social-responsibility",
        },
        { name: "Life at Bonton", link: "/life-at-bonton" },
        
        { name: "Bonton Blogs", link: "/blogs" },
        { name: "Plan For 2035 ", link: "/plan_for_2035" },
      ],
    },
    {
      title: "Our Products",
      link: "/products-category",
    },
    { title: "Career", link: "/career-opportunities" },
    { title: "Downloads", link: "/downloads" },

    { title: "Contacts", link: "/contact" },
  ];

  const [nav, setNav] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleNav = () => {
    setNav(!nav);
    setOpenSubmenu(null); // close submenu when menu closes
  };

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu((prev) => (prev === title ? null : title));
  };

  useGSAP(() => {
    if (!nav) return;
    const tl = gsap.timeline({ delay: 0.2 });

    tl.from(".nav-gsap-links", {
      opacity: 0,
      y: 500,
      duration: 0.5,
      stagger: 0.1,
      ease: "easeInOut",
    });
  }, [nav]);

  return (
    <>
      <div className="parent relative bg-white z-500 py-3 w-full ">
        <div className="container flex items-center justify-between px-4">
          <Link href="/">
            <Image src="/logo.webp" alt="logo" width={180} height={100} />
          </Link>

          <div className="flex items-center justify-center gap-4">
            <span
              onClick={toggleNav}
              className="text-3xl cursor-pointer h-[42px] aspect-square flex items-center justify-center border-1 rounded-full"
            >
              <HiOutlineMenuAlt1 />
            </span>

            <Link href={"/contact"} className="btn hidden md:block">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      {/* <HeaderProductsSlider /> */}

      <div
        className={`fixed top-0 ${
          nav ? "right-0" : "right-[-100%]"
        } h-[100dvh] w-full z-1000 bg-gradient-to-br from-[#121722]  via-emerald-800 to-[var(--accent2)] text-white trans flex parent `}
      >
        <div className="container relative">
          <div
            onClick={toggleNav}
            className="absolute top-6 right-3  text-5xl hover:rotate-145 trans cursor-pointer"
          >
            <IoMdClose />
          </div>

          <div className="flex flex-col  gap-8 lg:gap-14 justify-center h-full pl-4">
            {navData.map((item) => (
              <div key={item.title}>
                {item.submenu ? (
                  // Button for items with submenu
                  <button
                    className="nav-gsap-links !text-3xl font-bold text-hover text-white !hover:text-[var(--accent1)] flex items-center gap-4 w-full text-left"
                    onClick={() => toggleSubmenu(item.title)}
                  >
                    <p className="text-4xl lg:text-5xl">{item.title}</p>
                    <span className="text-xl text-[var(--accent1)]">
                      <FaAngleDown
                        className={`transition-transform duration-300 ${
                          openSubmenu === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                ) : (
                  // Link for items without submenu
                  <Link
                    href={item.link}
                    onClick={toggleNav}
                    className="nav-gsap-links !text-3xl font-bold text-hover text-white !hover:text-[var(--accent1)] flex items-center gap-4 w-full text-left"
                  >
                    <p className="text-4xl lg:text-5xl">{item.title}</p>
                  </Link>
                )}

                {/* Submenu Dropdown */}
                {item.submenu && openSubmenu === item.title && (
                  <div className="ml-6 mt-8 mb-4 flex flex-col gap-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.link}
                        onClick={toggleNav}
                        className="!text-lg text-hover text-white/50"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
