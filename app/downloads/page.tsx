import SectionTop from "@/components/SectionTop";

const DownloadsPage = () => {
  const downloadFiles = [
    // Product Catalogs
    {
      name: "Bonton Cable Catalogue",
      link: "/downloads/Bonton_Cable Catlogue.pdf",
      category: "Product Catalogs",
    },
    {
      name: "Building Wire Catalogue",
      link: "/downloads/Building_Wire_Catalogue.pdf",
      category: "Product Catalogs",
    },
    {
      name: "Fire Survival Cables",
      link: "/downloads/fire-survival-cables.pdf",
      category: "Product Catalogs",
    },
    {
      name: "Uninyvin Cable",
      link: "/downloads/UNINYVIN CABLE .pdf",
      category: "Product Catalogs",
    },
    
    // Price Lists
    {
      name: "Armoured Cable Price List (w.e.f. 24-02-2025)",
      link: "/downloads/08_Armoured_Cable_Price_List__w.e.f._24-02-2025_.pdf",
      category: "Price Lists",
    },
    {
      name: "Flexible Cable Price List (w.e.f. 17-06-2025)",
      link: "/downloads/41_Flexible_Cable_Price_List__w.e.f._17-06-2025_.pdf",
      category: "Price Lists",
    },
    
    // Certificates & Compliance
    {
      name: "CE Certificate",
      link: "/downloads/CE.pdf",
      category: "Certificates & Compliance",
    },
    {
      name: "DQS ISO 9001:2015 (Bhiwadi Plant 1)",
      link: "/downloads/DQS ISO 9001 _ 2015 (Bhiwadi_ Plant 1).pdf",
      category: "Certificates & Compliance",
    },
    {
      name: "DQS ISO 9001:2015 (Kaharani Plant 2)",
      link: "/downloads/DQS ISO 9001 _ 2015 (Kaharani_ Plant 2).pdf",
      category: "Certificates & Compliance",
    },
    {
      name: "Environmental Management System",
      link: "/downloads/Environmental_management_system.pdf",
      category: "Certificates & Compliance",
    },
    {
      name: "GC Mark Certificate",
      link: "/downloads/GC_Mark.pdf",
      category: "Certificates & Compliance",
    },
    {
      name: "IATF 16949:2016 (Bhiwadi Plant 1)",
      link: "/downloads/IATF 16949_2016 (Bhiwadi_ Plant 1).pdf",
      category: "Certificates & Compliance",
    },
    {
      name: "IATF 16949:2016 (Kaharani Plant 2)",
      link: "/downloads/IATF 16949_2016(Kaharani_ Plant 2).pdf",
      category: "Certificates & Compliance",
    },
    {
      name: "NABL Certificate (Bhiwadi Plant 1)",
      link: "/downloads/NABL (Bhiwadi_ Plant 1).pdf",
      category: "Certificates & Compliance",
    },
    {
      name: "NABL Certificate (Kaharani Plant 2)",
      link: "/downloads/NABL (Kaharani_ Plant 2).pdf",
      category: "Certificates & Compliance",
    },
    {
      name: "REACH Certificate",
      link: "/downloads/REACH.pdf",
      category: "Certificates & Compliance",
    },
    {
      name: "RoHS 2 Certificate",
      link: "/downloads/RoHS 2.pdf",
      category: "Certificates & Compliance",
    },
    {
      name: "TÜV SÜD South Asia Private Limited",
      link: "/downloads/TÜV SÜD South Asia Private Limited.pdf",
      category: "Certificates & Compliance",
    },
  ];

  // Group files by category
  const groupedFiles = downloadFiles.reduce((acc, file) => {
    if (!acc[file.category]) {
      acc[file.category] = [];
    }
    acc[file.category].push(file);
    return acc;
  }, {} as Record<string, typeof downloadFiles>);

  return (
    <>

      <SectionTop
        chip=""
        title="Downloads"
        description="Download our comprehensive product catalogs and technical specifications to explore our complete range of cable solutions."
        imageUrl="/sectiontop/download.webp"  
        btnText=""
        link=""
      />

      {/* Downloads Section */}
      <div className="parent py-[40px] lg:py-[100px]">
        <div className="container px-4">
          {Object.entries(groupedFiles).map(([category, files]) => (
            <div key={category} className="mb-16 bg-gray-100 rounded-3xl p-4 lg:p-8 shadow ">
              {/* Category Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                  {category}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-[var(--accent2)] mx-auto rounded-full"></div>
              </div>

              {/* Files Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                  >
                    {/* Gradient Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-[var(--accent2)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Card Content */}
                    <div className="relative p-8 h-full flex flex-col">
                      {/* Document Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-[var(--accent2)] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Document Name */}
                      <h3 className="text-lg font-bold text-black mb-6 text-center leading-tight group-hover:text-emerald-500 transition-colors duration-300">
                        {file.name}
                      </h3>

                      {/* Download Button */}
                      <div className="mt-auto flex justify-center">
                        <a
                          href={file.link}
                          download
                          className="btn flex items-center justify-center gap-3"
                        >
                          <svg
                            className="w-5 h-5 group-hover:animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span>Download</span>
                        </a>
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-500/20 transition-colors duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DownloadsPage;
