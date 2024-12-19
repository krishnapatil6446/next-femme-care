"use client"
import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import BookAppointmentModal from './BookAppointmentModal'; // Import the reusable modal

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      localStorage.setItem('appointmentFormData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const toggleModal = (state) => {
    setShowModal(state);
  };

  return (
    <div className="relative">
      {/* Floating Button */}
      <button
        id="floating-btn"
        onClick={() => toggleModal(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 transform transition-all duration-300 ease-in-out hover:scale-105 z-50 group flex items-center gap-2"
      >
        <Plus className="w-5 h-5" />
        <span className="font-semibold">Book Appointment</span>
      </button>

      {/* Use the reusable modal component */}
      <BookAppointmentModal
        showModal={showModal}
        toggleModal={toggleModal}
        formData={formData}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default FloatingButtonWithModal;
