import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  FileText, 
  Layers, 
  Map, 
  BarChart3, 
  Database,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Automatisk inläsning av avtal",
    subtitle: "AI-driven digitalisering",
    description: "Vår AI-motor analyserar och extraherar automatiskt relevant data från era hyresavtal. Ingen manuell datainmatning krävs.",
    benefits: [
      "Sparar upp till 80% av tiden för avtalshantering",
      "Minimerar mänskliga fel vid datainmatning",
      "Stödjer PDF, Word och skannade dokument",
      "Automatisk klassificering av avtalstyper",
    ],
    highlight: "80% tidsbesparing",
  },
  {
    icon: FileText,
    title: "Avtalshantering & versionskontroll",
    subtitle: "Fullständig spårbarhet",
    description: "Hantera alla era avtal på ett ställe med komplett versionshistorik. Aldrig mer osäkerhet om vilken version som gäller.",
    benefits: [
      "Komplett versionshistorik för alla ändringar",
      "Automatiska påminnelser för förfallodatum",
      "Digital signering och godkännandeflöden",
      "Sökbar arkivering av alla dokument",
    ],
    highlight: "100% spårbarhet",
  },
  {
    icon: Layers,
    title: "Projektmodul",
    subtitle: "Strukturerad projekthantering",
    description: "En dedikerad modul för lokalutvecklingsprocesser som ger er full kontroll över projekt från start till mål.",
    benefits: [
      "Visuell projektöversikt med milstolpar",
      "Resursplanering och budgetuppföljning",
      "Dokumenthantering kopplad till projekt",
      "Samarbetsfunktioner för projektteam",
    ],
    highlight: "Strukturerad process",
  },
  {
    icon: Map,
    title: "Visualisering på karta",
    subtitle: "Geografisk översikt",
    description: "Se alla era fastigheter och avtal på en interaktiv karta. Få geografiska insikter och identifiera mönster.",
    benefits: [
      "Interaktiv karta med filtreringsmöjligheter",
      "Klickbar information om varje fastighet",
      "Visualisering av avtalsdata per område",
      "Export av kartdata för presentationer",
    ],
    highlight: "Visuella insikter",
  },
  {
    icon: BarChart3,
    title: "Driftkostnader & KPI",
    subtitle: "Data-driven uppföljning",
    description: "Följ upp kostnader och nyckeltal i realtid. Få automatiska rapporter och identifiera besparingsmöjligheter.",
    benefits: [
      "Realtidsuppdaterade dashboards",
      "Automatiska månads- och årsrapporter",
      "Jämförelse mot budget och historik",
      "Anpassningsbara KPI:er per verksamhet",
    ],
    highlight: "Realtidsdata",
  },
  {
    icon: Database,
    title: "Integration mot datakällor",
    subtitle: "Sömlös datahantering",
    description: "Anslut till era befintliga system och datakällor. Vi stödjer PostgreSQL, REST API:er och flera standardformat.",
    benefits: [
      "Native PostgreSQL-integration",
      "REST API för tredjepartsintegrationer",
      "Import/export i standardformat",
      "Automatisk datasynkronisering",
    ],
    highlight: "Öppet API",
  },
];

const additionalBenefits = [
  { icon: Zap, title: "Snabb implementering", description: "Kom igång på dagar, inte månader" },
  { icon: Shield, title: "Säker datalagring", description: "GDPR-kompatibel och krypterad" },
  { icon: Clock, title: "24/7 tillgänglighet", description: "Åtkomst var som helst, när som helst" },
  { icon: TrendingUp, title: "Kontinuerlig utveckling", description: "Regelbundna uppdateringar och nya funktioner" },
];

const Funktioner = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 animate-fade-up">
                Alla funktioner du behöver för modern avtalshantering
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up-delay-1">
                Utforska hur vår plattform kan transformera er fastighetsförvaltning 
                med kraftfulla verktyg och intelligent automatisering.
              </p>
              <Button variant="hero" size="xl" asChild className="animate-fade-up-delay-2">
                <a href="/#kontakt">
                  Boka en demo
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-sm text-accent font-medium mb-4">
                      {feature.subtitle}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {feature.description}
                    </p>
                    <ul className="space-y-4">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <div className="bg-card rounded-2xl border border-border shadow-elevated p-8 md:p-12">
                        <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center mb-6">
                          <feature.icon className="w-8 h-8 text-accent-foreground" />
                        </div>
                        <div className="space-y-4">
                          <div className="h-3 bg-secondary rounded-full w-3/4" />
                          <div className="h-3 bg-secondary rounded-full w-1/2" />
                          <div className="h-3 bg-secondary rounded-full w-2/3" />
                        </div>
                        <div className="mt-8 pt-6 border-t border-border">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg">
                            <span className="text-2xl font-bold text-accent">{feature.highlight}</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -z-10 inset-0 bg-accent/5 rounded-2xl transform translate-x-4 translate-y-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Ytterligare fördelar
              </h2>
              <p className="text-lg text-muted-foreground">
                Utöver våra huvudfunktioner erbjuder vi en rad extra fördelar.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalBenefits.map((benefit) => (
                <div 
                  key={benefit.title}
                  className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-card transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-primary rounded-2xl p-12 shadow-elevated">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
                Redo att komma igång?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Boka en personlig demo och se hur vår plattform kan hjälpa just er organisation.
              </p>
              <Button variant="secondary" size="xl" asChild>
                <a href="/#kontakt">
                  Boka demo nu
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Funktioner;
