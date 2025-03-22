import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface TabContentProps {
    id: string;
    title: string;
    description: string;
    ctaText: string;
}

const TabContent = ({ id, title, description, ctaText }: TabContentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
        >
            <h3 className="text-lg font-semibold mb-2">
                {id.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h3>
            <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <Button variant="secondary">{ctaText}</Button>
        </motion.div>
    );
};

export default TabContent;