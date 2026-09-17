import { resumeData } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight mb-8">About</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am an AI/ML Engineer with a focus on building and deploying robust AI systems. My work spans across generative AI, large language models, autonomous agents, and computer vision.
            </p>
            <p>
              I believe that real engineering in AI extends far beyond Jupyter notebooks. My experience covers the entire production lifecycle: from initial model development and fine-tuning, to backend API integration, deployment, monitoring, and production maintenance.
            </p>
            <p>
              Currently, I work as an AI Developer at {resumeData.experience[0].company}, where I architect solutions that connect intelligent models with resilient backend infrastructure, enabling systems to perform reliably in real-world environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
