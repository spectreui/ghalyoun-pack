'use client';

import { motion } from 'framer-motion';

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    avatar: string;
    rating: number;
}

export default function TestimonialCard({ name, role, content, avatar, rating }: TestimonialCardProps) {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex items-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12">
                    {/* Placeholder for avatar */}
                    <img src={avatar} alt={`${name}'s avatar`} className="rounded-full w-full h-full object-cover" />
                </div>
                <div className="ml-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">{name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{role}</p>
                </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">&quot;{content}&quot;</p>
            <div className="flex text-orange-500">
                {'★'.repeat(rating)}
            </div>
        </motion.div>
    );
}
