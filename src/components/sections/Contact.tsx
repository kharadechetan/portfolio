import { resumeData } from "@/data/resume";
import { buttonVariants } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border/50 bg-card">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Have an AI system to build?
        </h2>
        <p className="text-xl text-muted-foreground mb-10">
          Let's talk.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href={`mailto:${resumeData.personal.email}`} className={buttonVariants({ size: "lg" }) + " w-full sm:w-auto h-12 px-8"}>
            <Mail className="mr-2 h-5 w-5" />
            Email Me
          </a>
          <a href={`tel:${resumeData.personal.phone.replace(/[^0-9+]/g, '')}`} className={buttonVariants({ variant: "outline", size: "lg" }) + " w-full sm:w-auto h-12 px-8"}>
            <Phone className="mr-2 h-5 w-5" />
            {resumeData.personal.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
