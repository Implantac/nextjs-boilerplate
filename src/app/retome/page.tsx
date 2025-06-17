import React from 'react';
// Importa o componente de cartão de projeto para exibir cada projeto
import ProjectCard from '@/components/ProjectCard';
// Importa o hook personalizado para buscar os projetos
import useProjects from '@/hooks/use-projects';

export default function RetomePage() {
  // Usa o hook para obter os projetos, estado de carregamento e erro
  const { projects, isLoading, error } = useProjects();

  // Exibe mensagem de carregamento enquanto os dados são buscados
  if (isLoading) return <div>Carregando projetos...</div>;
  // Exibe mensagem de erro caso a busca falhe
  if (error) return <div>Erro ao carregar projetos. Por favor, tente novamente mais tarde.</div>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Retome o Projeto</h1>
      <p className="mb-6 text-secondary">
        Selecione um dos projetos a seguir para continuar de onde parou.
      </p>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
