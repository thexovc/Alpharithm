import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CTASection = () => {
    return (
        <section className="bg-gray-100 py-16 px-6 md:px-12">
            <div className="container mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-2xl md:text-3xl font-bold mb-4"
                >
                    Ready to transform your business with AI?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-gray-600 mb-8"
                >
                    Our AI solutions are designed to help businesses of all sizes unlock new opportunities and optimize operations.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-col md:flex-row justify-center gap-4"
                >
                    <Button variant="secondary" size="lg">Get Started Free</Button>
                    <Button variant="outline" size="lg">Schedule a Demo</Button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;