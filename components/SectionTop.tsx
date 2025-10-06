import Image from 'next/image'
import React from 'react'

export interface SectionTopProps {

  title: string
  description: string
  imageUrl: string
  btnText: string
  link: string
  chip: string
}

const SectionTop: React.FC<SectionTopProps> = ({
  title: _title,
  description: _description,
  imageUrl: _imageUrl,
  btnText: _btnText,
  link: _link,
  chip: _chip,
}) => {
  return (
    <div className='parent relative h-[500px] bg-red-200'>
        <div className='absolute inset-0 bg-gradient-to-br from-[#121722]  via-emerald-500 to-transparent opacity-80 z-10'></div>
        <div className='absolute inset-0 bg-img-cover top-0 bg-black  opacity-20 z-12'></div>

        <Image src={_imageUrl} alt={_title} fill className='object-cover' />
        <div className='container px-4 flex flex-col gap-6 justify-center items-center lg:items-start z-20 relative'>
            {_chip && <span
            data-aos="fade-up"
            data-aos-delay="0"
            className="border border-emerald-500 px-4 py-2 rounded-full bg-[var(--accent1)]/20 text-white text-xs mb-4"
          >
            {_chip}
          </span>}
           
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className=" text-3xl lg:text-5xl leading-8 font-[900] text-cente text-white  "
          >
            {_title}
  
          </h1>
          {_description && <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-center lg:text-left  max-w-[800px] text-white mb-4 w-full "
            dangerouslySetInnerHTML={{ __html: _description }}
          />}
          {_btnText && <a
            data-aos="fade-up"
            data-aos-delay="600"
            href={_link}
            className="btn mx-auto lg:mx-0"
          >{_btnText}</a>}
         
        </div>
    </div>
  )
}

export default SectionTop