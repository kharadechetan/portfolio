import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/icons";
import { Project } from "@/data/projects";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  if (compact) {
    return (
      <Card className="flex flex-col h-full bg-card/50 hover:bg-card/80 transition-colors border-border/50">
        <CardHeader className="p-4 pb-2">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="text-xs text-muted-foreground">{project.subtitle}</p>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 mt-3">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-[10px] px-1.5 py-0">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
        {project.github && (
          <CardFooter className="p-4 pt-0">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "ghost", size: "sm" }) + " h-8 px-2 text-xs -ml-2 text-muted-foreground hover:text-foreground"}>
              <Github className="mr-2 h-3 w-3" />
              Source
            </a>
          </CardFooter>
        )}
      </Card>
    );
  }

  return (
    <Card className="flex flex-col h-full overflow-hidden border-border/50 bg-card/50 hover:border-border transition-colors group">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-1">{project.title}</h3>
            <p className="text-sm font-medium text-primary">{project.subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>
        
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-6 space-y-2">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex items-center text-sm font-medium text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                {metric}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 6).map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 6 && (
            <Badge variant="secondary" className="bg-secondary/50">
              +{project.technologies.length - 6}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50 bg-muted/10">
        <Link href={`/projects/${project.id}`} className={buttonVariants({ variant: "default", size: "sm" }) + " w-full sm:w-auto"}>
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm" }) + " w-full sm:w-auto"}>
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
