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
            className={`px-4 py-2 rounded-md mb-2 md:mb-0 ${isActive
                ? 'bg-[#03217F] text-white'
                : 'bg-[#E4E4E7] md:bg-transparent text-[#828282] md:text-[#AAAAAA]'
                } transition duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {label}
        </motion.button>
    );
};

export default Tab;