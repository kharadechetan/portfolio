import { Mail } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/icons";
import { resumeData } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold">{resumeData.personal.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Building AI systems from models to production.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* Using mailto for email and assuming standard links if they exist. Based on the prompt, no fake links. */}
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            {/* Note: User specified no fake links, but we can assume GitHub is related to the projects provided. I will use a placeholder href "#" or omit if not provided. Since I don't have his exact GH profile (just project links), I'll extract it. 
                Project GH links: https://github.com/kharadechetan/... so profile is likely https://github.com/kharadechetan 
            */}
            <a
              href="https://github.com/kharadechetan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            {/* The prompt mentioned: "LinkedIn: Only if actual URL is available". None was provided. So I will omit it for now or provide an empty one. Let's omit. */}
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
