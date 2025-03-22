import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-b from-[#04142B] to-[#0037FF]  text-white py-16 px-6 md:px-12">
            <div className="container mx-auto text-center">
                <motion.h5
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-semibold md:text-base mb-2 text-[#7191FF]"
                >
                    Leverage our Automation
                </motion.h5>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    AI Models for<br />Business Solutions
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="w-[90%] text-xl md:w-3/5 md:text-2xl mx-auto mb-8 px-4 py-2"
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
        </section>
    );
};

export default HeroSection;