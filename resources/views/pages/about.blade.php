@extends('layouts.app')

@section('title', 'About Me')

@section('content')
    <h1 class="text-3xl font-bold mb-4">About Me</h1>
    <div class="container">
        <div class="mb-4" id="introduction">
            <p>
                Saya Jordhi Tejo Saputro, seorang fullstack web developer dengan spesialisasi Laravel dan pengalaman kerja satu tahun di lingkungan profesional. 
                Meski masih di awal karier, saya berkomitmen memberikan solusi digital yang rapi, fungsional, dan dapat diandalkan, dengan semangat belajar dan tanggung jawab penuh terhadap setiap proyek yang saya tangani.
                Meski berpengalaman di framework Laravel, saya juga tetap aktif belajar framework dan bahasa pemrograman lain untuk memperluas keterampilan saya.
                Saya percaya bahwa setiap proyek adalah kesempatan untuk belajar dan berkembang sehingga saya selalu berusaha memberikan yang terbaik dalam setiap tugas yang saya jalani.
            </p>
        </div>
        <div class="mb-4" id="skill-set">
            <h2>Teknologi yang dikuasai</h2>
            <ul class="list-disc pl-6 space-y-1">
                <li>Laravel</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Git</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Microsoft SQL Server</li>
            </ul>
        </div>
        <div id="experience">
            <h2>Pengalaman</h2>
            <ul class="list-disc pl-6 space-y-1">
                <li>Internship at CV.Alpha Raya Kreasi, Surabaya</li>
                <li>Karyawan Masa Training at RS Dr.Oen Solo Baru, Sukoharjo</li>
            </ul>
        </div>
    </div>
@endsection
