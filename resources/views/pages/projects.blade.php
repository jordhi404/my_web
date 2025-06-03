@extends('layouts.app')

@section('title', 'Projects')

@section('content')
    <h1 class="text-3xl font-bold mb-4">Project Laravel</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-4 rounded shadow">
            <h2 class="text-xl font-semibold">Sistem Pembayaran Mandiri Rumah Sakit</h2>
            <p class="text-sm mt-2">Laravel, WebSocket, QRIS, API Integration</p>
        </div>
        <div class="bg-white p-4 rounded shadow">
            <h2 class="text-xl font-semibold">Dashboard Pengelolaan Gudang</h2>
            <p class="text-sm mt-2">Laravel + Bootstrap + Chart.js</p>
        </div>
        <!-- Tambahkan lebih banyak jika perlu -->
    </div>
@endsection
