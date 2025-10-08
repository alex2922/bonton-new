import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";

const HomeCategoriesSections = () => {
  return (
    <div className="parent relative py-[50px] md:py-[100px] bg-[var(--accent1)]/5">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121722] via-emerald-500 to-transparent opacity-90 z-10"></div>
      <Image 
        src="/home/products.webp" 
        alt="Products Background" 
        fill 
        className="object-cover" 
      />
      
      <div className="container px-4 z-20 relative">
        {/* Header Section - Responsive Layout */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:flex md:items-center md:h-full">
          {/* Text Section */}
          <div className="w-full md:w-2/5 md:pr-8">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className=" text-2xl md:text-3xl lg:text-4xl leading-tight font-[900] text-white mb-4 md:mb-6"
            >
              Our Products
            </h2>
            
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-white/90 text-sm md:text-base mb-6 md:mb-8 leading-relaxed"
            >
              Discover our comprehensive range of high-quality cables designed for every application. From fire survival cables to solar solutions, we deliver reliability and performance.
            </p>
            <Link href="/products-category" className="btn" data-aos="fade-up" data-aos-delay="300">
              View All Products
            </Link>
          </div>
          
          {/* Products Slider */}
          <div className="w-full md:w-3/5 md:pl-8 mt-8 md:mt-0">
            <div className="relative">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="products-swiper"
              >
                {products.slice(0, 6).map((item, index) => (
                  <SwiperSlide key={index} className="h-auto">
                    <div className="group bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/20 h-full min-h-[400px]">
                      <div className="p-4 md:p-6 flex flex-col h-full">
                        {/* Product Image */}
                        <div className="relative h-32 md:h-40 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 mb-4 rounded-lg">
                          <div className="absolute inset-4">
                            <Image
                              src={item.images[1]}
                              alt={item.name}
                              fill
                              className="object-contain group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        {/* Product Details */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 group-hover:text-[var(--accent1)] transition-colors duration-300 line-clamp-1">
                              {item.name}
                            </h3>
                            <p className="text-gray-600 text-xs md:text-sm leading-tight line-clamp-4">
                             &quot; {item.shortDescription} &quot;
                            </p>
                          </div>
                          
                          <Link
                            href={`/products/${item.slug}`}
                            className="btn w-full text-center mt-3 md:mt-4 text-sm md:text-base py-2 md:py-3"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Navigation Buttons */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Swiper Styles for Product Cards */}
      <style jsx global>{`
        .products-swiper {
          padding-bottom: 40px !important;
          padding-left: 50px !important;
          padding-right: 50px !important;
        }
        
        .products-swiper .swiper-slide {
          height: auto !important;
          display: flex !important;
        }
        
        .products-swiper .swiper-pagination {
          position: absolute !important;
          bottom: 10px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          margin-top: 0 !important;
        }
        
        .products-swiper .swiper-button-prev,
        .products-swiper .swiper-button-next {
          top: 50% !important;
          transform: translateY(-50%) scale(0.75) !important;
          z-index: 20 !important;
        }
        
        .products-swiper .swiper-button-prev {
          left: 5px !important;
        }
        
        .products-swiper .swiper-button-next {
          right: 5px !important;
        }
        
        @media (max-width: 768px) {
          .products-swiper {
            padding-left: 30px !important;
            padding-right: 30px !important;
          }
          
          .products-swiper .swiper-button-prev {
            left: 2px !important;
          }
          
          .products-swiper .swiper-button-next {
            right: 2px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeCategoriesSections;
