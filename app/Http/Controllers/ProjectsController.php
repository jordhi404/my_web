<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\projects;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    public function ProjectDisplay () {
        $projects = projects::get();

        return Inertia::render('Projects', [
            'projects' => $projects
        ]);
    }
}
