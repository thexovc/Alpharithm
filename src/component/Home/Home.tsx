"use client"

import Head from "next/head";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import BusinessSolutionsSection from "./BusinessSolutionsSection";
import CTASection from "./CTASection";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>AI Models for Business Solutions</title>
                <meta name="description" content="Leverage the power of AI to automate, analyze, and optimize your workflows" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <HeroSection />

            <FeaturesSection />

            <BusinessSolutionsSection />


        </div>
    );
}
