import SectionTop from '@/components/SectionTop';
import Image from 'next/image'

const Plan2035 = () => {
  // Combined company data with logo file and background color
  const companyData: { [key: string]: { logo: string; bgColor: string } } = {
    "DLF": { logo: "DLF.png", bgColor: "#ffffff" },
    "Ireo": { logo: "IREO.png", bgColor: "#ebebe7" },
    "Vatika": { logo: "VATIKA.png", bgColor: "#ffffff" },
    "Emaar": { logo: "EMAAR.png", bgColor: "#ebebe7" },
    "MGF": { logo: "MGF.png", bgColor: "#ffffff" },
    "M3M": { logo: "M3M.png", bgColor: "#ffffff" },
    "Lodha": { logo: "LODHA.png", bgColor: "#ebebe7" },
    "Kalpataru": { logo: "KALPATARU.png", bgColor: "#ebebe7" },
    "Raheja": { logo: "RAHEJA.png", bgColor: "#ffffff" },
    "Brigade": { logo: "BRIGADE GROUP.png", bgColor: "#ffffff" },
    "LULU": { logo: "LULU.png", bgColor: "#ffffff" },
    "Godrej": { logo: "Godrej.png", bgColor: "#ebebe7" },
    "TATA Projects": { logo: "TATA PROJECTS.png", bgColor: "#ffffff" },
    "Lotus Green": { logo: "LOTUS GREENS.png", bgColor: "#ffffff" },
    "Smart World": { logo: "SMART WORLD.png", bgColor: "#ffffff" },
    "Foxconn": { logo: "FOXCONN.png", bgColor: "#d4d1cc" },
    "NVIDIA": { logo: "NVIDIA.png", bgColor: "#d4d1cc" },
    "Micron": { logo: "MICRON.png", bgColor: "#ffffff" },
    "Engineers India Limited": { logo: "EIL.png", bgColor: "#ffffff" },
    "Tyco": { logo: "TYCO.png", bgColor: "#ffffff" },
    "Minda": { logo: "MINDA.png", bgColor: "#ffffff" },
    "Srinisons": { logo: "SRINISONS.png", bgColor: "#ffffff" },
    "Johnson Controls": { logo: "Johnson Controls.png", bgColor: "#f5f5f5" },
    "Honeywell": { logo: "HONEYWELL.png", bgColor: "#c5c5c5" },
    "Siemens": { logo: "SIEMENS.png", bgColor: "#e5e5e5" },
    "GE": { logo: "GE.png", bgColor: "#ebebe7" },
    "Schneider": { logo: "Scheider.png", bgColor: "#d4d1cc" },
    "Rockwell Automation": { logo: "Rockwell automation.png", bgColor: "#d4d1cc" },
    "Google": { logo: "Google.png", bgColor: "#eee" },
    "Dell": { logo: "DELL.png", bgColor: "#d4d1cc" },
    "IBM": { logo: "IBM.png", bgColor: "#d4d1cc" },
    "EnY": { logo: "EnY.png", bgColor: "#d4d1cc" },
    "HCL": { logo: "HCL.png", bgColor: "#d4d1cc" },
    "HSBC": { logo: "HSBC.png", bgColor: "#d4d1cc" },
    "Bank of America": { logo: "BANK OF AMERICA.png", bgColor: "#d4d1cc" },
    "KPMG": { logo: "KPMG.png", bgColor: "#d4d1cc" },
    "Amazon Web Services": { logo: "AWS.png", bgColor: "#d4d1cc" },
    "Amazon": { logo: "AMAZON.png", bgColor: "#eee" },
    "Nxtra": { logo: "NEXTRA.png", bgColor: "#ffffff" },
    "Flipkart": { logo: "FLIPKART.png", bgColor: "#eee" },
    "Delhivery": { logo: "DELHIVERY.png", bgColor: "#d4d1cc" },
    "AIIMS": { logo: "AIIMS.png", bgColor: "#eee" },
    "Fortis": { logo: "Fortis.png", bgColor: "#d4d1cc" },
    "Apollo Hospitals": { logo: "APOLLO HOSPITALS.png", bgColor: "#d4d1cc" },
    "Sheraton": { logo: "SHERATON.png", bgColor: "#d4d1cc" },
    "Holiday INN": { logo: "HOLIDAY INN.png", bgColor: "#ffffff" },
    "Marriott": { logo: "MARRIOTT.png", bgColor: "#ffffff" },
    "Crowne Plaza": { logo: "CROWNE PLAZA.png", bgColor: "#d4d1cc" },
    "Four Seasons": { logo: "FOUR SEASONS.png", bgColor: "#ffffff" },
    "Grand Hyatt": { logo: "GRAND HYATT.png", bgColor: "#ffffff" },
    "Country Inn": { logo: "COUNTRY INN.png", bgColor: "#ffffff" },
    "Taj": { logo: "TAJ.png", bgColor: "#ffffff" },
    "IHG": { logo: "IHG.png", bgColor: "#ddd" },
    "Airtel": { logo: "Airtel.png", bgColor: "#d4d1cc" },
    "Vodafone Idea": { logo: "VI.png", bgColor: "#ffffff" },
    "Ericsson": { logo: "ERICSSON.png", bgColor: "#d4d1cc" },
    "Aircel": { logo: "AIRCEL.png", bgColor: "#ffffff" },
    "Indus Towers": { logo: "INDUS TOWERS.png", bgColor: "#ffffff" },
    "Reliance Jio": { logo: "JIO.png", bgColor: "#ffffff" },
    "Nokia": { logo: "NOKIA.png", bgColor: "#d4d1cc" },
    "NBCC": { logo: "NBCC.png", bgColor: "#ffffff" },
    "CPWD": { logo: "CPWD.png", bgColor: "#ffffff" },
    "DDA": { logo: "DDA.png", bgColor: "#ffffff" },
    "MHADA": { logo: "MHADA.png", bgColor: "#eee" },
    "CIDCO": { logo: "CIDCO.png", bgColor: "#eee" },
    "DMRC": { logo: "DMRC.png", bgColor: "#000" },
    "Lucknow Metro": { logo: "LUCKNOW METRO.png", bgColor: "#ffffff" },
    "Bangalore Metro": { logo: "Bangalore metro.png", bgColor: "#d4d1cc" },
    "Pune Metro": { logo: "Pune Metro.png", bgColor: "#ffffff" },
    "Mumbai Metro": { logo: "MUMBAI METRO.png", bgColor: "#d4d1cc" },
    "Ahmedabad Metro": { logo: "AHMEDABAD METRO.png", bgColor: "#eee" },
    "Kanpur Metro": { logo: "KANPUR METRO.png", bgColor: "#eee" },
    "Airport Authority of India": { logo: "AAI.png", bgColor: "#eee" },
    "Delta": { logo: "DELTA.png", bgColor: "#ffffff" },
    "Tricolite": { logo: "TRICOLITE.png", bgColor: "#ffffff" },
    "Adelac": { logo: "ADELAC.png", bgColor: "#ffffff" },
    "Jackson": { logo: "JAKSON.png", bgColor: "#ffffff" },
    "Panasonic": { logo: "PANASONIC.png", bgColor: "#ffffff" },
    "Exicom": { logo: "EXICOM.png", bgColor: "#ffffff" },
    "Voltas": { logo: "VOLTAS.png", bgColor: "#d4d1cc" },
    "MasterCard": { logo: "MASTERCARD.png", bgColor: "#d4d1cc" },
    "Salesforce": { logo: "SALESFORCE.png", bgColor: "#d4d1cc" },
    "We Work": { logo: "WEWORK.png", bgColor: "#ffffff" },
    "WeWork": { logo: "WEWORK.png", bgColor: "#ffffff" },
    "Max Hospital": { logo: "max.png", bgColor: "#eee" },
    "ESIC": { logo: "esic.png", bgColor: "#ffffff" },
    "Medanta": { logo: "medanta.png", bgColor: "#d4d1cc" },
    "Jaypee Group": { logo: "jaypee_small.png", bgColor: "#bfbfbf" },
    "The 3C Company": { logo: "3c.png", bgColor: "#ffffff" },
    "Ambience Mall": { logo: "ambience mall.png", bgColor: "#e5e5e5" },
    "Bharti Infra Limited": { logo: "bharti.png", bgColor: "#d4d1cc" }
  };
  
  // Default background color for logos not specified above
  const defaultBgValue = "#ebebe7";

  const sectors = [
    {
      title: "Construction & Infrastructure",
      description: "Powering modern infrastructure with reliable cable solutions for residential, commercial, and industrial projects.",
      image: "/sectors/1.jpg",
      companies: [
        "DLF",
        "Ireo",
        "Vatika",
        "Emaar",
        "MGF",
        "M3M",
        "Lodha",
        "Kalpataru",
        "Raheja",
        "Brigade",
        "LULU",
        "Godrej",
        "TATA Projects",
        "Lotus Green",
        "Smart World",
        "Foxconn",
        "NVIDIA",
        "Micron",
        "Engineers India Limited",
        "Jaypee Group",
        "Lodha",
      ],
    },
    {
      title: "Corporate & BMS",
      description: "Smart building management systems powered by our cutting-edge cable infrastructure solutions.",
      image: "/sectors/3.jpg",
      companies: [
        "Johnson Controls",
        "Honeywell",
        "Siemens",
        "GE",
        "Schneider",
        "Rockwell Automation",
        "Tyco",
        "Google",
        "Dell",
        "IBM",
        "EnY",
        "HCL",
        "HSBC",
        "Bank of America",
        "KPMG",
        "Amazon Web Services",
        "Amazon",
        "Nxtra",
        "Flipkart",
        "Delhivery",
      ],
    },
    {
      title: "Government & Metro Projects",
      description: "Public infrastructure projects supported by our robust and reliable cable systems.",
      image: "/sectors/1.webp",
      companies: [
        "NBCC",
        "CPWD",
        "DDA",
        "MHADA",
        "CIDCO",
        "DMRC",
        "Lucknow Metro",
        "Bangalore Metro",
        "Pune Metro",
        "Mumbai Metro",
        "Ahmedabad Metro",
        "Kanpur Metro",
      ],
    },

    {
      title: "Industrial Sector",
      description: "Heavy-duty industrial applications powered by our specialized industrial cable solutions.",
      image: "/sectors/2.webp",
      companies: [
        "Delta",
        "Tricolite",
        "Adelac",
        "Jackson",
        "Panasonic",
        "Exicom",
        "Voltas",
        "MasterCard",
        "Salesforce",
        "We Work",
      ],
    },
    
   
    
    {
      title: "Hospitality",
      description: "Luxury hospitality experiences enhanced by our premium cable and connectivity solutions.",
      image: "/sectors/5.jpg",
      companies: [
        "Sheraton",
        "Holiday INN",
        "Marriott",
        "Crowne Plaza",
        "Four Seasons",
        "Grand Hyatt",
        "Country Inn",
        "Taj",
        "IHG",
      ],
    },
  
    {
      title: "Telecom & Data",
      description: "High-speed connectivity solutions enabling seamless communication and data transmission.",
      image: "/sectors/7.jpg",
      companies: [
        "Airtel",
        "Vodafone Idea",
        "Ericsson",
        "Aircel",
        "Indus Towers",
        "Reliance Jio",
        "Nokia",
            "Bharti Infra Limited"
      ],
    },
    
    {
      title: "Healthcare & Hospitals",
      description: "Critical healthcare infrastructure supported by our specialized medical-grade cable solutions.",
      image: "/sectors/4.jpg",
      companies: ["AIIMS", "Fortis" , "Apollo Hospitals", "Medanta" , "ESIC" , "Max Hospital" ],
    },
   
    {

      title: "Retail & Recreation",
      description: "Dynamic retail and entertainment spaces powered by our versatile cable infrastructure.",
      image: "/sectors/6.jpg",
      companies: [ "Airport Authority of India" , "The 3C Company" , "Ambience Mall"],
    },
    {
      title: "Automotive",
      description: "Advanced cable technologies driving innovation in the automotive industry with precision and reliability.",
      image: "/sectors/3.webp",
      companies: ["Tyco", "Minda", "Srinisons"],
    },
    
  ];

  return (
    <>
    <SectionTop
        chip="Beyond Cables. Beyond Current. Beyond Limits."
        title="Application by Sector"
        description="    Trusted by industry leaders across diverse sectors, our innovative
            cable solutions power critical infrastructure and drive
            technological advancement."
        imageUrl="/sectiontop/sectors.jpg"
        btnText=""
        link="/career-opportunities"
      />


      <div className="parent py-16 sm:py-20 lg:py-[100px]">
        <div className="container px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16 lg:gap-20 justify-center items-center">
          {sectors.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              key={index}
              className={`w-full max-w-7xl overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl ${
                index % 2 === 0 ? 'bg-gradient-to-br from-white to-gray-50' : 'bg-gradient-to-br from-gray-50 to-white'
              }`}
            >
              {/* Hero Section with Image and Content */}
              <div className={`flex flex-col lg:flex-row lg:min-h-[500px] ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Image Section */}
                <div className="lg:w-1/2 relative h-80 sm:h-96 lg:h-auto lg:min-h-[500px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                      {item.title}
                    </h2>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center lg:min-h-[500px]">
                  {/* Company Logos Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
                    {item.companies.map((company, companyIndex) => {
                      const companyInfo = companyData[company];
                      const isSpecialCase = company === "Shopping malls and airports";
                      
                      return (
                        <div
                          key={companyIndex}
                          className="flex flex-col items-center justify-center p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
                        >
                          {isSpecialCase ? (
                            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm sm:text-lg">🏢</span>
                            </div>
                          ) : companyInfo ? (
                            <div 
                              className="relative w-10 h-10 sm:w-12 sm:h-12 mb-2 flex items-center justify-center rounded-full overflow-hidden shadow-sm"
                              style={{ backgroundColor: companyInfo.bgColor }}
                            >
                              <Image
                                src={`/3D Client Logos/${companyInfo.logo}`}
                                alt={`${company} logo`}
                                fill
                                className="object-contain p-1"
                                sizes="(max-width: 640px) 40px, 48px"
                              />
                            </div>
                          ) : (
                            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 bg-gray-100 rounded-full flex items-center justify-center">
                              <span className="text-gray-400 text-xs text-center">No Logo</span>
                            </div>
                          )}
                          <span className="text-xs sm:text-xs text-gray-700 text-center font-medium leading-tight">
                            {company}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Plan2035;
