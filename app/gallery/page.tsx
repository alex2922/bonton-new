"use client";

import Image from "next/image";
import SectionTop from "@/components/SectionTop";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // List of all images in the gallery folder
  const galleryImages = [
    "0M4A0152.JPG",
    "0M4A0162.JPG", 
    "0M4A0208.JPG",
    "20250623_160308.JPG",
    // "0M4A0246.JPG",
    // "0M4A0247.JPG",
    // "0M4A0252.JPG",
    // "0M4A0256.JPG",
    // "0M4A0276.JPG",
    // "0M4A0280.JPG",
    // "0M4A0283.JPG",
    // "0M4A0285.JPG",
    // "0M4A0293.JPG",
    // "0M4A0317.JPG",
    // "0M4A0331.JPG",
    // "0M4A0336.JPG",
    // "0M4A0349.JPG",
    // "0M4A0364.JPG",
    // "0M4A0380.JPG",
    // "0M4A0405.JPG",
    // "0M4A0429.JPG",
    // "0M4A0453.JPG",
    // "0M4A0473.JPG",
    // "0M4A0527.JPG",
    // "IMG-20190108-WA0121.jpg",
    // "IMG-20190108-WA0122.jpg",
    // "IMG-20190108-WA0123.jpg",
    // "IMG-20190108-WA0124.jpg",
    // "IMG-20190108-WA0126.jpg"
  ];

  return (
    <>
      <SectionTop
        chip=""
        title="The Future, Wired"
        description="Where Progress, People, and Power Come Together — not as distant ideas, but as one electrifying force.
From the spark in an electrician’s hands to the precision of our factories and the dreams lighting up Indian homes, this is where innovation meets emotion, where technology embraces humanity. This is the junction where every connection becomes a symbol of possibility."
        imageUrl="/sectiontop/gallery.jpg"
        btnText=""
        link=""
      />

      <div className="parent py-[80px] bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative aspect-square cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={`/gallery/${image}`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for large image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-18 right-2 text-white hover:text-gray-300 transition-colors duration-200 text-2xl font-bold z-10"
            >
              ✕
            </button>
            
            {/* Large image */}
            <div className="relative w-full h-full">
              <Image
                src={`/gallery/${selectedImage}`}
                alt="Gallery image"
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
