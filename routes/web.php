<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectsController;
use Inertia\Inertia;

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::view('/', 'pages.home');
// Route::view('/about', 'pages.about');
// Route::get('/projects', [ProjectsController::class, 'ProjectDisplay'])->name('projects');
// Route::view('/contact', 'pages.contact');

Route::get('/', fn() => Inertia::render('Home'));
Route::get('/about', fn() => Inertia::render('About'));
Route::get('/projects', [ProjectsController::class, 'ProjectDisplay']);
Route::get('/contact', fn() => Inertia::render('Contact'));