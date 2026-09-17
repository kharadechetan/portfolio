"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Moon, Sun, User, Code, Briefcase, Mail, Star } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "About", href: "#about", icon: User },
  { name: "Expertise", href: "#expertise", icon: Star },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="ml-2 rounded-full"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold tracking-tight text-lg">
            Chetan Kharade <span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center pl-4 border-l">
            <a
              href="/Chetan_Kharade_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "sm" })}
            >
              View Resume
            </a>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon", className: "md:hidden" })}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
            <SheetTitle className="text-left font-bold tracking-tight text-xl mt-6 mb-2">Navigation</SheetTitle>
            <SheetDescription className="text-left text-muted-foreground mb-6">Access different sections of the portfolio.</SheetDescription>
            <div className="flex flex-col h-full pb-6">
              <nav className="flex flex-col space-y-2 mt-4">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Icon className="h-5 w-5 opacity-70" />
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-8 px-4 flex flex-col gap-6">
                <a
                  href="/Chetan_Kharade_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ className: "w-full justify-center shadow-md py-6 text-md font-semibold" })}
                >
                  View Resume
                </a>
                <div className="flex flex-col gap-3 p-4 bg-muted/40 rounded-xl border">
                  <span className="text-sm font-semibold text-foreground text-center">Appearance</span>
                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setTheme('light')}
                      className={`w-full justify-center ${theme === 'light' ? 'border-primary ring-1 ring-primary' : ''}`}
                    >
                      <Sun className="h-4 w-4 mr-2" />
                      Light
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setTheme('dark')}
                      className={`w-full justify-center ${theme === 'dark' ? 'border-primary ring-1 ring-primary' : ''}`}
                    >
                      <Moon className="h-4 w-4 mr-2" />
                      Dark
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
