import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import MainLayout from '../Layouts/MainLayout';
import MotionWrapper from '../Layouts/MotionWrapper';

export default function Contact() {
  return (
    <MotionWrapper>
        <MainLayout>
            <Head title="Contact Me" />

            <h1 className="text-3xl font-bold mb-4">Hubungi Saya</h1>
            <form className="space-y-4 max-w-md">
                <div>
                <label className="block mb-1 font-medium">Nama</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="Nama Anda" />
                </div>
                <div>
                <label className="block mb-1 font-medium">Email</label>
                <input type="email" className="w-full border p-2 rounded" placeholder="Alamat Email" />
                </div>
                <div>
                <label className="block mb-1 font-medium">Pesan</label>
                <textarea className="w-full border p-2 rounded" rows="4" placeholder="Tulis pesan..." />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Kirim
                </button>
            </form>
        </MainLayout>
    </MotionWrapper>
  );
}
