"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

const clientStories = [
  {
    company: "Delhi Metro Rail Corporation Limited (DMRC)",
    tagline: "Connected across the skies of trust",
    testimonial: "The quality of Bonton's power and control cables meets our BS standards. Their FS Armoured, LT wires and Cables, and LSZH Copper cables have performed reliably throughout.",
    logo: "/3D Client Logos/DMRC.png"
  },
  {
    company: "GE (S) Jaipur",
    tagline: "A promise in every deal",
    testimonial: "We've been very satisfied with the PVC Single Core FRLS Copper Wires. The performance has been excellent and meets all our requirements.",
    logo: "/3D Client Logos/MES.png"
  },
  {
    company: "RELIANCE PROJECTS & PROPERTY MANAGEMENT SERVICES LIMITED",
    tagline: "Every client powers our circuit of success",
    testimonial: "The MICC Fire Survival Cables from Bonton, used for fire alarm systems at the Delhi Airport Metro Express Line, have been working smoothly and reliably.",
    logo: "/3D Client Logos/RELIANCE.png"
  },
  {
    company: "Sterling & Wilson",
    tagline: "Excellence in every connection",
    testimonial: "We've used both Fire Survival and LSZH Electric Cables from Bonton, and they've consistently delivered satisfactory results across all projects.",
    logo: "/3D Client Logos/Sterling & wilson.png"
  },
  {
    company: "Central Public Works Department (CPWD)",
    tagline: "Trusted by the nation",
    testimonial: "Bonton's wires and cables have met all our requirements. Performance has been nothing short of dependable and exceeds expectations.",
    logo: "/3D Client Logos/CPWD.png"
  },
  {
    company: "DLF",
    tagline: "Delivering on time, every time",
    testimonial: "They delivered the Fire Survival Armoured Copper Cables on time and exactly as promised. We're very satisfied with the quality and service.",
    logo: "/3D Client Logos/DLF.png"
  }
];

export default function TestimonialSlider() {
  return (
    <>
      {/* Desktop Version */}
      <div className="parent relative py-[100px] bg-[var(--accent1)]/5 hidden md:block">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#121722] via-blue-500 to-transparent opacity-90 z-10"></div>
        <Image 
          src="/home/products.webp" 
          alt="Testimonials Background" 
          fill 
          className="object-cover" 
        />
        
        <div className="container px-4 flex items-center h-full z-20 relative">
          {/* Text Section - 40% */}
          <div className="w-2/5 pr-8">
         
            
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className=" text-3xl lg:text-4xl leading-tight font-[900] text-white mb-6"
            >
              What Our Clients Say
            </h2>
            
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-white/90 text-base mb-8 leading-relaxed"
            >
              Discover why industry leaders trust Bonton for their critical infrastructure needs. Our clients&apos; success stories speak volumes about our commitment to quality and reliability.
            </p>
            
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex items-center space-x-4"
            >
              <div className="flex -space-x-2">
                {clientStories.slice(0, 3).map((story, index) => (
                  <div key={index} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={story.logo}
                      alt={story.company}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-white/80 text-sm">
                Trusted by 500+ companies
              </span>
            </div>
          </div>
          
          {/* Testimonials Slider - 60% */}
          <div className="w-3/5 pl-8">
            <div className="relative">
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="testimonial-swiper"
              >
                {clientStories.map((story, index) => (
                  <SwiperSlide key={index}>
                    <div className="group bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/20 h-full">
                      <div className="p-6 flex flex-col h-full">
                        {/* Logo and Company */}
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 mr-4 flex-shrink-0">
                            <Image
                              src={story.logo}
                              alt={`${story.company} logo`}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-gray-900 truncate">
                              {story.company}
                            </h3>
                            <p className="text-xs text-[var(--accent1)] font-medium">
                              {story.tagline}
                            </p>
                          </div>
                        </div>
                        
                        {/* Testimonial */}
                        <div className="flex-1 flex flex-col justify-between">
                          <p className="text-gray-700 text-sm leading-relaxed mb-4">
                            {story.testimonial}
                          </p>
                          
                          {/* Rating */}
                          <div className="flex items-center justify-between">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                </svg>
                              ))}
                            </div>
                            <div className="text-xs text-gray-500">
                              Verified Client
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="parent relative py-[50px] bg-[var(--accent1)]/5 md:hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#121722] via-blue-500 to-transparent opacity-90 z-10"></div>
        <Image 
          src="/home/products.webp" 
          alt="Testimonials Background" 
          fill 
          className="object-cover" 
        />
        
        <div className="container px-4 z-20 relative">
          {/* Mobile Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-white/90 text-sm md:text-base mb-6">
              Trusted by industry leaders worldwide
            </p>
            
            {/* Client Logos */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex -space-x-2">
                {clientStories.slice(0, 3).map((story, index) => (
                  <div key={index} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={story.logo}
                      alt={story.company}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-white/80 text-xs ml-2">
                Trusted by 500+ companies
              </span>
            </div>
          </div>
          
          <div className="relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="testimonial-swiper"
            >
              {clientStories.map((story, index) => (
                <SwiperSlide key={index}>
                  <div className="group bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/20 h-full">
                    <div className="p-5 flex flex-col h-full">
                      {/* Logo and Company */}
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 mr-3 flex-shrink-0">
                          <Image
                            src={story.logo}
                            alt={`${story.company} logo`}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs font-semibold text-gray-900 truncate">
                            {story.company}
                          </h3>
                          <p className="text-xs text-[var(--accent1)] font-medium">
                            {story.tagline}
                          </p>
                        </div>
                      </div>
                      
                      {/* Testimonial */}
                      <div className="flex-1 flex flex-col justify-between">
                        <p className="text-gray-700 text-xs leading-relaxed mb-3">
                          {story.testimonial}
                        </p>
                        
                        {/* Rating */}
                        <div className="flex items-center justify-between">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                              </svg>
                            ))}
                          </div>
                          <div className="text-xs text-gray-500">
                            Verified
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}