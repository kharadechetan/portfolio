import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function AdditionalProjects() {
  const additionalProjects = projectsData.filter((project) => !project.featured);

  return (
    <section className="py-16 md:py-24 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Additional Work</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {additionalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} compact={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
