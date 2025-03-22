"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TabContent from './TabContent';
import AnimatedChart from './AnimatedChart';
import Tab from '../ui/Tab';

const tabData = [
    {
        id: "market-prediction",
        label: "Market Prediction",
        title: "Use AI insights for smarter business decisions and stay competitive.",
        description: "Our predictive analytics help you make data-driven decisions with confidence.",
        ctaText: "Learn More"
    },
    {
        id: "finance",
        label: "Finance",
        title: "Our AI financial analytics process data for smart investments.",
        description: "Optimize your financial strategy with advanced AI-powered analytics.",
        ctaText: "Read More"
    },
    {
        id: "analytics",
        label: "Analytics",
        title: "Transform raw data into actionable business insights.",
        description: "Our analytics solutions help you discover patterns and opportunities hidden in your data.",
        ctaText: "Explore"
    },
    {
        id: "content-generation",
        label: "Content Generation",
        title: "Create engaging content with AI assistance.",
        description: "Streamline your content creation process with our advanced AI tools.",
        ctaText: "Try Now"
    },
    {
        id: "customer-support",
        label: "Customer Support",
        title: "Enhance customer experiences with AI-powered support.",
        description: "Our solutions help you deliver exceptional customer service around the clock.",
        ctaText: "Get Started"
    }
];

const BusinessSolutionsSection = () => {
    const [activeTab, setActiveTab] = useState("market-prediction");

    return (
        <section className="py-16 px-6 md:px-12">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">AI Models tailored for your business needs</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs.
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <div className="mb-12">
                    <div className="flex flex-wrap justify-center space-x-2 mb-8">
                        {tabData.map((tab) => (
                            <Tab
                                key={tab.id}
                                label={tab.label}
                                isActive={activeTab === tab.id}
                                onClick={() => setActiveTab(tab.id)}
                            />
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimatePresence mode="wait">
                            {tabData.map((tab) => {
                                if (activeTab !== tab.id) return null;

                                return (
                                    <TabContent
                                        key={tab.id}
                                        id={tab.id}
                                        title={tab.title}
                                        description={tab.description}
                                        ctaText={tab.ctaText}
                                    />
                                );
                            })}
                        </AnimatePresence>

                        {/* Image Section - Always shows the active tab's image */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <AnimatedChart />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSolutionsSection;