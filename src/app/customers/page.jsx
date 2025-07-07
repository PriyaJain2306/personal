'use client';
import React, { useState } from 'react';
import AddEditModal from './components/AddEditModal';
import SearchFilter from './components/SearchFilter';
import { Eye, Edit, MoreVertical } from 'lucide-react';

const dummyData = [
  { id: 1, name: 'Amh Enterprises', type: 'Customer', state: 'Maharashtra' },
  { id: 2, name: 'Atma Bandhu Gold', type: 'Customer', state: 'Telangana' },
  { id: 3, name: 'Gautam Jain', type: 'Customer', state: 'Maharashtra' },
  { id: 4, name: 'M/s. Jai Labdhi Enterprise', type: 'Customer', state: 'Maharashtra' },
];

const Customers = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [showSearch, setShowSearch] = useState(false); // Toggle search filter visibility

  return (
    <div className="p-6 bg-[#f8f9fa] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Customer / Vendor</h2>
        <div className="flex gap-2">
          <button className="border-amber-100 px-4 py-1.5 text-sm rounded bg-gray-200 shadow text-black">📥 Import</button>
          <button
            className="border-amber-100 px-4 py-1.5 text-sm rounded bg-gray-200 shadow"
            onClick={() => setShowSearch(!showSearch)}
          >
            🔍 Search
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 text-sm rounded shadow"
            onClick={() => {
              setEditData(null);
              setOpenModal(true);
            }}
          >
            + Add New
          </button>
        </div>
      </div>

      {/* Summary Boxes */}
      <div className="grid grid-cols-4 gap-4 mb-6 bg-white p-4 rounded shadow">
        <div className="text-center">
          <div className="text-sm text-gray-500">Total</div>
          <div className="text-xl font-semibold">13</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Customer</div>
          <div className="text-xl font-semibold">13</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Vendor</div>
          <div className="text-xl font-semibold">0</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Customer Vendor</div>
          <div className="text-xl font-semibold">0</div>
        </div>
      </div>

      {/* Search Filter (toggle visible) */}
      {showSearch && (
        <div className="mb-4">
          <SearchFilter />
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-white text-gray-700">
            <tr>
              <th className="p-3 text-left"><input type="checkbox" /></th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Get Outstanding</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">State</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((customer) => (
              <tr key={customer.id} className="border-t border-gray-300 hover:bg-gray-50">
                <td className="p-3"><input type="checkbox" /></td>
                <td className="p-3">{customer.name}</td>
                <td className="p-3 text-teal-600 cursor-pointer">Get Outstanding</td>
                <td className="p-3 text-gray-500">-</td>
                <td className="p-3">{customer.type}</td>
                <td className="p-3">{customer.state}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2 ">
                    <button
                      className="flex items-center gap-1 px-3 py-1 text-sm border-amber-50 rounded shadow-sm hover:bg-gray-300"
                      onClick={() => {
                        setEditData(customer);
                        setOpenModal(true);
                      }}
                    >
                      <Edit size={14} /> Edit
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 text-sm border-amber-50 rounded shadow-sm hover:bg-gray-300">
                      <Eye size={14} /> View
                    </button>
                    <button className="ml-1 hover:text-gray-600">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {openModal && (
        <AddEditModal
          onClose={() => setOpenModal(false)}
          initialData={editData}
        />
      )}
    </div>
  );
};

export default Customers;
