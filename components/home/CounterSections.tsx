"use client";
import React from "react"; // ⬅️ Add this to access React.ReactNode
import CountUp from "react-countup";


const CounterData = [
  {
    title: "Projects Completed",
    count: 2000,
  },
  {
    title: "Channel Partners",
    count: 1000,
  },
  {
    title: "Pan India Offices",
    count: 25,
  },
  {
    title: "Years of Experience",
    count: 15,
  },

  // {
  //   title: "Skilled Professionals",
  //   count: 600,
  // },
  // {
  //   title: "Manufacturing Units (Current)",
  //   count: 2,
  //   additional:"(Bhiwadi, Kahrani)"
  // },
  // {
  //   title: "Manufacturing Units (Underway)",
  //   count: 1,
  //   additional:"(Salarpur)"
  // },
  // {
  //   title: "Product Categories",
  //   count: 25,
  // },
  // {
  //   title: "Channel Partners",
  //   count: 1000,
  // },
  // {
  //   title: "Wires Manufacturing Capacity",
  //   count: 15000,
  //   additional:"km/month"
  // },
  // {
  //   title: "Cables Manufacturing Capacity",
  //   count: 500,
  //   additional:"km/month"
  // },
  // {
  //   title: "Pan India Offices",
  //   count: 15,
  // },
  // {
  //   title: "Pan India Warehouses",
  //   count: 7,
  // },
];

const CounterSections = () => {
  return (
    <>
      <div className="parent relative bg-[#121722]">
        <div className="container px-4 py-[100px]">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">Our Achievements</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
            {CounterData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center`}
                data-aos="fade-up"
                data-aos-delay={index * 30}
              >
                <div className="text-5xl md:text-6xl font-extrabold leading-none">
                  <CountUp end={item.count} duration={5} />
                  <span className="text-3xl align-top">+</span>{" "}
                </div>
                <div className="mt-2 h-[3px] w-24 bg-gradient-to-r from-[var(--accent1)] to-emerald-400"></div>
                <div className="mt-3 text-base md:text-lg font-medium text-white ">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterSections;

