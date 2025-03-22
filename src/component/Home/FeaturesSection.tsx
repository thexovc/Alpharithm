import React from 'react';
import { motion } from 'framer-motion';

const features = [
    { id: 'sisyphus', name: 'Sisyphus', color: 'bg-green-500' },
    { id: 'circnodes', name: 'Circnodes', color: 'bg-blue-500' },
    { id: 'catalog', name: 'Catalog', color: 'bg-purple-500' },
    { id: 'quotid', name: 'Quotid', color: 'bg-violet-500' }
];

const FeaturesSection = () => {
    return (
        <section>
            <div className="py-4 bg-gray-100">
                <div className="container mx-auto">
                    <p className="text-center text-gray-600 text-sm">Use it from conception to execution planning</p>
                </div>
            </div>

            <div className="py-4 border-b border-gray-200">
                <div className="container mx-auto flex flex-wrap justify-center md:justify-between">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center px-6 py-3"
                        >
                            <div className={`w-6 h-6 mr-2 ${feature.color} rounded-full`}></div>
                            <span className="font-medium">{feature.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;