'use client';
import Image from 'next/image';
import React from 'react';

export default function BrandPartners() {
  const brands = [
    {
      name: "Gucci",
      logo: "/ui1.jpg" // Replace with your actual image path
    },
    {
      name: "Prada",
      logo: "/ui1.jpg"
    },
    {
      name: "Balenciaga",
     logo: "/ui1.jpg"
    },
    {
      name: "Saint Laurent",
      logo: "/ui1.jpg"
    },
    {
      name: "Versace",
      logo: "/ui1.jpg"
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-medium text-pink-600">
          Trusted by leading fashion brands
        </h2>
        
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {brands.map((brand) => (
            <div 
              key={brand.name}
              className="group relative h-12 w-full flex items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={48}
                className="max-h-10 w-full object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}