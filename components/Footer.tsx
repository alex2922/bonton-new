import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const navs = [
    {
      title: "Our Company",
      links: [
        { name: "About Us", link: "/about" },
        { name: "Our Clients", link: "/#client-success-stories" },
        { name: "Client Success Stories", link: "/#client-success-stories" },
        { name: "Application by Sector", link: "/sectors_of_work" },
        { name: "Awards & Accolades", link: "/awards_and_accolades" },
        {
          name: "Corporate Social Responsibility",
          link: "/corporate-social-responsibility",
        },
        { name: "Plan for 2035", link: "/plan_for_2035" },
        { name: "Our Team", link: "/our-team" },
        { name: "Blogs", link: "/blogs" },
        { name: "Privacy Policy", link: "/privacy-policy" },
      ],
    },
    {
      title: "Career",
      links: [
        { name: "Career Opportunities", link: "/career-opportunities" },
        { name: "Life at Bonton", link: "/life-at-bonton" },
      ],
    },
    {
      title: "Downloads",
      links: [{ name: "Downloads", link: "/downloads" }],
    },
    {
      title: "Contact Us",
      links: [
        { name: "Contact Us", link: "/contact" },
        {
          name: "marketing@bontoncablesindia.com",
          link: "mailto:marketing@bontoncablesindia.com",
        },
        {
          name: "deepak@bontoncablesindia.com",
          link: "mailto:deepak@bontoncablesindia.com",
        },
        { name: "+91 813 029 9001", link: "tel:+918130299001" },
        { name: "+91 956 078 0555", link: "tel:+919560780555" },
   

        {
          name: "Youtube",
 
          link: "https://youtube.com/@bontoncables-w9r?si=0jS_mpBmmP42ywJ1",
        },
        {
          name: "Facebook",
   
          link: "https://www.facebook.com/share/17W5GwJrgw/",
        },
        {
          name: "Instagram",

          link: "https://www.instagram.com/bontoncables_india?igsh=MWw2Z3Fid3dwaGtlZA==",
        },
        {
          name: "LinkedIn",

          link: "https://www.linkedin.com/company/bontoncablesindia/",
        },
      ],
    },
    {
      title: "Products",
      links: [
        {
          name: "Fire Survival Cables",
          link: "/products/fire-survival-cables",
        },
        { name: "Solar Cables", link: "/products/solar-cables" },
        { name: "Heavy Duty Cables", link: "/products/heavy-duty-cables" },
        { name: "Co-axial Cables", link: "/products/co-axial-cables" },
        { name: "LAN Cables", link: "/products/lan-cables" },
        { name: "Telecom Cables", link: "/products/telecom-cables" },
        { name: "Submersible Cables", link: "/products/submersible-cables" },
        { name: "Multicore Cables", link: "/products/multicore-cables" },
        { name: "Power Cables", link: "/products/power-cables" },
        { name: "Building Wires", link: "/products/building-wires" },
        { name: "Automotive Cables", link: "/products/automobile-cables" },
        {
          name: "Instrumentation Cables",
          link: "/products/control-and-instumentation-cables",
        },
      ],
    },
  ];

  return (
    <div className="parent bg-gradient-to-br from-[#121722]  via-emerald-800 to-[var(--accent2)] text-[#ffffff]">
      <div className="container flex flex-col px-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 py-8 md:py-12 border-b border-white/20">
          {navs.map((nav, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <h2 className="text-lg font-semibold text-white">{nav.title}</h2>
              {nav.links.map((link, idx) => (
                <Link
                  className="text-hover text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  href={link.link}
                  key={idx}
                >
                  {link.link.startsWith('tel:') && <FaPhone className="text-sm rotate-90" />}
                  {link.link.startsWith('mailto:') && <FaEnvelope className="text-sm" />}
                  {link.link.includes('youtube.com') && <FaYoutube className="text-sm" />}
                  {link.link.includes('facebook.com') && <FaFacebook className="text-sm" />}
                  {link.link.includes('instagram.com') && <FaInstagram className="text-sm" />}
                  {link.link.includes('linkedin.com') && <FaLinkedin className="text-sm" />}
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-4 pb-8 gap-4">
          <Link href="/" className="w-[140px] md:w-[160px] relative h-[48px] md:h-[56px]">
            <Image
              src="/logo-white.webp"
              alt="Bonton Cables Logo"
              fill
              className="object-contain"
            />
          </Link>

          <p className="text-xs md:text-sm max-w-[400px] font-light text-white/80 leading-relaxed text-center md:text-left">
            © {year} Bonton Cables India. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
