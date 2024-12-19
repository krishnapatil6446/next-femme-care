'use client'
import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react'; // Adjust if needed
import BookAppointment from '../components/bookApp';

const BookAppointmentModal = ({ showModal, toggleModal, formData, handleInputChange }) => {
  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent click event from propagating to the background
  };

  return (
    <div>
      {showModal && (
        <div
          className="modal-background fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-opacity duration-300"
          onClick={() => toggleModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-auto animate-modal-open relative"
            onClick={handleModalClick} // Prevent closing when clicking inside the modal
          >
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Book Your Appointment</h2>
              <button
                onClick={() => toggleModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-1">
              <BookAppointment
                formData={formData}
                handleInputChange={handleInputChange}
                closeModal={() => toggleModal(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookAppointmentModal;
