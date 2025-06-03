<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::view('/', 'pages.home');
Route::view('/about', 'pages.about');
Route::view('/projects', 'pages.projects');
Route::view('/contact', 'pages.contact');
