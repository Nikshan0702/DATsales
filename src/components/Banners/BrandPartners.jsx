import React from 'react'

export default function BrandPartners() {
    return (
      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-medium text-pink-600">Trusted by leading fashion brands</h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Gucci"
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fclothing-brand&psig=AOvVaw2EgMdzsnjYYJJKXzHKm7A8&ust=1753073732295000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOD6nd3Syo4DFQAAAAAdAAAAABAE"
              width={120}
              height={48}
              className="max-h-10 w-full object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <img
              alt="Prada"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Prada_logo.svg/1200px-Prada_logo.svg.png"
              width={120}
              height={48}
              className="max-h-10 w-full object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <img
              alt="Balenciaga"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Balenciaga_Logo.svg/2560px-Balenciaga_Logo.svg.png"
              width={120}
              height={48}
              className="max-h-10 w-full object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <img
              alt="Saint Laurent"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Yves_Saint_Laurent_Logo.svg/2560px-Yves_Saint_Laurent_Logo.svg.png"
              width={120}
              height={48}
              className="max-h-10 w-full object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <img
              alt="Versace"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Versace_Logo.svg/2560px-Versace_Logo.svg.png"
              width={120}
              height={48}
              className="max-h-10 w-full object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </div>
    )
  }
