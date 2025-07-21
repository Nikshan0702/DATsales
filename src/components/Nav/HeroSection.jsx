// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const heroRef = useRef(null);

//   // Hero slides data with different images
//   const slides = [
//     {
//       id: 1,
//       title: "Summer Collection 2024",
//       subtitle: "Discover the latest trends",
//       description: "Up to 50% off on new arrivals",
//       buttonText: "Shop Now",
//       buttonLink: "/summer-collection",
//       image: "/ui1.jpg",
//       bgColor: "bg-gradient-to-r from-amber-100/30 to-rose-100/30",
//       textColor: "text-white",
//       overlay: "bg-black/40"
//     },
//     {
//       id: 2,
//       title: "Limited Time Offer",
//       subtitle: "Flash Sale",
//       description: "Get 30% off on selected items",
//       buttonText: "Grab Deals",
//       buttonLink: "/flash-sale",
//       image: "/ui2.jpg",
//       bgColor: "bg-gradient-to-r from-blue-50/30 to-purple-50/30",
//       textColor: "text-white",
//       overlay: "bg-black/40"
//     },
//     {
//       id: 3,
//       title: "Premium Accessories",
//       subtitle: "New Arrivals",
//       description: "Elevate your style with our collection",
//       buttonText: "Explore",
//       buttonLink: "/accessories",
//       image: "/ui3.jpg", 
//       bgColor: "bg-gradient-to-r from-gray-50/30 to-stone-100/30",
//       textColor: "text-white",
//       overlay: "bg-black/40"
//     }
//   ];

//   // Auto-rotate slides
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   // Scroll to next section
//   const scrollToNextSection = () => {
//     const nextSection = document.getElementById('content');
//     if (nextSection) {
//       nextSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section 
//       ref={heroRef} 
//       className="relative h-screen max-h-[1000px] w-full overflow-hidden"
//       style={{ marginTop: '-80px' }} // Adjust this value to match your header height
//     >
//       {/* Slideshow */}
//       <div className="relative h-full w-full">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${
//               index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             }`}
//           >
//             {/* Background */}
//             <div className={`absolute inset-0 ${slide.bgColor}`}></div>
            
//             {/* Image */}
//             <div className="absolute inset-0">
//               <Image
//                 src={slide.image}
//                 alt={slide.title}
//                 fill
//                 className="object-cover object-center"
//                 priority={index === 0}
//                 quality={100}
//               />
//               <div className={`absolute inset-0 ${slide.overlay}`}></div>
//             </div>

//             {/* Content */}
//             <div className="container mx-auto px-6 relative z-10">
//               <div className={`max-w-2xl ${slide.textColor}`}>
//                 <span className="text-lg font-semibold text-[#FFCF40] mb-2 block">
//                   {slide.subtitle}
//                 </span>
//                 <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//                   {slide.title}
//                 </h1>
//                 <p className="text-xl md:text-2xl mb-8 font-medium max-w-lg">
//                   {slide.description}
//                 </p>
//                 <div className="flex flex-wrap gap-4">
//                   <Link
//                     href={slide.buttonLink}
//                     className="inline-block bg-[#E91E63] hover:bg-[#d81b60] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
//                   >
//                     {slide.buttonText}
//                   </Link>
//                   <button
//                     onClick={scrollToNextSection}
//                     className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/20 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-[1.02]"
//                   >
//                     Explore More
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-0 right-0">
//         <div className="flex justify-center space-x-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-4 h-4 rounded-full transition-all duration-300 ${
//                 index === currentSlide ? 'bg-[#E91E63] w-8' : 'bg-white/70'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
//         className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full z-10 transition-all duration-300 shadow-lg"
//         aria-label="Previous slide"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
//       <button
//         onClick={() => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
//         className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full z-10 transition-all duration-300 shadow-lg"
//         aria-label="Next slide"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//     </section>
//   );
// }

'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Summer Collection 2024",
      subtitle: "Discover the latest trends",
      description: "Up to 50% off on new arrivals",
      buttonText: "Shop Now",
      buttonLink: "/summer-collection",
      image: "/ui1.jpg",
      bgColor: "bg-gradient-to-r from-amber-100/30 to-rose-100/30",
      textColor: "text-white",
      overlay: "bg-black/40"
    },
    {
      id: 2,
      title: "Limited Time Offer",
      subtitle: "Flash Sale",
      description: "Get 30% off on selected items",
      buttonText: "Grab Deals",
      buttonLink: "/flash-sale",
      image: "/ui2.jpg",
      bgColor: "bg-gradient-to-r from-blue-50/30 to-purple-50/30",
      textColor: "text-white",
      overlay: "bg-black/40"
    },
    {
      id: 3,
      title: "Premium Accessories",
      subtitle: "New Arrivals",
      description: "Elevate your style with our collection",
      buttonText: "Explore",
      buttonLink: "/accessories",
      image: "/ui3.jpg", 
      bgColor: "bg-gradient-to-r from-gray-50/30 to-stone-100/30",
      textColor: "text-white",
      overlay: "bg-black/40"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('content');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef} 
      className="relative w-full overflow-hidden"
      style={{ marginTop: '-80px' }}
    >
      {/* Container with max-width and rounded corners */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className={`absolute inset-0 ${slide.bgColor}`}></div>
              
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  quality={100}
                />
                <div className={`absolute inset-0 ${slide.overlay}`}></div>
              </div>

              <div className="container mx-auto px-6 relative z-10">
                <div className={`max-w-2xl ${slide.textColor}`}>
                  <span className="text-lg font-semibold text-[#FFCF40] mb-2 block">
                    {slide.subtitle}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 font-medium max-w-lg">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={slide.buttonLink}
                      className="inline-block bg-[#E91E63] hover:bg-[#d81b60] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {slide.buttonText}
                    </Link>
                    <button
                      onClick={scrollToNextSection}
                      className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/20 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Explore More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-0 right-0">
            <div className="flex justify-center space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-[#E91E63] w-6' : 'bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-10 transition-all duration-300 shadow-lg"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-10 transition-all duration-300 shadow-lg"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}