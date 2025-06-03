<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'My Portfolio')</title>
    @vite(['resources/css/app.css', 'resources/js/app.js']) 
</head>
<body class="bg-gray-100 text-gray-900">

    {{-- Navbar --}}
    @include('layouts.navbar')

    {{-- Main Content --}}
    <main class="p-6">
        @yield('content')
    </main>

    {{-- Footer --}}
    @include('layouts.footer')

</body>
</html>
