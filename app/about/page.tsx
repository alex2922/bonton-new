"use client";
import Image from "next/image";
import React from "react";
import Silk from "@/components/Silk";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import type { IconType } from "react-icons";
import {
  FaCheckCircle,
  FaGlobe,
  FaHourglassHalf,
  FaUsers,
  FaIndustry,
  FaLayerGroup,
  FaHandshake,
  FaBuilding,
  FaWarehouse,
  FaShieldAlt,
  FaCogs,
} from "react-icons/fa";
import {
  MdElectricBolt,
  MdCable,
  MdViewTimeline,
} from "react-icons/md";
import {
  FaAward,
  FaCertificate,
  FaLeaf,
  FaRocket,
  FaStar,
} from "react-icons/fa6";
import WhyUsSection from "@/components/home/WhyUsSections";
import SectionTop from "@/components/SectionTop";

const page = () => {
  type CounterItem = {
    title: string;
    count: number;
    icon: IconType;
    additional?: string;
  };

  const CounterData: CounterItem[] = [
    {
      title: "Projects Completed",
      count: 2000,
      icon: FaCheckCircle,
    },
    {
      title: "Distributed Reached",
      count: 1000,
      icon: FaGlobe,
    },
    {
      title: "Projects Completed",
      count: 25,
      icon: FaLayerGroup,
    },
    {
      title: "Years of Experience",
      count: 15,
      icon: FaHourglassHalf,
    },

    {
      title: "Skilled Professionals",
      count: 600,
      icon: FaUsers,
    },
    {
      title: "Manufacturing Units (Current)",
      count: 2,
      additional: "(Bhiwadi, Kahrani)",
      icon: FaIndustry,
    },
    {
      title: "Manufacturing Units (Underway)",
      count: 1,
      additional: "(Salarpur)",
      icon: FaIndustry,
    },
    {
      title: "Product Categories",
      count: 25,
      icon: FaLayerGroup,
    },
    {
      title: "Channel Partners",
      count: 1000,
      icon: FaHandshake,
    },
    {
      title: "Wires Manufacturing Capacity",
      count: 15000,
      additional: "km/month",
      icon: MdElectricBolt,
    },
    {
      title: "Cables Manufacturing Capacity",
      count: 500,
      additional: "km/month",
      icon: MdCable,
    },
    {
      title: "Pan India Offices",
      count: 15,
      icon: FaBuilding,
    },
    {
      title: "Pan India Warehouses",
      count: 7,
      icon: FaWarehouse,
    },
  ];

  const financialData = [
    { year: "2008-09", turnover: 49.1 },
    { year: "2009-10", turnover: 59.9 },
    { year: "2010-11", turnover: 81.09 },
    { year: "2011-12", turnover: 111.78 },
    { year: "2012-13", turnover: 100.35 },
    { year: "2013-14", turnover: 101.22 },
    { year: "2014-15", turnover: 131.97 },
    { year: "2015-16", turnover: 157.01 },
    { year: "2016-17", turnover: 169.11 },
    { year: "2017-18", turnover: 229.62 },
    { year: "2018-19", turnover: 276.78 },
    { year: "2019-20", turnover: 251.34 },
    { year: "2020-21", turnover: 278.48 },
    { year: "2021-22", turnover: 388.46 },
    { year: "2022-23", turnover: 549.54 },
    { year: "2023-24", turnover: 558.35 },
    { year: "2024-25", turnover: 700 },
  ];

  const keyInsights = [
    {
      title: "Stable growth phase (2008–2011) ",
      description: "Consistent increase, moderate acceleration.",
    },
    {
      title: "Plateau period (2012–2014) ",
      description: "Slight decline followed by stagnation.",
    },
    {
      title: "Resumption of growth (2014–2017) ",
      description: "Recovery and gradual gains.",
    },
    {
      title: "Fast‑growth burst (2017–2019) ",
      description: "Particularly sharp rises.",
    },
    {
      title: "Temporary dip (2019–20) ",
      description:
        "A small decline, possibly due to market or external factors.",
    },
    {
      title: "Strong rebound & boom (2020–25) ",
      description: "Major upward momentum, culminating in ₹700 Cr in 2024–25.",
    },
  ];

  const purposePoints = [
    {
      title: "Empowering a Connected Future",
      description:
        "To actively enable the seamless digital and physical connectivity essential for tomorrow's world, supporting advancements in communication and infrastructure.",
      image: "/about/1.jpg",
    },
    {
      title: "Driving Sustainable Development",
      description:
        "We are committed to fostering a greener future by pioneering and providing eco-friendly cabling solutions and adopting sustainable manufacturing practices.",
      image: "/about/2.jpg",
    },
    {
      title: "Built on Certified Excellence",
      description:
        'At its core, we are underpinned by our unparalleled commitment to quality, evidenced by our status as "India\'s Most Certified Cable Company" and extensive certifications.',
      image: "/about/3.jpg",
    },
    {
      title: "Delivering Advanced Solutions",
      description:
        "We focus on innovation, developing and offering specialized, high-performance cabling solutions that go beyond current market benchmarks.",
      image: "/about/4.jpg",
    },
    {
      title: "Enabling Next-Generation Infrastructure",
      description:
        "Our role extends to being a foundational technology provider for critical future applications, including smart grids, renewable energy projects, electric vehicle charging networks, and smart cities.",
      image: "/about/5.jpg",
    },
    {
      title: "Ensuring Unwavering Reliability",
      description:
        "The premium aspect emphasizes the trust and dependability inherent in our products, crucial for the safety and performance of modern interconnected systems.",
      image: "/about/6.jpg",
    },
    {
      title: "Shaping Global Progress",
      description:
        "Ultimately, we aim to contribute broadly to societal advancement by providing the essential connections that power a more intelligent, efficient, and environmentally responsible world.",
      image: "/about/7.jpg",
    },
  ];

  const evolutionaryMilestones = [
    {
      year: "2004",
      title: "The Genesis",
      description:
        "Our first plant in Delhi begins automotive wire production as per JIS/DIN standards.",
    },
    {
      year: "2007",
      title: "Expanding Horizons",
      description:
        "Relocation to Bhiwadi, expanding capabilities for major telecom clients.",
    },
    {
      year: "2010",
      title: "Certification & Reach",
      description:
        "Achieved our first QS and ISO certifications, expanded into building/control cables, and established our initial PAN India offices and warehouses.",
    },
    {
      year: "2012",
      title: "Specialization & Global Ties",
      description:
        "Expanded Fire Survival (FS) cable manufacturing, gained crucial RoHS1, ISO 14000, and ISO 18000 certifications, and forged an exclusive tie-up with MICC UK.",
    },
    {
      year: "2014",
      title: "Recognition & Expansion",
      description:
        "Awarded 1st prize in EarthCare & Environmental Management, expanded our client base in the construction sector, and opened new offices across India.",
    },
    {
      year: "2015",
      title: "Metro & UL Milestones",
      description:
        "Secured DMRC approval for metro projects, attained CE certification, and became a UL registered company, enhancing our safety credentials.",
    },
    {
      year: "2017",
      title: "International & Eco-Pioneer",
      description:
        "Established a new manufacturing plant in Kehrani, commenced Middle East exports, and became the first in India to achieve RoHS 2, GC, and Smeta certifications.",
    },
    {
      year: "2020-21",
      title: "Advanced Manufacturing & REACH",
      description:
        "Became the first Indian company to achieve REACH certification, expanded metro approvals, and significantly enhanced manufacturing with new extrusion lines and advanced FS labs.",
    },
    {
      year: "2022-23",
      title: "NABL Accredited Labs",
      description:
        "Established two NABL-accredited in-house quality laboratories.",
    },
    {
      year: "2023-24",
      title: "Automotive Excellence & Innovation",
      description:
        "Awarded the prestigious IATF 16949:2016 certification, a global benchmark in automotive quality, and introduced innovative water-soluble tape and Zero Halogen XLPE products.",
    },
    {
      year: "2024-25",
      title: "Future Forward - Third Plant",
      description:
        "Acquisition of land in Salarpur for our third advanced manufacturing plant, preparing for significant future expansion.",
    },
  ];
  const historySections = [
    {
      heading: "Igniting Connections (2004–2008)",
      body: "Founded in 2004, we began our journey by establishing our first manufacturing unit in Delhi. In these early years, we focused on automotive wiring, producing cables built to stringent international standards (JIS/DIN) to meet the needs of automobile harness manufacturers. This dedication earned us our first major clients, supplying leading auto-component companies like Minda and Tyco with reliable wire solutions. Rapid initial growth soon necessitated expansion – we relocated to a larger, state-of-the-art plant in Bhiwadi, setting the stage for increased capacity and innovation in our formative years.",
    },
    {
      heading: "Expanding Horizons (2008–2012)",
      body: "We quickly broadened our scope beyond automobiles, expanding into new industries and products. Around this time we ventured into telecom cables, catering to major telecom players such as Ericsson, Nokia, Airtel and others as India’s communications sector boomed. Building on our technical expertise, we also launched production of building wires and control cables, marking our entry into the construction and infrastructure segment. This period saw our reputation for quality solidify – we earned key ISO certifications (including ISO 9001) and even achieved the stringent QS 9000 automotive quality standard, making us one of the first Indian cable firms to reach such benchmarks in manufacturing excellence. By diversifying our product range and upholding high quality, we laid the groundwork to be known as “India’s most certified cable company,” a title we were already beginning to live up to.",
    },
    {
      heading: "Scaling with Excellence (2013–2016)",
      body: "As demand grew, we invested in scaling up our capabilities while maintaining excellence. We added a dedicated Fire Survival (FS) cable manufacturing unit – bolstered by an exclusive technical tie-up with MICC of the UK – to produce advanced mineral-insulated fire-resistant cables for critical applications. During this phase, we further distinguished ourselves through a deep commitment to safety and sustainability. We became India’s first fully RoHS-compliant cable manufacturing facility and attained ISO 14001 (Environmental Management) and OHSAS 18001 (Occupational Health & Safety) certifications, underscoring our pioneer status in eco-friendly, specialized cables. Our portfolio continued to grow with new telecom infrastructure clients like Indus Towers, Idea, and Vodafone, while major construction developers (DLF, Vatika, and others) also trusted us for project wiring. During these years our excellence was recognized with accolades such as a First Prize in EarthCare for environmental management – affirming that growth was being achieved responsibly and with world-class quality standards.",
    },
    {
      heading: "Connecting Every Corner (2017–2020)",
      body: "In this period, we transformed into a truly pan-Indian brand, extending our reach and network nationwide. We established regional offices across the country – including new branches in Lucknow, Jaipur, Indore, and Kolkata – to be closer to emerging markets. We also set up additional warehouses (such as a major distribution hub in Kolkata) to ensure efficient supply chain and service. By now, we had earned the globally prestigious IATF 16949:2016 certification for automotive quality management, placing us among the first Indian cable makers to meet this rigorous automotive standard. With a robust product portfolio and a growing network of over a thousand dealers and partners, we were able to serve clients in every corner of India. From powering large real-estate projects to critical infrastructure in power, IT, and transportation, we emerged as a trusted name across industries – building a nationwide footprint on the back of strong partnerships, technical excellence, and reliable performance.",
    },
    {
      heading: "Wired for Tomorrow (2021–Present)",
      body: "Entering the new decade, we stand future-ready and poised for the next leap. We now operate with hundreds of skilled employees and two major manufacturing facilities, and we have initiated a third advanced plant in Salarpur to further expand capacity and innovation. Embracing our motto of “Beyond Cables. Beyond Current. Beyond Limits.”, we continue to invest in cutting-edge technology and quality improvements to meet evolving industry needs. We are also deepening our social responsibility efforts – ensuring that our growth is shared through community upliftment and sustainability initiatives. As we forge ahead, we remain committed to pioneering high-performance cables and wiring solutions that keep setting new benchmarks. The journey that began in 2004 is far from over – our next chapter is all about building the future, one connection at a time.",
    },
  ];



  return (
    <>
      <SectionTop
        chip=""
        title="Our Achievements"
        description="With over <strong>15 years</strong> of engineering excellence, Bonton is India's most certified cable company, holding global accreditations like UL and IATF 16 949:2016. Our <strong>25+ product categories</strong> serve critical infrastructure, and our network of <strong>1,000+ partners</strong> ensures nationwide delivery of superior, future-ready solutions built for performance, safety, and sustainability."
        imageUrl="/sectiontop/about.jpg"
        btnText="Contact Us"
        link="/contact"
      />

      <div
        id="counter-section"
        className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[var(--accent1)]">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak volumes about our commitment to excellence and
              innovation in the cable industry
            </p>
          </div>










          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              spaceBetween={24}
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1.05, spaceBetween: 16 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="about-page-swiper"
            >
              {CounterData.map((item, index) => (
                <SwiperSlide key={index} className="">
                  <div className="group w-full bg-white  rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full flex flex-col">
                    {(() => {
                      const Icon = item.icon;
                      return (
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent1)] to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="text-white w-6 h-6" />
                        </div>
                      );
                    })()}

                    <div className="mb-4 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900">
                          {item.count}
                        </div>
                        {item.additional && (
                          <span className="text-lg text-[var(--accent1)] leading-snug whitespace-normal break-words">
                            {item.additional}
                          </span>
                        )}
                      </div>
                      <div className="text-sm md:text-md font-semibold text-gray-700 leading-snug  break-words mt-2">
                        {item.title}
                      </div>
                    </div>
                    <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-[var(--accent1)] to-blue-600 transition-all duration-500 rounded-full"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="parent py-[100px] bg-gradient-to-br from-blue-500 to-emerald-500">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
           
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Proven <span className="text-[var(--accent1)]">Engineering Excellence</span>
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Built on deep expertise, global certifications, and unwavering commitment to quality and performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div 
                data-aos="fade-up" 
                data-aos-delay="100"
                className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent1)]/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent1)] to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FaCogs className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[var(--accent1)] transition-colors">
                    Proven Engineering Excellence
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    With over <strong>15 years</strong> in the industry, we deliver future-ready solutions built on deep engineering expertise, ensuring reliability for critical infrastructure projects.
                  </p>
                  <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-[var(--accent1)] to-blue-600 transition-all duration-500 rounded-full mt-6"></div>
                </div>
              </div>

              <div 
                data-aos="fade-up" 
                data-aos-delay="200"
                className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FaCertificate className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    Unmatched Global Certifications
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    As India&apos;s most certified wire and cable company, holding prestigious global accreditations like <strong>UL, RoHS 2, REACH, and IATF 16949:2016</strong>, we guarantee products that meet the highest international quality and safety standards.
                  </p>
                  <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500 rounded-full mt-6"></div>
                </div>
              </div>

              <div 
                data-aos="fade-up" 
                data-aos-delay="300"
                className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FaShieldAlt className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    Trusted for Performance & Safety
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    We are a preferred partner, explicitly trusted by <strong>consultants, architects, and builders</strong> for delivering superior performance, unwavering safety, and sustainable solutions.
                  </p>
                  <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-500 rounded-full mt-6"></div>
                </div>
              </div>

              <div 
                data-aos="fade-up" 
                data-aos-delay="400"
                className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FaLayerGroup className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    Comprehensive Product Portfolio
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Offering <strong>25+ product categories</strong>, we provide a robust range of solutions for diverse applications across <strong>Power, Construction, IT, and Automotive</strong> sectors, simplifying procurement for complex projects.
                  </p>
                  <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-500 rounded-full mt-6"></div>
                </div>
              </div>
            </div>

            <div 
              data-aos="fade-up" 
              data-aos-delay="500"
              className="mt-6 bg-white rounded-3xl p-8 border border-[var(--accent1)]/20"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent1)] to-blue-600 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <FaIndustry className="text-white text-3xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Robust Manufacturing & Distribution
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Supported by over <strong>600 skilled professionals</strong>, two active manufacturing units (with a third underway), and a network of <strong>1,000+ channel partners</strong>, we ensure consistent product availability and reliable supply chain support for projects nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parent pt-[100px]">
        <div className="container flex items-center justify-center flex-col gap-8 px-4">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="#awards-chip"
            className="  md:text-4xl text-2xl leading-8 font-[900] text-center "
          >
            <span>Financial Growth</span> (Year-on-Year)
          </h1>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="year"
                stroke="#666"
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis
                stroke="#666"
                fontSize={12}
                label={{
                  value: "Turnover (CR INR)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip
                formatter={(value) => [`₹${value} Cr`, "Turnover"]}
                labelFormatter={(label) => `Year: ${label}`}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Line
                type="monotone"
                dataKey="turnover"
                stroke="var(--accent1)"
                strokeWidth={3}
                dot={{ fill: "var(--accent1)", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "var(--accent1)", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="parent py-[100px]  bg-black/100 relative">
        <div
          className="absolute h-full w-full  bg-img-cover top-0 bg-blue-400  opacity-40"
          style={{ backgroundImage: "url(/plan_2035/hero.jpg)" }}
        >
          <Silk
            speed={5}
            scale={1}
            color="#2969ff"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        <div className="container flex items-center justify-center flex-col gap-8 px-4 text-white relative z-10">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="#awards-chip"
            className="  md:text-4xl text-2xl leading-8 font-[900] text-center "
          >
            Key <span>Growth Insights</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            {keyInsights.map((insight, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100 + 100}
                key={index}
                className="flex flex-col items-start  p-6 bg-white/90 rounded-xl shadow-lg border-2 border-white "
              >
                <h3 className="text-[var(--accent1)] font-bold text-md md:text-xl text-center md:text-left w-full  ">
                  {insight.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium text-center md:text-left w-full  ">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="parent py-[100px] bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-[var(--accent1)]">Foundation</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our journey and shape our future
              </p>
            </div>

            <div className="mb-20" data-aos="fade-up" data-aos-delay="100">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent1)]/20 to-blue-600/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent1)] to-blue-600 rounded-2xl flex items-center justify-center">
                          <FaRocket className="text-white text-2xl" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                          Vision
                        </h3>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        To be the market leader in India by 2035, by powering
                        over 5,000 infrastructure projects across sectors
                        through reliable, innovative, and sustainable wiring and
                        cabling solutions — Made in India.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/sectiontop/about.jpg"
                      alt="Vision - Future of Infrastructure"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">
                        Building Tomorrow
                      </h4>
                      <p className="text-white/90">
                        Innovation meets infrastructure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-20" data-aos="fade-up" data-aos-delay="200">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/why choose/3.webp"
                      alt="Values - Our Core Principles"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">Our Values</h4>
                      <p className="text-white/90">
                        Excellence in every connection
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                    <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                          <FaShieldAlt className="text-white text-2xl" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                          Values
                        </h3>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        At Bonton Cables, we are committed to delivering
                        world-class electrical solutions that combine safety,
                        performance, and sustainability. By fostering strong
                        relationships with stakeholders, ensuring compliance
                        with global standards, and embracing continuous
                        innovation, we aim to energize every project—today and
                        into the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                <div>
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-3xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300"></div>
                    <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                          <FaUsers className="text-white text-2xl" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                          Mission
                        </h3>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Our mission is built on seven core principles that guide
                        every decision and action:
                      </p>
                      <ul className="space-y-4 text-gray-800 flex-1">
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent1)] flex-shrink-0"></span>
                          <span className="font-medium">
                            People First – Safety and security are
                            non-negotiable.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent1)] flex-shrink-0"></span>
                          <span className="font-medium">
                            Respect for All – We value every voice that shapes
                            our journey.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent1)] flex-shrink-0"></span>
                          <span className="font-medium">
                            Empathy Always – Listening with care, acting with
                            heart.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent1)] flex-shrink-0"></span>
                          <span className="font-medium">
                            One Team, One Current – Collaborating to win
                            together.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent1)] flex-shrink-0"></span>
                          <span className="font-medium">
                            Serve with Purpose – Committed to excellence in
                            every customer interaction.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent1)] flex-shrink-0"></span>
                          <span className="font-medium">
                            Innovate to Lead – Creating smarter, stronger
                            solutions for tomorrow.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent1)] flex-shrink-0"></span>
                          <span className="font-medium">
                            Recharge to Rise – We grow by refreshing minds and
                            energizing our team.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/lifeatbonton/unity.jpg"
                      alt="Mission - Our Team Values"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">Our Mission</h4>
                      <p className="text-white/90">
                        Guided by purpose, driven by values
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parent py-[100px] bg-gradient-to-br from-[var(--accent1)]/5 to-[var(--accent2)]/5">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-4xl lg:text-5xl font-[900] text-gray-900 mb-6"
              >
                Our Purpose
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                Our purpose drives every decision we make and every product we
                create. It&apos;s the foundation of our commitment to
                excellence.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {purposePoints.slice(0, 4).map((purpose, index) => {
                  return (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] min-h-[300px]"
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={purpose.image}
                          alt={purpose.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90" />
                      </div>

                      <div className="relative z-10 p-4  h-full flex flex-col justify-end">
                        <div>
                          <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[var(--accent1)] transition-colors !leading-[110%]">
                            {purpose.title}
                          </h4>
                          <p className="text-gray-200 text-sm  !leading-[120%]">
                            {purpose.description}
                          </p>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent1)]/0 to-[var(--accent2)]/0 group-hover:from-[var(--accent1)]/10 group-hover:to-[var(--accent2)]/10 transition-all duration-500 rounded-3xl" />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
                  {purposePoints.slice(4, 7).map((purpose, index) => {
                    return (
                      <div
                        key={index + 4}
                        data-aos="fade-up"
                        data-aos-delay={(index + 4) * 100}
                        className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] min-h-[300px]"
                      >
                        <div className="absolute inset-0">
                          <Image
                            src={purpose.image}
                            alt={purpose.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90" />
                        </div>

                        <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                          <div>
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[var(--accent1)] transition-colors !leading-[110%]">
                              {purpose.title}
                            </h4>
                            <p className="text-gray-200 text-sm  !leading-[120%]">
                              {purpose.description}
                            </p>
                          </div>

                          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent1)]/0 to-[var(--accent2)]/0 group-hover:from-[var(--accent1)]/10 group-hover:to-[var(--accent2)]/10 transition-all duration-500 rounded-3xl" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhyUsSection />

      <div className="parent py-[100px] bg-black/95 relative">
        <div
          className="absolute h-full w-full  bg-img-cover top-0 bg-blue-400  opacity-70"
          style={{ backgroundImage: "url(/plan_2035/hero.jpg)" }}
        >
          <Silk
            speed={5}
            scale={1}
            color="#2969ff"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-4xl lg:text-5xl font-[900] text-white mb-6"
              >
                Our Evolutionary Path
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-lg text-white/80  max-w-3xl mx-auto"
              >
                From humble beginnings to industry leadership, discover the key
                milestones that shaped our journey over two decades.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-[var(--accent1)] to-[var(--accent2)] rounded-full"></div>

              {evolutionaryMilestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                const milestoneIcons = [
                  <FaRocket className="text-lg" key={index} />,
                  <FaBuilding className="text-lg" key={index} />,
                  <FaCertificate className="text-lg" key={index} />,
                  <FaGlobe className="text-lg" key={index} />,
                  <FaAward className="text-lg" key={index} />,
                  <FaCheckCircle className="text-lg" key={index} />,
                  <FaLeaf className="text-lg" key={index} />,
                  <FaCogs className="text-lg" key={index} />,
                  <FaStar className="text-lg" key={index} />,
                  <FaIndustry className="text-lg" key={index} />,
                  <FaRocket className="text-lg" key={index} />,
                ];

                return (
                  <div
                    key={index}
                    data-aos={isEven ? "fade-right" : "fade-left"}
                    data-aos-delay={index * 100}
                    className={`relative flex items-center mb-16 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--accent1)] to-[var(--accent2)] text-white rounded-2xl font-bold text-sm z-10 shadow-lg">
                      {milestoneIcons[index]}
                    </div>

                    <div
                      className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-100 ml-24 md:ml-0 ${
                        isEven ? "md:mr-8" : "md:ml-8"
                      } md:w-5/12 hover:shadow-2xl transition-all duration-300 group`}
                    >
                      <div className="flex flex-col items-center gap-3 mb-4">
                        <span className="text-2xl font-bold text-[var(--accent1)] whitespace-nowrap">
                          {milestone.year}
                        </span>
                        <div className="w-4 h-0.5 bg-[var(--accent1)]/30 rounded-full"></div>
                        <span className="font-bold text-xl text-gray-900 group-hover:text-[var(--accent1)] transition-colors">
                          {milestone.title}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed  text-center">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="parent py-[100px] bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span
                data-aos="fade-up"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent1)]/10 text-[var(--accent1)] rounded-full text-sm font-semibold mb-6"
              >
                <MdViewTimeline className="text-lg" />
                Our Journey
              </span>
              <h2
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-4xl lg:text-5xl font-[900] text-gray-900  mb-4"
              >
                <span>Building The Future</span>, One Connection At A Time
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                A concise narrative of our growth from 2004 to the present.
              </p>
            </div>

            <div className="relative">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                spaceBetween={24}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  bulletClass: "swiper-pagination-bullet",
                  bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 16 },
                  640: { slidesPerView: 1, spaceBetween: 20 },
                  768: { slidesPerView: 1, spaceBetween: 24 },
                  1024: { slidesPerView: 1, spaceBetween: 24 },
                  1280: { slidesPerView: 1, spaceBetween: 24 },
                }}
                className="history-swiper"
              >
                {historySections.map((section, index) => {
                  const periodIcons = [
                    <FaRocket className="text-2xl" key={index} />,
                    <FaGlobe className="text-2xl" key={index} />,
                    <FaCertificate className="text-2xl" key={index} />,
                    <FaBuilding className="text-2xl" key={index} />,
                    <FaRocket className="text-2xl" key={index} />,
                  ];

                  const periodColors = [
                    "from-orange-500 to-red-500",
                    "from-blue-500 to-cyan-500",
                    "from-green-500 to-emerald-500",
                    "from-purple-500 to-indigo-500",
                    "from-pink-500 to-rose-500",
                  ];

                  const bgGradients = [
                    "from-orange-50 to-red-50",
                    "from-blue-50 to-cyan-50",
                    "from-green-50 to-emerald-50",
                    "from-purple-50 to-indigo-50",
                    "from-pink-50 to-rose-50",
                  ];

                  const years = [
                    "2004-2008",
                    "2008-2012",
                    "2013-2016",
                    "2017-2020",
                    "2021-Present",
                  ];

                  return (
                    <SwiperSlide key={index}>
                      <div className="h-full">
                        <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden h-full flex flex-col">
                          <div
                            className={`bg-gradient-to-br ${bgGradients[index]} p-6 border-b border-gray-100`}
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div
                                className={`w-16 h-16 bg-gradient-to-br ${periodColors[index]} rounded-2xl flex items-center justify-center`}
                              >
                                {periodIcons[index]}
                              </div>
                              <div className="text-right">
                                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                  {years[index]}
                                </span>
                              </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                              {section.heading}
                            </h3>
                          </div>

                          <div className="p-6 flex-1 flex flex-col">
                            <p className="text-gray-700 leading-relaxed  flex-1">
                              {section.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
