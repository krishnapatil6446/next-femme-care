"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content: (
        <div className="space-y-4">
          <p>By scheduling an appointment or using any services at Hemkanti Clinics, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These terms govern your use of our services, website, and facilities.</p>
        </div>
      )
    },
    {
      id: 'services',
      title: '2. Medical Services',
      content: (
        <div className="space-y-4">
          <div className="pl-4 border-l-2 border-amber-200">
            <h4 className="font-semibold">2.1 Consultation and Treatment</h4>
            <p>All treatments are provided following a proper consultation and assessment by our qualified medical professionals. Treatment plans are customized based on individual needs and conditions.</p>
          </div>
          <div className="pl-4 border-l-2 border-amber-200">
            <h4 className="font-semibold">2.2 Medical History</h4>
            <p>Patients must provide accurate and complete medical history, including allergies, current medications, and existing health conditions. Failure to disclose relevant medical information may affect treatment outcomes.</p>
          </div>
        </div>
      )
    },
    {
      id: 'appointments',
      title: '3. Appointments and Cancellations',
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Appointments must be scheduled in advance and are subject to availability.</li>
            <li>24-hour notice is required for cancellation of appointments.</li>
            <li>Repeated no-shows may result in the requirement of advance deposits for future appointments.</li>
            <li>Late arrivals may result in shortened treatment time or rescheduling.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'payment',
      title: '4. Payment Terms',
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment is required at the time of service unless otherwise arranged.</li>
            <li>Treatment packages must be paid in full before beginning the treatment course.</li>
            <li>All sales of products and services are final unless otherwise specified.</li>
            <li>Refunds, if applicable, will be processed according to our refund policy.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'results',
      title: '5. Treatment Results',
      content: (
        <div className="space-y-4">
          <p>While we strive to achieve the best possible results:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Treatment results may vary from person to person.</li>
            <li>No guarantees are made regarding the outcome of any treatment.</li>
            <li>Multiple sessions may be required for optimal results.</li>
            <li>Post-treatment care instructions must be followed for best results.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'privacy',
      title: '6. Privacy and Confidentiality',
      content: (
        <div className="space-y-4">
          <p>We maintain strict patient confidentiality and protect your personal information according to applicable laws. Medical records and treatment details are kept confidential and secure.</p>
        </div>
      )
    },
    {
      id: 'safety',
      title: '7. Safety and Hygiene',
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>All equipment and facilities are maintained according to medical safety standards.</li>
            <li>We use only US FDA approved machines and products.</li>
            <li>Patients must follow pre and post-treatment instructions carefully.</li>
            <li>Any adverse reactions should be reported immediately.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'modifications',
      title: '8. Modifications to Terms',
      content: (
        <div className="space-y-4">
          <p>Hemkanti Clinics reserves the right to modify these terms at any time. Changes will be communicated through our website or at our facility. Continued use of our services after modifications indicates acceptance of updated terms.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center text-amber-900 mb-8">
              Terms and Conditions
            </h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-amber-800 mb-8">
                Welcome to Hemkanti Clinics. Please read these terms and conditions carefully as they contain important information about your rights and obligations while using our services.
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
                <p className="mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
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

export default TermsAndConditions;