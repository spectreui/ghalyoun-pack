'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaCheckCircle, FaAward, FaTruck, FaUsers } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Paving Installation',
    description: 'Professional installation of concrete pavers, interlocking stones, and natural stone for driveways, walkways, and patios.',
    icon: '🔧',
  },
  {
    id: 2,
    title: 'Residential Projects',
    description: 'Custom paving solutions for homes including driveways, garden paths, pool decks, and outdoor living spaces.',
    icon: '🏠',
  },
  {
    id: 3,
    title: 'Commercial Paving',
    description: 'Large-scale paving projects for businesses, shopping centers, parking lots, and municipal facilities.',
    icon: '🏢',
  },
  {
    id: 4,
    title: 'Maintenance & Repair',
    description: 'Restoration and repair services for existing paved surfaces to extend their lifespan and appearance.',
    icon: '🛠️',
  },
  {
    id: 5,
    title: 'Drainage Solutions',
    description: 'Expert installation of permeable pavers and drainage systems to manage water effectively.',
    icon: '💧',
  },
  {
    id: 6,
    title: 'Consultation Services',
    description: 'Professional advice on material selection, design planning, and project execution for optimal results.',
    icon: '📋',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    role: 'Construction Manager',
    content: 'Ghalyoun Pack delivered exactly what we needed for our commercial project. Their quality and service are unmatched in Cairo.',
    avatar: '/images/testimonials/avatar1.jpeg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mariam Salah',
    role: 'Homeowner',
    content: 'The paving stones transformed our driveway beautifully. Fast delivery and excellent customer service.',
    avatar: '/images/testimonials/avatar2.jpeg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Karim Adel',
    role: 'Project Developer',
    content: 'We\'ve used Ghalyoun Pack for multiple projects. Their materials are consistently top quality and their team is professional.',
    avatar: '/images/testimonials/avatar3.jpeg',
    rating: 5,
  },
];

const stats = [
  { number: '13+', label: 'Years Experience' },
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
];

export default function Home() {
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
    <div className="w-full">
      <Hero />

      {/* Services Overview */}
      <Section
        title="Our Premium Services"
        subtitle="Comprehensive paving solutions for residential and commercial projects"
        ref={(el) => { sectionRefs.current[0] = el; }} // Fixed TypeScript error
        className="animate-fade-in"
        id="services"
      >
        <div className="service-grid mt-10">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section
        className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 py-16"
      >
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section
        title="Why Choose Ghalyoun Pack?"
        subtitle="Your trusted paving partner in Cairo"
        ref={(el) => { sectionRefs.current[1] = el; }} // Fixed TypeScript error
        className="animate-fade-in"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="industrial-icon mx-auto">
              <FaAward size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We source only the highest quality materials that meet international standards.
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="industrial-icon mx-auto">
              <FaCheckCircle size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Craftsmanship</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our skilled artisans ensure precision in every project, big or small.
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="industrial-icon mx-auto">
              <FaTruck size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Prompt delivery across Greater Cairo with our efficient logistics network.
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="industrial-icon mx-auto">
              <FaUsers size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Personalized service tailored to your specific needs and preferences.
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        title="What Our Clients Say"
        subtitle="Trusted by professionals and homeowners across Cairo"
        ref={(el) => { sectionRefs.current[2] = el; }} // Fixed TypeScript error
        className="animate-fade-in bg-gray-50 dark:bg-gray-900"
      >
        <div className="testimonial-grid mt-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <Section className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Outdoor Spaces</h2>
          <p className="text-xl mb-8">Get a free consultation for your paving project today</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us
              </Link>
            </motion.button>
          </div>
        </div>
      </Section>
    </div>
  );
}
