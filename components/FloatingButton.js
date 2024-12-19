"use client"
import React, { useState, useEffect } from 'react';  // <-- Import React hooks
import { Plus } from 'lucide-react';  // Replace with a valid icon from lucide-react
import BookAppointment from '../components/bookApp';

const FloatingButtonWithModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    time: '',
    date: ''
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('appointmentFormData'));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      localStorage.setItem('appointmentFormData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className.includes('modal-background')) {
      setShowModal(false);
    }
  };

  return (
    <div className="relative">
      {/* Floating Button */}
      <button
        onClick={toggleModal}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 transform transition-all duration-300 ease-in-out hover:scale-105 z-50 group flex items-center gap-2"
      >
        <Plus className="w-5 h-5" /> {/* Replace Motion with a valid icon */}
        <span className="font-semibold">Book Appointment</span>
        
        {/* Enhanced Tooltip */}
        <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 bottom-full mb-2 -left-1/4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
          Schedule Your Visit Now!
          <div className="absolute -bottom-1 left-1/2 -ml-2 w-4 h-4 bg-gray-900 transform rotate-45"></div>
        </div>
      </button>

      {/* Modal with Improved Animation */}
      {showModal && (
        <div
          className="modal-background fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-opacity duration-300"
          onClick={handleOutsideClick}
        >
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-auto animate-modal-open relative">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Book Your Appointment</h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <BookAppointment
                formData={formData}
                handleInputChange={handleInputChange}
                closeModal={toggleModal}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes modalOpen {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-modal-open {
          animation: modalOpen 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FloatingButtonWithModal;
