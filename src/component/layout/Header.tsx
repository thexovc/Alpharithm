import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Header = () => {
    return (
        <header className="bg-blue-900 text-white py-16 px-6 md:px-12">
            <div className="container mx-auto text-center">
                <motion.h5
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm md:text-base mb-2"
                >
                    Leverage our Automation
                </motion.h5>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    AI Models for<br />Business Solutions
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="max-w-2xl mx-auto mb-8 px-4 py-2 bg-blue-800/50 border border-blue-500"
                >
                    <p>Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button variant="primary" size="lg">Get Started Now</Button>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;