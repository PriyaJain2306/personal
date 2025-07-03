'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Bell, User, Plus, Lock, Gauge, Menu, X, Boxes, FileText,
  Wallet, File, BarChart3, ChevronDown
} from 'lucide-react';

const menuItems = [
  { label: 'Dashboard', icon: <Gauge size={18} />, locked: false, path: '/dashboard' },
  { label: 'Customer / Vendor', icon: <User size={18} />, locked: false, path: '/customers' },
  {
    label: 'Products / Services',
    icon: <Boxes size={18} />,
    locked: false,
    dropdown: [
      { label: 'Add Product', path: '/products/add' },
      { label: 'Product List', path: '/products/list' }
    ]
  },
  { label: 'Sale Invoice', icon: <FileText size={18} />, locked: false, path: '/sales' },
  { label: 'Purchase Invoice', icon: <FileText size={18} />, locked: false, path: '/purchases' },
  {
    label: 'Payment',
    icon: <Wallet size={18} />,
    locked: false,
    dropdown: [
      { label: 'Receive Payment', path: '/payments/receive' },
      { label: 'Make Payment', path: '/payments/make' }
    ]
  },
  {
    label: 'Expense Income',
    icon: <Wallet size={18} />,
    locked: true,
    dropdown: [
      { label: 'Add Expense', path: '/expense/add' },
      { label: 'Add Income', path: '/income/add' }
    ]
  },
  {
    label: 'Other Documents',
    icon: <File size={18} />,
    locked: true,
    dropdown: [
      { label: 'Challan', path: '/documents/challan' },
      { label: 'Quotation', path: '/documents/quotation' }
    ]
  },
  {
    label: 'Report',
    icon: <BarChart3 size={18} />,
    locked: true,
    dropdown: [
      { label: 'Sales Report', path: '/reports/sales' },
      { label: 'Purchase Report', path: '/reports/purchases' }
    ]
  }
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-teal-500 text-white px-4 py-3 flex items-center justify-between rounded-none">
        <div className="flex items-center space-x-4 md:space-x-10">
          <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-lg font-bold">Hari Om Jewellers</h1>
        </div>

        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <button className="bg-white text-black px-3 py-1 flex items-center gap-1">
            <Plus size={16} />
            Create
          </button>
          <select className="bg-white text-black px-2 py-1">
            <option>F.Y. 2025-2026</option>
          </select>
          <div className="relative">
            <Bell className="text-white" />
            <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white rounded-full px-1">2</span>
          </div>
          <User className="text-white" />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-start bg-white text-gray-700 border-t border-gray-200">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group flex-1 text-center">
            <div
              className="flex flex-col items-center justify-center py-3 text-sm hover:text-teal-600 cursor-pointer"
              onClick={() => item.dropdown && toggleDropdown(index)}
            >
              {item.icon}
              <span className={`mt-1 ${index === 0 ? 'font-semibold text-black' : ''}`}>
                {item.label}
              </span>
              {item.dropdown && <ChevronDown size={14} />}
              {item.locked && (
                <Lock size={12} className="absolute top-1 right-2 text-gray-400" />
              )}
            </div>

            {/* Dropdown */}
            {item.dropdown && dropdownOpen === index && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 bg-white shadow-md rounded text-sm z-10">
                {item.dropdown.map((option, i) => (
                  <Link href={option.path} key={i}>
                    <div className="px-4 py-2 hover:bg-teal-100 cursor-pointer text-gray-700 text-left whitespace-nowrap">
                      {option.label}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Non-dropdown item link */}
            {!item.dropdown && (
              <Link
                href={item.path}
                className="absolute inset-0"
              >
                {/* Invisible overlay for link */}
                <span className="sr-only">{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-teal-600">Menu</h2>
            <button onClick={() => setSidebarOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col">
            {menuItems.map((item, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center p-2 hover:bg-teal-100 cursor-pointer"
                  onClick={() => item.dropdown ? toggleDropdown(index) : null}
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </span>
                  {item.locked && <Lock size={14} className="text-gray-400" />}
                  {item.dropdown && <ChevronDown size={14} />}
                </div>

                {/* Dropdown for Mobile */}
                {item.dropdown && dropdownOpen === index && (
                  <div className="pl-6 pb-2">
                    {item.dropdown.map((option, i) => (
                      <Link href={option.path} key={i}>
                        <div className="py-1 text-sm text-gray-700 hover:text-teal-600 cursor-pointer">
                          • {option.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Link for mobile item without dropdown */}
                {!item.dropdown && (
                  <Link href={item.path}>
                    <div className="pl-6 py-1 text-sm text-gray-700 hover:text-teal-600">
                      • {item.label}
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
