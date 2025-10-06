
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <div className="parent  py-[100px]">
      <div className="container flex items-center flex-col lg:flex-row gap-6 px-4">
        <div className="w-full lg:w-1/2 h-full flex items-center  justify-center">
          <video
            src="/about/About.mp4"
            width={500}
            height={500}
            className="rounded-lg object-cover"
            data-aos="fade-up"
            data-aos-delay="0"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col gap-4 items-center lg:items-start justify-center ">
          <h2
            className=" text-4xl leading-8 font-bold text-center lg:text-left"
            id="home-about-h2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About Us
          </h2>

          <p
            className=" text-center lg:text-left"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="#home-about-h2"
          >
            With over <strong>15 years</strong> of engineering excellence, Bonton is India&apos;s
            most certified cable company, holding global accreditations like UL
            and IATF 16 949:2016. Our <strong>25+ product categories</strong> serve critical
            infrastructure, and our network of <strong>1,000+ partners</strong> ensures
            nationwide delivery of superior, future-ready solutions built for
            performance, safety, and sustainability.
          </p>

          <Link
            className="btn"
            href="/about"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-anchor="#home-about-h2"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
