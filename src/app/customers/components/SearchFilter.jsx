import React from 'react';

const SearchFilter = () => {
  return (
    <div className="bg-white p-4 rounded shadow grid md:grid-cols-6 gap-4 text-sm">
      <input placeholder="Name" className="border p-2 rounded" />
      <input placeholder="GSTIN" className="border p-2 rounded" />
      <select className="border p-2 rounded">
        <option>Select Company Type</option>
        <option>Customer</option>
        <option>Vendor</option>
      </select>
      <input placeholder="Contact Person" className="border p-2 rounded" />
      <input placeholder="License No." className="border p-2 rounded" />
      <select className="border p-2 rounded">
        <option>Select Staff Name</option>
      </select>
      <div className="col-span-full flex gap-2 mt-2">
        <button className="bg-teal-500 text-white px-4 py-1 rounded">Search</button>
        <button className="border px-4 py-1 rounded">Show All</button>
      </div>
    </div>
  );
};

export default SearchFilter;
