@extends('layouts.app')

@section('content')
    <div class="max-w-5xl mx-auto px-4 py-10">
        <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">My Laravel Projects</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            @forelse ($projects as $project)
                <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
                    <h2 class="text-xl font-semibold text-blue-700 mb-2">{{ $project->title }}</h2>
                    <p class="text-gray-600 mb-6">{{ $project->description }}</p>
                    
                    <div class="text-sm text-gray-500 mb-2">
                        <span class="font-medium">Role:</span> {{ $project->role }} |
                        <span class="font-medium">Year:</span> {{ $project->year }}
                    </div>

                    <div class="text-sm text-gray-500 mb-4">
                        <span class="font-medium">Tech Stack:</span> 
                        @foreach (json_decode($project->tech_stack) as $tech)
                            <span class="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded mr-1 text-xs">{{ $tech }}</span>
                        @endforeach
                    </div>

                    @if ($project->project_url)
                        <a href="{{ $project->project_url }}" target="_blank" class="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">
                            View Project
                        </a>
                    @endif
                </div>
            @empty
                <p class="text-gray-500 text-center col-span-2">No projects found.</p>
            @endforelse
        </div>
    </div>
@endsection
