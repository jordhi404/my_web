@extends('layouts.app')

@section('title', 'Contact')

@section('content')
    <h1 class="text-3xl font-bold mb-4">Hubungi Saya</h1>
    <form action="#" method="POST" class="space-y-4 max-w-md">
        <div>
            <label class="block mb-1 font-medium">Nama</label>
            <input type="text" class="w-full border p-2 rounded" placeholder="Nama Anda">
        </div>
        <div>
            <label class="block mb-1 font-medium">Email</label>
            <input type="email" class="w-full border p-2 rounded" placeholder="Alamat Email">
        </div>
        <div>
            <label class="block mb-1 font-medium">Pesan</label>
            <textarea class="w-full border p-2 rounded" rows="4" placeholder="Tulis pesan..."></textarea>
        </div>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Kirim
        </button>
    </form>
@endsection
