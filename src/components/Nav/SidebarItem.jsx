'use client';
import React from 'react';

export default function SidebarItem({ children, icon, active, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center w-full px-3 py-2 rounded-md text-left ${
          active ? 'bg-[#E91E63]/10 text-[#E91E63]' : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <span className="mr-3">{icon}</span>
        {children}
      </button>
    </li>
  );
}