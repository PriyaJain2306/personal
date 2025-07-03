'use client';
import React, { useState } from 'react';
import {
  FileText, Truck, ClipboardList, ShoppingCart, ClipboardCheck,
  ShoppingBag, Briefcase, CreditCard, Receipt, IndianRupee, Send
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, Legend
} from 'recharts';

const quickLinks = [
  { label: 'Sale Invoice', icon: <FileText size={32} /> },
  { label: 'Purchase Invoice', icon: <ShoppingCart size={32} /> },
  { label: 'Quotation', icon: <ClipboardList size={32} /> },
  { label: 'Delivery Challan', icon: <Truck size={32} /> },
  { label: 'Proforma', icon: <ClipboardCheck size={32} /> },
  { label: 'Purchase Order', icon: <ShoppingBag size={32} /> },
  { label: 'Sale Order', icon: <FileText size={32} /> },
  { label: 'Job Work', icon: <Briefcase size={32} /> },
  { label: 'Credit Note', icon: <CreditCard size={32} /> },
  { label: 'Debit Note', icon: <Receipt size={32} /> },
  { label: 'Inward Payment', icon: <IndianRupee size={32} /> },
  { label: 'Outward Payment', icon: <Send size={32} /> },
];

const newVsExistingData = [
  { month: 'Apr', New: 50, Existing: 100 },
  { month: 'May', New: 75, Existing: 90 },
  { month: 'Jun', New: 100, Existing: 50 }
];

const invoiceCountData = [
  { month: 'Apr', Sale: 80, Purchase: 40 },
  { month: 'May', Sale: 60, Purchase: 60 },
  { month: 'Jun', Sale: 100, Purchase: 20 }
];

const invoiceAmountData = [
  { month: 'Apr', Sale: 8000, Purchase: 5000 },
  { month: 'May', Sale: 10000, Purchase: 7000 },
  { month: 'Jun', Sale: 6000, Purchase: 3000 }
];

const Dashboard = () => {
  const [view, setView] = useState('analytics');

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-200 rounded-full p-1">
          <button
            onClick={() => setView('analytics')}
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              view === 'analytics' ? 'bg-teal-500 text-white' : 'text-gray-600'
            }`}
          >
            Analytics
          </button>
          <button
            onClick={() => setView('quicklinks')}
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              view === 'quicklinks' ? 'bg-teal-500 text-white' : 'text-gray-600'
            }`}
          >
            Quick Links
          </button>
        </div>
      </div>

      {view === 'quicklinks' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {quickLinks.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded shadow flex flex-col items-center justify-center text-center hover:shadow-md transition"
            >
              <div className="text-teal-600 mb-2">{item.icon}</div>
              <div className="text-sm font-medium text-gray-700">{item.label}</div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-sm text-gray-500">Sales (Jul 2025)</h2>
              <p className="text-xl font-bold mt-2">₹0</p>
              <p className="text-sm text-green-500 mt-1">+GST 0</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-sm text-gray-500">Purchase (Jul 2025)</h2>
              <p className="text-xl font-bold mt-2">₹0</p>
              <p className="text-sm text-green-500 mt-1">+GST 0</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-sm text-gray-500">Revenue</h2>
              <p className="text-2xl font-bold mt-2">70</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-sm text-gray-500">Income</h2>
              <p className="text-2xl font-bold mt-2">71</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold mb-4">New vs Existing Customers</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={newVsExistingData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="New" fill="#14b8a6" />
                  <Bar dataKey="Existing" fill="#64748b" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold mb-4">Invoice Count Summary</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={invoiceCountData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Sale" fill="#0ea5e9" />
                  <Bar dataKey="Purchase" fill="#f97316" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 shadow rounded col-span-1 md:col-span-2">
              <h3 className="font-semibold mb-4">Invoice Amount Summary</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={invoiceAmountData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Sale" stroke="#10b981" />
                  <Line type="monotone" dataKey="Purchase" stroke="#ef4444" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
