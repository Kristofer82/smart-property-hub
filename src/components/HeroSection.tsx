import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm text-accent font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Modern avtalshantering för fastighetsförvaltare
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-up-delay-1">
            Digital hantering av hyresavtal och projekt – 
            <span className="text-accent"> enkelt, säkert och effektivt</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
            Samla alla era hyresavtal, driftkostnader och projekt på ett ställe. 
            AI-driven analys ger er kontroll och bättre beslutsunderlag.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#kontakt">
                Boka demo
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#funktioner">
                <Play className="w-5 h-5" />
                Se hur det fungerar
              </a>
            </Button>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-elevated border border-border/50">
            <img 
              src={dashboardMockup} 
              alt="Översikt av plattformens dashboard med kartvy och avtalshantering"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
          {/* Floating elements */}
          <div className="absolute -left-4 top-1/4 bg-card rounded-lg border border-border shadow-card p-4 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">AI</span>
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">Automatisk inläsning</div>
                <div className="text-xs text-muted-foreground">3 nya avtal analyserade</div>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 bottom-1/4 bg-card rounded-lg border border-border shadow-card p-4 hidden lg:block">
            <div className="text-sm font-medium text-foreground mb-2">Projektöversikt</div>
            <div className="flex gap-2">
              <div className="px-2 py-1 bg-accent/10 rounded text-xs text-accent font-medium">5 aktiva</div>
              <div className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground">12 avslutade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
