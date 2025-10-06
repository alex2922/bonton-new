"use client";
import products from "@/data/products";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, Autoplay } from "swiper/modules";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

type PageProps = {
  params: Promise<{ id: string }>;
};

// Define proper types for the product data
interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  images: string[];
  variants?: Array<{
    modelNumber: string;
    gauge: number;
    cores: number[];
    coresLength?: number[];
    cableType?: string[];
    color?: string[];
    colorCustomization?: boolean;
    weight?: string;
    dimension?: string;
    packagingType?: string;
    unitsPerPack?: string;
    warrantyPeriod?: string;
  }>;
  performanceParameters?: Array<{
    property: string;
    value: string;
  }>;
  construction?: Array<{
    component: string;
    material: string;
    description: string;
  }>;
  certifications?: string[];
  safetyStandards?: Array<{
    title: string;
    standards: string[];
  }>;
  applications?: Array<{
    image: string;
    description: string;
  }>;
  keyFeatures?: string[];
  Highlights?: string[];
  manufacturing?: Array<{
    step: string;
    description: string;
  }>;
}

const ProductPage = ({ params }: PageProps) => {
  const router = useRouter();
  const [tabs, setTabs] = useState(1);
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    const getProduct = async () => {
      const { id } = await params;
      const foundProduct = products.find((p) => p.slug === id);
      setProduct(foundProduct);

      if (!foundProduct) {
        router.push("/");
      }
    };

    getProduct();
  }, [params, router]);
  const tabItems = [
    { id: 1, label: "Specifications" },
    { id: 2, label: "Performance" },
    { id: 3, label: "Construction" },
    { id: 4, label: "Certifications" },
  ];

  return (
    <>
      {product ? (
        <>
          <div className="parent py-[20px] md:py-[100px] bg-[#121721] ">
            <div className="container  px-4 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 h-full flex flex-col gap-4 ">
                <div className="aspect-square w-[100%] bg-gradient-to-b from-white/70 to-white/30 rounded-2xl overflow-hidden relative">
                  <Swiper
                    modules={[Navigation, Pagination, Thumbs]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{
                      clickable: true,
                      el: ".swiper-pagination-custom",
                    }}
                    className="w-full h-full"
                  >
                    {product.images?.map((imgSrc, index) => (
                      <SwiperSlide key={index}>
                        <div className="w-full h-full flex items-center justify-center">
                          <Image
                            src={imgSrc}
                            alt={`${product.name} image ${index + 1}`}
                            width={400}
                            height={400}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="swiper-pagination-custom"></div>
              </div>

              <div className="w-full md:w-2/3  min-h-[400px] flex flex-col items-center md:items-start gap-4 justify-center  ">
                <h1 className="text-4xl text-white font-[800] text-center md:text-left">
                  {product.name}
                </h1>
                <p className="text-white/80 font-[300] text-center md:text-left !max-w-[1000ch]">
                  {product.longDescription}
                </p>
                <div className="flex gap-4 items-center justify-center flex-wrap ">
                  <Link href={"/contact"} className="btn">
                    Get Quotation
                  </Link>
                  <Link
                    href={"/downloads"}
                    className="bg-white text-[var(--accent1)] rounded-full px-8 py-2 flex items-center justify-center"
                  >
                    Download Catalog
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="parent bg-gray-200/80 py-[50px] px-2 ">
            <div className="container !max-w-[1400px]  flex flex-col  justify-center align-center gap-4">
              <h2 className=" text-4xl leading-8 font-bold text-center ">
                <span>Technical</span> Specifications
              </h2>

              <div className="w-full grid grid-cols-1  md:grid-cols-4 bg-white p-1 rounded-lg mt-[50px]">
                {tabItems.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setTabs(tab.id)}
                    className={`w-full p-2 rounded-lg text-lg font-[500] cursor-pointer ${
                      tabs === tab.id ? "!bg-[var(--accent1)] text-white" : ""
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="w-full  bg-white rounded-lg  p-1  overflow-hidden">
                {tabs === 1 ? (
                  <>
                    <div className="overflow-x-auto table-scroll-wrapper">
                      <table className="w-full product-table">
                      <thead>
                        <tr>
                          <th>Model</th>
                          <th>Guage</th>
                          <th>Cores</th>
                          <th>Cable Type</th>
                          <th>Color</th>
                          <th>Weight</th>
                          <th>Dimensions</th>
                          <th>Packaging</th>
                          <th>Warranty</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.variants?.map((variant, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-3 font-bold text-[var(--accent1)] text-sm">
                              {variant.modelNumber}
                            </td>
                            <td className="p-3 text-sm">
                              <span className="font-bold">{variant.gauge}</span>{" "}
                              sq.mm
                            </td>
                            <td className="p-3">
                              <div className="flex flex-wrap gap-1">
                                {variant.cores.map((core: number) => (
                                  <span key={core} className="chip text-xs">
                                    {core}C
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="p-3 text-sm">
                              <div className="flex flex-wrap gap-1">
                                {variant.cableType?.map(
                                  (type: string, idx: number) => (
                                    <span
                                      key={idx}
                                      className="chip bg-blue-100 text-blue-800 text-xs"
                                    >
                                      {type}
                                    </span>
                                  )
                                )}
                              </div>
                            </td>
                            <td className="p-3 text-sm">
                              <div className="flex flex-wrap gap-1">
                                {variant.color?.map(
                                  (col: string, idx: number) => (
                                    <span
                                      key={idx}
                                      className="chip flex gap-1 items-center bg-red-100 text-red-800 text-xs"
                                    >
                                      <span
                                        className="h-5 w-5 rounded-full !capitalize border-black/50 border-1"
                                        style={{ backgroundColor: col }}
                                      ></span>
                                      {col}
                                    </span>
                                  )
                                )}
                                {variant.colorCustomization && (
                                  <span className="chip bg-green-100 text-green-800 text-xs">
                                    Custom (As per order)
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="p-3 text-sm">{variant.weight}</td>
                            <td className="p-3 text-sm">{variant.dimension}</td>
                            <td className="p-3 text-sm">
                              <div className="space-y-1">
                                <div className="text-xs">
                                  {variant.packagingType}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {variant.unitsPerPack}
                                </div>
                              </div>
                            </td>
                            <td className="p-3 text-sm">
                              {variant.warrantyPeriod}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    </div>
                  </>
                ) : tabs === 2 ? (
                  <>
                    <div className="overflow-x-auto table-scroll-wrapper">
                      <table className="w-full product-table">
                        <thead>
                          <tr>
                            <th>Property</th>
                            <th>Specification</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.performanceParameters?.map((item, index) => (
                            <tr key={index}>
                              <td className="font-bold">{item.property}</td>
                              <td>{item.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : tabs === 3 ? (
                  <>
                    <div className="overflow-x-auto table-scroll-wrapper">
                      <table className="w-full product-table">
                        <thead>
                          <tr>
                            <th>Component</th>
                            <th>Material</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.construction?.map((item, index) => (
                            <tr key={index}>
                              <td className="font-bold leading-4">
                                {item.component}
                              </td>
                              <td>{item.material}</td>
                              <td>{item.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : (
                  tabs === 4 && (
                    <>
                      <div className="w-full flex flex-col md:flex-row gap-4 overflow-hidden">
                        <div className="w-full md:w-1/2 flex flex-col gap-4 bg-gray-200/80 rounded-lg p-4">
                          <h2 className=" text-2xl leading-8 font-bold text-center ">
                            Quality <span>Certifications </span>
                          </h2>

                          {product.certifications?.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 box p-2  bg-white rounded-lg  w-full text-left "
                            >
                              <span className="text-lg text-[var(--accent2)]">
                                <SlBadge />
                              </span>

                              {item}
                            </div>
                          ))}
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4  rounded-2xl p-4">
                          <h2 className=" text-2xl leading-8 font-bold text-center  ">
                            <span>Safety</span> Standards
                          </h2>

                          {product.safetyStandards?.map((item, index) => (
                            <div
                              key={index}
                              className="border-b border-gray-200/80 pb-4 "
                            >
                              <h3 className="text-lg font-bold my-4">
                                {item.title}
                              </h3>
                              <div className="flex flex-wrap gap-2 w-full">
                                {item.standards.map((standard, index) => (
                                  <span key={index} className="chip">
                                    {standard}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="parent  pt-[50px] pb-[0px] px-2 ">
            <div className="container  flex flex-col  justify-center align-center gap-4">
              <h2 className=" text-4xl leading-8 font-bold text-center ">
                Industry <span>Applications</span>
              </h2>

              <div className="w-full py-[50px]">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation={true}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination-applications",
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
                  className="w-full"
                >
                  {product.applications?.map((item, index) => (
                    <SwiperSlide key={index} className="w-full pb-4 ">
                      <div className="flex flex-col items-center justify-center h-[120px] p-2 shadow-lg bg-gray-200/80 rounded-2xl w-full text-center">
                        <span className="text-3xl text-[var(--accent2)]">
                          <CiCircleCheck />
                        </span>
                        <span className="text-sm mt-2">{item.description}</span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
               <div className="w-full  flex items-center justify-center">
               <div className="swiper-pagination-applications  !w-fit"></div>
               </div>
                </div>
            </div>
          </div>

          <div className="parent bg-gray-200/80 py-[50px] ">
            <div className="container  flex flex-col md:flex-row justify-center align-center gap-4">
              <div className="w-full md:w-1/2 h-full  px-4 py-8">
                <h2 className=" text-4xl leading-8 font-bold text-center ">
                  Key <span>Features</span>
                </h2>

                <div className="w-full py-[50px] flex flex-col gap-4 justify-center items-center">
                  {product.keyFeatures?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 box p-2 shadow-xl/10 bg-white rounded-2xl  w-full text-left "
                    >
                      <span className="text-3xl text-[var(--accent2)]">
                        <CiCircleCheck />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 h-full  px-4 py-8">
                <h2 className=" text-4xl leading-8 font-bold text-center ">
                  Product <span>Highlights</span>
                </h2>

                <div className="w-full py-[50px] flex flex-col gap-4 justify-center items-center">
                  {product.Highlights?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 box p-2 shadow-xl/10 bg-white rounded-2xl  w-full text-left "
                    >
                      <span className="text-3xl text-[var(--accent2)]">
                        <CiCircleCheck />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="parent py-[50px] ">
            <div className="container  flex flex-col justify-center align-center gap-4">
              <h2 className=" text-4xl leading-8 font-bold text-center mb-7 ">
                <span>Manufacturing</span>
              </h2>

              <div className="flex flex-col w-full gap-4 ">
                {product.manufacturing?.map((item, index) => (
                  <div
                    key={index}
                    className="w-full p-4 rounded-lg shadow bg-gray-200/60 "
                  >
                    <h3 className="text-xl font-[800] text-emerald-500">
                      {item.step}
                    </h3>
                    <div className="w-full border-b-1 border-gray-400/40 my-2"></div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <LineSpinner size="80" stroke="3" speed="1" color="var(--accent1)" />
        </div>
      )}
    </>
  );
};

export default ProductPage;
