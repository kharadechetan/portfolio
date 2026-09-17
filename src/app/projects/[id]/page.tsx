import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/icons";
import { projectsData } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";

// Return a list of `params` to populate the [id] dynamic segment
export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} | Chetan Kharade`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        <article className="container mx-auto px-4 py-16 md:px-8 md:py-24 max-w-4xl">
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              {project.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-6">
              {project.subtitle}
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline" }) + " w-full sm:w-auto"}>
                  <Github className="mr-2 h-4 w-4" />
                  View Source
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={buttonVariants() + " w-full sm:w-auto"}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </header>

          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Overview</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </section>

            {project.problem && (
              <section>
                <h3 className="text-2xl font-bold tracking-tight mb-4">The Problem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </section>
            )}

            {project.solution && (
              <section>
                <h3 className="text-2xl font-bold tracking-tight mb-4">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </section>
            )}

            {project.metrics && project.metrics.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Key Results</h3>
                <ul className="space-y-3">
                  {project.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start text-foreground bg-card border border-border/50 p-4 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 shrink-0" />
                      <span className="font-medium text-lg">{metric}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.architecture && (
              <section>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Architecture</h3>
                <ArchitectureDiagram nodes={project.architecture.nodes} />
              </section>
            )}

            {project.capabilities && project.capabilities.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Key Capabilities</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-2">✓</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
