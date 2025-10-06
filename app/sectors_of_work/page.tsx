import SectionTop from '@/components/SectionTop';
import Image from 'next/image'

const Plan2035 = () => {
  // Mapping company names to their logo files
  const companyLogoMap: { [key: string]: string } = {
    "DLF": "DLF.png",
    "Ireo": "IREO.png",
    "Vatika": "VATIKA.png",
    "Emaar": "EMAAR.png",
    "MGF": "MGF.png",
    "M3M": "M3M.png",
    "Lodha": "LODHA.png",
    "Kalpataru": "KALPATARU.png",
    "Raheja": "RAHEJA.png",
    "Brigade": "BRIGADE GROUP.png",
    "LULU": "LULU.png",
    "Godrej": "Godrej.png",
    "TATA Projects": "TATA PROJECTS.png",
    "Lotus Green": "LOTUS GREENS.png",
    "Smart World": "SMART WORLD.png",
    "Foxconn": "FOXCONN.png",
    "NVIDIA": "NVIDIA.png",
    "Micron": "MICRON.png",
    "Engineers India Limited": "EIL.png",
    "Tyco": "TYCO.png",
    "Minda": "MINDA.png",
    "Srinisons": "SRINISONS.png",
    "Johnson Controls": "Johnson Controls.png",
    "Honeywell": "HONEYWELL.png",
    "Siemens": "SIEMENS.png",
    "GE": "GE.png",
    "Schneider": "Scheider.png",
    "Rockwell Automation": "Rockwell automation.png",
    "Google": "Google.png",
    "Dell": "DELL.png",
    "IBM": "IBM.png",
    "EnY": "EnY.png",
    "HCL": "HCL.png",
    "HSBC": "HSBC.png",
    "Bank of America": "BANK OF AMERICA.png",
    "KPMG": "KPMG.png",
    "Amazon Web Services": "AWS.png",
    "Amazon": "AMAZON.png",
    "Nxtra": "NEXTRA.png",
    "Flipkart": "FLIPKART.png",
    "Delhivery": "DELHIVERY.png",
    "AIIMS": "AIIMS.png",
    "Fortis": "Fortis.png",
    "Apollo Hospitals": "APOLLO HOSPITALS.png",
    "Sheraton": "SHERATON.png",
    "Holiday INN": "HOLIDAY INN.png",
    "Marriott": "MARRIOTT.png",
    "Crowne Plaza": "CROWNE PLAZA.png",
    "Four Seasons": "FOUR SEASONS.png",
    "Grand Hyatt": "GRAND HYATT.png",
    "Country Inn": "COUNTRY INN.png",
    "Taj": "TAJ.png",
    "IHG": "IHG.png",
    "Airtel": "Airtel.png",
    "Vodafone Idea": "VI.png",
    "Ericsson": "ERICSSON.png",
    "Aircel": "AIRCEL.png",
    "Indus Towers": "INDUS TOWERS.png",
    "Reliance Jio": "JIO.png",
    "Nokia": "NOKIA.png",
    "NBCC": "NBCC.png",
    "CPWD": "CPWD.png",
    "DDA": "DDA.png",
    "MHADA": "MHADA.png",
    "CIDCO": "CIDCO.png",
    "DMRC": "DMRC.png",
    "Lucknow Metro": "LUCKNOW METRO.png",
    "Bangalore Metro": "Bangalore metro.png",
    "Pune Metro": "Pune Metro.png",
    "Mumbai Metro": "MUMBAI METRO.png",
    "Ahmedabad Metro": "AHMEDABAD METRO.png",
    "Kanpur Metro": "KANPUR METRO.png",
    "Airport Authority of India": "AAI.png",
    "Delta": "DELTA.png",
    "Tricolite": "TRICOLITE.png",
    "Adelac": "ADELAC.png",
    "Jackson": "JAKSON.png",
    "Panasonic": "PANASONIC.png",
    "Exicom": "EXICOM.png",
    "Voltas": "VOLTAS.png",
    "MasterCard": "MASTERCARD.png",
    "Salesforce": "SALESFORCE.png",
    "We Work": "WEWORK.png",
    "WeWork": "WEWORK.png",
    "Max Hospital":"max.png",
    "ESIC":"esic.png",
    "Medanta":"medanta.png",
    "Jaypee Group":"jaypee_small.png",
    "The 3C Company":"3c.png",
    "Ambience Mall":"ambience mall.png",
    "Bharti Infra Limited":"bharti.png"

  };

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
        "Jaypee Group" 
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
        title="Applications by Sectors"
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
                      const logoFile = companyLogoMap[company];
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
                          ) : logoFile ? (
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-2 flex items-center justify-center rounded-full overflow-hidden bg-white shadow-sm">
                              <Image
                                src={`/3D Client Logos/${logoFile}`}
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
