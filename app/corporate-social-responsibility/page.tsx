"use client";
import {
  FaSchool,
  FaHandsHelping,
  FaHeart,
  FaDownload,
  FaFilePdf,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import SectionTop from "@/components/SectionTop";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CorporateSocialResponsibility = () => {
  // Custom styles for Swiper
  const swiperStyles = `
    .csr-swiper .swiper-button-next:after,
    .csr-swiper .swiper-button-prev:after {
      font-size: 18px;
      font-weight: bold;
    }
    
    .csr-swiper .swiper-pagination-bullet {
      background: rgba(255, 255, 255, 0.5);
      opacity: 1;
      width: 12px;
      height: 12px;
      margin: 0 6px;
    }
    
    .csr-swiper .swiper-pagination-bullet-active {
      background: #10b981;
      transform: scale(1.2);
    }
    
    .csr-swiper .swiper-button-next,
    .csr-swiper .swiper-button-prev {
      color: white;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-top: -20px;
      backdrop-filter: blur(4px);
      transition: all 0.3s ease;
    }
    
    @media (min-width: 1024px) {
      .csr-swiper .swiper-button-next,
      .csr-swiper .swiper-button-prev {
        width: 48px;
        height: 48px;
        margin-top: -24px;
      }
    }
    
    .csr-swiper .swiper-button-next:hover,
    .csr-swiper .swiper-button-prev:hover {
      background: rgba(0, 0, 0, 0.5);
      transform: scale(1.1);
    }
    
    .csr-swiper .swiper-button-next {
      right: 8px;
    }
    
    .csr-swiper .swiper-button-prev {
      left: 8px;
    }
    
    @media (min-width: 1024px) {
      .csr-swiper .swiper-button-next {
        right: 16px;
      }
      
      .csr-swiper .swiper-button-prev {
        left: 16px;
      }
    }
  `;
  const csrInitiatives = [
    {
      title: "Education & Community Development",
      subtitle: "Renovation of Government Primary School",
      description:
        "We helped transform a local government primary school into a Model School, creating a nurturing environment for learning. We invested in improved infrastructure – from renovating classrooms and facilities to upgrading the playground – to promote both academic excellence and sports.",
      impact: "Student enrollment increased from 300 to over 900 children",
      volunteerHours: "500+ volunteer hours",
      icon: <FaSchool />,
      images: [
        "/csr/school.jpg",
        "/csr/GOVT. SCHOOL .jpg",
        "/csr/GOVT. SCHOOL (1).jpg"
      ],
      details:
        "These holistic enhancements dramatically boosted student enrollment as families gained confidence in the school's quality. This is not a one-off project but a long-term partnership: our team has contributed 500+ volunteer hours over the years, mentoring students and supporting teachers. By staying engaged through regular volunteering and resource support, we ensure the school's progress is sustainable, making a lasting impact on the community's educational landscape.",
    },
    {
      title: "Women & Children Empowerment",
      subtitle: "Collaboration with BUDS (Bal Umang Drishya Sanstha)",
      description:
        "In collaboration with Bal Umang Drishya Sanstha (BUDS), we support orphaned and vulnerable girls – not just through funding, but through hands-on engagement and mentorship.",
      impact: "Supporting girls in martial arts, gymnastics, and handicrafts",
      volunteerHours: "Ongoing long-term collaboration",
      icon: <FaHandsHelping />,
      images: [
        "/csr/martial.jpg",
        "/csr/GIRLS.jpg",
        "/csr/GIRLS (1).png"
      ],
      details:
        "Together with BUDS, we enable these young girls to learn and excel in unique pursuits like Kudos (martial arts), Mallakhamb (traditional gymnastics), and handicrafts. This blend of sports and creative skills builds their confidence and opens new horizons. BUDS 'envisions a society where every child is provided every right regardless of their socio-economic standing', and our ongoing CSR partnership embodies that vision.",
    },
    {
      title: "Inclusive Education",
      subtitle:
        "Partnerships with Aastha Rehabilitation Society & Saksham Foundation",
      description:
        "We partner with Aastha Rehabilitation Society (Aastha Special School) and Saksham Foundation to empower differently-abled students through inclusive learning and vocational training.",
      impact:
        "Supporting children with intellectual, developmental, and visual disabilities",
      volunteerHours: "400+ volunteer hours",
      icon: <FaHeart />,
      images: [
        "/csr/diff.png",
        "/csr/BLIND.jpg",
        "/csr/BLIND (1).png"
      ],
      details:
        "Through our Aastha Special School initiative, we support children with intellectual and developmental disabilities. Our collaboration with Saksham Foundation focuses on students with visual impairments, teaching Braille, organizing inclusive learning sessions, and arranging accessible books (Braille and audio) for blind students.",
    },
  ];

  return (
    <>
      <style jsx>{swiperStyles}</style>
      <SectionTop
        // chip="Beyond Cables. Beyond Current. Beyond Limits."
        chip=""
        title="Corporate Social Responsibility"
        description="Empowering lives, one connection at a time — where sustainable
            impact meets the future we wire together. We are committed to
            sustainable development that extends beyond our industry, reaching
            into the community to drive positive change."
        imageUrl="/sectiontop/corporate.jpg"
        btnText="Explore Our Impact"
        link="#csr-initiatives"
      />

      <div className="parent aspect-[2/1] bg-red-200 relative">
        <Image
          src="/csr/gallery.webp"
          alt="CSR"
          fill
          className="object-cover absolute top-0 left-0 z-2"
        />
        <Image
          src="/home/wall.webp"
          alt="CSR"
          fill
          className="object-cover absolute top-0 left-0 z-1"
        />
      </div>

      {/* Combined CSR Section */}
      <div id="csr-initiatives" className="parent py-[100px]">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - CSR Policy Download */}
            <div
              className="flex flex-col gap-4 items-center bg-gradient-to-b from-[var(--accent1)] to-blue-800 px-8 py-12 text-white rounded-2xl h-full"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaFilePdf className="text-3xl" />
                <h3 className="text-2xl font-bold">CSR Policy Document</h3>
              </div>
              <p className="text-white/70 text-center mb-6">
                Download our comprehensive CSR policy and learn about our
                commitment to sustainable development
              </p>
              <Link
                className="btn !bg-[var(--accent2)] flex items-center gap-2"
                target="_blank"
                href="https://drive.google.com/file/d/1-DnSSj0xHImuOylvRFzxd_zxKatZSWGn/view"
              >
                <FaDownload />
                Download PDF
              </Link>
            </div>

            {/* Right Side - CSR Initiatives Content */}
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <span
                className="chip"
                data-aos="fade-up"
                data-aos-delay="200"
                id="csr-initiatives-chip"
              >
                Our Impact
              </span>

              <h2
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-anchor="#csr-initiatives-chip"
                className=" text-2xl md:text-4xl font-bold text-center lg:text-left"
              >
                Building Communities, One Initiative at a Time
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-anchor="#csr-initiatives-chip"
                className="text-center lg:text-left  text-black70"
              >
                We are committed to sustainable development that extends beyond
                our industry, reaching into the community to drive positive
                change. Our Corporate Social Responsibility (CSR) efforts focus
                on long-term partnerships that uplift education and empower the
                underprivileged.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSR Initiatives Cards */}
      {csrInitiatives.map((initiative, index) => (
        <div
          key={index}
          className={`parent ${index % 2 === 0 ? "bg-[#121722]" : ""}`}
        >
          <div
            className={`container !max-w-[1200px] flex items-center flex-col-reverse ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-6 lg:gap-6`}
          >
            <div
              className={`w-full lg:w-1/2 h-full flex flex-col gap-4 p-4 items-center lg:items-start justify-center ${
                index % 2 === 0 ? "py-[50px]" : ""
              }`}
            >
              <span
                className={`chip ${index % 2 === 0 ? "!text-white" : ""}`}
                data-aos="fade-up"
              >
                {initiative.title}
              </span>

              <h2
                className={` text-4xl leading-8 font-bold text-center lg:text-left ${
                  index % 2 === 0 ? "text-white" : ""
                }`}
                id={`csr-s${index}-h2`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {initiative.subtitle}
              </h2>

              <p
                className={` text-center lg:text-left ${
                  index % 2 === 0 ? "text-white/70" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-anchor={`#csr-s${index}-h2`}
              >
                {initiative.description}
              </p>

              <div className="flex flex-col gap-4 mt-8">
                <div
                  className="flex items-start gap-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-anchor={`#csr-s${index}-h2`}
                >
                  <div className="icon text-2xl text-emerald-500">
                    {initiative.icon}
                  </div>
                  <div className="flex flex-col -mb-1">
                    <p
                      className={`text-lg font-bold ${
                        index % 2 === 0 ? "text-white" : ""
                      }`}
                    >
                      Impact
                    </p>
                    <p
                      className={
                        index % 2 === 0 ? "text-white/70 " : "text-black50 "
                      }
                    >
                      {initiative.impact}
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-anchor={`#csr-s${index}-h2`}
                >
                  <div className="icon text-2xl text-emerald-500">
                    <FaHandsHelping />
                  </div>
                  <div className="flex flex-col -mb-1">
                    <p
                      className={`text-lg font-bold ${
                        index % 2 === 0 ? "text-white" : ""
                      }`}
                    >
                      Volunteer Commitment
                    </p>
                    <p
                      className={
                        index % 2 === 0 ? "text-white/70 " : "text-black50 "
                      }
                    >
                      {initiative.volunteerHours}
                    </p>
                  </div>
                </div>

                <p
                  className={`text-sm mt-4 ${
                    index % 2 === 0 ? "text-white/70" : "text-black70"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-anchor={`#csr-s${index}-h2`}
                >
                  {initiative.details}
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 h-[300px] lg:h-[700px] flex items-center justify-center -mx-4 lg:mx-0">
              <div className="h-full w-full relative overflow-hidden lg:rounded-lg">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  pagination={{ 
                    clickable: true,
                    el: '.swiper-pagination',
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="h-full w-full csr-swiper"
                  data-aos="fade-up"
                  data-aos-delay="00"
                >
                  {initiative.images.map((image, imageIndex) => (
                    <SwiperSlide key={imageIndex}>
                      <div className="h-full w-full relative">
                        <Image
                          src={image}
                          fill
                          alt={`${initiative.title} - Image ${imageIndex + 1}`}
                          className="object-cover"
                        />
                        {index % 2 === 0 && (
                          <div className="absolute w-1/2 left-0 inset-y-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121722] to-transparent"></div>
                        )}
                        {index % 2 === 0 && (
                          <div className="absolute w-1/2 right-0 inset-y-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#121722] to-transparent"></div>
                        )}
                        {index % 2 !== 0 && (
                          <div className="absolute w-1/2 left-0 inset-y-0 bg-gradient-to-t lg:bg-gradient-to-r from-white to-transparent"></div>
                        )}
                        {index % 2 !== 0 && (
                          <div className="absolute w-1/2 right-0 inset-y-0 bg-gradient-to-t lg:bg-gradient-to-l from-white to-transparent"></div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Custom Navigation Buttons */}
                <div className="swiper-button-next !text-white !w-10 !h-10 lg:!w-12 lg:!h-12 !mt-0 !top-1/2 !right-2 lg:!right-4 !transform !-translate-y-1/2 !bg-black/30 !rounded-full !backdrop-blur-sm hover:!bg-black/50 transition-all duration-300"></div>
                <div className="swiper-button-prev !text-white !w-10 !h-10 lg:!w-12 lg:!h-12 !mt-0 !top-1/2 !left-2 lg:!left-4 !transform !-translate-y-1/2 !bg-black/30 !rounded-full !backdrop-blur-sm hover:!bg-black/50 transition-all duration-300"></div>
                
                {/* Custom Pagination */}
                <div className="swiper-pagination !bottom-4 !left-1/2 !transform !-translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Closing Section */}
      <div className="parent py-[50px] relative">
        <div className="container pt-[100px] pb-[0px] !w-[calc(100%-20px)] rounded-2xl flex items-center flex-col gap-4 px-4 bg-gradient-to-br from-[#121722] via-emerald-600 to-blue-900 text-white">
          <h2
            data-aos="fade-up"
            data-aos-delay="00"
            id="csr-closer"
            className=" text-5xl leading-12 font-bold text-center"
          >
            Our Promise to Communities
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="#csr-closer"
            className="text-center  max-w-[800px] text-white"
          >
            We don&apos;t just make cables. We co-create a smarter, safer, and
            more sustainable future and deliver connections with conscience.
            Together, we go beyond business, beyond profits, beyond ourselves.
            As we scale with purpose, our vision extends beyond compliance.
            We&apos;re actively working toward net-zero operations, AI-optimized
            production efficiency, and a circular economy approach across our
            supply chain — all to power tomorrow&apos;s world more responsibly.
          </p>

          <h3
            data-aos="fade-up"
            data-aos-delay="00"
            data-aos-anchor="#csr-closer"
            className=" text-[10vw] mt-8 leading-[100%] font-[900] text-center uppercase bg-gradient-to-t from-white/50 to-transparent bg-clip-text text-transparent"
          >
            WE ARE BONTON
          </h3>
        </div>
      </div>
    </>
  );
};

export default CorporateSocialResponsibility;
