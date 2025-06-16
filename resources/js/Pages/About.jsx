import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import MainLayout from '../Layouts/MainLayout';
import MotionWrapper from '../Layouts/MotionWrapper';
import SkillSet from '../Layouts/SkillSet';

export default function About() {
    return (
        <MainLayout>
            <Head title="About Me" />
            <MotionWrapper>
                {/* Bio Section */}
                <section id="home" className="pt-10 p-4 size-full">
                    <div className="container max-w-7xl px-4 mx-auto">
                        <div className="flex flex-wrap items-center px-4 mb-10">
                            {/* Kiri: Teks */}
                            <div className="w-full lg:w-1/2 mb-10 md:mb-0">
                                <h1 className="text-3xl font-semibold text-rose-500 mb-2">
                                    About Me
                                </h1>
                                <p className='font-medium text-gray-600 text-base max-w-full lg:text-lg mb-7'>
                                    Saya <strong>Jordhi Tejo Saputro</strong>, seorang <span className="text-rose-500 font-medium">Fullstack Web Developer</span> dengan spesialisasi pada framework <strong>Laravel</strong>, dan memiliki pengalaman kerja profesional selama satu tahun.
                                    <br /><br />
                                    Dalam perjalanan karier saya, saya selalu berusaha memberikan solusi digital yang <strong>rapi, fungsional, dan dapat diandalkan</strong>. Meskipun masih berada pada awal karier profesional, saya menjunjung tinggi <span className="italic">komitmen, tanggung jawab, dan semangat belajar</span> dalam setiap proyek yang saya tangani.
                                    <br /><br />
                                    Selain Laravel, saya aktif mempelajari berbagai framework dan bahasa pemrograman lain untuk memperluas cakupan dan kedalaman keterampilan saya. Saya percaya bahwa setiap tantangan adalah peluang untuk berkembang, dan setiap proyek adalah langkah baru untuk menjadi developer yang lebih baik.
                                </p>
                            </div>

                            {/* Kanan: Foto + Blob */}
                            <div className="self-start items-center px-4 lg:w-1/2 flex justify-center">
                                <div className="relative mt-4 max-w-screen w-full">
                                    {/* Blob Background */}
                                    <img src="/img/blob.svg" alt="blob" className='h-full w-full absolute inset-0 z-10 flex items-center justify-center'/>

                                    {/* Foto */}
                                    <img src="/img/Jordhi-glasses.png" alt="Jordhi" className="h-[300] w-[300] object-fill relative z-10 mx-auto mb-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills section */}
                <SkillSet />

                {/* Experience section */}
                    {/* Experience */}
                    <div id="experience" className="container max-w-7xl px-4 mx-auto">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-rose-500">
                            Pengalaman
                        </h2>
                        <ul className="space-y-3">
                            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                                Internship di <strong>CV. Alpha Raya Kreasi</strong>, Surabaya
                            </li>
                            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                                Karyawan Masa Training di <strong>RS Dr. Oen Solo Baru</strong>, Sukoharjo
                            </li>
                        </ul>
                    </div>
            </MotionWrapper>
        </MainLayout>
    );
}
