'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Header from './Header'; // Import your header component
import HeroSection from './HeroSection';
import FashionDashboard from './FashionDashboard';
import Footer from './Footer';
import Support from '../support/Support';
import BrandPartners from '../Banners/BrandPartners';
import AboutUs from '../Banners/Aboutus';
import ContactPage from '../support/ContactPage';

const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  },
  slideUp: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  },
  slideLeft: {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7 } }
  },
  scaleUp: {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  },
  rotateIn: {
    hidden: { rotate: -5, opacity: 0 },
    visible: { rotate: 0, opacity: 1, transition: { duration: 0.6 } }
  }
};

export default function HomePage() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="relative">
      {/* Your animated header */}
      <Header />
      
      {/* Main content with scroll animations */}
      <main className="pt-24"> {/* Add padding to account for fixed header */}
        <div ref={ref} className="space-y-12">
          {/* Fashion Dashboard - Slide Up */}
          <motion.div
            id="dashboard"
            initial="hidden"
            animate={controls}
            variants={animationVariants.slideUp}
          >
            <FashionDashboard />
          </motion.div>

          {/* Hero Section - Fade In */}
          <motion.div
            id="hero"
            initial="hidden"
            animate={controls}
            variants={animationVariants.fadeIn}
          >
            <HeroSection />
          </motion.div>

          {/* Brand Partners - Slide Left */}
          {/* <motion.div
            initial="hidden"
            animate={controls}
            variants={animationVariants.slideLeft}
          >
            <BrandPartners />
          </motion.div> */}

          {/* Support - Scale Up */}

          <motion.div

      initial="hidden"
      animate={controls}
      variants={animationVariants.scaleUp}
>
<Support />
</motion.div>

          <motion.div
          id='contact'
            initial="hidden"
            animate={controls}
            variants={animationVariants.scaleUp}
          >
            <ContactPage />
          </motion.div>


       

          {/* About Us - Rotate In */}
          <motion.div
            id="about"
            initial="hidden"
            animate={controls}
            variants={animationVariants.rotateIn}
          >
            <AboutUs />
          </motion.div>

          {/* Footer - Slide Up */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={animationVariants.slideUp}
          >
            <Footer />
          </motion.div>
        </div>
      </main>
    </div>
  );
}