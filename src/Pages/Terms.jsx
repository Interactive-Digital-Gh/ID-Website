import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Scale, FileText, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            title: "1. Acceptance of Terms",
            icon: ShieldCheck,
            content: "By accessing and using this website (interactivedigital.com.gh), you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
        },
        {
            title: "2. Use License",
            icon: FileText,
            content: "Permission is granted to temporarily download one copy of the materials (information or software) on Interactive Digital's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
            list: [
                "Modify or copy the materials",
                "Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)",
                "Attempt to decompile or reverse engineer any software contained on the website",
                "Remove any copyright or other proprietary notations from the materials",
                "Transfer the materials to another person or 'mirror' the materials on any other server"
            ]
        },
        {
            title: "3. Disclaimer",
            icon: AlertCircle,
            content: "The materials on Interactive Digital's website are provided on an 'as is' basis. Interactive Digital makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
        },
        {
            title: "4. Limitations",
            icon: Scale,
            content: "In no event shall Interactive Digital or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Interactive Digital's website, even if Interactive Digital or an authorized representative has been notified orally or in writing of the possibility of such damage."
        },
        {
            title: "5. Accuracy of Materials",
            icon: FileText,
            content: "The materials appearing on Interactive Digital's website could include technical, typographical, or photographic errors. Interactive Digital does not warrant that any of the materials on its website are accurate, complete or current. Interactive Digital may make changes to the materials contained on its website at any time without notice."
        },
        {
            title: "6. Links",
            icon: ChevronRight,
            content: "Interactive Digital has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Interactive Digital of the site. Use of any such linked website is at the user's own risk."
        },
        {
            title: "7. Modifications",
            icon: Scale,
            content: "Interactive Digital may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service."
        },
        {
            title: "8. Governing Law",
            icon: ShieldCheck,
            content: "These terms and conditions are governed by and construed in accordance with the laws of Ghana and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
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
                        Terms & <span className="text-[#FF0226]">Conditions</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-80 font-medium">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}. Please read these terms carefully before using our services.
                    </p>
                    <div className="w-24 h-1.5 bg-[#FF0226] mx-auto mt-8 rounded-full"></div>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <motion.section 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#FF0226]/10 rounded-xl">
                                    <section.icon className="w-6 h-6 text-[#FF0226]" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-[#303030] mb-4">
                                        {section.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {section.content}
                                    </p>
                                    {section.list && (
                                        <ul className="mt-6 space-y-3">
                                            {section.list.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-600">
                                                    <span className="mt-2 w-1.5 h-1.5 bg-[#FF0226] rounded-full flex-shrink-0" />
                                                    <span className="text-lg">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Footer Note */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-8 bg-[#303030] rounded-3xl text-white text-center relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF0226] opacity-10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">Have questions about these terms?</h3>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            If you have any queries regarding any of our terms, please feel free to contact our support team at any time.
                        </p>
                        <Link 
                            to="/contact" 
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF0226] text-white font-bold rounded-full hover:bg-white hover:text-[#FF0226] transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-red-500/20"
                        >
                            Contact Us <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Terms;
