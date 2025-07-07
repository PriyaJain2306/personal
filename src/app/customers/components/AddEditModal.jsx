'use client';
import React, { useState, useEffect } from 'react';

const statesOfIndia = [
  'Andhra Pradesh (28)', 'Arunachal Pradesh (12)', 'Assam (18)', 'Bihar (10)', 'Chhattisgarh (22)',
  'Goa (30)', 'Gujarat (24)', 'Haryana (6)', 'Himachal Pradesh (2)', 'Jharkhand (20)', 'Karnataka (29)',
  'Kerala (32)', 'Madhya Pradesh (23)', 'Maharashtra (27)', 'Manipur (14)', 'Meghalaya (17)',
  'Mizoram (15)', 'Nagaland (13)', 'Odisha (21)', 'Punjab (3)', 'Rajasthan (8)', 'Sikkim (11)',
  'Tamil Nadu (33)', 'Telangana (36)', 'Tripura (16)', 'Uttar Pradesh (9)', 'Uttarakhand (5)',
  'West Bengal (19)', 'Delhi (7)'
];

const countries = ['India', 'United States', 'United Kingdom', 'Australia', 'Canada'];

const AddEditModal = ({ onClose, initialData }) => {
  const [formData, setFormData] = useState({
    companyType: 'Customer',
    gstin: '',
    name: '',
    contactPerson: '',
    contact: '',
    email: '',
    registrationType: '',
    pan: '',
    billing: {
      address1: '',
      address2: '',
      landmark: '',
      city: '',
      country: 'India',
      state: 'Maharashtra (27)',
      pincode: '',
      distance: ''
    },
    shipping: '',
    openingBalanceType: 'Credit',
    openingBalance: '',
    customField1: '',
    customField2: '',
    licenseNo: '',
    fax: '',
    website: '',
    creditLimit: '',
    dueDays: '',
    note: '',
    enableVisibility: true,
  });

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        companyType: initialData.type || 'Customer',
        name: initialData.name || '',
        billing: {
          ...prev.billing,
          state: initialData.state || 'Maharashtra (27)',
        }
      }));
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith('billing.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        billing: {
          ...prev.billing,
          [field]: value,
        }
      }));
    } else if (name === 'enableVisibility') {
      setFormData((prev) => ({
        ...prev,
        enableVisibility: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const renderRow = (label, input) => (
    <div className="flex flex-col md:flex-row items-center mb-3">
      <label className="md:w-1/3 font-medium text-gray-700 mb-1 md:mb-0">{label}</label>
      <div className="md:w-2/3 w-full">{input}</div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
      <div className="w-full md:w-[700px] h-full bg-white p-6 overflow-y-auto rounded-l-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {initialData ? 'Edit Customer / Vendor' : 'Add Customer / Vendor'}
          </h2>
          <button onClick={onClose} className="text-3xl font-light">×</button>
        </div>

        <form className="space-y-6 text-sm text-gray-700">

          {/* Section: Company Type */}
          <section>
            <h3 className="text-lg font-semibold border-b mb-4 pb-1">Customer / Vendor Details</h3>
            {renderRow('Company Type', (
              <div className="flex gap-4">
                {['Customer', 'Vendor', 'Customer / Vendor'].map((type) => (
                  <label key={type} className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="companyType"
                      value={type}
                      checked={formData.companyType === type}
                      onChange={handleChange}
                    />
                    {type}
                  </label>
                ))}
              </div>
            ))}

            {renderRow('GSTIN', <input name="gstin" className="input-style" value={formData.gstin} onChange={handleChange} placeholder="Enter GSTIN" />)}
            {renderRow('Company Name *', <input name="name" className="input-style" value={formData.name} onChange={handleChange} placeholder="Enter Company Name" required />)}
            {renderRow('Contact Person', <input name="contactPerson" className="input-style" value={formData.contactPerson} onChange={handleChange} placeholder="Enter Contact Person" />)}
            {renderRow('Contact No.', <input name="contact" className="input-style" value={formData.contact} onChange={handleChange} placeholder="Enter Contact No." />)}
            {renderRow('Email', <input name="email" className="input-style" value={formData.email} onChange={handleChange} placeholder="email@domain.com" />)}
            {renderRow('Registration Type', (
              <select name="registrationType" className="input-style" value={formData.registrationType} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Unregistered">Unregistered</option>
                <option value="Registered">Registered</option>
              </select>
            ))}
            {renderRow('PAN', <input name="pan" className="input-style" value={formData.pan} onChange={handleChange} placeholder="Enter PAN" />)}
          </section>

          {/* Section: Billing Address */}
          <section>
            <h3 className="text-lg font-semibold border-b mb-4 pb-1">Billing Address</h3>
            {renderRow('Address 1', <input name="billing.address1" className="input-style" value={formData.billing.address1} onChange={handleChange} placeholder="Address Line 1" />)}
            {renderRow('Address 2', <input name="billing.address2" className="input-style" value={formData.billing.address2} onChange={handleChange} placeholder="Address Line 2" />)}
            {renderRow('Landmark', <input name="billing.landmark" className="input-style" value={formData.billing.landmark} onChange={handleChange} placeholder="Landmark" />)}
            {renderRow('City', <input name="billing.city" className="input-style" value={formData.billing.city} onChange={handleChange} placeholder="Enter City" />)}
            {renderRow('Country', (
              <select name="billing.country" className="input-style" value={formData.billing.country} onChange={handleChange}>
                {countries.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            ))}
            {renderRow('State', (
              <select name="billing.state" className="input-style" value={formData.billing.state} onChange={handleChange}>
                {statesOfIndia.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            ))}
            {renderRow('Pincode', <input name="billing.pincode" className="input-style" value={formData.billing.pincode} onChange={handleChange} placeholder="Enter Pincode" />)}
            {renderRow('Distance (KM)', <input name="billing.distance" className="input-style" value={formData.billing.distance} onChange={handleChange} placeholder="Distance for e-way bill" />)}
          </section>

          {/* Section: Shipping Address */}
          <section>
            <h3 className="text-lg font-semibold border-b mb-4 pb-1">Shipping Address</h3>
            {renderRow('Shipping Address', <textarea name="shipping" className="input-style" value={formData.shipping} onChange={handleChange} placeholder="Enter Shipping Address" />)}
          </section>

          {/* Section: Opening Balance */}
          <section>
            <h3 className="text-lg font-semibold border-b mb-4 pb-1">Opening Balance</h3>
            <div className="flex flex-col md:flex-row items-center mb-3">
              <label className="md:w-1/3 font-medium text-gray-700 mb-1 md:mb-0">Opening Type & Amount</label>
              <div className="md:w-2/3 flex gap-4 w-full">
                <select name="openingBalanceType" className="input-style w-1/2" value={formData.openingBalanceType} onChange={handleChange}>
                  <option value="Credit">Credit</option>
                  <option value="Debit">Debit</option>
                </select>
                <input name="openingBalance" type="number" className="input-style w-1/2" value={formData.openingBalance} onChange={handleChange} placeholder="Amount" />
              </div>
            </div>
          </section>

          {/* Section: Custom Fields */}
          <section>
            <h3 className="text-lg font-semibold border-b mb-4 pb-1">Custom Fields</h3>
            {renderRow('License No.', <input name="licenseNo" className="input-style" value={formData.licenseNo} onChange={handleChange} placeholder="Enter License No." />)}
            {renderRow('Custom Field 1', <input name="customField1" className="input-style" value={formData.customField1} onChange={handleChange} placeholder="Enter Custom Field 1" />)}
            {renderRow('Custom Field 2', <input name="customField2" className="input-style" value={formData.customField2} onChange={handleChange} placeholder="Enter Custom Field 2" />)}
          </section>

          {/* Section: Additional Details */}
          <section>
            <h3 className="text-lg font-semibold border-b mb-4 pb-1">Additional Details</h3>
            {renderRow('Fax No.', <input name="fax" className="input-style" value={formData.fax} onChange={handleChange} placeholder="Enter Fax No." />)}
            {renderRow('Website', <input name="website" className="input-style" value={formData.website} onChange={handleChange} placeholder="www.example.com" />)}
            {renderRow('Credit Limit', <input name="creditLimit" className="input-style" value={formData.creditLimit} onChange={handleChange} placeholder="Enter Credit Limit" />)}
            {renderRow('Due Days', <input name="dueDays" className="input-style" value={formData.dueDays} onChange={handleChange} placeholder="Enter Due Days" />)}
            {renderRow('Note', <textarea name="note" className="input-style" value={formData.note} onChange={handleChange} placeholder="Note about this customer..." />)}
            {renderRow('Enable Visibility', (
              <label className="flex items-center gap-2">
                <input type="checkbox" name="enableVisibility" checked={formData.enableVisibility} onChange={handleChange} />
                Show this company on all documents
              </label>
            ))}
          </section>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Close</button>
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditModal;
