import React from 'react';
import Link from 'next/link';

export interface Project {
  id: string;
  title: string;
  lastModified: string;
  description: string;
  imageUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
        onError={(e: any) => { e.target.src = "/file.svg"; /* fallback image */ }}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
        <p className="text-sm text-gray-500 mb-2">Atualizado em {project.lastModified}</p>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <Link href={`/retome/${project.id}`}>
          <a className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Retomar
          </a>
        </Link>
      </div>
    </div>
  );
}
