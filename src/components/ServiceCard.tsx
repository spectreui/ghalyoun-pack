'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

        <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors flex items-center">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
