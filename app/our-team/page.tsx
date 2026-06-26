"use client";

import Image from "next/image";
import SectionTop from "@/components/SectionTop";

const page = () => {
  const teamMembers = [
    {
      name: "Mr. Vivek Yadav",
      designation: "Chief Executive Officer",
      image: "/team/Vivek Yadav.jpg",
    },
    {
      name: "Shikha Dubey",
      designation: "Chief Financial Officer (CFO)",
      image: "/team/Shikha Dubey.jpg",
    },
    {
      name: "Mr. Subrata Sen",
      designation: "Vice President - Sales and Business Development",
      image: "/team/Subrata Sen.jpg",
    },
    {
      name: "Mr. Bhupesh Nangia",
      designation: "General Manager: Sales & Marketing (Projects)",
      image: "/team/Bhupesh Nangia.jpg",
    },
    {
      name: "Neetika Ghai",
      designation: "General Manager: Business Development (Private Projects)",
      image: "/team/Neetika Ghai.JPG",
    },
    {
      name: "Mr. Lajpat Verma",
      designation: "Plant Head - Unit 1",
      image: "/team/Lajpat Verma.jpg",
    },
    {
      name: "Mr. Deepak Kumar Rai",
      designation: "Plant Head - Unit 2",
      image: "/team/Deepak Kumar Rai.jpg",
    },
    {
      name: "Mr. Puneet Rai",
      designation: "Deputy General Manager: Sales & Marketing",
      image: "/team/Puneet Rai.jpg",
    },
    {
      name: "Mr. Anand Rajan Srivastava",
      designation: "Deputy General Manager: Quality Assurance",
      image: "/team/Anand Rajan Srivastava.jpg",
    },
    {
      name: "Mr. E.J. Francis",
      designation: "General Manager: Kochi",
      image: "/team/Mr. E.J. Francis.jpg",
    },
    {
      name: "Mr. Vivek Aggarwal",
      designation: "General Manager: Jaipur",
      image: "/team/Vivek Aggarwal.jpg",
    },
    {
      name: "Mr. Anil Pathania",
      designation: "General Manager: Punjab",
      image: "/team/Mr. Anil Pathania.jpg",
    },
  ];

  return (
    <>
      <SectionTop
        chip=""
        title="Our Leadership Team"
        description="Our leadership team brings together decades of industry expertise, driving innovation and excellence in every aspect of our operations."
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
                <div className="p-6">
                  <div className="mt-[-50px]">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-black group-hover:text-[var(--accent1)] transition-colors mb-2">
                        {member.name}
                      </h3>
                      <p className="text-xs text-[var(--accent1)] font-semibold">
                        {member.designation}
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
