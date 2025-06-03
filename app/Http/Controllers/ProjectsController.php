<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\projects;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function ProjectDisplay () {
        $projects = projects::get();

        return view('pages.projects', compact('projects'));
    }
}
