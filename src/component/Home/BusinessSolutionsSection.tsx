"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import Image from 'next/image';

const tabData = [
    {
        id: "market-prediction",
        label: "Market Prediction",
        title: "Use AI insights for smarter business decisions and stay competitive.",
        ctaText: "Learn More",
        image: "/images/market/market.jpeg"
    },
    {
        id: "finance",
        label: "Finance",
        title: "Our AI financial analytics process data for smart investments.",
        ctaText: "Read More",
        image: "/images/market/finance.jpeg"
    },
    {
        id: "analytics",
        label: "Analytics",
        title: "Transform raw data into actionable business insights.",
        ctaText: "Explore",
        image: "/images/market/analytics.jpeg"
    },
    {
        id: "content-generation",
        label: "Content Generation",
        title: "Create engaging content with AI assistance.",
        ctaText: "Try Now",
        image: "/images/market/content.jpeg"
    },
    {
        id: "customer-support",
        label: "Customer Support",
        title: "Enhance customer experiences with AI-powered support.",
        ctaText: "Get Started",
        image: "/images/market/support.jpeg"
    }
];

const BusinessSolutionsSection = () => {
    const [activeTab, setActiveTab] = useState("market-prediction");

    return (
        <section className="py-16 px-4 bg-white">
            <div className="mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[#22263F]">AI Models tailored for your <br /> business needs</h2>
                    <p className="max-w-2xl mx-auto text-[#828282]">
                        Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs.
                    </p>
                </motion.div>

                {/* Navigation Pills */}
                <div className="flex justify-center gap-4 mb-12">
                    {tabData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 transition-all ${activeTab === tab.id
                                ? 'bg-[#03217F] text-white rounded-lg font-medium'
                                : 'text-[#A7A7A7]'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="relative overflow-hidden">
                    <div className="flex justify-center items-center">
                        {tabData.map((tab, index) => {
                            const isActive = activeTab === tab.id;
                            const position = tabData.findIndex(t => t.id === activeTab);
                            const itemPosition = index - position;

                            return (
                                <motion.div
                                    key={tab.id}
                                    className={`relative ${isActive
                                        ? 'w-[1000px] bg-[#F6FAF3]'
                                        : 'w-[400px] bg-white'
                                        } rounded-2xl`}
                                    animate={{
                                        scale: isActive ? 1 : 0.85,
                                        x: itemPosition * 300,
                                        opacity: isActive ? 1 : 0.8,
                                        zIndex: isActive ? 2 : 0,
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className={`grid grid-cols-2 ${isActive ? 'h-[500px]' : 'h-[300px]'} gap-8 p-8`}>
                                        <div className="space-y-6">
                                            <p className="text-[#828282] text-sm">
                                                {tab.label}
                                            </p>
                                            <h2 className={`font-bold text-[#1D2939] ${isActive ? 'text-4xl leading-tight' : 'text-2xl'
                                                }`}>
                                                {tab.title}
                                            </h2>
                                            {isActive && (
                                                <Button
                                                    variant="secondary"
                                                    size="lg"
                                                    className="mt-8"
                                                >
                                                    {tab.ctaText}
                                                </Button>
                                            )}
                                        </div>

                                        <div className={`${isActive ? 'h-[420px]' : 'h-[300px]'} relative rounded-xl overflow-hidden`}>
                                            {tab.image ? (
                                                <Image
                                                    src={tab.image}
                                                    alt={tab.label}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                                                    <p className="text-[#828282]">Image not available</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSolutionsSection;