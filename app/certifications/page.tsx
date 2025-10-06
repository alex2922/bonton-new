"use client";
import Link from "next/link";
import { FaDownload, FaInfoCircle, FaCheckCircle, FaGlobe, FaShieldAlt, FaLeaf, FaCog, FaBuilding, FaCertificate } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      id: "iatf-16949",
      name: "IATF 16949:2016",
      issuingAuthority: "International Automotive Task Force",
      stakeholderRelevance: "Govt. Engineers, Industrial Consultants",
      guarantee: "Automotive-grade quality and global supply chain compliance",
      tooltip: "Guarantees global automotive-grade quality and consistency—important for govt. engineers and consultants in industrial and automotive projects.",
      logo: "/certificates/IATF.pdf", // Placeholder - you'll need to add actual logo images
      downloadFile: "/certificates/IATF.pdf",
      category: "Quality Management",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "iso-9001",
      name: "ISO 9001:2015",
      issuingAuthority: "International Standards Organization",
      stakeholderRelevance: "Contractors, Consultants, Govt. Engineers",
      guarantee: "Consistent quality management across products & processes",
      tooltip: "Ensures standardized quality management across all products and processes—critical for contractors and consultants to maintain trust in supply chains.",
      logo: "/certificates/ISO_9001.png", // Placeholder
      downloadFile: "/certificates/ISO_9001.pdf",
      category: "Quality Management",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "iso-14001",
      name: "ISO 14001:2015",
      issuingAuthority: "International Standards Organization",
      stakeholderRelevance: "Consultants, Architects, Govt. Engineers",
      guarantee: "Environmental management, sustainable practices",
      tooltip: "Confirms sustainable, eco-friendly manufacturing—reassures consultants, architects, and government engineers about environmental compliance.",
      logo: "/certificates/ISO_14001.png", // Placeholder
      downloadFile: "/certificates/Environmental_management_system.pdf",
      category: "Environmental",
      color: "from-green-500 to-green-600"
    },
    {
      id: "iso-45001",
      name: "ISO 45001:2018",
      issuingAuthority: "International Standards Organization",
      stakeholderRelevance: "Contractors, Govt. Engineers",
      guarantee: "Occupational health & safety for workforce and projects",
      tooltip: "Prioritizes occupational health and safety—essential for contractors and government engineers overseeing site safety standards.",
      logo: "/certificates/ISO_45001.png", // Placeholder
      downloadFile: "/certificates/ISO_45001.pdf",
      category: "Safety",
      color: "from-red-500 to-red-600"
    },
    {
      id: "iso-50001",
      name: "ISO 50001:2011",
      issuingAuthority: "International Standards Organization",
      stakeholderRelevance: "Consultants, Govt. Engineers",
      guarantee: "Energy efficiency & responsible resource management",
      tooltip: "Validates efficient energy management—gives consultants and engineers confidence in cost-effective and green project execution.",
      logo: "/certificates/ISO_50001.png", // Placeholder
      downloadFile: "/certificates/ISO_50001.pdf",
      category: "Energy",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: "iso-27001",
      name: "ISO/IEC 27001:2013",
      issuingAuthority: "International Standards Organization",
      stakeholderRelevance: "Govt. Engineers, Large Project Consultants",
      guarantee: "Information security, data confidentiality, and integrity",
      tooltip: "Secures information and data integrity—valuable for government engineers and consultants managing sensitive infrastructure projects.",
      logo: "/certificates/ISO_27001.png", // Placeholder
      downloadFile: "/certificates/ISO_27001.pdf",
      category: "Security",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "rohs-2",
      name: "RoHS 2 Compliant",
      issuingAuthority: "European Union (Directive 2011/65/EU)",
      stakeholderRelevance: "Contractors, Architects, Consultants",
      guarantee: "Free from hazardous substances (Lead, Cadmium, Mercury)",
      tooltip: "Guarantees cables are toxin-free (lead, cadmium, mercury)—important for contractors and architects ensuring safe building environments.",
      logo: "/certificates/RoHS_2.png", // Placeholder
      downloadFile: "/certificates/RoHS 2.pdf",
      category: "Compliance",
      color: "from-green-500 to-green-600"
    },
    {
      id: "reach",
      name: "REACH Compliant",
      issuingAuthority: "European Chemicals Agency (ECHA)",
      stakeholderRelevance: "Consultants, Architects, Govt. Engineers",
      guarantee: "Safe chemical use across supply chain, eco-safety",
      tooltip: "Ensures safe use of chemicals across the supply chain—important for consultants and govt. engineers focused on eco-safety compliance.",
      logo: "/certificates/REACH.png", // Placeholder
      downloadFile: "/certificates/REACH.pdf",
      category: "Compliance",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "ul-certified",
      name: "UL Certified",
      issuingAuthority: "Underwriters Laboratories (USA)",
      stakeholderRelevance: "Contractors, Architects, Consultants",
      guarantee: "Global benchmark for fire, electrical & safety testing",
      tooltip: "Represents global fire, electrical, and performance safety testing—trusted by contractors and architects in high-rise and critical builds.",
      logo: "/certificates/UL.png", // Placeholder
      downloadFile: "/certificates/UL.pdf",
      category: "Safety",
      color: "from-red-500 to-red-600"
    },
    {
      id: "ce-mark",
      name: "CE Mark",
      issuingAuthority: "European Union",
      stakeholderRelevance: "Consultants, Architects, Govt. Engineers",
      guarantee: "EU health, safety, and environmental compliance",
      tooltip: "Indicates compliance with EU safety, health, and environmental directives—critical for consultants and government engineers in export and international projects.",
      logo: "/certificates/CE.png", // Placeholder
      downloadFile: "/certificates/CE.pdf",
      category: "Compliance",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "gc-mark",
      name: "GC-Mark",
      issuingAuthority: "DQS (Germany)",
      stakeholderRelevance: "Consultants, Architects, Contractors",
      guarantee: "Trusted product certification for quality and reliability",
      tooltip: "Denotes trusted product certification by DQS—reassuring contractors, consultants, and architects of reliability and premium quality.",
      logo: "/certificates/GC_Mark.png", // Placeholder
      downloadFile: "/certificates/GC_Mark.pdf",
      category: "Quality",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: "smeta",
      name: "SMETA Confirmation",
      issuingAuthority: "Sedex Members Ethical Trade Audit",
      stakeholderRelevance: "Architects, Govt. Engineers, Consultants",
      guarantee: "Ethical practices in labor, health & safety, environment",
      tooltip: "Confirms ethical practices in labor, health & safety, and environment—important for architects and govt. engineers in global collaborations.",
      logo: "/certificates/SMETA.png", // Placeholder
      downloadFile: "/certificates/SMETA.pdf",
      category: "Ethics",
      color: "from-teal-500 to-teal-600"
    },
    {
      id: "nabl",
      name: "NABL Accredited Labs",
      issuingAuthority: "National Accreditation Board for Testing & Calibration Labs (India)",
      stakeholderRelevance: "Govt. Engineers, Contractors, Consultants",
      guarantee: "Independent lab testing, precision & reliable results",
      tooltip: "Validates precise, independent, and reliable product testing—critical for government engineers and consultants in project approvals.",
      logo: "/certificates/NABL.png", // Placeholder
      downloadFile: "/certificates/NABL.pdf",
      category: "Testing",
      color: "from-orange-500 to-orange-600"
    }
  ];

  // const categories = [
  //   { name: "All", icon: <FaCertificate />, count: certifications.length },
  //   { name: "Quality Management", icon: <FaCheckCircle />, count: certifications.filter(c => c.category === "Quality Management").length },
  //   { name: "Environmental", icon: <FaLeaf />, count: certifications.filter(c => c.category === "Environmental").length },
  //   { name: "Safety", icon: <FaShieldAlt />, count: certifications.filter(c => c.category === "Safety").length },
  //   { name: "Compliance", icon: <FaGlobe />, count: certifications.filter(c => c.category === "Compliance").length },
  //   { name: "Energy", icon: <FaCog />, count: certifications.filter(c => c.category === "Energy").length },
  //   { name: "Security", icon: <FaShieldAlt />, count: certifications.filter(c => c.category === "Security").length },
  //   { name: "Quality", icon: <FaCheckCircle />, count: certifications.filter(c => c.category === "Quality").length },
  //   { name: "Ethics", icon: <FaBuilding />, count: certifications.filter(c => c.category === "Ethics").length },
  //   { name: "Testing", icon: <FaIndustry />, count: certifications.filter(c => c.category === "Testing").length }
  // ];

  return (
    <>
      {/* Hero Section */}
      <div className="parent pt-[150px] pb-[50px] relative bg-gradient-to-b from-white to-[var(--accent1)]/10">
        <div className="container flex items-center justify-center flex-col gap-8 px-4">
          <span
            data-aos="fade-up"
            data-aos-delay="00"
            id="certifications-chip"
            className="chip"
          >
            <FaCertificate className="mr-2" />
            Quality Assurance & Compliance
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="certifications-chip"
            className=" text-4xl lg:text-6xl leading-8 font-[900] text-center"
          >
            Our <span className="text-[var(--accent1)]">Certifications</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-anchor="certifications-chip"
            className="text-center  max-w-[800px] text-black/90"
          >
            As India&apos;s most certified wire and cable company, we hold over 15+ national and international certifications, ensuring the highest standards of quality, safety, and environmental compliance.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="parent py-[50px] bg-[var(--accent1)]/5">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="text-3xl font-bold text-[var(--accent1)] mb-2">15+</div>
              <div className="text-sm text-gray-600">Certifications</div>
            </div>
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="text-3xl font-bold text-[var(--accent1)] mb-2">100%</div>
              <div className="text-sm text-gray-600">Compliance</div>
            </div>
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="text-3xl font-bold text-[var(--accent1)] mb-2">Global</div>
              <div className="text-sm text-gray-600">Standards</div>
            </div>
            <div 
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="text-3xl font-bold text-[var(--accent1)] mb-2">24/7</div>
              <div className="text-sm text-gray-600">Quality Assurance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="parent py-[50px] bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2
              data-aos="fade-up"
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Certification Portfolio
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Each certification represents our commitment to excellence and compliance with international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-[var(--accent1)]/20 relative overflow-hidden"
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${cert.color}`}>
                    {cert.category}
                  </span>
                </div>

                {/* Logo Placeholder */}
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaCertificate className="text-3xl text-[var(--accent1)]" />
                </div>

                {/* Certification Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center group-hover:text-[var(--accent1)] transition-colors">
                  {cert.name}
                </h3>

                {/* Issuing Authority */}
                <p className="text-sm text-gray-600 mb-3 text-center">
                  {cert.issuingAuthority}
                </p>

                {/* Stakeholder Relevance */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Relevant for:</p>
                  <p className="text-sm text-gray-700">{cert.stakeholderRelevance}</p>
                </div>

                {/* Tooltip with Info Icon */}
                <div className="relative group/tooltip mb-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <span>What it guarantees:</span>
                    <div className="relative">
                      <FaInfoCircle className="text-[var(--accent1)] cursor-help" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                        {cert.tooltip}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{cert.guarantee}</p>
                </div>

                {/* Download Button */}
                <div className="flex gap-2">
                  <Link
                    href={cert.downloadFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[var(--accent1)] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[var(--accent1)]/90 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <FaDownload className="text-sm" />
                    Download
                  </Link>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent1)]/5 to-[var(--accent2)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Certifications Matter Section */}
      <div className="parent py-[100px] bg-gradient-to-br from-[var(--accent1)]/5 to-[var(--accent2)]/5">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                data-aos="fade-up"
                className="text-4xl lg:text-5xl font-[900] text-gray-900 mb-6"
              >
                Why Our Certifications <span className="text-[var(--accent1)]">Matter</span>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                Our comprehensive certification portfolio ensures that every product meets the highest international standards, giving you confidence in quality, safety, and compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-[var(--accent1)]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FaShieldAlt className="text-2xl text-[var(--accent1)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Safety Assurance</h3>
                <p className="text-gray-600">
                  Our certifications guarantee that our products meet the highest safety standards, protecting both people and property.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FaLeaf className="text-2xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Responsibility</h3>
                <p className="text-gray-600">
                  Our environmental certifications ensure sustainable manufacturing practices and eco-friendly products.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FaGlobe className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Compliance</h3>
                <p className="text-gray-600">
                  Our international certifications ensure your projects meet global standards and regulatory requirements.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FaCheckCircle className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Guarantee</h3>
                <p className="text-gray-600">
                  Our quality management certifications ensure consistent, reliable products that exceed expectations.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FaCog className="text-2xl text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Energy Efficiency</h3>
                <p className="text-gray-600">
                  Our energy management certifications ensure optimal resource utilization and cost-effective operations.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FaBuilding className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ethical Practices</h3>
                <p className="text-gray-600">
                  Our ethical certifications ensure responsible business practices and fair treatment of all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="parent py-[100px] bg-gradient-to-r from-[var(--accent1)] to-[var(--accent2)]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2
              data-aos="fade-up"
              className="text-4xl lg:text-5xl font-[900] mb-6"
            >
              Ready to Work with India&apos;s Most Certified Cable Company?
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-xl text-white/90 mb-8"
            >
              Partner with us for your next project and experience the confidence that comes with certified excellence.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-[var(--accent1)] rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaBuilding className="text-lg" />
                Get in Touch
              </Link>
              <Link
                href="/products"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[var(--accent1)] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaCertificate className="text-lg" />
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
