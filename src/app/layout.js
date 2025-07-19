import './globals.css';
import Header from '@/components/Nav/Header';

export const metadata = {
  title: 'DATshop - Fashion Sales Optimization',
  description: 'Discover the latest fashion trends with our optimized shopping experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        {/* Footer would go here */}
      </body>
    </html>
  );
}