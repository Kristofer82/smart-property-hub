import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Layers,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  GanttChart,
  Calculator,
  ClipboardList,
  Search,
  FileCheck,
  Users,
  Truck,
  LayoutGrid,
  BarChart3
} from "lucide-react";

const projectPhases = [
  {
    phase: 1,
    title: "Projektstart och nuläge",
    description: "Definiera projektets syfte, omfattning och ekonomiska ramar",
    deliverables: ["Organisation", "Projektplan", "Tid- och aktivitetsplan", "Projektbudget", "Målbeskrivning", "Kommunikationsplan"],
  },
  {
    phase: 2,
    title: "Behovsanalys",
    description: "Analysera nuvarande situation och definiera framtida lokalbehov",
    deliverables: ["Lokalbehov och arbetssätt", "Lokalprogram", "Lokalalternativ"],
  },
  {
    phase: 3,
    title: "Hyresavtal och marknad",
    description: "Sök och utvärdera lokalalternativ på marknaden",
    deliverables: ["Marknadssök", "Offertutvärdering", "Hyresanalys", "Kontraktsförhandling"],
  },
  {
    phase: 4,
    title: "Genomförande",
    description: "Planera och genomför flytten till nya lokaler",
    deliverables: ["Checklistor", "Flyttplanering", "Hyresgästanpassningar", "Inflytt"],
  },
];

const projectTools = [
  { icon: GanttChart, title: "Tidplan", description: "Gantt-diagram med aktiviteter och beroenden", phase: "Fas 1" },
  { icon: Calculator, title: "Projektbudget", description: "Investering, drift och avskrivningar", phase: "Fas 1" },
  { icon: ClipboardList, title: "Inventering", description: "Dokumentera lokaler, möbler och utrustning", phase: "Fas 2" },
  { icon: LayoutGrid, title: "Lokalprogram", description: "Definiera framtida lokalbehov med lokalförteckning", phase: "Fas 2" },
  { icon: Search, title: "Lokalsökning", description: "Hitta och utvärdera lokaler på marknaden", phase: "Fas 3" },
  { icon: FileCheck, title: "Offertutvärdering", description: "Jämför hyresalternativ med NPV och TCO", phase: "Fas 3" },
  { icon: BarChart3, title: "Hyresanalys", description: "Analysera från fastighetsägarens perspektiv", phase: "Fas 3" },
  { icon: CheckCircle2, title: "Checklistor", description: "Checklistor för flytt, IT och överlämning", phase: "Fas 4" },
  { icon: Truck, title: "Flyttplanering", description: "Visuell tidslinje för flyttaktiviteter", phase: "Fas 4" },
  { icon: Users, title: "Samverkan", description: "Team, meddelanden, organisation och kontakter", phase: "Fas 1" },
];

const additionalBenefits = [
  { icon: Zap, title: "Snabb implementering", description: "Kom igång på dagar, inte månader" },
  { icon: Shield, title: "Säker datalagring", description: "GDPR-kompatibel och krypterad" },
  { icon: Clock, title: "24/7 tillgänglighet", description: "Åtkomst var som helst, när som helst" },
  { icon: TrendingUp, title: "Kontinuerlig utveckling", description: "Regelbundna uppdateringar och nya funktioner" },
];

const Projekt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-sm text-accent font-medium mb-4">
                Specialiserad projektmodul
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 animate-fade-up">
                Projektmodul för kommersiella hyresgäster
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up-delay-1">
                En avancerad projektmodul som samordnar, strukturerar och budgeterar hela lokalutvecklingsprocessen. 
                Perfekt för alla som arbetar med lokalprojekt – från erfarna projektledare till nya beställare.
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

        {/* Who is it for */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-card transition-shadow">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Nya beställare</h3>
                  <p className="text-sm text-muted-foreground">
                    Vägledning och struktur genom hela projektprocessen
                  </p>
                </div>
                <div className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-card transition-shadow">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mx-auto mb-4">
                    <ClipboardList className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Erfarna projektledare</h3>
                  <p className="text-sm text-muted-foreground">
                    Fler verktyg i verktygslådan för effektivare projekt
                  </p>
                </div>
                <div className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-card transition-shadow">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Större organisationer</h3>
                  <p className="text-sm text-muted-foreground">
                    Standardisera arbetet inom hela organisationen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Phases */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Projektfaser
              </h2>
              <p className="text-lg text-muted-foreground">
                En strukturerad process från projektstart till inflytt.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectPhases.map((phase) => (
                <div key={phase.phase} className="bg-card rounded-xl border border-border p-6 hover:shadow-card transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center text-accent-foreground font-bold">
                      {phase.phase}
                    </div>
                    <h4 className="font-semibold text-foreground">{phase.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Leverabler:</p>
                    <ul className="space-y-1">
                      {phase.deliverables.map((item) => (
                        <li key={item} className="text-sm text-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Tools */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Projektverktyg
              </h2>
              <p className="text-lg text-muted-foreground">
                Välj ett verktyg för att arbeta med projektet. Verktygen kan användas genom alla faser.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectTools.map((tool) => (
                <div key={tool.title} className="bg-card rounded-xl border border-border p-5 hover:border-accent/30 hover:shadow-card transition-all group">
                  <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <tool.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{tool.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                  <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                    {tool.phase}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Fördelar med projektmodulen</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Standardiserar arbetet för större organisationer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Vägleder nya beställare genom hela processen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Utökar verktygslådan för erfarna projektledare</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Hjälper till att ställa korrekta krav på leverantörer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Moderna inventeringsverktyg och Gantt-schema</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Samordnar alla projektdeltagare på ett ställe</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="bg-secondary/50 rounded-xl p-6">
                    <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center mb-4">
                      <Layers className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-accent mb-2">4 faser</div>
                    <div className="text-muted-foreground">10+ specialiserade verktyg</div>
                  </div>
                </div>
              </div>
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
            <div className="max-w-3xl mx-auto text-center bg-card rounded-2xl border border-border p-8 md:p-12 shadow-elevated">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Redo att effektivisera era projekt?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Boka en demo idag och se hur vår projektmodul kan hjälpa er organisation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <a href="/#kontakt">
                    Boka en demo
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="/avtal">
                    Se avtalsdatabasen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projekt;
