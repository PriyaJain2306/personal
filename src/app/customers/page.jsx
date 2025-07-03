'use client';
import React, { useState } from 'react';
import AddEditModal from './components/AddEditModal';
import SearchFilter from './components/SearchFilter';

import { Eye, Edit, MoreVertical } from 'lucide-react';

const dummyData = [
  { id: 1, name: 'Amh Enterprises', type: 'Customer', state: 'Maharashtra' },
  { id: 2, name: 'Atma Bandhu Gold', type: 'Customer', state: 'Telangana' },
  { id: 3, name: 'Gautam Jain', type: 'Customer', state: 'Maharashtra' },
  { id: 4, name: 'M/s. Jai Labdhi Enterprise', type: 'Customer', state: 'Maharashtra' }
];1

const Customers = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);

  return (
    <div className="p-4 space-y-6">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Customer / Vendor</h2>
        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded bg-white">📥 Import</button>
          <button className="border px-3 py-1 rounded bg-white">🔍 Search</button>
          <button
            className="bg-green-500 text-white px-4 py-1 rounded"
            onClick={() => { setEditData(null); setOpenModal(true); }}
          >
            + Add New
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-4 bg-white p-4 rounded shadow">
        <div>Total<br /><strong>13</strong></div>
        <div>Customer<br /><strong>13</strong></div>
        <div>Vendor<br /><strong>0</strong></div>
        <div>Customer Vendor<br /><strong>0</strong></div>
      </div>

      {/* Search Filter */}
      <SearchFilter />

      {/* Table */}
      <div className="bg-white rounded shadow">
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2"><input type="checkbox" /></th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Get Outstanding</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">Type</th>
              <th className="p-2 text-left">State</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((customer) => (
              <tr key={customer.id} className="border-t">
                <td className="p-2"><input type="checkbox" /></td>
                <td className="p-2">{customer.name}</td>
                <td className="p-2 text-teal-500 cursor-pointer">Get Outstanding</td>
                <td className="p-2">-</td>
                <td className="p-2">{customer.type}</td>
                <td className="p-2">{customer.state}</td>
                <td className="p-2 flex gap-2">
                  <button
                    className="border px-2 py-1 rounded flex items-center gap-1"
                    onClick={() => {
                      setEditData(customer);
                      setOpenModal(true);
                    }}
                  >
                    <Edit size={14} /> Edit
                  </button>
                  <button className="border px-2 py-1 rounded flex items-center gap-1">
                    <Eye size={14} /> View
                  </button>
                  <MoreVertical size={18} className="ml-2 cursor-pointer" />
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
