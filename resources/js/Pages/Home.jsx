import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import MainLayout from '../Layouts/MainLayout';
import MotionWrapper from "@/Layouts/MotionWrapper";

export default function Home() {
    return (
        <MainLayout>
            <MotionWrapper>
                <Head title="Home" />                
                {/* Hero Section */}
                <section id="home" className="pt-34">
                    <div className="container max-w-7xl px-4 mx-auto">
                        <div className="flex flex-wrap items-center px-4 mb-10">
                            {/* Kiri: Teks */}
                            <div className="w-full lg:w-1/2 mb-10 md:mb-0">
                                <h1 className="text-3xl font-semibold text-rose-500 mb-2">
                                    Hi 👋 saya
                                    <span className="block font-bold text-slate-900 text-5xl mt-1">Jordhi Tejo Saputro</span>
                                </h1>
                                <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">
                                    Fullstack web developer & Junior programmer
                                </h2>

                                {/* Hubungi saya */}
                                <a href="#" className='text-base font-semibold text-white bg-rose-500 py-3 px-8 rounded-full hover:shadow-lg hover:bg-rose-600 hover:opacity-80 transition duration-300 ease-in-out'>Contact Me!</a>
                            </div>

                            {/* Kanan: Foto + Blob */}
                            <div className="w-full self-end px-4 lg:w-1/2">
                                <div className="relative w-100 h-100 mt-10 lg:right-0">
                                    {/* Blob Background */}
                                    <img src="/img/blob.svg" alt="blob" className='h-full w-full absolute inset-0 z-10 flex items-center justify-center'/>

                                    {/* Foto */}
                                    <img src="/img/Jordhi-glasses.png" alt="Jordhi" className="h-full max-w-full object-contain relative z-10 mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className='pt-36 pb-32' id='about'>
                    <div className="container max-w-7xl px-4 mx-auto">
                        <div className="flex flex-wrap">
                            <div className='w-full px-4 mb-10 lg:w-1/2'>
                                <h4 className='font-bold uppercase text-2xl text-rose-500 mb-4 lg:text-3xl lg:pt-0'>Tentang Saya</h4>
                                <p className='font-medium text-slate-500 text-base max-w-xl lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className='w-full px-4 lg:w-1/2'>
                                <h3 className='font-semibold text-black text-2xl mb-4 lg:text-3xl lg:pt-0'>Mari berteman!</h3>
                                <p className='font-medium text-base text-slate-500 mb-6 lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <div className='flex items-center'>
                                    {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/in/jordhi-tejo-saputro" target='blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-100 hover:border-rose-500 hover:bg-rose-500 hover:text-white'>
                                        <img src="img/linkedin.png" alt="LinkedIn" width={25}/>
                                    </a>
                                    {/* Github */}
                                    <a href="https://github.com/jordhi404" target='blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-100 hover:border-rose-500 hover:bg-rose-500 hover:text-white'>
                                        <img src="img/github.svg" alt="Github" width={25}/>
                                    </a>
                                    {/* Instagram */}
                                    <a href="https://www.instagram.com/jordhii_404" target='blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-100 hover:border-rose-500 hover:bg-rose-500 hover:text-white'>
                                        <img src="img/instagram.svg" alt="Instagram" width={25}/>
                                    </a>
                                    {/* Gmail */}
                                    <a href="https://mail.google.com/mail/?view=cm&to=tejosaputro22@gmail.com" target='blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-100 hover:border-rose-500 hover:bg-rose-500 hover:text-white'>
                                        <img src="img/gmail.svg" alt="Gmail" width={25}/>
                                    </a>
                                    {/* Whatsapp */}
                                    <a href="https://wa.me/6281226057642" target='blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-100 hover:border-rose-500 hover:bg-rose-500 hover:text-white'>
                                        <img src="img/whatsapp.svg" alt="Whatsapp" width={25}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MotionWrapper>
        </MainLayout>
    );
}
