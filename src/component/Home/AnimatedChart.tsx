import React from 'react';
import { motion } from 'framer-motion';

const AnimatedChart = () => {
    return (
        <div className="relative w-full h-64 md:h-80 bg-gradient-to-tr from-blue-900 to-violet-600 rounded-lg overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: [0, 1, 1],
                    scale: [0, 1.2, 1],
                    y: [0, -10, 0]
                }}
                transition={{
                    duration: 1.5,
                    times: [0, 0.7, 1],
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1
                }}
                className="absolute right-10 top-1/3 w-32 h-32 border-t-2 border-r-2 border-white/30 rounded-full"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 1, 0.5],
                    scale: [0.8, 1, 0.9],
                    x: [0, 10, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 0.5
                }}
                className="absolute left-10 bottom-1/3 w-16 h-16 bg-white/10 rounded-md"
            />

            <motion.div
                className="absolute top-1/4 left-1/4 h-1/2"
                initial={{ opacity: 0.2, height: "30%" }}
                animate={{
                    opacity: [0.2, 0.8, 0.2],
                    height: ["30%", "60%", "30%"]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            >
                <svg width="200" height="100%" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        d="M10 150 L30 100 L50 120 L70 80 L90 50"
                        stroke="white"
                        strokeWidth="2"
                        strokeDasharray="300"
                        initial={{ strokeDashoffset: 300 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    />
                </svg>
            </motion.div>
        </div>
    );
};

export default AnimatedChart;