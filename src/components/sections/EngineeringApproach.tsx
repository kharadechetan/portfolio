import { resumeData } from "@/data/resume";
import { Terminal } from "lucide-react";

export function EngineeringApproach() {
  return (
    <section className="py-16 md:py-24 border-t border-border/50 bg-muted/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="md:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Engineering Approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              My philosophy centers around building AI systems that are reliable, modular, and designed for real-world production environments.
            </p>
            <div className="inline-flex items-center rounded-lg bg-card border border-border p-4 shadow-sm">
              <Terminal className="text-primary h-8 w-8 mr-4" />
              <div className="font-mono text-sm text-foreground">
                <span className="text-primary">import</span> Production<br/>
                <span className="text-primary">from</span> <span>engineering.mindset</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resumeData.engineeringApproach.map((item, index) => (
              <div key={index} className="space-y-2 p-6 bg-card border border-border/50 rounded-lg">
                <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
