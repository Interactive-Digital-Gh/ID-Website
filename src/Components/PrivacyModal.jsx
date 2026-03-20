import React from 'react';
import { X } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">Interactive Digital Privacy Statement</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500 hover:text-gray-900"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto custom-scrollbar space-y-8 text-gray-600 leading-relaxed">
          <p>
            Interactive Digital values your privacy and is committed to protecting your personal information. This Privacy Statement explains how we collect, use, and safeguard your data when you visit our website or use our services.
          </p>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
              <span className="w-1.5 h-6 bg-[#FF0226] rounded-full mr-3"></span>
              Information We Collect
            </h3>
            <p>
              We may collect personal information such as your name, contact details, company information, and other data you provide directly to us through our contact forms or during project consultations.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
              <span className="w-1.5 h-6 bg-[#FF0226] rounded-full mr-3"></span>
              How We Use Your Information
            </h3>
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2 marker:text-[#FF0226]">
              <li>Provide and improve our digital marketing services</li>
              <li>Personalize your experience on our platforms</li>
              <li>Analyze website performance and user engagement</li>
              <li>Communicate project updates and respond to inquiries</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
              <span className="w-1.5 h-6 bg-[#FF0226] rounded-full mr-3"></span>
              Data Sharing
            </h3>
            <p>
              We do not sell your personal information. We may share data with trusted partners for operational purposes, always ensuring robust confidentiality agreements and data protection standards.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
              <span className="w-1.5 h-6 bg-[#FF0226] rounded-full mr-3"></span>
              Your Rights
            </h3>
            <p>
              You have the right to access, correct, or delete your personal data. You may also opt out of certain data processing activities by contacting us directly.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
              <span className="w-1.5 h-6 bg-[#FF0226] rounded-full mr-3"></span>
              Data Security
            </h3>
            <p>
              We implement industry-standard measures to protect your data from unauthorized access, alteration, or loss. Our systems are regularly monitored for security vulnerabilities.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p><span className="font-semibold text-gray-700">Phone:</span> +233 555 123 456</p>
              <p>
                <span className="font-semibold text-gray-700">Email:</span>{' '}
                <a href="mailto:info@interactivedigital.com.gh" className="text-[#FF0226] hover:underline font-medium">
                  info@interactivedigital.com.gh
                </a>
              </p>
              <p><span className="font-semibold text-gray-700">Location:</span> No.10, Abongo Street Kanda, Accra, Ghana.</p>
            </div>
            <p className="mt-6 text-sm italic">
              By using our website, you consent to the terms of this Privacy Statement. Updates will be posted here as needed.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-[#FF0226] text-white font-semibold rounded-full hover:bg-black transition-all duration-300 shadow-lg shadow-red-500/20"
          >
            Close
          </button>
        </div>
      </div>

      {/* Backdrop click to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default PrivacyModal;
