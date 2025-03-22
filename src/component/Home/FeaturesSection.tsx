import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
    {
        id: 'layers',
        name: 'Layers',
        logo: '/images/companies/layers.svg'
    },
    {
        id: 'sisyphus',
        name: 'Sisyphus',
        logo: '/images/companies/sisyphus.svg'
    },
    {
        id: 'circooles',
        name: 'Circooles',
        logo: '/images/companies/circooles.svg'
    },
    {
        id: 'catalog',
        name: 'Catalog',
        logo: '/images/companies/catalog.svg'
    },
    {
        id: 'quotient',
        name: 'Quotient',
        logo: '/images/companies/quotient.svg'
    }
];

const FeaturesSection = () => {
    return (
        <section>
            <div className="py-4">
                <div className="container mx-auto">
                    <p className="text-center text-[#667085] text-lg">Join 4,000+ companies already growing</p>
                </div>
            </div>

            <div className="py-4 overflow-hidden">
                <motion.div
                    className="flex justify-between items-center px-4"
                    animate={{ x: [0, -100] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center px-6 py-3 space-x-2"
                        >
                            <div>
                                <Image
                                    src={feature.logo}
                                    alt={feature.name}
                                    width={24}
                                    height={24}
                                    className="h-6 w-auto"
                                />
                            </div>
                            <span className="font-bold text-xl">{feature.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;