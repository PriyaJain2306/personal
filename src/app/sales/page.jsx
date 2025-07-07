'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Plus,
  Search,
  FileText,
  Clock,
  Eye,
  Edit,
} from 'lucide-react';

const salesData = [
  {
    id: 1,
    invoiceNo: '1',
    companyName: 'Rukmani Chains',
    date: '25-Jun-25',
    total: '₹5,10,942.00',
    paymentType: 'CREDIT',
    outstanding: '₹5,10,942.00',
  },
];

export default function SalesPage() {
  const router = useRouter();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Sale Invoice</h1>
        <div className="flex gap-3">
          <button
            onClick={() => router.push('/sales/add')}
            className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1 hover:bg-blue-700"
          >
            <Plus size={18} /> Add New
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded flex items-center gap-1 hover:bg-gray-300">
            <Search size={18} /> Search
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded flex items-center gap-1 hover:bg-gray-300">
            <FileText size={18} /> Summary
          </button>
          <button className="bg-yellow-300 px-4 py-2 rounded flex items-center gap-1 hover:bg-yellow-400">
            <Clock size={18} /> Unsaved (1)
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 border-b font-semibold text-gray-600">
            <tr>
              <th className="px-4 py-3">Invoice No</th>
              <th className="px-4 py-3">Company Name</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Payment Type</th>
              <th className="px-4 py-3">Outstanding</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale) => (
              <tr key={sale.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{sale.invoiceNo}</td>
                <td className="px-4 py-3">{sale.companyName}</td>
                <td className="px-4 py-3">{sale.date}</td>
                <td className="px-4 py-3">{sale.total}</td>
                <td className="px-4 py-3">{sale.paymentType}</td>
                <td className="px-4 py-3">{sale.outstanding}</td>
                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center gap-4">
                    <button className="text-blue-600 hover:underline flex items-center gap-1">
                      <Eye size={16} /> View / Print
                    </button>
                    <button
                      onClick={() => router.push(`/sales/edit/${sale.id}`)}
                      className="text-green-600 hover:underline flex items-center gap-1"
                    >
                      <Edit size={16} /> Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
