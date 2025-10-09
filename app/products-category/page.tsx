"use client";

import Link from "next/link";
import Image from "next/image";
import products from "@/data/products";
import { useState } from "react";
import SectionTop from "@/components/SectionTop";

const Page = () => {
  const [activeCategory, setActiveCategory] = useState("type");
  const [activeFilter, setActiveFilter] = useState("all");

  const getFilteredProducts = () => {
    if (activeFilter === "all") return products;
    return products.filter((product) => product.slug === activeFilter);
  };

  const getProductsByCategory = () => {
    if (activeCategory === "type") {
      return products.reduce((acc, product) => {
        const type = product.type;
        if (!acc[type]) acc[type] = [];
        acc[type].push(product);
        return acc;
      }, {} as Record<string, typeof products>);
    } else if (activeCategory === "standard") {
      return products.reduce((acc, product) => {
        const standard = product.standard;
        if (!acc[standard]) acc[standard] = [];
        acc[standard].push(product);
        return acc;
      }, {} as Record<string, typeof products>);
    } else if (activeCategory === "industry") {
      return products.reduce((acc, product) => {
        const industry = product.industry;
        if (!acc[industry]) acc[industry] = [];
        acc[industry].push(product);
        return acc;
      }, {} as Record<string, typeof products>);
    }
    return {};
  };

  const filteredProducts = getFilteredProducts();
  const activeProduct = products.find((p) => p.slug === activeFilter);
  const categorizedProducts = getProductsByCategory();



  return (
    <>
 
      <SectionTop
        chip=""
        title="Our Products"
        description="With over 15 years of engineering excellence, Bonton is India's most certified cable company, holding global accreditations like UL and IATF 16949:2016. Our 25+ product categories serve critical infrastructure, and our network of 1,000+ partners ensures nationwide delivery of superior, future-ready solutions built for performance, safety, and sustainability."
        imageUrl="/sectiontop/products.png"
        btnText=" Explore All Products"
        link="#products"
      />




      <div className="parent py-[100px]">
        <div className="container">
          {/* Tab Navigation */}
          <div className="flex w-full mb-12">
            <button
              onClick={() => setActiveCategory("type")}
              className={`flex-1 flex items-center justify-between px-6 py-4 text-sm font-medium uppercase tracking-wide transition-all duration-300 ${
                activeCategory === "type"
                  ? "bg-gray-200 text-gray-800"
                  : "bg-white text-gray-600 border-b-2 border-gray-300 hover:border-gray-400"
              }`}
            >
              <span>BY TYPE</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </button>

            <button
              onClick={() => setActiveCategory("standard")}
              className={`flex-1 flex items-center justify-between px-6 py-4 text-sm font-medium uppercase tracking-wide transition-all duration-300 ${
                activeCategory === "standard"
                  ? "bg-gray-200 text-gray-800"
                  : "bg-white text-gray-600 border-b-2 border-gray-300 hover:border-gray-400"
              }`}
            >
              <span>BY STANDARD</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </button>

            <button
              onClick={() => setActiveCategory("industry")}
              className={`flex-1 flex items-center justify-between px-6 py-4 text-sm font-medium uppercase tracking-wide transition-all duration-300 ${
                activeCategory === "industry"
                  ? "bg-gray-200 text-gray-800"
                  : "bg-white text-gray-600 border-b-2 border-gray-300 hover:border-gray-400"
              }`}
            >
              <span>BY INDUSTRY</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </button>
          </div>

          {/* Products Display */}
          <div className="space-y-12">
            {Object.entries(categorizedProducts).map(([category, categoryProducts]) => (
              <div key={category} className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">
                  {category}
                </h2>
                <div className="space-y-2">
                  {categoryProducts.map((product, index) => (
                    <div
                      key={product.slug}
                      className="group bg-white hover:bg-gray-50 transition-all duration-300 border-b border-gray-200 last:border-b-0"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <Link
                        href={`/products/${product.slug}`}
                        className="flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          {/* Product Image */}
                          <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-[var(--accent1)] transition-colors duration-300 overflow-hidden">
                            <Image
                              src={product.images[product.images.length - 1]}
                              alt={product.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-contain rounded-full "
                            />
                          </div>
                          
                          {/* Product Name */}
                          <h3 className="text-lg font-medium text-gray-800 group-hover:text-[var(--accent1)] transition-colors duration-300">
                            {product.name}
                          </h3>
                        </div>

                        {/* Arrow Icon */}
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-[var(--accent1)] transition-colors duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 17L17 7M17 7H7M17 7V17"
                          />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>








    </>
  );
};

export default Page;
