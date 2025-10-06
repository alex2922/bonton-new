"use client";

import Image from "next/image";
import SectionTop from "@/components/SectionTop";

const page = () => {
  const teamMembers = [
    {
      name: "Mr. Lajpat Verma",
      designation: "Plant Head - Unit 1",
      description:
        "Possesses 29 years of experience in Operations and Quality Assurance. Associated with Bonton Cables since 2007.",
      image: "/team/Lajpat Verma.jpg",
    },
    {
      name: "Mr. E.J. Francis",
      designation: "Assistant General Manager: Kochi",
      description:
        "Brings 30 years of experience in sales and marketing. Serving the company since 2008.",
      image: "/team/Mr. E.J. Francis.jpg",
    },
    {
      name: "Mr. Bhupesh Nangia",
      designation: "Assistant General Manager: Sales & Marketing (Projects)",
      description:
        "Possesses over 34 years of extensive experience in sales and marketing. Serving at Bonton Cables since 2018.",
      image: "/team/Bhupesh Nangia.jpg",
    },
    {
      name: "Mr. Vivek Aggarwal",
      designation: "Assistant General Manager: Jaipur",
      description:
        "Brings 30 years of experience in sales and marketing. Serving the organization since 2011.",
      image: "/team/Vivek Aggarwal.jpg",
    },
    {
      name: "Mr. Anil Pathania",
      designation: "Assistant General Manager: Punjab",
      description:
        "Has over 25 years of experience in sales and marketing. Became part of Bonton Cables in 2022.",
      image: "/team/Mr. Anil Pathania.jpg",
    },
    {
      name: "Mr. Puneet Rai",
      designation: "Assistant General Manager: Sales & Marketing",
      description:
        "Carries 29 years of strong industry experience in sales and marketing. With Bonton Cables since 2010.",
      image: "/team/Puneet Rai.jpg",
    },
    {
      name: "Mr. Anil Dua",
      designation: "Assistant General Manager: Institutional Sales & Marketing",
      description:
        "Has 25 years of corporate experience in sales and marketing. Joined Bonton Cables in 2024.",
      image: "/team/Anil Dua .jpg",
    },
    {
      name: "Shikha Dubey",
      designation: "Chief Financial Officer (CFO)",
      description:
        "Brings over 11 years of corporate experience in the finance sector. Associated with Bonton Cables since 2019.",
      image: "/team/Shikha Dubey.jpg",
    },
    {
      name: "Mr. Deepak Kumar Rai",
      designation: "Plant Head - Unit 2",
      description:
        "Holds over 22 years of experience in Operations and Quality Assurance. A key contributor to Bonton Cables since 2003.",
      image: "/team/Deepak Kumar Rai.jpg",
    },
    {
      name: "Mr. Anand Rajan Srivastava",
      designation: "Deputy General Manager: Quality Assurance",
      description:
        "Holds over 34 years of expertise in Quality Assurance and Operations. Contributing to Bonton Cables since 2016.",
      image: "/team/Anand Rajan Srivastava.jpg",
    },
    {
      name: "Neetika Ghai",
      designation:
        "Assistant General Manager: Business Development (Private Projects)",
      description:
        "Brings 11+ years of experience in sales and marketing. Working with Bonton Cables since 2014.",
      image: "/team/Neetika Ghai.JPG",
    },
    {
      name: "Mr. Ankit Singh",
      designation: "Quality Assurance: Head",
      description:
        "Has over 18 years of professional experience in Quality Assurance and Operations. Joined the company in 2018.",
      image: "/team/Mr. Ankit Singh.jpg",
    },
    {
      name: "Mr. Sandeep Kumar",
      designation: "Purchase Head",
      description:
        "Possesses over 19 years of professional expertise in Purchase and Operations, and has been a valued member of the company since 2018.",
      image: "/team/DSC_9142 - SANDEEP KUMAR.jpg",
    },
    {
      name: "Mr. Tarun Mann",
      designation: "Manager: Logistics",
      description:
        "Brings over 16 years of professional expertise in Infrastructure and Logistics, serving the company since 2009.",
      image: "/team/Mr. Tarun Mann.jpg",
    },
    {
      name: "Mr. Ajay Chandulal Vyas",
      designation: "Assistant General Manager: Punjab",
      description:
        "Possesses over 25 years of professional expertise in Sales and Marketing, and became part of the company in 2024.",
      image: "/team/Ajay Chandulal Vyas.jpg",
    },
    {
      name: "Mr. Mohit Goel",
      designation: "Sales & Marketing",
      description:
        "Possesses over 12 years of professional expertise in Sales and Marketing, and became part of the company in 2022.",
      image: "/team/Mohit Goel.jpg",
    },
  ];




  return (
    <>
 
      <SectionTop
        chip=""
        title="Our Leadership Team"
        description="Our leadership team brings together decades of industry expertise, driving innovation and excellence in every aspect of our operations. Get to know the professionals who make Bonton Cables a trusted name in the industry."
        imageUrl="/sectiontop/team.jpg"
        btnText="Meet Our Team"
        link="/our-team"
      />

      <div className="parent py-[80px] bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[var(--accent1)]/20"
              >
                {/* Image */}
                <div className="relative h-66 flex items-center justify-center p-8">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--accent1)]/20 group-hover:border-[var(--accent1)] transition-colors duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mt-[-50px]">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[var(--accent1)] transition-colors mb-2">
                        {member.name}
                      </h3>
                      <p className="text-xs text-[var(--accent1)] font-semibold mb-3">
                        {member.designation}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
