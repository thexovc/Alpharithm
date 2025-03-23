"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Models', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Custom Models', href: '#' }
    ];

    return (
        <nav className="bg-[#04142B] text-white py-5 px-6 md:px-12">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"} className="flex items-center">
                    <motion.div whileHover={{ rotate: 10 }}>
                        <Image
                            src="/images/home/logo.svg"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="w-10 h-10"
                        />
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="hover:text-blue-300 transition duration-300"
                            whileHover={{ y: -2 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                <div className="flex space-x-4">
                    <Button variant="outline" size="md">Login</Button>
                    <Button variant="primary" size="md">Get Started</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {isMenuOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden container mx-auto mt-4 pb-4"
                >
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-blue-300">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;