'use client';
import React, { useState, useEffect } from 'react';

const AddEditModal = ({ onClose, initialData }) => {
  const [formData, setFormData] = useState({
    companyType: 'Customer',
    name: '',
    contact: '',
    state: '',
    gstin: '',
    email: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        companyType: initialData.type,
        name: initialData.name,
        contact: '',
        state: initialData.state,
        gstin: '',
        email: ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
      <div className="w-full md:w-[500px] h-full bg-white p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            {initialData ? 'Edit Customer / Vendor' : 'Add Customer / Vendor'}
          </h2>
          <button onClick={onClose} className="text-xl">×</button>
        </div>

        <form className="space-y-4">
          {/* Basic */}
          <div className="space-y-2">
            <label>Company Type</label>
            <div className="flex gap-4">
              {['Customer', 'Vendor', 'Customer / Vendor'].map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="companyType"
                    value={type}
                    checked={formData.companyType === type}
                    onChange={handleChange}
                  /> {type}
                </label>
              ))}
            </div>

            <input
              name="name"
              placeholder="Company Name *"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />

            <input
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            <input
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditModal;
