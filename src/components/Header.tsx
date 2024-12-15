import React from 'react';
import { PawPrint, Search, Bell, UserCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <PawPrint className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Pawfect Companion</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Recipes</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">DIY Supplies</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Wellness</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Shop</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-indigo-600">
              <Search className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-indigo-600">
              <Bell className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-indigo-600">
              <UserCircle className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}