import { resumeData } from "@/data/resume";

export function TechStack() {
  const categories = Object.entries(resumeData.techStack);

  return (
    <section className="py-16 md:py-24 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Stack</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Core technologies I use to build, deploy, and maintain production AI systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(([category, skills]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-foreground border-b border-border/50 pb-2">
                {category}
              </h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
