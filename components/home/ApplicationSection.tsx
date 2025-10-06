"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ApplicationSection = () => {
  
  const data = [
    { title: "Construction & Infrastructure", link: "/sectors_of_work", img: "/sectors/4.webp" },
    { title: "Automotive Industry", link: "/sectors_of_work", img: "/sectors/3.webp" },
    { title: "Healthcare & Hospitals", link: "/sectors_of_work", img: "/sectors/5.jpeg" },
    { title: "Government & Metro Projects", link: "/sectors_of_work", img: "/sectors/1.webp" },
    { title: "Others Applications", link: "/sectors_of_work", img: "/sectors/Application.png" },
  ];

  return (
    <>
      <div className="parent pt-[100px]">
        <div className="container items-center flex flex-col gap-4 px-4">
          
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-[800px] text-4xl font-bold text-center"
          >
            Applications
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-[800px]  text-center"
          >
            Our advanced cable solutions serve critical infrastructure across multiple sectors, 
            ensuring reliability and performance where it matters most.
          </p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="w-full h-[500px] gap-1 hidden lg:flex mt-8 mb-[100px] px-4">
        {data.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="application-slide relative flex-1 overflow-hidden rounded-lg group cursor-pointer transition-all duration-300 hover:flex-[1.2]"
          >
            <Image src={item.img} className="object-cover transition-transform duration-300 group-hover:scale-105" fill alt={item.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <h3 className="absolute bottom-0 left-0 right-0 p-6 text-center text-white font-bold text-xl leading-tight z-10">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>

      {/* Mobile/Tablet View with Swiper */}
      <div className="w-full h-[400px] lg:hidden mt-8 mb-[100px] px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
            bulletClass: 'swiper-pagination-bullet',
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className="w-full h-full application-swiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <Link
                href={item.link}
                className="block relative w-full h-full overflow-hidden rounded-lg group cursor-pointer "
              >
                <Image 
                  src={item.img} 
                  className="object-cover transition-transform duration-300 group-hover:scale-105" 
                  fill 
                  alt={item.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-lg leading-tight text-center">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .application-slide {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }
        
        .application-swiper .swiper-pagination {
          bottom: 20px !important;
          display:none !important;
        }
        
        .application-swiper .swiper-slide {
          height: 100% !important;
        }
        
        .application-swiper .swiper-slide-active {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
};

export default ApplicationSection;