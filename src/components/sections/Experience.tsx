import { resumeData } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-border/50 bg-muted/10">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Experience</h2>
        <div className="max-w-3xl space-y-12">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="md:hidden absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary/20 border-2 border-primary"></div>
              
              <div className="flex flex-col md:flex-row md:gap-8">
                <div className="md:w-1/4 mb-2 md:mb-0 shrink-0 text-sm font-medium text-muted-foreground pt-1">
                  {exp.duration}
                </div>
                
                <div className="md:w-3/4 relative md:pl-8">
                  {/* Desktop timeline dot */}
                  <div className="hidden md:block absolute left-[-4px] top-1.5 w-3 h-3 rounded-full bg-primary/20 border-2 border-primary"></div>
                  {/* Desktop timeline line */}
                  <div className="hidden md:block absolute left-[1px] top-4 bottom-[-48px] w-0.5 bg-border"></div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <div className="text-primary font-medium mb-1">{exp.company}</div>
                  <div className="text-sm text-muted-foreground mb-6">{exp.location}</div>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground list-none">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          
          <div className="relative pl-8 md:pl-0">
            <div className="flex flex-col md:flex-row md:gap-8">
              <div className="md:w-1/4 mb-2 md:mb-0 shrink-0 text-sm font-medium text-muted-foreground pt-1">
                {resumeData.education.duration}
              </div>
              <div className="md:w-3/4 relative md:pl-8">
                {/* Desktop timeline dot */}
                <div className="hidden md:block absolute left-[-4px] top-1.5 w-3 h-3 rounded-full bg-border border-2 border-border"></div>
                
                <h3 className="text-xl font-bold text-foreground mb-1">Education</h3>
                <div className="text-foreground font-medium mb-1">{resumeData.education.degree}</div>
                <div className="text-sm text-muted-foreground mb-1">{resumeData.education.university}</div>
                <div className="text-sm font-mono text-muted-foreground">CGPA: {resumeData.education.cgpa}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
