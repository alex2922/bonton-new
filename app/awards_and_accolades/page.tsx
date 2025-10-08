import Certificates from "@/components/home/Certificates";
import SectionTop from "@/components/SectionTop";
import TiltWrapper from "@/components/TiltWrapper";
import Image from "next/image";
import Link from "next/link";

const Plan2035 = () => {
  const awards = [
    {
      title: "First Prize for EarthCare & Environmental Control",
      img: "/awards/6.png",
      chip: "Environmental Excellence",
      event: "Awarded for Two Consecutive Years",
      desc: "At Bonton Cables, we don't just manufacture cables — we engineer with a conscience. Our commitment to sustainable innovation and responsible manufacturing was honored with the First Prize for EarthCare & Environmental Control for two consecutive years — a testament to our unwavering dedication to the planet.",
      info: [
        {
          title: "🌱 What This Means:",
          desc: "This prestigious award recognizes companies demonstrating exceptional environmental stewardship, sustainable production practices, and eco-friendly product innovations. Being awarded twice reaffirms our long-term leadership in green manufacturing within the Indian wire and cable industry.",
        },
        {
          title: "🌐 Why We Were Honoured:",
          desc: "We are India's most certified cable company, holding over 15+ national and international certifications including RoHS 2, ISO 14001, REACH, and CE, ensuring every product we create respects both people and planet. We pioneered zero-halogen, lead-free, and low-smoke cabling solutions, including our Fire Survival and Building Wires that are both safe for human health and sustainable in design. Our manufacturing units operate with reduced emissions, optimized energy efficiency (ISO 50001 certified), and in-house PVC compounding that minimizes material waste. Our cables enable smart cities, solar infrastructure, and EV charging ecosystems, powering not just buildings — but the future of clean, connected living.",
        },
      ],
    },
    {
      title: "Curtain‑Raiser Partner – PACC 2019",
      img: "/awards/1.png",
      chip: "Government Partnership",
      event: "Surakshit Bharat initiative",
      desc: "We were selected as a Curtain‑Raiser Partner by the PACC 2019 campaign under the Government’s Surakshit Bharat initiative—a flagship program aimed at strengthening India’s safety and emergency readiness. As a lead partner in launching this national campaign, we played a pivotal role in shaping the narrative around fire safety and public security awareness from the very outset. This honor reflects our early engagement in strategic, high‑impact safety initiatives.",
      info: [
        {
          title: "Our impact & vision",
          desc: "We continue to align with evolving national safety frameworks, contributing proactively to campaigns for smart infrastructure, IoT-enabled safety systems, and next‑gen readiness for urban resilience.",
        },
      ],
    },
    {
      title: "Long‑Term Association",
      img: "/awards/2.png",
      chip: "Quality Excellence",
      event: "Recognition from DQS",
      desc: "We have earned the Long‑Term Association accolade from DQS Certification India Pvt. Ltd., one of the world’s most trusted global certification bodies, renowned for its rigorous management systems and ISO audits.",
      info: [
        {
          title: "What it signifies?",
          desc: "This recognition underscores our unwavering commitment to operational excellence, quality management, and compliance, sustained over years of collaboration with DQS. It validates our consistent pursuit of global standards across ISO 9001, ISO 14001, ISO 45001, and related systems.",
        },
        {
          title: "Looking ahead",
          desc: "Building on this long-term partnership, we aim to elevate our certifications further—integrating sustainability, energy‑management, and cyber‑security standards to enable safer and smarter infrastructure ecosystems.",
        },
      ],
    },
    {
      title: "Participation Award",
      img: "/awards/3.png",
      chip: "Industry Recognition",
      event: "Fire & Security India Expo (FSIE), Mumbai",
      desc: "We received a Participation Award from Fire & Security India Expo (FSIE) for our presence at their Mumbai exhibitions at the Bombay Exhibition Centre—India’s premier platform for fire safety, building automation, and emergency response innovation DQS.",
      info: [
        {
          title: "Why it matters?",
          desc: "Our engagement at FSIE placed us alongside industry leaders in showcases of cutting‑edge safety technologies—from AI‑driven detectors to automated suppression systems. Our efforts highlighted our vision to integrate future‑ready cabling solutions with next‑gen fire safety ecosystems.",
        },
        {
          title: "Our forward momentum",
          desc: "We remain an active presence in FSIE and similar forums, positioning our product roadmap at the intersection of innovation, safety, compliance, and smart connectivity.",
        },
      ],
    },
    {
      title: "Participation Award",
      img: "/awards/4.png",
      chip: "Architecture & Design",
      event: " CAI Expo (Build & Design), Goa 2023",
      desc: "At The Construction Architecture Interior (CAI) Expo 2023, held at the Dr. Shyama Prasad Mukherjee Stadium in Goa, we were honoured with a Participation Award for showcasing best-in-class cabling infrastructure solutions tailored for contemporary architecture and interior design spaces.",
      info: [
        {
          title: "Why this stood out?",
          desc: " CAI Expo brings together leading architects, engineers, builders, and designers. Our presence highlighted how our future‑facing cabling technologies support integrated smart spaces—from elegant interiors to sustainable multifamily and commercial developments.",
        },
        {
          title: "Our future path",
          desc: " We are reinforcing our foothold in architecture‑tech synergy—developing cabling solutions optimized for energy‑efficient, digitally immersive, modular, and design‑centric buildings.",
        },
      ],
    },
    {
      title: "Sponsorship Award",
      img: "/awards/5.png",
      chip: "Industry Leadership",
      event: "Builders’ Association of India, Rajasthan (Jaipur Centre)",
      desc: "We were recognized with a Sponsorship Award by the Builders’ Association of India (BAI), Rajasthan (Jaipur Centre) for our support of industry development initiatives at regional and national forums CeraiteBAI Online.",
      info: [
        {
          title: "Strategic significance:",
          desc: "BAI is India’s apex construction body, representing over 20,000 builders under affiliated centres across the country. Being honored by the Rajasthan chapter underscores our role in supporting leadership forums, knowledge‑sharing events, and regional planning dialogues.",
        },
        {
          title: "Our strategic commitment:",
          desc: "We continue to sponsor and engage in sector‑defining initiatives—fostering collaboration between construction, certification, and safety stakeholders as we help build smarter cities with sustainable and secure infrastructure.",
        },
      ],
    },
  ];

  return (
    <>
      <SectionTop
        chip="Beyond Cables. Beyond Current. Beyond Limits."
        title="Awards & Accolades"
        description="Celebrating our journey of excellence, innovation, and industry leadership. Each recognition reflects our commitment to quality, safety, and sustainable growth."
        imageUrl="/sectiontop/awards.jpg"
        btnText="Be a Part of Our Journey"
        link="/career-opportunities"
      />
      {awards.map((award, index) => (
        <div key={index} className={`parent  relative   ${index % 2 !== 0 ? 'bg-gradient-to-br from-[#121722] via-emerald-500 to-[var(--accent3)]' : 'bg-gradient-to-br from-[#121722] via-[var(--accent2)] to-[var(--accent3)]'}`}>
           <Image
                  src="/sectiontop/awards.jpg"
                  alt={award.title}
                  fill
                  className="object-cover absolute top-0 left-0 -z-1 opacity-4"
                />
          <div className="container px-2 py-[20px] flex flex-col gap-8">
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="w-full flex flex-col lg:flex-row   overflow-hidden"
            >
              <div className="relative w-[100%] lg:max-w-[500px] p-3 lg:p-6 h-[300px] lg:h-auto lg:aspect-square">
                {/* <Image src="/awards/bg.png" alt={award.title} fill className="object-cover absolute top-0 left-0 -z-1" /> */}
                {/* <div className=" bg-gradient-to-r from-[#121722] h-full w-full absolute top-0 left-0 -z-1 via-[var(--accent2)] to-[var(--accent3)]"></div> */}

                <TiltWrapper
                  className="relative w-full h-full z-[2]"
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  scale={1.05}
                  transitionSpeed={300}
                >
                  <Image
                    src={award.img}
                    alt={award.title}
                    fill
                    className="object-contain"
                  />
                </TiltWrapper>
              </div>
              <div className="flex w-full flex-col gap-4  lg:p-6   relative">
               
                <div className="flex w-full flex-col gap-4 z-20">
                  <span className={`chip !text-white`}>{award.chip}</span>
                  <h3 className={`font-bold text-2xl -mb-4 text-white`}>
                    {award.title}
                  </h3>
                  <h4 className={`font-bold text-md text-white`}>
                    {award.event}
                  </h4>
                  <p className={` text-white`}>{award.desc}</p>

                  {award.info.map((info, idx) => (
                    <div
                      key={idx}
                      className={`flex  flex-col gap-2 p-4 rounded-xl 
                        ${index % 2 === 0 ? 'bg-gradient-to-br from-[#121722] via-emerald-900 to-[var(--accent3)]' : 'bg-gradient-to-br from-[#121722] via-[var(--accent2)] to-[var(--accent3)]'}`}
                    >
                      <h4 className="font-bold text-md text-white">
                        {info.title}
                      </h4>
                      <p className="text-white/90 ">{info.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Certificates />

      <div className="parent py-[100px]">
        <div className="container px-4 flex flex-col gap-8 justify-center items-center">
          <h2
            className=" text-4xl leading-8 font-bold text-center lg:text-left"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Commitment to <span>Excellence</span>
          </h2>

          <p className=" text-center " data-aos="fade-up" data-aos-delay="200">
            Across all these honors, namely partnerships, participation awards
            and sponsorship accolades, we demonstrate sustained leadership and
            alignment with India’s evolving infrastructure, safety, and quality
            standards. As we prepare our next growth phase, we embrace a path
            toward smart, resilient, and future‑proof cabling systems that
            integrate seamlessly with emerging digital/safety ecosystems.
          </p>

          <Link
            className="btn"
            href="/about"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Know More About Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Plan2035;
