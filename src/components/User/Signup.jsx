'use client';
import { useState } from 'react';
import Link from 'next/link';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Signup({ onSubmit }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, Setuser] = useState({
    name: '',
    gender: '',
    address: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    Setuser(prev => ({
      ...prev,
      [name]: name === 'agreeTerms' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate password match
    if (user.password !== user.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
  
    // Validate password strength
    if (user.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
  
    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      setError("Please enter a valid email address");
      return;
    }
  
    // Validate phone number
    if (!user.phone) {
      setError("Phone number is required");
      return;
    }
  
    setIsLoading(true);
    setError("");
  
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: user.name.trim(),
          gender: user.gender,
          address: user.address.trim(),
          email: user.email.trim().toLowerCase(),
          phone: user.phone.trim(),
          password: user.password,
        }),
      });
  
      const text = await response.text();
      const responseData = text ? JSON.parse(text) : {};
      
      if (!response.ok) {
        throw new Error(
          responseData.error || 
          response.statusText || 
          `Registration failed (status ${response.status})`
        );
      }
  
      toast.success('Account created successfully!');
      router.push('/'); // Redirect to login page
    } catch (error) {
      console.error("Signup error:", error);
      setError(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="col-span-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={user.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#E91E63] focus:border-[#E91E63] sm:text-sm"
                />
              </div>

              {/* Gender Field */}
              <div className="col-span-1">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  value={user.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#E91E63] focus:border-[#E91E63] sm:text-sm"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              {/* Email Field */}
              <div className="col-span-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={user.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#E91E63] focus:border-[#E91E63] sm:text-sm"
                />
              </div>

              {/* Phone Field */}
              <div className="col-span-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={user.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#E91E63] focus:border-[#E91E63] sm:text-sm"
                />
              </div>

              {/* Password Field */}
              <div className="col-span-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    minLength={8}
                    value={user.password}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#E91E63] focus:border-[#E91E63] sm:text-sm pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="col-span-1">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={user.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#E91E63] focus:border-[#E91E63] sm:text-sm"
                />
              </div>
            </div>

            {/* Address Field (full width) */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                required
                value={user.address}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#E91E63] focus:border-[#E91E63] sm:text-sm"
              />
            </div>

            {/* Terms Checkbox */}
            {/* <div className="flex items-center">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                required
                checked={user.agreeTerms}
                onChange={handleChange}
                className="h-4 w-4 text-[#E91E63] focus:ring-[#E91E63] border-gray-300 rounded"
              />
              <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
                I agree to the <Link href="/terms" className="text-[#E91E63] hover:text-[#d81b60]">Terms and Conditions</Link>
              </label>
            </div> */}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E91E63] hover:bg-[#d81b60] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E91E63]"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <FcGoogle className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <FaFacebook className="h-5 w-5 text-blue-600" />
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <FaApple className="h-5 w-5 text-gray-900" />
            </button>
          </div>
        </div>

        <div className="text-sm text-center mt-4">
          Already have an account?{' '}
          <Link href="/Signin" className="font-medium text-[#E91E63] hover:text-[#d81b60]">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}