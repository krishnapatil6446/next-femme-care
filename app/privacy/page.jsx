"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'collection',
      title: '1. Information We Collect',
      content: (
        <>
          <p className="mb-4">We may collect the following types of information:</p>
          <div className="space-y-3">
            <div className="pl-4 border-l-2 border-amber-200">
              <h4 className="font-semibold">1.1 Personal Information:</h4>
              <p>Name, email address, phone number, and other contact details when you fill out forms or interact with us.</p>
            </div>
            <div className="pl-4 border-l-2 border-amber-200">
              <h4 className="font-semibold">1.2 Non-Personal Information:</h4>
              <p>Browser type, IP address, device information, and browsing behavior through cookies and analytics tools.</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'usage',
      title: '2. How We Use Your Information',
      content: (
        <>
          <p className="mb-4">We use the collected information for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Providing and improving our services.</li>
            <li>Responding to your inquiries or support requests.</li>
            <li>Sending promotional emails or updates (with your consent).</li>
            <li>Monitoring website performance and user experience.</li>
          </ul>
        </>
      )
    },
    {
      id: 'sharing',
      title: '3. Sharing of Information',
      content: (
        <>
          <p className="mb-4">We do not sell, trade, or rent your personal information. However, we may share your data in the following scenarios:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>With trusted third-party service providers to assist in operating our website or business.</li>
            <li>When required by law or to protect our legal rights.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center text-amber-900 mb-8">
              Privacy Policy for Hemkanti.com
            </h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-amber-800 mb-8">
                At Hemkanti.com, we value your privacy and are committed to protecting your personal information. 
                This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website.
              </p>

              <div className="space-y-6">
                {sections.map((section) => (
                  <div key={section.id} className="border-b border-amber-100 last:border-b-0">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex justify-between items-center py-4 text-left hover:bg-amber-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-amber-200 rounded-lg"
                    >
                      <h2 className="text-xl font-semibold text-amber-900">
                        {section.title}
                      </h2>
                      {expandedSections[section.id] ? (
                        <ChevronUp className="h-5 w-5 text-amber-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-amber-600" />
                      )}
                    </button>
                    
                    {expandedSections[section.id] && (
                      <div className="pb-6 text-amber-900 animate-fadeIn">
                        {section.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                <h2 className="text-xl font-semibold text-amber-900 mb-4">
                  Contact Us
                </h2>
                <div className="flex items-center space-x-2 text-amber-800">
                  <Mail className="h-5 w-5" />
                  <a 
                    href="mailto:support@hemkanti.com"
                    className="text-amber-900 hover:text-amber-700 underline"
                  >
                    support@hemkanti.com
                  </a>
                </div>
              </div>

              <p className="text-sm text-amber-700 mt-6 text-center">
                Last Updated: December 22, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;