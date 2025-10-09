"use client";

import Link from "next/link";
import Image from "next/image";
import products from "@/data/products";
import { useState } from "react";
import SectionTop from "@/components/SectionTop";

const Page = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const getFilteredProducts = () => {
    if (activeFilter === "all") return products;
    return products.filter((product) => product.slug === activeFilter);
  };

  const filteredProducts = getFilteredProducts();
  const activeProduct = products.find((p) => p.slug === activeFilter);

  const filters=[
    {name:"All",slug:"all"},
    {}
  ]



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




      <div className="parent">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="parent py-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.slug}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-[var(--accent1)]/40 transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={product.images[1]}
                    alt={product.name}
                    fill
                    className="object-contain object-bottom transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[var(--accent1)] transition-colors duration-300 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-1 bg-[var(--accent1)] text-white px-3 py-1.5 rounded-md font-medium text-sm text-center hover:bg-[var(--accent1)]/90 transition-colors duration-300"
                    >
                      View Details
                    </Link>
                    <button className="px-3 py-1.5 border border-[var(--accent1)] text-[var(--accent1)] rounded-md font-medium text-sm hover:bg-[var(--accent1)] hover:text-white transition-colors duration-300">
                      Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-black text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-black mb-2">
                No products found
              </h3>
              <p className="text-black">
                Try selecting a different filter category
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
