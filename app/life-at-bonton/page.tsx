"use client";
import {
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaHeart,
  FaTrophy,
  FaRocket,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import SectionTop from "@/components/SectionTop";

const LifeAtBontonPage = () => {
  const cultureHighlights = [
    {
      title: "Innovative & Future-Ready",
      description:
        "Innovation isn't just a buzzword – it's a way of life. We encourage bold thinking and empower our people to contribute to nation-building infrastructure and next-generation technologies.",
      icon: <FaLightbulb />,
    },
    {
      title: "One Team, One Current",
      description:
        "True to our credo, we foster unity across all levels. No silos here – engineers, managers, and associates work hand-in-hand with transparent communication and inclusivity.",
      icon: <FaHandshake />,
    },
    {
      title: "People-First Approach",
      description:
        "Safety, health, and well-being come first. We maintain world-class standards (ISO 45001 certified) and champion work-life balance through wellness programs and flexible policies.",
      icon: <FaHeart />,
    },
    {
      title: "Continuous Growth",
      description:
        "Joining Bonton means embarking on a journey of continuous learning. We invest in our people, offering training, upskilling programs, and ample opportunities to grow.",
      icon: <FaTrophy />,
    },
    {
      title: "Recognition Culture",
      description:
        "Hard work and excellence never go unnoticed. We celebrate achievements – big and small – because our success is truly a shared one, from peer thank-yous to formal awards.",
      icon: <FaStar />,
    },
    {
      title: "Purpose-Driven Impact",
      description:
        "Working at Bonton isn't just a job – it's a mission. Every project contributes to powering critical infrastructure and shaping a smarter, greener tomorrow.",
      icon: <FaRocket />,
    },
  ];

  const coreValues = [
    "People First – Safety and security are non-negotiable",
    "Empathy Always – Listening with care, acting with heart",
    "One Team, One Current – Collaborating to win together",
    "Innovate to Lead – Creating smarter, stronger solutions for tomorrow",
    "Serve with Purpose – Committed to excellence in every interaction",
    "Recharge to Rise – We grow by refreshing minds and energizing our team",
    "Respect for All – We value every voice that shapes our journey",
  ];

  const detailedSections = [
    {
      title: "Innovative and Future-Ready Workplace",
      content: [
        "At Bonton Cables, innovation isn't just a buzzword – it's a way of life. We encourage every team member to think boldly and bring new ideas to the table, echoing our motto Innovate to Lead. Just as global players offer opportunities to work on cutting-edge projects around the world, we empower our people to contribute to nation-building infrastructure and next-generation technologies.",
        "Whether it's developing smart cables for smart cities, supporting renewable energy networks, or enabling the EV revolution, our projects place employees at the forefront of shaping tomorrow. This futuristic outlook means every day at Bonton brings exciting challenges – a chance to push boundaries and power a more connected, sustainable world.",
        "In our halls, a new idea can spark into a breakthrough solution, and each individual's innovation is valued as a step towards industry leadership.",
      ],
      img: "/lifeatbonton/future.jpg",
    },
    {
      title: "One Team, One Current: A Culture of Collaboration",
      content: [
        "We believe teamwork is our power source. True to our credo One Team, One Current – which signifies collaborating to win together – Bonton fosters a spirit of unity across all levels. Much like the most admired workplaces that celebrate collective wins and encourage cross-functional cooperation, our culture thrives on trust and camaraderie.",
        "There are no silos here: engineers, managers, and associates work hand-in-hand, sharing knowledge and supporting one another. Leadership is approachable and open communication is the norm – every voice can be heard. In fact, we pride ourselves on transparency and inclusivity in decision-making, ensuring employees feel integral to our success.",
        "This collaborative ethos, combined with a healthy dose of entrepreneurial spirit, makes working at Bonton as energizing as being in a fast-moving startup – but with the stability of an established, 15+ years strong organization. We celebrate successes together and turn challenges into learning experiences as one united force.",
      ],
      img: "/lifeatbonton/unity.jpg",
    },
    {
      title: "People-First Approach and Well-Being",
      content: [
        "People First is more than a phrase for us – it's a non-negotiable commitment. The safety, health, and well-being of our employees come before everything else. Bonton Cables maintains world-class standards in occupational health and safety (we are ISO 45001 certified) to provide a safe and healthy working environment for all our professionals.",
        "We also know that happy, refreshed employees perform best, which is why we encourage everyone to Recharge to Rise. Whether through flexible leave policies, wellness programs, or team off-sites, we make sure our people have the time and support to recharge their batteries and maintain a healthy work-life balance.",
        "Equally important is our dedication to inclusivity and respect. We live by the principle Respect for All – we value every voice that shapes our journey. Bonton's workforce is a diverse family, and we believe the diversity of backgrounds, perspectives, and talents makes us stronger.",
        "This inclusive, people-centric culture creates a sense of belonging – as soon as you join Bonton, you become part of a tight-knit community that cares like a family and works as a team.",
      ],
      img: "/lifeatbonton/hikers-top.jpg",
    },
    {
      title: "Continuous Growth and Development",
      content: [
        "Joining Bonton Cables means embarking on a journey of continuous learning and professional development. We invest in our people, offering training, upskilling programs, and ample opportunities to grow both personally and professionally.",
        "Ambition is welcomed here – set your own targets in alignment with organizational goals, and we'll cheer you on as you achieve them. Managers at Bonton act as mentors, guiding team members to reach new heights in their careers.",
      ],
      img: "/lifeatbonton/growth.jpg",
    },
    {
      title: "Recognition and Appreciation",
      content: [
        "Hard work and excellence never go unnoticed. Recognition is a cornerstone of life at Bonton Cables. We believe in celebrating achievements – big and small – because our success is truly a shared one.",
        "Our culture of appreciation ranges from simple peer thank-yous to formal awards. This culture of recognition fuels motivation and makes our employees feel valued for the impact they create.",
      ],
      img: "/lifeatbonton/recognition.jpg",
    },
    {
      title: "Purpose-Driven Impact",
      content: [
        "Working at Bonton Cables is not just a job – it's a mission. We take immense pride in the purposeful impact of our work. Every project, every cable, every solution we deliver is contributing to something larger: electrifying new metro lines, securing power in hospitals and data centers, enabling clean solar energy farms, or bringing connectivity to smart infrastructure.",
        "Our vision is to energize every project – today and into the future, and our people are the driving force behind this vision. This sense of purpose infuses our daily life with motivation. Employees know that their efforts are powering critical infrastructure and shaping a smarter, greener tomorrow.",
        "This clarity of purpose creates a rewarding atmosphere where work feels meaningful and each day brings the joy of contributing to something that truly matters.",
      ],
      img: "/lifeatbonton/last.jpg",
    },
  ];

  return (
    <>
      <SectionTop
        // chip="Beyond Cables. Beyond Current. Beyond Limits."
        chip=""
        title="Life at Bonton"
        description="Life at Bonton Cables is dynamic, innovative, and rooted in a culture that puts people first. Guided by our core principles, we have cultivated an environment where employees thrive as one unified team while driving the future of connectivity.

"
        imageUrl="/sectiontop/lifeatbonton.jpg"
        btnText="Be a Part of Our Journey"
        link="/career-opportunities"
      />

      {/* Core Principles */}
      <div className="parent py-[100px] bg-gray-200/80">
        <div className="container px-4">
          <div className="flex items-center justify-center flex-col gap-8 mb-12">
            <span className="chip">
              <FaShieldAlt className="inline mr-2" />
              Core Principles
            </span>
            <h2 className=" text-3xl lg:text-5xl leading-8 font-[900] text-center">
              Our Guiding <span>Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-[0px_0px_12px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--accent1)] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-black/90 font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Women in STEM Section */}
      <div className="parent py-[0px]">
        <div className="container !max-w-[1200px] flex items-center flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2 h-full flex flex-col gap-4 p-4 items-center lg:items-start justify-center">
            <h2
              className=" text-4xl font-bold text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span>Powering</span> Tomorrow with <span>Women in STEM</span>
            </h2>
            <blockquote
              className="text-black/70 text-xl lg:text-2xl  italic leading-relaxed text-center lg:text-left border-l-4 border-[var(--accent1)] pl-6 py-4 my-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Wires connect, but we light the way,
              <br />
              With minds that innovate every day.
              <br />
              Future-ready, bold, and free,
              <br />
              Women in STEM define our legacy.
            </blockquote>
            <div className="flex flex-col gap-4 ">
              <p
                className="text-black/90 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                At Bonton Cables, we believe the future of technology and
                infrastructure is inclusive. With a growing female workforce
                leading in AI, digital innovation, engineering, and operations,
                we are not just building cables—we are building a culture where
                talent thrives beyond boundaries.
              </p>
              <p
                className="text-black/90 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Our higher female ratio stands as proof of our commitment to
                STEM empowerment, creating opportunities where women shape the
                future of smart grids, renewable energy, and advanced
                manufacturing. By investing in skills, innovation, and
                inclusivity, we are ensuring that Bonton Cables is always
                future-ready, people-first, and innovation-driven.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[300px] lg:h-[700px] flex items-center justify-center">
            <div className="h-full w-full relative overflow-hidden">
              <Image
                src="/lifeatbonton/woman.jpg"
                fill
                alt="Women in STEM at Bonton"
                className="object-cover"
                data-aos="fade-up"
                data-aos-delay="500"
              />
              <div className="absolute w-1/2 left-0 inset-y-0 bg-gradient-to-t lg:bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute w-1/2 right-0 inset-y-0 bg-gradient-to-t lg:bg-gradient-to-l from-white to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      


          {/* Detailed Sections Swiper */}
          <div className="parent py-[50px] md:py-[100px]">
        <div className="container items-center flex flex-col gap-4 px-4 mb-8">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-[800px] text-2xl md:text-4xl font-bold text-center"
          >
            What Makes Life at Bonton <span>Special</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-[800px]  text-center text-sm md:text-base"
          >
            Discover the values, culture, and opportunities that define our
            workplace.
          </p>
        </div>
      </div>

      {/* Full Width Swiper Section */}
      <div className="parent relative w-full h-[60vh] md:h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop={true}
          className="w-full h-full"
        >
          {detailedSections.map((section, index) => (
            <SwiperSlide key={index} className="relative">
               {/* Filling Image Background */}
               <div className="absolute inset-0 w-full h-full">
                 <Image
                   src={section.img}
                   fill
                   alt={section.title}
                   className="object-cover"
                   priority={index === 0}
                 />
                 {/* Glass effect overlay */}
                 <div className="absolute inset-0 bg-black/70 " />
               </div>

               {/* Container with Content - Pinned to Bottom */}
               <div className="container relative z-10 h-full flex items-end pb-8 md:pb-20">
                 <div className="max-w-4xl w-full px-4">
                   <div className="gsap-home-highlight">
                     <div className="p-4 md:p-8">
                       <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-emerald-500 mb-4 md:mb-6 leading-tight">
                         {section.title}
                       </h3>
                       <div className="space-y-4">
                         {section.content.map((paragraph, idx) => (
                           <p
                             key={idx}
                             className="text-sm md:text-lg text-white/90 leading-relaxed"
                           >
                             {paragraph}
                           </p>
                         ))}
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Gradient Background for Pagination */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-10"></div>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300">
          <svg
            className="w-4 h-4 md:w-6 md:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300">
          <svg
            className="w-4 h-4 md:w-6 md:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Culture Highlights */}
      <div className="parent py-[100px] bg-gray-200/80">
        <div className="container flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center justify-center flex-col gap-8 mb-12 w-full">
            <span className="chip">
              <FaUsers className="inline mr-2" />
              Our Culture
            </span>
            <h2 className=" text-3xl lg:text-5xl leading-8 font-[900] text-center">
              What Makes Us <span>Different</span>
            </h2>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="about-page-swiper"
          >
            {cultureHighlights.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-[100%] flex flex-col min-h-[285px] items-center justify-between px-4 py-6 shadow-[0px_0px_12px_rgba(0,0,0,0.15)] bg-white rounded-xl gap-4">
                  <span className="text-4xl text-[var(--accent1)]">
                    {item.icon}
                  </span>
                  <h3 className="text-xl text-center leading-5  font-[700] max-w-[20ch]">
                    {item.title}
                  </h3>
                  <p className="text-center  text-black/50 text-sm">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

  

      {/* Quote Section */}
      <div className="parent py-[100px] relative overflow-hidden">
        {/* Background with multiple gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-blue-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/20 via-transparent to-blue-500/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-2xl text-center shadow-2xl">
              {/* Quote icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>
              
              <blockquote className="text-white text-2xl md:text-3xl lg:text-4xl font-bold italic leading-relaxed mb-6 bg-gradient-to-r from-white via-emerald-100 to-blue-100 bg-clip-text text-transparent">
                One current, one team, with vision so wide,
                <br />
                We light up the world, with passion as guide.
              </blockquote>
              
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
              
              <p className="text-emerald-200 text-sm md:text-base mb-4 font-medium">
                This quote reflects the soul of Life at Bonton Cables
              </p>
              <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-4xl mx-auto">
                We are one team moving with a common current – a unified,
                passionate workforce driven by vision and heart. Life at Bonton
                is about empowering each other, innovating fearlessly, and
                illuminating the world together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles - Only for custom navigation buttons */}
      <style jsx global>{`
        .swiper-slide {
          height: 100% !important;
        }

        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .parent:hover .swiper-button-prev-custom,
        .parent:hover .swiper-button-next-custom {
          opacity: 1;
        }

        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default LifeAtBontonPage;
