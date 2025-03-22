import React from 'react';

const Footer = () => {
    const footerLinks = {
        product: ['Features', 'Pricing', 'Documentation', 'API'],
        company: ['About Us', 'Careers', 'Blog', 'Contact'],
        connect: ['Twitter', 'LinkedIn', 'GitHub', 'Discord']
    };

    return (
        <footer className="bg-blue-900 text-white py-12 px-6 md:px-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-500 rounded mr-2"></div>
                        <span className="font-bold text-xl">AI Solutions</span>
                    </div>
                    <p className="text-blue-200 mb-4">
                        Leveraging the power of AI to transform businesses and drive innovation.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-4">Product</h4>
                    <ul className="space-y-2">
                        {footerLinks.product.map(link => (
                            <li key={link}>
                                <a href="#" className="text-blue-200 hover:text-white transition duration-300">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-4">Company</h4>
                    <ul className="space-y-2">
                        {footerLinks.company.map(link => (
                            <li key={link}>
                                <a href="#" className="text-blue-200 hover:text-white transition duration-300">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-4">Connect</h4>
                    <ul className="space-y-2">
                        {footerLinks.connect.map(link => (
                            <li key={link}>
                                <a href="#" className="text-blue-200 hover:text-white transition duration-300">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container mx-auto mt-12 pt-6 border-t border-blue-800">
                <p className="text-blue-300 text-center">© 2025 AI Business Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
