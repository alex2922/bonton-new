"use client"

import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Certificates = () => {
  const certificates = [
    {
      name: "IATF 16949:20126",
      image: "/home/Certifications/IATF.jpg",
      description:
        "The gold standard in automotive quality management. This prestigious global certification ensures our cables meet the most stringent demands of the automotive industry worldwide.",
    },
    {
      name: "RoHS 2",
      image: "/home/Certifications/ROHS 2.jpg",
      description:
        "As India's first fully RoHS-compliant cable maker, we guarantee our products are free from hazardous substances, championing environmental safety and human health.",
    },
    {
      name: "CE Mark",
      image: "/home/Certifications/CE.jpg",
      description:
        "Our CE mark indicates conformity with European health, safety, and environmental protection standards, allowing our products to be sold within the European Economic Area.",
    },
    {
      name: "GC-Mark - Trusted Product",
      image: "/home/Certifications/GC MARK.jpg",
      description:
        "This certification from DQS signifies that our products meet stringent quality and reliability criteria, assuring our customers of their superior performance.",
    },
    {
      name: "REACH Compliant",
      image: "/home/Certifications/REACH.jpg",
      description:
        "We were among the first in India to achieve REACH compliance, ensuring responsible management of chemicals throughout our supply chain for a safer environment.",
    },
    {
      name: "ISO 9001:2015",
      image: "/home/Certifications/50254040_-9001-valid_till_2026_page-0001.jpg",
      description:
        "Our adherence to this globally recognized Quality Management System ensures consistent delivery of products and services that meet customer and regulatory requirements.",
    },
    {
      name: "NABL Accredited Labs",
      image: "/home/Certifications/NABL.jpg",
      description:
        "Our in-house quality laboratories are accredited by NABL, ensuring precise and reliable testing of raw materials and finished products to industry-leading standards.",
    },
    {
      name: "TUV SUD South Asia",
      image: "/home/Certifications/TUV SUD.jpg",
      description:
        "TUV SUD certification demonstrates our commitment to meeting international safety and quality standards, ensuring our products are tested and verified by independent experts.",
    },
  ];

  return (
    <div className="parent py-[100px] relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/wall.webp"
          alt="Wall Background"
          fill
          className="object-cover"
          priority
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 items-center flex flex-col gap-4">
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="max-w-[800px] text-4xl font-bold text-center text-white"
        >
          Certifications & Accreditations
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-[800px]  text-center text-white/90"
        >
          Our comprehensive portfolio of international certifications demonstrates our unwavering commitment to excellence, safety, and environmental responsibility across every aspect of our operations.
        </p>

        <div className="w-full mt-12 pt-32 overflow-visible">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
              bulletClass: 'swiper-pagination-bullet',
            }}
            navigation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="w-full certificates-swiper !overflow-visible"
          >
            {certificates.map((certificate, index) => (
              <SwiperSlide key={index} className="relative pb-8 !overflow-visible">
                {/* Certificate Frame - hanging on wall effect */}
                <div 
                  className="group certificate-frame relative"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 50}
                >
                  {/* Pin/Hook at the top */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-3 h-3 bg-gray-700 rounded-full shadow-lg border-2 border-gray-600"></div>
                    {/* String/Wire */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-gray-600 to-transparent"></div>
                  </div>

                  {/* Certificate Image Container - Picture Frame */}
                  <div className="relative bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 p-2 rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                    {/* Outer Golden Frame Border */}
                    <div className="relative p-[6px] bg-gradient-to-br from-yellow-600 via-amber-400 to-yellow-700 rounded-md shadow-inner">
                      {/* Middle lighter gold layer */}
                      <div className="relative p-[2px] bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-300 rounded-sm">
                        {/* Inner Frame Border */}
                        <div className="relative p-[4px] bg-gradient-to-br from-amber-700 via-yellow-600 to-amber-800 rounded-sm">
                          {/* White mat */}
                          <div className="relative bg-white p-4 rounded-sm shadow-inner">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                              <Image
                                src={certificate.image}
                                alt={certificate.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Certificate Name Plate */}
                    <div className="mt-3 text-center bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700 py-1.5 px-2 rounded shadow-md">
                      <h3 className="text-xs font-bold text-white leading-tight tracking-wide drop-shadow-sm">
                        {certificate.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description tooltip on hover */}
                  <div className="certificate-tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                    <div className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs rounded-lg p-3 shadow-xl w-[280px]">
                      <p className="leading-relaxed">{certificate.description}</p>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/95"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Custom Swiper Styles - Only for layout and animations */}
      <style jsx global>{`
        .certificates-swiper {
          padding-top: 30px !important;
          padding-bottom: 60px !important;
          overflow: visible !important;
        }

        .certificates-swiper .swiper-wrapper {
          overflow: visible !important;
        }
        
        .certificates-swiper .swiper-slide {
          height: auto !important;
          overflow: visible !important;
        }

        .certificate-frame {
          perspective: 1000px;
        }

        .certificate-frame:hover {
          animation: subtle-swing 0.5s ease-in-out;
        }

        .certificate-tooltip {
          will-change: opacity;
        }

        @keyframes subtle-swing {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default Certificates;
