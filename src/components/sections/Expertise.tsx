import { resumeData } from "@/data/resume";

export function Expertise() {
  return (
    <section id="expertise" className="py-16 md:py-24 border-t border-border/50 bg-muted/10">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold tracking-tight mb-12">What I Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.expertise.map((item, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card hover:border-border transition-colors"
            >
              <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
