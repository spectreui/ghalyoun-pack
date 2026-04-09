'use client';

import Section from '@/components/Section';
import { useRef, useEffect } from 'react';

export default function AboutPage() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Fix ESLint exhaustive-deps warning
    const currentRefs = sectionRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <Section 
        title="About Ghalyoun Pack" 
        subtitle="Your trusted paving partner since 2010"
        ref={(el) => { sectionRefs.current[0] = el; }} // Fixed TypeScript error
        className="animate-fade-in"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Founded in 2010, Ghalyoun Pack began as a small family business with a vision to provide 
              premium paving services to the growing construction industry in Cairo. What started as 
              a modest operation has evolved into one of Cairo&apos;s most reliable providers of high-quality 
              paving solutions.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Over the past decade, we&apos;ve built lasting relationships with contractors, architects, 
              and homeowners who trust us to deliver exceptional workmanship and service. Our commitment 
              to quality, innovation, and customer satisfaction has made us the preferred choice for 
              paving projects across Greater Cairo.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Today, we continue to expand our expertise and improve our services while maintaining 
              the personal touch that has defined our success from day one.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 w-32 h-32 rounded-lg"></div>
          </div>
        </div>
      </Section>
      
      <Section 
        title="Our Mission & Vision" 
        className="mt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-orange-500">Mission</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To provide premium paving services and exceptional craftsmanship that enhance the beauty 
              and functionality of outdoor spaces in Cairo and beyond. We are committed to building 
              long-term partnerships based on trust, quality, and reliability.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-orange-500">Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To become the leading provider of paving solutions in Egypt, recognized for our 
              innovative techniques, sustainable practices, and unwavering commitment to customer 
              satisfaction. We aim to set new industry standards through excellence in everything 
              we do.
            </p>
          </div>
        </div>
      </Section>
      
      <Section 
        title="Our Journey" 
        className="mt-16"
      >
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500 hidden md:block"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-16">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">2010 - Humble Beginnings</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Ghalyoun Pack was founded with a single team and a passion for quality craftsmanship. 
                    We served local clients with basic paving services.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold z-10">
                  1
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-16">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">2014 - Expansion</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We expanded our team and introduced specialized services including permeable paving 
                    and natural stone installations.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold z-10">
                  2
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-16">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">2018 - Innovation</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Launched our own training program for craftsmen and became certified for sustainable 
                    paving practices.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold z-10">
                  3
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-16">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">2023 - Industry Leader</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    With over 500 completed projects and recognition from the Egyptian Construction 
                    Association, we continue to lead with innovation and service excellence.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold z-10">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
