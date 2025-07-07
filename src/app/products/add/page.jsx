'use client';
import React, { useState } from 'react';
import { Eye, Edit } from 'lucide-react';

const dummyData = [
  { id: 1, name: 'Chain', sellPrice: '6,970.00', hsnCode: '7113' },
  { id: 2, name: 'Gold bar 99.5', sellPrice: '6,080.00', hsnCode: '' },
  { id: 3, name: 'Gold ornament (Mangalsutra)', sellPrice: '6,716.00', hsnCode: '7113' },
  { id: 4, name: 'Gold ornament bangle', sellPrice: '6,853.00', hsnCode: '7113' },
  { id: 5, name: 'Gold ornament below 2gm (91.6)', sellPrice: '0.00', hsnCode: '7113' },
  { id: 6, name: 'Making charge', sellPrice: '450.00', hsnCode: '' },
  { id: 7, name: 'Samsung S24 ultra', sellPrice: '1,35,593.00', hsnCode: '' },
  { id: 8, name: 'Samsung S92B Galaxy S24 ULTRA 12+1TB Gray', sellPrice: '1,35,593.00', hsnCode: '85171300' }
];

export default function Products() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  const openDrawer = (item = null) => {
    setSelectedItem(item);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedItem(null);
  };

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(dummyData.map((item) => item.id));
    } else {
      setSelectedIds([]);
    }
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Header */}
     {/* Header Section Styled Like Screenshot */}
<div className="bg-white rounded-lg shadow-sm p-4 mb-4 flex flex-col gap-3">
  <div className="flex justify-between items-center">
    <h2 className="text-sm font-medium text-gray-700">Products / Services</h2>
    <div className="flex gap-2">
      <button className="flex items-center gap-1 text-xs px-3 py-1 border border-gray-300 rounded bg-gray-100 hover:bg-gray-200">
        ✎ Bulk Edit
      </button>
      <button className="flex items-center gap-1 text-xs px-3 py-1 border border-gray-300 rounded bg-gray-100 hover:bg-gray-200">
        ⬆ Import
      </button>
      <button className="flex items-center gap-1 text-xs px-3 py-1 border border-gray-300 rounded bg-gray-100 hover:bg-gray-200">
        🔍 Search
      </button>
      <button
        onClick={() => openDrawer()}
        className="flex items-center gap-1 text-xs px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
      >
        ＋ Add New
      </button>
    </div>
  </div>
  <div className="flex justify-left px-20 gap-16 text-xl text-gray-700 border-t border-gray-300 pt-3">
    <div><strong>8</strong><div className="text-xs text-gray-500">Total</div></div>
    <div><strong>8</strong><div className="text-xs text-gray-500">Products</div></div>
    <div><strong>0</strong><div className="text-xs text-gray-500">Services</div></div>
  </div>
</div>


      {/* Table */}
      <div className="bg-white rounded shadow-sm overflow-hidden text-xms">
        <div className="grid grid-cols-12 font-medium bg-white p-2 border-b border-gray-300 ">
          <div className="col-span-1 flex items-center justify-center text-sm">
            <input
              type="checkbox"
              checked={selectedIds.length === dummyData.length}
              onChange={toggleSelectAll}
            />
          </div>
          
            <div className="col-span-4 font-bold text-sm">Name</div>
          <div className="col-span-2 font-bold text-sm">Product Group</div>
          <div className="col-span-2 font-bold">Sell Price</div>
          <div className="col-span-2 font-bold">HSN Code</div>
          <div className="col-span-1 text-center font-bold">Action</div>
          
        </div>

        {dummyData.map((item) => (
          <div key={item.id} className="grid grid-cols-12 p-2 border-b  border-gray-300 items-center">
            <div className="col-span-1 flex justify-center">
              <input
                type="checkbox"
                checked={selectedIds.includes(item.id)}
                onChange={() => toggleSelect(item.id)}
              />
            </div>
            <div className="col-span-4 text-gray-700">{item.name}</div>
            <div className="col-span-2 text-gray-500">-</div>
            <div className="col-span-2 text-gray-700">{item.sellPrice}</div>
            <div className="col-span-2 text-gray-700">{item.hsnCode || '-'}</div>
            <div className="col-span-1 flex justify-center gap-2">
              <button
                onClick={() => openDrawer(item)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Edit size={14} />
              </button>
              <button className="text-gray-600 hover:text-black">
                <Eye size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-base font-semibold">{selectedItem ? 'Edit Product' : 'Add New Product'}</h2>
          <button onClick={closeDrawer} className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
        </div>

        <div className="p-4">
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-1">Product Name</label>
              <input
                className="w-full p-2 border border-gray-300 rounded text-sm"
                defaultValue={selectedItem?.name || ''}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Sell Price</label>
              <input
                className="w-full p-2 border border-gray-300 rounded text-sm"
                defaultValue={selectedItem?.sellPrice || ''}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">HSN Code</label>
              <input
                className="w-full p-2 border border-gray-300 rounded text-sm"
                defaultValue={selectedItem?.hsnCode || ''}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 text-sm"
            >
              {selectedItem ? 'Update Product' : 'Add Product'}
            </button>
          </form>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          onClick={closeDrawer}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        />
      )}
    </div>
  );
}
