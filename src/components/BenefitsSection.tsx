import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Ökad kontroll",
    description: "Fullständig överblick över alla avtal, kostnader och projektprocesser.",
  },
  {
    title: "Snabbare processer",
    description: "Automatiserad inläsning och hantering sparar tid och minskar fel.",
  },
  {
    title: "Minskad administration",
    description: "Effektivisera arbetsflöden och frigör tid för strategiskt arbete.",
  },
  {
    title: "Bättre beslutsunderlag",
    description: "Data-driven visualisering och analys för informerade beslut.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Fördelar för din organisation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vår plattform hjälper dig att ta kontroll över dina hyresavtal och fastighetsprojekt 
              med moderna verktyg byggda för effektivitet.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="flex gap-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl border border-border shadow-elevated p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm text-muted-foreground">Realtidsuppdateringar</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-3/4 gradient-accent rounded-full" />
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-2xl font-bold text-foreground">847</div>
                    <div className="text-xs text-muted-foreground">Avtal</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-2xl font-bold text-foreground">23</div>
                    <div className="text-xs text-muted-foreground">Projekt</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-2xl font-bold text-accent">98%</div>
                    <div className="text-xs text-muted-foreground">Precision</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 bg-accent/5 rounded-2xl transform translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
