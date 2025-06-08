import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import MainLayout from '../Layouts/MainLayout';
import MotionWrapper from '../Layouts/MotionWrapper';

export default function Projects({ projects }) {
    return (
        <MotionWrapper>
            <MainLayout>
                <Head title="My Projects" />

                <div className="max-w-5xl mx-auto px-4 py-10">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Projects</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.length > 0 ? (
                        projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
                            <h2 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h2>
                            <p className="text-gray-600 mb-6">{project.description}</p>

                            <div className="text-sm text-gray-500 mb-2">
                            <span className="font-medium">Role:</span> {project.role} |{' '}
                            <span className="font-medium">Year:</span> {project.year}
                            </div>

                            <div className="text-sm text-gray-500 mb-4">
                            <span className="font-medium">Tech Stack:</span>{' '}
                            {JSON.parse(project.tech_stack || '[]').map((tech, i) => (
                                <span key={i} className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded mr-1 text-xs">
                                {tech}
                                </span>
                            ))}
                            </div>

                            {project.project_url && (
                            <a
                                href={project.project_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
                            >
                                View Project
                            </a>
                            )}
                        </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center col-span-2">No projects found.</p>
                    )}
                    </div>
                </div>
            </MainLayout>
        </MotionWrapper>
    );
}
