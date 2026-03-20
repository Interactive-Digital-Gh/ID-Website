import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, RefreshCw, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            title: "Information We Collect",
            icon: Eye,
            content: "We may collect personal information such as your name, contact details, company information, and other data you provide directly to us through our contact forms or during project consultations."
        },
        {
            title: "How We Use Your Information",
            icon: RefreshCw,
            content: "We use your information to provide and improve our digital marketing services, personalize your experience, analyze website performance, and communicate project updates.",
            list: [
                "Provide and improve our digital marketing services",
                "Personalize your experience on our platforms",
                "Analyze website performance and user engagement",
                "Communicate project updates and respond to inquiries"
            ]
        },
        {
            title: "Data Sharing",
            icon: Shield,
            content: "We do not sell your personal information. We may share data with trusted partners for operational purposes, always ensuring robust confidentiality agreements and data protection standards."
        },
        {
            title: "Your Rights",
            icon: Lock,
            content: "You have the right to access, correct, or delete your personal data. You may also opt out of certain data processing activities by contacting us directly."
        },
        {
            title: "Data Security",
            icon: Shield,
            content: "We implement industry-standard measures to protect your data from unauthorized access, alteration, or loss. Our systems are regularly monitored for security vulnerabilities."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-[#303030] mb-6">
                        Privacy <span className="text-[#FF0226]">Statement</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-80 font-medium">
                        Your privacy is our priority. Learn how we handle your data with care and transparency.
                    </p>
                    <div className="w-24 h-1.5 bg-[#FF0226] mx-auto mt-8 rounded-full"></div>
                </motion.div>

                {/* Content Section */}
                <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
                    <p className="text-lg text-gray-600 leading-relaxed mb-12">
                        Interactive Digital values your privacy and is committed to protecting your personal information. This Privacy Statement explains how we collect, use, and safeguard your data when you visit our website or use our services.
                    </p>

                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <motion.section 
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-1.5 h-6 bg-[#FF0226] rounded-full"></div>
                                    <h2 className="text-2xl font-bold text-[#303030]">{section.title}</h2>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                    {section.content}
                                </p>
                                {section.list && (
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        {section.list.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl text-gray-700">
                                                <div className="w-2 h-2 bg-[#FF0226] rounded-full"></div>
                                                <span className="font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </motion.section>
                        ))}
                    </div>

                    {/* Contact Box */}
                    <div className="mt-16 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                        <h3 className="text-xl font-bold text-[#303030] mb-6">Contact Us Regarding Privacy</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
                            <div>
                                <p className="font-semibold text-gray-400 text-sm uppercase mb-1">Phone</p>
                                <p className="text-[#303030]">+233 555 123 456</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-400 text-sm uppercase mb-1">Email</p>
                                <a href="mailto:info@interactivedigital.com.gh" className="text-[#FF0226] hover:underline">
                                    info@interactivedigital.com.gh
                                </a>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-400 text-sm uppercase mb-1">Location</p>
                                <p className="text-[#303030]">Kanda, Accra, Ghana</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="text-center">
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FF0226] font-semibold transition-colors"
                    >
                        Back to Home <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
