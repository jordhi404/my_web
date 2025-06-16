import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import MainLayout from '../Layouts/MainLayout';
import MotionWrapper from "@/Layouts/MotionWrapper";

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />
            <MotionWrapper>
                {/* Sidebar Contact */}
                <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center space-y-4">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/jordhi-tejo-saputro" target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-white border border-slate-400 rounded-xl hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 group">
                        <img src="img/linkedin.png" alt="LinkedIn" className="w-7 group-hover:scale-110 transition" />
                    </a>

                    {/* Github */}
                    <a href="https://github.com/jordhi404" target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-white border border-slate-400 rounded-xl hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 group">
                        <img src="img/github.svg" alt="Github" className="w-7 group-hover:scale-110 transition" />
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/jordhii_404" target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-white border border-slate-400 rounded-xl hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 group">
                        <img src="img/instagram.svg" alt="Instagram" className="w-7 group-hover:scale-110 transition" />
                    </a>

                    {/* Gmail */}
                    <a href="https://mail.google.com/mail/?view=cm&to=tejosaputro22@gmail.com" target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-white border border-slate-400 rounded-xl hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 group">
                        <img src="img/gmail.svg" alt="Gmail" className="w-7 group-hover:scale-110 transition" />
                    </a>

                    {/* Whatsapp */}
                    <a href="https://wa.me/6281226057642" target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-white border border-slate-400 rounded-xl hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 group">
                        <img src="img/whatsapp.svg" alt="Whatsapp" className="w-7 group-hover:scale-110 transition" />
                    </a>
                </div>

                {/* Hero Section */}
                <section id="home" className="pt-13 p-4 size-full">
                    <div className="container max-w-7xl px-4 mx-auto h-full">
                        <div className="flex flex-wrap items-center px-4 mb-10">
                            {/* Kiri: Teks */}
                            <div className="w-full lg:w-1/2 mb-10 md:mb-0">
                                <h1 className="text-3xl font-semibold text-rose-500 mb-2">
                                    Hi 👋 saya
                                    <span className="block font-bold text-slate-900 text-[60px] mt-1">Jordhi Tejo Saputro</span>
                                </h1>
                                <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-3xl">
                                    Fullstack web developer & Junior programmer
                                </h2>
                            </div>

                            {/* Kanan: Foto + Blob */}
                            <div className="self-end items-center px-4 lg:w-1/2 flex justify-center">
                                <div className="relative mt-10 max-w-screen w-full">
                                    {/* Blob Background */}
                                    {/* <img src="/img/blob.svg" alt="blob" className='h-full w-full absolute inset-0 z-10 flex items-center justify-center'/> */}

                                    {/* Foto */}
                                    <img src="/img/PC.png" alt="Jordhi" className="h-full w-full object-fill relative z-10 mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MotionWrapper>
        </MainLayout>
    );
}
