import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function FeaturedProjects() {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Detailed case studies of production-ready AI systems, spanning multimodal AI, real-time voice agents, and robust backend engineering.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
