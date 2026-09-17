import { ArrowRight, ArrowDown } from "lucide-react";

interface ArchitectureDiagramProps {
  nodes: string[];
}

export function ArchitectureDiagram({ nodes }: ArchitectureDiagramProps) {
  if (!nodes || nodes.length === 0) return null;

  return (
    <div className="w-full bg-card/50 border border-border/50 rounded-lg p-6 my-6">
      <h4 className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
        System Architecture
      </h4>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4">
        {nodes.map((node, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-4">
            <div className="px-4 py-3 bg-secondary/40 border border-border/60 rounded-md text-sm font-medium text-center min-w-[120px] shadow-sm backdrop-blur-sm transition-colors hover:bg-secondary/60">
              {node}
            </div>
            {index < nodes.length - 1 && (
              <>
                <ArrowRight className="hidden md:block text-muted-foreground/50 h-5 w-5" />
                <ArrowDown className="block md:hidden text-muted-foreground/50 h-5 w-5" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
