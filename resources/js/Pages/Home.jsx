import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import MainLayout from '../Layouts/MainLayout';
import MotionWrapper from "@/Layouts/MotionWrapper";

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />
            <MotionWrapper>                
                {/* Hero Section */}
                <section id="home" className="pt-10 p-4 size-full">
                    <div className="container max-w-7xl px-4 mx-auto h-screen">
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

                {/* About Section */}
                <section className='pt-12 pb-10 bg-rose-200' id='about'>
                    <div className="container max-w-7xl px-4 mx-auto">
                        <div className='w-full px-4 mb-10'>
                            <h4 className='font-bold uppercase text-2xl text-rose-500 mb-4 lg:text-3xl lg:pt-0'>Tentang Saya</h4>
                            <p className='font-medium text-slate-700 text-base max-w-full lg:text-lg mb-7'>Saya Jordhi Tejo Saputro, seorang fullstack web developer dengan spesialisasi Laravel dan pengalaman kerja satu tahun di lingkungan profesional. 
                                Meski masih di awal karier, saya berkomitmen memberikan solusi digital yang rapi, fungsional, dan dapat diandalkan, dengan semangat belajar dan tanggung jawab penuh terhadap setiap proyek yang saya tangani.
                                Meski berpengalaman di framework Laravel, saya juga tetap aktif belajar framework dan bahasa pemrograman lain untuk memperluas keterampilan saya.
                                Saya percaya bahwa setiap proyek adalah kesempatan untuk belajar dan berkembang sehingga saya selalu berusaha memberikan yang terbaik dalam setiap tugas yang saya jalani.
                            </p>
                            {/* Hubungi saya */}
                            <a href="/about" className='text-base font-semibold text-white bg-rose-500 py-2 px-5 rounded-xl hover:shadow-lg hover:bg-rose-700 hover:opacity-100 transition duration-300 ease-in-out'>Learn more</a>
                        </div>
                    </div>
                </section>

                {/* Contact section */}
                <section id='contact' className='py-10'>
                    <div className='container max-w-7xl px-4 mx-auto'>
                        <div className='w-full px-4 lg:w-1/2'>
                            <h3 className='font-semibold text-rose-500 text-2xl mb-4 lg:text-3xl lg:pt-0'>Mari Terhubung!</h3>
                            <p className='font-medium text-base text-slate-500 mb-6 lg:text-lg'>Keep in touch with me!</p>
                            <div className='flex items-center'>
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/jordhi-tejo-saputro" target='blank' className='w-9 h-9 mr-3 rounded-xl flex justify-center items-center border border-slate-100 hover:border-rose-500 hover:bg-rose-500 hover:text-white'>
                                    <img src="img/linkedin.png" alt="LinkedIn" width={25}/>
                                </a>
                                {/* Github */}
                                <a href="https://github.com/jordhi404" target='blank' className='w-9 h-9 mr-3 rounded-xl flex justify-center items-center border border-slate-100 hover:border-rose-500 hover:bg-rose-500 hover:text-white'>
                                    <img src="img/github.svg" alt="Github" width={25}/>
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/jordhii_404" target='blank' className='w-9 h-9 mr-3 rounded-xl flex justify-center items-center border border-slate-100 hover:border-rose-500 hover:bg-rose-500 hover:text-white'>
                                    <img src="img/instagram.svg" alt="Instagram" width={25}/>
                                </a>
                                {/* Gmail */}
                                <a href="https://mail.google.com/mail/?view=cm&to=tejosaputro22@gmail.com" target='blank' className='w-9 h-9 mr-3 rounded-xl flex justify-center items-center border border-slate-100 hover:border-rose-500 hover:bg-rose-500 hover:text-white'>
                                    <img src="img/gmail.svg" alt="Gmail" width={25}/>
                                </a>
                                {/* Whatsapp */}
                                <a href="https://wa.me/6281226057642" target='blank' className='w-9 h-9 mr-3 rounded-xl flex justify-center items-center border border-slate-100 hover:border-rose-500 hover:bg-rose-500 hover:text-white'>
                                    <img src="img/whatsapp.svg" alt="Whatsapp" width={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </MotionWrapper>
        </MainLayout>
    );
}
