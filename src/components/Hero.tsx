'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-pattern relative py-32 md:py-48 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Premium Paving <span className="text-orange-500">Solutions</span> for Cairo
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
            Professional paving services for residential and commercial projects across Greater Cairo. Quality craftsmanship guaranteed.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="#services"
              className="bg-transparent border-2 border-gray-800 hover:bg-gray-800 text-gray-800 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Animated elements */}
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
}
