import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <div className="bg-gray-200 text-gray-900 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 p-6">
        {children}
      </main>

      <Footer />
    </div>
  );
}
