'use client';

import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

export default function ProductCard({ name, description, image }: ProductCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
          Learn More →
        </button>
      </div>
    </motion.div>
  );
}
