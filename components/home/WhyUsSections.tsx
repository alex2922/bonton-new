"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const WhyUsSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.from(".gsap-home-highlight", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "easeOut",
    });
  }, []);

  const highlights = [
    {
      title: "India's Most Certified Cable Company",
      description: `India's Most Certified Cable Company," backed by over 15 stringent international and national certifications, including IATF, ISO, REACH, RoHS2, CE, and UL, ensuring unparalleled quality and reliability.`,
      img: "/why choose/7.webp",
    },
    {
      title: "Pioneering Advanced & Eco-Friendly Solutions",
      description: `Pioneers in specialized and eco-friendly cables, engineering solutions like Fire Survival Cables (maintaining integrity at 950°C for 3 hours) and Zero Halogen XLPE products, demonstrating a commitment to safety and environmental responsibility.`,
      img: "/why choose/6.webp",
    },
    {
      title: "Enabling the Connected & Smart Future",
      description: `Provide the essential cabling backbone for modern digital infrastructure, including high-speed CAT 6, Co-axial, and LAN cables, crucial for smart cities, IoT ecosystems, and next-generation communication networks.`,
      img: "/why choose/5.webp",
    },
    {
      title: "Powering the Global Energy Transition",
      description: `Our specialized cables, such as robust Solar Cables and upcoming HT Cables, are designed to support the accelerating shift towards renewable energy infrastructure and the rapidly expanding electric vehicle revolution.`,
      img: "/why choose/1.webp",
    },
    {
      title: "Integrated Manufacturing Excellence",
      description: `With two state-of-the-art manufacturing units and in-house capabilities for PVC compounding and copper drawing, we maintain unparalleled control over quality from raw material to finished product.`,
      img: "/why choose/4.webp",
    },
    {
      title: "Trusted by Global Industry Leaders",
      description: `Our prestigious and diverse client portfolio spans critical sectors including Metro Projects, Construction, Government, Telecom, Corporate, Data Centres, and Automotive, reflecting widespread trust in our high-performance solutions.`,
      img: "/why choose/3.webp",
    },
    {
      title: "Deep Commitment to a Sustainable Tomorrow",
      description: `Beyond products, we are dedicated to environmental accountability, ensuring the lowest emissions from its plants, minimizing waste, and actively contributing to a circular economy for a greener legacy.`,
      img: "/why choose/2.webp",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="parent py-[50px] md:py-[100px]">
        <div className="container items-center flex flex-col gap-4 px-4">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-[800px] text-2xl md:text-4xl font-bold text-center"
          >
             Why Choose Bonton Cables ?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-[800px]  text-center text-sm md:text-base"
          >
            From unmatched certifications to sustainable innovations, here&apos;s why
            industries around the world trust us.
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
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
            bulletClass: 'swiper-pagination-bullet',
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          loop={true}
          className="w-full h-full"
        >
          {highlights.map((highlight, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Filling Image Background */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={highlight.img}
                  fill
                  alt={highlight.title}
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Creative overlay with gradient and pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
              </div>
              
              {/* Container with Content - Pinned to Bottom */}
              <div className="container relative z-10 h-full flex items-end pb-8 md:pb-20">
                <div className="max-w-4xl w-full px-4">
                  <div className="gsap-home-highlight">
                    <div className="p-4 md:p-8">
                      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                        {highlight.title}
                      </h3>
                      <p className="text-sm md:text-lg text-white/90 leading-relaxed">
                        {highlight.description}
                      </p>
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
          <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300">
          <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
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

export default WhyUsSection;