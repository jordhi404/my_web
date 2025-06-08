import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="font-bold text-xl">Jordhi Tejo Saputro</div>
      <ul className="flex gap-4">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/about" className="hover:underline">About</Link></li>
        <li><Link href="/projects" className="hover:underline">Projects</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
}
