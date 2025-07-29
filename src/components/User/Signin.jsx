// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
// import { FcGoogle } from 'react-icons/fc';
// import { FaFacebook, FaApple } from 'react-icons/fa';

// export default function Signin({ onSubmit }) {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     remember: false
//   });

//   const handleChange = (e) => {
//     const { name, value, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: name === 'remember' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Clear previous errors
//     setError("");
  
//     // Basic validation
//     if (!user.email.trim()) {
//       setError("Email address is required");
//       return;
//     }
  
//     if (!user.password) {
//       setError("Password is required");
//       return;
//     }
  
//     setIsLoading(true);
  
//     try {
//       const response = await fetch('/api/auth', {  // Changed endpoint
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: user.email.trim().toLowerCase(),
//           password: user.password,
//         }),
//       });
  
//       const data = await response.json();
  
//       if (!response.ok) {
//         // Handle specific login errors
//         let errorMsg = data.error || data.message || 'Login failed';
        
//         if (response.status === 401) {
//           errorMsg = "Invalid email or password";
//         } else if (response.status === 404) {
//           errorMsg = "Account not found";
//         }
        
//         throw new Error(errorMsg);
//       }
  
//       // Successful login
//       toast.success('Logged in successfully!');
      
//       // Store the token if available
//       if (data.token) {
//         localStorage.setItem('authToken', data.token);
//       }
      
//       toast.success(' Login successfully!');
//       router.push('/');  // Or your desired redirect path
  
//     } catch (error) {
//       console.error("Login error:", error);
//       setError(error.message);
//       toast.error(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
  
//       <div className="max-w-md w-full space-y-8  bg-white p-8 rounded-lg shadow-md">
//         <div className="text-center">
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>
//         <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#E91E63] focus:border-[#E91E63] sm:text-sm"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="relative mt-1">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   autoComplete="current-password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#E91E63] focus:border-[#E91E63] sm:text-sm pr-10"
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 flex items-center pr-3"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeSlashIcon className="h-5 w-5 text-gray-400" />
//                   ) : (
//                     <EyeIcon className="h-5 w-5 text-gray-400" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember"
//                   name="remember"
//                   type="checkbox"
//                   checked={formData.remember}
//                   onChange={handleChange}
//                   className="h-4 w-4 text-[#E91E63] focus:ring-[#E91E63] border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <Link href="/forgot-password" className="font-medium text-[#E91E63] hover:text-[#d81b60]">
//                   Forgot password?
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E91E63] hover:bg-[#d81b60] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E91E63]"
//             >
//               Sign In
//             </button>
//           </div>
//         </form>

//         <div className="mt-6">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">Or continue with</span>
//             </div>
//           </div>

//           <div className="mt-6 grid grid-cols-3 gap-3">
//             <button
//               type="button"
//               className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//             >
//               <FcGoogle className="h-5 w-5" />
//             </button>
//             <button
//               type="button"
//               className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//             >
//               <FaFacebook className="h-5 w-5 text-blue-600" />
//             </button>
//             <button
//               type="button"
//               className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//             >
//               <FaApple className="h-5 w-5 text-gray-900" />
//             </button>
//           </div>
//         </div>

//         <div className="text-sm text-center mt-4">
//           Don't have an account?{' '}
//           <Link href="/Signup" className="font-medium text-[#E91E63] hover:text-[#d81b60]">
//             Sign Up
//           </Link>
//         </div>
//       </div>

//   );
// }


'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple } from 'react-icons/fa';

export default function Signin({ onSubmit }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'remember' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!formData.email.trim()) {
      setError("Email address is required");
      return;
    }
  
    if (!formData.password) {
      setError("Password is required");
      return;
    }
  
    setIsLoading(true);
  
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
        }),
      });
  
      // First check if response is OK and content-type is JSON
      const contentType = response.headers.get('content-type');
      
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned invalid response format');
      }
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
  
      // Handle successful login
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        if (formData.remember) {
          localStorage.setItem('rememberMe', 'true');
        }
      }
  
      toast.success('Logged in successfully!');
      router.push('/');
  
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.message.includes('invalid response format')
        ? 'Server error - please try again later'
        : error.message;
      
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#E91E63] focus:border-[#E91E63] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.password}
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#E91E63] focus:ring-[#E91E63] border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-[#E91E63] hover:text-[#d81b60]">
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E91E63] hover:bg-[#d81b60] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E91E63] ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
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
          Don't have an account?{' '}
          <Link href="/Signup" className="font-medium text-[#E91E63] hover:text-[#d81b60]">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}