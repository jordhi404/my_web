import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import MainLayout from '../Layouts/MainLayout';
import MotionWrapper from "@/Layouts/MotionWrapper";

export default function Home() {
    return (
        <MotionWrapper>
            <MainLayout>
                <Head title="Home" />
                
                {/* Hero Section */}
                <section id="home" className="pt-36">
                    <div className="container">
                    <div className="flex flex-wrap items-center px-4">
                        {/* Kiri: Teks */}
                        <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-base font-semibold text-rose-500 mb-2">
                            Hi 👋 saya
                            <span className="block font-bold text-dark-500 text-4xl mt-1">Jordhi Tejo Saputro</span>
                        </h1>
                        <h2 className="font-medium text-slate-500 text-lg mb-5">
                            Fullstack web developer & Junior programmer
                        </h2>
                        </div>

                        {/* Kanan: Foto + Blob */}
                        <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-60 h-60">
                            {/* Blob Background */}
                            {/* <span className="absolute inset-0 -z-10 flex items-center justify-center">
                                <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#FF0066" d="M40.3,-47.8C50.1,-39.8,54.4,-25.1,58.4,-9.3C62.3,6.4,65.8,23.2,60.6,37.5C55.3,51.7,41.3,63.3,25.3,68.8C9.4,74.2,-8.5,73.5,-21.1,65.6C-33.7,57.8,-41,42.8,-52.7,27.9C-64.3,12.9,-80.4,-2.1,-78.3,-13.7C-76.2,-25.4,-55.8,-33.8,-39.7,-40.7C-23.6,-47.6,-11.8,-53,1.7,-55C15.2,-57,30.5,-55.7,40.3,-47.8Z" transform="translate(100 100) scale(1.2)" />
                                </svg>
                            </span> */}

                            <img src="/img/blob.svg" alt="blob" className='h-full w-full absolute inset-0 z-10 flex items-center justify-center'/>

                            {/* Foto */}
                            <img src="/img/Jordhi-glasses.png" alt="Jordhi" className="h-full w-full object-contain relative z-10" />
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </MainLayout>
        </MotionWrapper>
    );
}
