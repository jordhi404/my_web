import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <div className="bg-sky-50 text-gray-900 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 p-5 py-20" style={{ backgroundImage: 'url(/img/subtle-prism.png)' }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}
