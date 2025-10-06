import Link from "next/link";
import OfficeMap from "@/components/OfficeMap";
import { FiPhone, FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import SectionTop from "@/components/SectionTop";
import { FaYoutube } from "react-icons/fa6";

const Contact = () => {
  const api = "AIzaSyC7PdHQBeE6brULZ7170Kj8NEk3Sg8JPx4";

  const data = [
    {
      title: "Phone",
      icon: <FiPhone />,
      links: [
        {
          title: "Mr. Deepak Kumar Rai (GM- Commercial)",
          linkDisplay: "+91 8130299001",
          link: "tel:+918130299001",
        },
        {
          title: "Mr. Bhupesh Nangia (GM-Sales & Marketing)",
          linkDisplay: "+91 9560780555",
          link: "tel:+919560780555",
        },
      ],
    },
    {
      title: "Mail",
      icon: <FiMail />,
      links: [
        {
          title: false,
          linkDisplay: "marketing@bontoncablesindia.com",
          link: "mailto:marketing@bontoncablesindia.com",
        },
        {
          title: false,
          linkDisplay: "deepak@bontoncablesindia.com",
          link: "mailto:deepak@bontoncablesindia.com",
        },
      ],
    },
    {
      title: "Address",
      icon: <MdLocationOn />,
      links: [
        {
          title: false,
          linkDisplay:
            "DLF Epitome Tower, Building No. 5, 18 Floor, Tower-B, DLF Cyber City, Phase III, Gurugram, Haryana – 122002",
          link: "https://maps.app.goo.gl/5wLX6JafPFZn3zqg6",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      title: "Youtube",
      icon: <FaYoutube />,
      link: "https://youtube.com/@bontoncables-w9r?si=0jS_mpBmmP42ywJ1",
    },
    {
      title: "Facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/share/17W5GwJrgw/",
    },
    {
      title: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/bontoncables_india?igsh=MWw2Z3Fid3dwaGtlZA==",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/bontoncablesindia/",
    },
  ];

  return (
    <>
      <SectionTop
        chip=""
        title="Contact Us"
        description="We'd love to hear from you! Whether you have a question about our cables, need assistance, or just want to explore opportunities, our team is ready to connect."
        imageUrl="/sectiontop/contact.webp"
        btnText="Get in Touch"
        link="#contact-section"
      />

      <div className="parent py-[40px] lg:pt-[150px]" id="contact-section">
        <div className="container flex flex-col-reverse lg:flex-row items-center px-4 gap-12">
          <div className="w-full lg:w-1/2 h-full flex flex-col gap-8">
            <div className="flex flex-col gap-8 border-b border-black/20 pb-8">
              {data.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-3xl bg-[var(--accent1)] p-2 rounded-full text-white">
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    {item.links.map((link, j) => (
                      <Link
                        key={j}
                        href={link.link}
                        target="_blank"
                        className=""
                      >
                        {link.title ? (
                          <span className="italic -light text-[var(--accent2)]">
                            {link.title} <br />
                          </span>
                        ) : null}
                        {link.linkDisplay}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.link}
                  target="_blank"
                  className="lg: bg-[var(--accent1)] p-2 text-2xl rounded-full text-white"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
            <div className="p-4 w-full bg-black/4 rounded-xl">
              <h2 className="font-bold text-2xl mb-4">Send us a message</h2>

              <form action="#" className="w-full flex flex-col gap-8">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  placeholder="Phone Number"
                  title="Enter a 10-digit number"
                />
                <textarea rows={4} placeholder="Your Message" />
                <button type="submit" className="btn mt-8">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="parent py-8 bg-gradient-to-br from-[#121722]  via-emerald-800 to-[var(--accent2)]">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto">
            <div
              className="text-center mb-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Find Us on the{" "}
                <span className="text-[var(--accent1)]">Map</span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Explore our network of offices and manufacturing units across
                India. Click on any marker to view detailed information about
                each location.
              </p>
            </div>

            <div className="mb-8" data-aos="fade-up" data-aos-delay="400"></div>

            {/* Map Legend */}
            <div
              className="flex flex-wrap justify-center gap-6 mt-8"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                <span className="text-sm font-medium text-white">
                  Head Office
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-600"></div>
                <span className="text-sm font-medium text-white">
                  Regional Branches
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-red-600"></div>
                <span className="text-sm font-medium text-white">
                  Manufacturing Units
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OfficeMap apiKey={api} />
      {/* Manufacturing Units */}
    </>
  );
};

export default Contact;
