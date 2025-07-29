import './globals.css';
// import Header from '@/components/Nav/Header';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: 'DATshop - Fashion Sales Optimization',
  description: 'Discover the latest fashion trends with our optimized shopping experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* <Header /> */}
        <main className="flex-grow">
          {children}
          <Toaster position="top-right" /> 
          <ToastContainer position="top-right" />
        </main>
        {/* Footer would go here */}
      </body>
    </html>
  );
}