import {
  FaNetworkWired,
  FaCogs,
  FaLeaf,
  FaRecycle,
  FaBrain,
  FaClipboardCheck,
  FaHardHat,
  FaUsers,
  FaHandsHelping,
  FaMapMarkedAlt,
  FaIndustry,
  FaBolt,
  FaFlask,
  FaLaptopCode,
  FaChartLine,
  FaGlobe,
  FaHandshake,
  FaShieldAlt,
  FaBalanceScale,
  FaComments,
} from "react-icons/fa";
import { RiCpuLine } from "react-icons/ri";
import Image from "next/image";
import SectionTop from "@/components/SectionTop";

const Plan2035 = () => {
  const IntelligentInfrastructure = [
    {
      title: "Smart Grids, Smarter Futures",
      content:
        "Next-gen cables with built-in smart sensors will deliver real-time diagnostics, grid insights, and improved energy efficiency.",
      icon: <FaNetworkWired />,
    },
    {
      title: "Digital Twin Technology",
      content:
        "Every installation is virtually modeled, enabling predictive maintenance, smooth upgrades, and reduced downtime.",
      icon: <FaCogs />,
    },
    {
      title: "AI at the Core",
      content:
        "AI-driven systems will forecast failures, fine-tune performance, and autonomously apply network improvements.",
      icon: <RiCpuLine />,
    },
  ];

  const Data = [
    {
      sectionTitle: "Net-Zero Manufacturing",
      sectionSubtitle: "Green is Our Gold Standard",
      sectionDesc:
        "We are embedding sustainability not as an initiative, but as a core design principle. Our factories will be intelligent, waste-free, and powered by renewables.",

      img: "/plan_2035/green_gold.jpg",
      items: [
        {
          title: "Circular Material Loop",
          content: "Recycling of PVC, XLPE and responsible reuse programs.",
          icon: <FaRecycle />,
        },
        {
          title: "AI-Driven Optimization",
          content:
            "Reducing waste and energy use in conductor and polymer lines.",
          icon: <FaBrain />,
        },
        {
          title: "ESG Audit Launching FY2026 Q3",
          content:
            "A milestone in global transparency, performance, and ethics.",
          icon: <FaClipboardCheck />,
        },
        {
          title: "Net-Zero Pledge",
          content:
            "Full Scope 1, 2, and 3 tracking. Lifecycle-based emissions accounting through ISO 14067 & ISO 14064-1.",
          icon: <FaLeaf />,
        },
      ],
    },
    {
      sectionTitle: "People and Community",
      sectionSubtitle: "One Current, Many Communities",
      sectionDesc:
        'People First | Respect for All | Empathy Always. We believe every connection begins with people. We will rise by lifting others—because "One Team, One Current" is not just a belief, but our DNA.',
      img: "/plan_2035/current_communities.jpg",
      items: [
        {
          title: "Workplace Safety",
          content:
            "Designing ergonomically sound and safe spaces, especially in high-voltage operations.",
          icon: <FaHardHat />,
        },
        {
          title: "Inclusive Culture",
          content:
            "Diverse talent, equitable policies, and inclusive governance.",
          icon: <FaUsers />,
        },
        {
          title: "Community Impact",
          content:
            "Socio-technical upliftment for local youth, schools, and micro-entrepreneurs.",
          icon: <FaHandsHelping />,
        },
      ],
    },
    {
      sectionTitle: " Global Impact",
      sectionSubtitle: "Global Agility, Indian Soul",
      sectionDesc:
        "Hybrid Expansion | Localized Excellence | Frugal Innovation. By 2035, we will have expanded across Southeast Asia, Middle East, and Africa. Yet we remain agile, grounded, and deeply Indian at heart.",
      img: "/plan_2035/global_impact.jpg",
      items: [
        {
          title: "Regional Innovation Hubs",
          content:
            "Tailored solutions for local infrastructure, regulatory needs, and climates.",
          icon: <FaMapMarkedAlt />,
        },
        {
          title: "Local Manufacturing",
          content: "Empowering regional ecosystems and job creation.",
          icon: <FaIndustry />,
        },
        {
          title: "Faster than Giants",
          content:
            "Where multinationals are rigid, we will be responsive and adaptive.",
          icon: <FaBolt />,
        },
      ],
    },

    {
      sectionTitle: " Innovation And Service ",
      sectionSubtitle: "Co-Innovation Ecosystem",
      sectionDesc:
        "Customer Co-Creation | Real-Time Feedback | Digital Portals. We will build with our customers, not just for them.",
      img: "/plan_2035/Co-Innovation.jpg",
      items: [
        {
          title: "Solution Labs",
          content:
            "Clients co-developing everything from fire-survival systems to solar integrations.",
          icon: <FaFlask />,
        },
        {
          title: "Digital Platforms",
          content:
            "Live project monitoring, cable health analytics, and simulation tools.",
          icon: <FaLaptopCode />,
        },
        {
          title: "Predictive Service Models",
          content:
            "Maintenance alerts before the customer even knows they need them.",
          icon: <FaChartLine />,
        },
      ],
    },

    {
      sectionTitle: " GlobalRD And Partnerships ",
      sectionSubtitle: "R&D, Partnerships & Digital Leap",
      sectionDesc: "Tech Alliances | Talent Incubation | Full Digitalization",
      img: "/plan_2035/R&D.jpg",
      items: [
        {
          title: "Global R&D Hubs",
          content:
            "Investing in polymer science, AI systems, and energy grid R&D.",
          icon: <FaGlobe />,
        },
        {
          title: "Partnerships",
          content:
            "From AI startups to material science labs —collaborating to accelerate.",
          icon: <FaHandshake />,
        },
        {
          title: "Digital Factories",
          content:
            "Every unit linked through a single AI-powered platform, with real-time operational control.",
          icon: <FaIndustry />,
        },
      ],
    },
    {
      sectionTitle: " Governance And Compliance ",
      sectionSubtitle: "Governed by Purpose",
      sectionDesc:
        "Serve with Purpose | ESG Oversight | Ethical Standards. Our board and executive leadership are directly accountable for our ESG performance.",
      img: "/plan_2035/govenment.jpg",
      items: [
        {
          title: "Transparent Procurement & Anti-Corruption Measures",
          content: "Transparent Procurement & Anti-Corruption Measures",
          icon: <FaShieldAlt />,
        },
        {
          title: "Regulatory and Voluntary Compliance",
          content: "Regulatory and Voluntary Compliance",
          icon: <FaBalanceScale />,
        },
        {
          title: "Stakeholder Voice in Decision-Making",
          content: "Stakeholder Voice in Decision-Making",
          icon: <FaComments />,
        },
      ],
    },
  ];

  return (
    <>


     

      <SectionTop
        // chip="Beyond Cables. Beyond Current. Beyond Limits."
        chip=""
        title="Charting a Visionary Path to 2035"
        description="By 2035, we envision a world where Bonton Cables is not only
            electrifying infrastructure—but inspiring transformation. This
            roadmap is our commitment to shape that world. It merges
            sustainability, technology, and purpose to create a future that is
            bold, intelligent, and ethically grounded."
        imageUrl="/sectiontop/plan2035.jpg"
        btnText="Explore Our Vision"
        link="#plan2035-vision"
      />

      <div className="parent py-[100px]  relative">
        <div className="container flex items-center flex-col gap-4 px-4 ">
          <span
            className="chip"
            data-aos="fade-up"
            data-aos-delay=" 200"
            id="plan2035-chip"
          >
            {" "}
            Intelligent Infrastructure
          </span>
          

          <h2
            data-aos="fade-up"
            data-aos-delay=" 200"
            data-aos-anchor="#plan2035-chip"
            className=" text-4xl leading-10 font-bold text-center "
          >
            From Powering to Predicting Future
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay=" 400"
            data-aos-anchor="#plan2035-chip"
            className="text-center  max-w-[800px] text-black50"
          >
            We are no longer just supplying cables—we are powering intelligent
            infrastructure.With AI-powered electrical ecosystems, Bonton will
            help future cities thrive with safety, speed, and self-healing
            networks.
          </p>

          <div className="flex flex-wrap gap-8 items-stretch justify-center mt-8">
            {IntelligentInfrastructure.map((item, index) => (
              <div
                className="flex flex-col gap-4 items-center w-[300px] h-full p-4 bg-black/5 rounded-xl"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="icon text-6xl text-emerald-500">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-center">{item.title}</h3>
                <p className="text-center text-black50">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="plan2035-vision"></div>

      {Data.map((item, index) => (
        <div
          key={index}
          className={`parent ${index % 2 === 0 ? "bg-[#121722]" : ""}`}
        >
          <div
            className={`container !max-w-[1200px] flex  items-center flex-col-reverse ${
              index % 2 === 0 ? "lg:flex-row " : "lg:flex-row-reverse"
            }  gap-6 `}
          >
            <div
              className={`w-full lg:w-1/2 h-full flex flex-col gap-4 p-4 items-center lg:items-start justify-center ${
                index % 2 === 0 ? "py-[50px]" : ""
              }`}
            >
            
              <span className={`chip ${index % 2 === 0 ? "!text-white" : ""}`} data-aos="fade-up">
                {item.sectionTitle}
              </span>
              <h2
                className={` text-4xl leading-8 font-bold text-center lg:text-left ${index % 2 === 0 ? "text-white" : ""}`}
                id={`plan2035-s${index}-h2`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {item.sectionSubtitle}
              </h2>

              <p
                className={` text-center lg:text-left ${index % 2 === 0 ? "text-white/70" : ""}`}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-anchor={`#plan2035-s${index}-h2`}
              >
                {item.sectionDesc}
              </p>

              <div className="flex flex-col gap-4 mt-8">
                {item.items.map((item, idx) => (
                  <div
                    className="flex items-start gap-4"
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                    data-aos-anchor={`#plan2035-s${index}-h2`}
                  >
                    <div className="icon text-2xl text-emerald-500">
                      {item.icon}
                    </div>
                    <div className="flex flex-col -mb-1 ">
                      <p className={`text-lg font-bold ${index % 2 === 0 ? "text-white" : ""}`}>{item.title}</p>
                      <p className={index % 2 === 0 ? "text-white/70 " : "text-black50 "}>
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-[300px] lg:h-[600px] flex items-center justify-center">
              <div className="h-full w-full relative overflow-hidden">
                <Image
                  src={item.img}
                  fill
                  alt="team"
                  className="object-cover"
                  data-aos="fade-up"
                  data-aos-delay="00"
                />
                {index % 2 === 0 && <div className="absolute w-1/2 left-0 inset-y-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121722] to-transparent"></div>}
                {index % 2 === 0 && <div className="absolute w-1/2 right-0 inset-y-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#121722] to-transparent"></div>}
                {index % 2 !== 0 && <div className="absolute w-1/2 left-0 inset-y-0 bg-gradient-to-t lg:bg-gradient-to-r from-white to-transparent"></div>}
                {index % 2 !== 0 && <div className="absolute w-1/2 right-0 inset-y-0 bg-gradient-to-t lg:bg-gradient-to-l from-white to-transparent"></div>}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="parent py-[50px]  relative">
        <div className="container pt-[100px] pb-[0px] !w-[calc(100%-20px)] rounded-2xl flex items-center flex-col gap-4 px-4 bg-gradient-to-br from-[#121722]  via-emerald-600 to-blue-900 text-white ">
          <h2
            data-aos="fade-up"
            data-aos-delay=" 00"
            id="plan2035-closer"
            className=" text-5xl leading-12 font-bold text-center "
          >
            Our Promise for 2035
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="#plan2035-closer"
            className="text-center  max-w-[800px] text-white"
          >
            We don’t just make cables. We co-create a smarter, safer, and more
            sustainable future and deliver connections with conscience.
            Together, we go beyond cables, beyond current, beyond limits.
          </p>

          <h3
            data-aos="fade-up"
            data-aos-delay=" 00"
            data-aos-anchor="#plan2035-closer"
            className=" text-[10vw] mt-8 leading-[100%] font-[900] text-center uppercase bg-gradient-to-t from-white/50  to-transparent  bg-clip-text text-transparent"
          >
            WE ARE BONTON
          </h3>
        </div>
      </div>
    </>
  );
};

export default Plan2035;
