<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title inertia>{{ config('app.name', 'My Portfolio') }}</title>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx']) 
</head>
<body class="bg-gray-200 text-gray-900">
    @inertia
</body>
</html>
