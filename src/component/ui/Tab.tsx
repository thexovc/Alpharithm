import React from 'react';
import { motion } from 'framer-motion';

interface TabProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const Tab = ({ label, isActive, onClick }: TabProps) => {
    return (
        <motion.button
            onClick={onClick}
            className={`px-4 py-2 rounded-md mb-2 ${isActive
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {label}
        </motion.button>
    );
};

export default Tab;