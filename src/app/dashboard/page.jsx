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
  { month: 'Jan 2025', New: 0, Existing: 0 },
  { month: 'Feb 2025', New: 100, Existing: 0 },
  { month: 'Mar 2025', New: 0, Existing: 0 },
  { month: 'Apr 2025', New: 0, Existing: 0 },
  { month: 'May 2025', New: 0, Existing: 0 },
  { month: 'Jun 2025', New: 0, Existing: 100 },
  { month: 'Jul 2025', New: 0, Existing: 0 },
];

const invoiceCountData = [
  { month: 'Jan 2025', Sale: 0.1, Purchase: 0 },
  { month: 'Feb 2025', Sale: 1, Purchase: 0 },
  { month: 'Mar 2025', Sale: 0.1, Purchase: 0 },
  { month: 'Apr 2025', Sale: 0.1, Purchase: 0 },
  { month: 'May 2025', Sale: 0.1, Purchase: 0 },
  { month: 'Jun 2025', Sale: 1, Purchase: 0 },
  { month: 'Jul 2025', Sale: 0.1, Purchase: 0 },
];

const invoiceAmountData = [
  { month: 'Jan 2025', Sale: 0, Purchase: 0 },
  { month: 'Feb 2025', Sale: 300000, Purchase: 0 },
  { month: 'Mar 2025', Sale: 0, Purchase: 0 },
  { month: 'Apr 2025', Sale: 0, Purchase: 0 },
  { month: 'May 2025', Sale: 0, Purchase: 0 },
  { month: 'Jun 2025', Sale: 600000, Purchase: 0 },
  { month: 'Jul 2025', Sale: 0, Purchase: 0 },
];

const bestSellingProducts = [
  { name: 'Gold ornament below 2gm (91.6)', qty: 58.36 },
  { name: 'Making charge', qty: 42.39 },
  { name: 'Gold ornament bangle', qty: 42.39 },
];

const leastSellingProducts = [
  { name: 'Making charge', qty: 42.39 },
  { name: 'Gold ornament bangle', qty: 42.39 },
  { name: 'Gold ornament below 2gm (91.6)', qty: 58.36 },
];

const topCustomers = [
  { name: 'Rukmani Chains', amount: '5,10,942.00' },
  { name: 'Savita Pradeep Mody', amount: '3,36,126.00' },
];

const salesInvoiceDue = [
  { id: 1, company: 'Atma Bandhu Gold', name: 'Rahul Prakash Gandhi', phone: '', dueDate: '02-Jul-24', dueFrom: '366 Days', amount: '10,86,765.00' },
  { id: 2, company: 'Mamta vaibhav malkankar', name: '', phone: '', dueDate: '18-Aug-24', dueFrom: '319 Days', amount: '1,85,001.00' },
  { id: 3, company: 'Atma Bandhu Gold', name: 'Rahul Prakash Gandhi', phone: '', dueDate: '12-Sep-24', dueFrom: '294 Days', amount: '7,38,000.00' },
  { id: 4, company: 'M/s. Jai Labdhi Enterprise', name: 'Jitendra Trilokchand Jain', phone: '', dueDate: '11-Oct-24', dueFrom: '265 Days', amount: '36,67,530.00' },
  { id: 5, company: 'M/s. Jai Labdhi Enterprise', name: 'Jitendra Trilokchand Jain', phone: '', dueDate: '11-Oct-24', dueFrom: '265 Days', amount: '37,50,000.00' },
];

const Dashboard = () => {
  const [view, setView] = useState('analytics');

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen font-sans">
      <div className="bg-white border border-dashed border-gray-300 text-sm text-gray-700 p-4 rounded mb-4 flex justify-between items-center">
        <span>This email address will be printed on your invoice also if you lost your phone you can log in to your account with this email address.</span>
        <button className="bg-teal-500 text-white text-xs px-3 py-1 rounded">Add Email</button>
      </div>

      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-gray-200 rounded-full p-1">
          <button
            onClick={() => setView('analytics')}
            className={`px-6 py-2 rounded-full text-sm font-medium ${view === 'analytics' ? 'bg-teal-500 text-white' : 'text-gray-600'}`}
          >
            Analytics
          </button>
          <button
            onClick={() => setView('quicklinks')}
            className={`px-6 py-2 rounded-full text-sm font-medium ${view === 'quicklinks' ? 'bg-teal-500 text-white' : 'text-gray-600'}`}
          >
            Quick Links
          </button>
        </div>
      </div>

      {view === 'quicklinks' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {quickLinks.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow flex flex-col items-center justify-center text-center hover:shadow-md transition">
              <div className="text-teal-600 mb-2">{item.icon}</div>
              <div className="text-sm font-medium text-gray-700">{item.label}</div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-sm text-gray-500">Sale - Jul 2025</h2>
              <p className="text-xl font-bold mt-2">₹0</p>
              <p className="text-sm text-green-500 mt-1">+GST 0</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-sm text-gray-500">Purchase - Jul 2025</h2>
              <p className="text-xl font-bold mt-2">₹0</p>
              <p className="text-sm text-green-500 mt-1">+GST 0</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-sm text-gray-500">Expense</h2>
              <p className="text-xl font-bold mt-2">₹0</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-sm text-gray-500">Income</h2>
              <p className="text-xl font-bold mt-2">₹0</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold mb-4">New VS Existing Customer Sale</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={newVsExistingData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="New" fill="#14b8a6" name="New Customer Sale" />
                  <Bar dataKey="Existing" fill="#94a3b8" name="Existing Customer Sale" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold mb-4">Best Selling Products</h3>
              <ul>
                {bestSellingProducts.map((item, idx) => (
                  <li key={idx} className="flex justify-between text-sm py-1">
                    <span>{item.name}</span>
                    <span>{item.qty}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold mb-4">Least Selling Products</h3>
              <ul>
                {leastSellingProducts.map((item, idx) => (
                  <li key={idx} className="flex justify-between text-sm py-1">
                    <span>{item.name}</span>
                    <span>{item.qty}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold mb-4">Low Stock</h3>
              <p className="text-sm text-gray-500">No records found</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold mb-4">Top Customers</h3>
              <ul>
                {topCustomers.map((item, idx) => (
                  <li key={idx} className="flex justify-between text-sm py-1">
                    <span>{item.name}</span>
                    <span>{item.amount}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold mb-4">Top Vendors</h3>
              <p className="text-sm text-gray-500">No records found</p>
            </div>
          </div>

          <div className="bg-white p-4 shadow rounded mb-6">
            <h3 className="font-semibold mb-4">Sales Invoice Due</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Invoice No.</th>
                  <th>Company Name</th>
                  <th>Name</th>
                  <th>Due Date</th>
                  <th>Due From</th>
                  <th>Remaining Payment</th>
                </tr>
              </thead>
              <tbody>
                {salesInvoiceDue.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.id}</td>
                    <td>{item.company}</td>
                    <td>{item.name}</td>
                    <td>{item.dueDate}</td>
                    <td>{item.dueFrom}</td>
                    <td>{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-2 text-right text-teal-500 text-sm cursor-pointer">View All</div>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h3 className="font-semibold mb-4">Purchase Invoice Due</h3>
            <p className="text-sm text-gray-500">No records found</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
