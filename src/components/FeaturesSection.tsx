import { FileText, Map, BarChart3, Database, Layers, Brain } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Automatisk inläsning av avtal",
    description: "AI-driven analys och inläsning av hyresavtal för snabb digitalisering.",
  },
  {
    icon: FileText,
    title: "Avtalshantering & versionskontroll",
    description: "Komplett hantering av avtal med spårbarhet och versionshistorik.",
  },
  {
    icon: Layers,
    title: "Projektmodul",
    description: "Strukturerad hantering av lokalutvecklingsprocesser och projekt.",
  },
  {
    icon: Map,
    title: "Visualisering på karta",
    description: "Geografisk översikt av fastigheter och avtal för bättre insikter.",
  },
  {
    icon: BarChart3,
    title: "Driftkostnader & KPI",
    description: "Uppföljning av kostnader och nyckeltal för informerade beslut.",
  },
  {
    icon: Database,
    title: "Integration mot datakällor",
    description: "Sömlös integration med PostgreSQL och andra datakällor.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="funktioner" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 animate-fade-up">
            Kraftfulla funktioner
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up-delay-1">
            Allt du behöver för att hantera hyresavtal och fastighetsprojekt på ett ställe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-all duration-300 shadow-soft hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
