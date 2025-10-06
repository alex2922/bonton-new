import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import products from "@/data/products";
import Image from "next/image";
import Link from "next/link";

const HeaderProductsSlider = () => {
  return (
    <div className="parent relative z-50 bg-white shadow-md border-t border-gray-200">
      <div className="container header-swiper">
        <Swiper
          slidesPerView={2}
          breakpoints={{
       
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={`/products/${item.slug}`} className="product trans flex items-center gap-2 !p-0 overflow-hidden ">
                <div className="relative trans w-[60px] h-full">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    fill
                    className="object-cover trans"
                  />
                </div>
                <p className="whitespace-nowrap text-sm font-bold"> {item.name}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeaderProductsSlider;
