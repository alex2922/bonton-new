import SectionTop from "@/components/SectionTop";

const DownloadsPage = () => {
  const downloadFiles = [
    {
      name: "FIRECEL - Fire Resistant Cables",
      link: "/downloads/firecel-catalog.pdf",
    },
    {
      name: "OPTICEL - Fibre Optic Cables",
      link: "/downloads/opticel-catalog.pdf",
    },
    {
      name: "INCOCEL - Instrumentation, Control and Thermocouple Cables",
      link: "/downloads/incocel-catalog.pdf",
    },
    {
      name: "RAILCEL - Special Cables for Railway Applications",
      link: "/downloads/railcel-catalog.pdf",
    },
    {
      name: "Linear Heat Detector Cables - HDC",
      link: "/downloads/hdc-cables-catalog.pdf",
    },
    {
      name: "Communication Cables for Marine and Offshore Applications",
      link: "/downloads/marine-communication-catalog.pdf",
    },
    {
      name: "Dielectric Jelly Filled Loose Tube Optical Cable",
      link: "/downloads/dielectric-optical-catalog.pdf",
    },
    {
      name: "FIRECEL SR 114H | SR 114E - Fire Resistant Cables for Fire Alarm Systems",
      link: "/downloads/firecel-sr-catalog.pdf",
    },
  ];

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloadFiles.map((file, index) => (
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
                  <h3 className="text-lg font-bold  text-black mb-6 text-center leading-tight group-hover:text-emerald-500 transition-colors duration-300">
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
                      <span>Download Catalog</span>
                    </a>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-500/20 transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadsPage;
