'use client';
import Link from 'next/link';
import Signin from '../User/Signin';

export default function FashionDashboard() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
  <div className="relative isolate overflow-hidden bg-gradient-to-br h-[40rem] from-pink-600 to-purple-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 lg:items-center min-h-[32rem]"> {/* Increased height */}
    <svg
      viewBox="0 0 1024 1024"
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
    >
      <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
      <defs>
        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
          <stop stopColor="#E935C1" />
          <stop offset={1} stopColor="#FF80B5" />
        </radialGradient>
      </defs>
    </svg>
    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Welcome to <span className="font-bold">DATshop</span>
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-100">
        Discover the latest fashion trends and exclusive member benefits.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
        <Link
          href="/signup"
          className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-pink-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Create account
        </Link>
        <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-gray-100">
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>

    {/* Signin Component with proper styling and alignment */}
 
        <Signin />

  </div>
</div>
    </div>
  );
}