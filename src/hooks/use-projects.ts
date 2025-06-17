import { useState, useEffect } from 'react';
import { Project } from '@/components/ProjectCard';

export default function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Simulated project data – replace with real API call when available.
        const data: Project[] = [
          {
            id: '1',
            title: 'Projeto de Marketing',
            lastModified: '12/09/2023',
            description: 'Campanha de marketing para lançamento do novo produto.',
            imageUrl: 'https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg',
          },
          {
            id: '2',
            title: 'Interface do App',
            lastModified: '10/09/2023',
            description: 'Design e prototipação da nova interface do aplicativo.',
            imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
          },
          // More dummy projects…
        ];
        setProjects(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return { projects, isLoading, error };
}
