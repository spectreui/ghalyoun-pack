'use client';

import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { useRef, useEffect } from 'react';

export default function ContactPage() {
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
        title="Contact Us"
        subtitle="Get in touch for inquiries, consultations, or project discussions"
        ref={(el) => { sectionRefs.current[0] = el; }} // Fixed TypeScript error
        className="animate-fade-in"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold">Our Location</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Industrial Zone 15, 6th of October City<br />
                    Giza, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhone className="text-orange-500 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold">Phone Numbers</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    +2 (010) 1234 5678<br />
                    +2 (02) 1234 5679
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="text-orange-500 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    info@ghalyounpack.com<br />
                    sales@ghalyounpack.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaClock className="text-orange-500 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold">Working Hours</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Sunday - Thursday: 8:00 AM - 6:00 PM<br />
                    Friday: 8:00 AM - 2:00 PM<br />
                    Saturday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Find Us</h3>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=31.132%2C30.121%2C31.137%2C30.126&layer=mapnik&marker=30.1234567%2C31.1345678"
                    width="100%"
                    height="350"
                    frameBorder="0"
                    scrolling="no"
                    title="Ghalyoun Pack Location"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
