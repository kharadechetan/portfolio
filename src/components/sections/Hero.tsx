"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-8 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <Terminal className="mr-2 h-4 w-4" />
                <span>AI/ML Engineer</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                Chetan Kharade
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mt-4 leading-tight">
                Building and deploying AI systems that move beyond prototypes.
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              From LLM agents and RAG pipelines to computer vision systems and production APIs. I build AI applications that connect models, data, tools, and production infrastructure.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="#projects" className={buttonVariants({ size: "lg" }) + " h-12 px-8"}>
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href="/Chetan_Kharade_AI_ML_Engineer_Resume.pdf" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "lg" }) + " h-12 px-8 bg-background/50 backdrop-blur-sm"}>
                View Resume
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Technical Visual Representation */}
            <div className="relative rounded-lg border border-border/50 bg-card/30 p-6 shadow-2xl backdrop-blur-sm font-mono text-sm overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary"></div>
              
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-primary">User</span>
                  <span className="text-border">→</span>
                  <span className="text-foreground">AI Application</span>
                </div>
                <div className="pl-6 border-l-2 border-border/50 ml-2 space-y-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-border">↓</span>
                    <span className="text-foreground">Agent / LLM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-border">↓</span>
                    <span className="text-foreground">Tools / RAG / Vision</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-border">↓</span>
                    <span className="text-primary">FastAPI</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-border">↓</span>
                  <span className="text-foreground">Database / Vector DB</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-border">↓</span>
                  <span className="text-foreground">Cloud / GPU Infrastructure</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-24 -right-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
              <div className="absolute -z-10 -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
