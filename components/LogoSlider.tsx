"use client"

import React from 'react'
import Image from 'next/image'

const LogoSlider = () => {
  const logos = [
    'AAI.png',
    'ADANI REALTY.png',
    'ADELAC.png',
    'ADITYA BIRLA.png',
    'ADVANCE.png',
    'AHMEDABAD METRO.png',
    'AIIMS.png',
    'AIRCEL.png',
    'Airtel.png',
    'AMAZON.png',
    'AMERICAN EXPRESS.png',
    'AMERICAN TOWER.png',
    'APOLLO HOSPITALS.png',
    'ASCENDAS.png',
    'ATL.png',
    'AWS.png',
    'Bangalore metro.png',
    'BANK OF AMERICA.png',
    'birla navya.png',
    'Blue Star.png',
    'BRIGADE GROUP.png',
    'CIDCO.png',
    'COUNTRY INN.png',
    'COWRKS.png',
    'CPWD.png',
    'CROWNE PLAZA.png',
    'DDA.png',
    'DELHI PWD.png',
    'DELHIVERY.png',
    'DELL.png',
    'DELTA.png',
    'DEUTSCHE BANK.png',
    'DG MAP.png',
    'DLF.png',
    'DMRC.png',
    'dr. oetker.png',
    'EIL.png',
    'EMAAR.png',
    'EnY.png',
    'ERICSSON.png',
    'EXICOM.png',
    'first solar.png',
    'FLIPKART.png',
    'Fortis.png',
    'FOUR SEASONS.png',
    'FOXCONN.png',
    'GE.png',
    'Godrej.png',
    'Google.png',
    'GRAND HYATT.png',
    'haldirams.png',
    'HARYANA POLICE HOUSING CORP.png',
    'HCL.png',
    'HERO HOMES.png',
    'HOLIDAY INN.png',
    'HONEYWELL.png',
    'HSBC.png',
    'IBM.png',
    'IHG.png',
    'INDUS TOWERS.png',
    'IREO.png',
    'JAKSON.png',
    'JIO.png',
    'Johnson Controls.png',
    'KALPATARU.png',
    'KANPUR METRO.png',
    'kochi metro.png',
    'KPMG.png',
    'L & T.png',
    'LODHA.png',
    'LOTUS GREENS.png',
    'LUCKNOW METRO.png',
    'LULU.png',
    'M3M.png',
    'MAHINDRA.png',
    'MARRIOTT.png',
    'MASTERCARD.png',
    'MES.png',
    'MGF.png',
    'MHADA.png',
    'MICRON.png',
    'MICROSOFT.png',
    'MINDA.png',
    'MUMBAI METRO.png',
    'NBCC.png',
    'NCC.png',
    'NEPTUNE.png',
    'NEXTRA.png',
    'noida metro.png',
    'NOKIA (1).png',
    'NOKIA.png',
    'NVIDIA.png',
    'ORIANA.png',
    'ORIELLO UPS.png',
    'PANASONIC.png',
    'Pune Metro.png',
    'RAHEJA.png',
    'RELIANCE.png',
    'Rockwell automation.png',
    'SALESFORCE.png',
    'Scheider.png',
    'Shapoorji Pallonji.png',
    'SHERATON.png',
    'SIEMENS.png',
    'SMART WORLD.png',
    'SRINISONS.png',
    'Sterling & wilson.png',
    'TAJ.png',
    'TATA PROJECTS.png',
    'THE LEELA.png',
    'TRANE TECHNOLOGIES.png',
    'TRICOLITE.png',
    'TYCO.png',
    'UNIVERSAL MEP.png',
    'UP Rajkiya NIRMAN.png',
    'UPMRC.png',
    'VATIKA.png',
    'VI.png',
    'VOLTAS.png',
    'WALMART.png',
    'WEWORK.png',
    'YASHODA MEDICITY.png'
  ]

  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className='parent py-[100px] '>
      <div className='container items-center flex flex-col gap-4 px-4'>
        {/* <span data-aos="fade-up" data-aos-delay="0" className="chip">
         Our Clients
        </span> */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="max-w-[800px] text-4xl font-bold text-center"
        >
         Our Clients
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-[800px]  text-center"
        >
          Our comprehensive portfolio of international certifications demonstrates our unwavering commitment to excellence, safety, and environmental responsibility across every aspect of our operations.
        </p>
        <div className='w-full overflow-hidden relative'>
          <div className='flex animate-scroll gap-8 items-center hover:pause-animation'>
            {duplicatedLogos.map((logo, index) => (
              <div key={`${logo}-${index}`} className='flex-shrink-0 flex items-center justify-center px-4'>
                <Image
                  src={`/3D Client Logos/${logo}`}
                  alt={`Client logo ${index + 1}`}
                  width={120}
                  height={80}
                  className='max-w-[120px] max-h-[80px] w-auto h-auto object-contain md:max-w-[120px] md:max-h-[80px] sm:max-w-[80px] sm:max-h-[60px] rounded-[100px]'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 5s linear infinite;
        }
        
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default LogoSlider