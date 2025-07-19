'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import HeroSection from './HeroSection';
import Signin from '../User/Signin';
import FashionDashboard from './FashionDashboard';
import Footer from './Footer';

export default function UI() {
  // ... (keep your existing state and ref declarations)

  return (
    <div className="space-y-12"> {/* This creates consistent vertical spacing */}
      <FashionDashboard />
      
      {/* Explore More Banner */}
      <div className="bg-gradient-to-r from-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <svg 
            className="mx-auto h-8 w-8 text-pink-600" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore More
          </h2>
          
          <blockquote className="mt-6 max-w-2xl mx-auto">
            <p className="text-lg leading-8 text-gray-600 italic">
              "Fashion is the armor to survive the reality of everyday life"
            </p>
            <footer className="mt-4 text-sm text-gray-500">
              — Bill Cunningham
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="my-6"></div>
      <HeroSection />
      
      <Footer />
    </div>
  );
}