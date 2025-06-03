<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectsController;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::view('/', 'pages.home');
Route::view('/about', 'pages.about');
Route::get('/projects', [ProjectsController::class, 'ProjectDisplay'])->name('projects');
Route::view('/contact', 'pages.contact');
