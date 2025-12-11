import { Building2, Landmark, Users, ClipboardList, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Landmark,
    title: "Kommuner & myndigheter",
    description: "Effektiv förvaltning av offentliga lokaler och avtal.",
  },
  {
    icon: Building2,
    title: "Fastighetsägare",
    description: "Komplett översikt över fastighetsbestånd och hyresintäkter.",
  },
  {
    icon: Users,
    title: "Hyresgäster",
    description: "Transparent hantering av hyresrelationer och kostnader.",
  },
  {
    icon: ClipboardList,
    title: "Projektledningsorganisationer",
    description: "Strukturerad projektuppföljning och resursplanering.",
  },
  {
    icon: Briefcase,
    title: "Arbetsplatsstrateger",
    description: "Data-driven planering av lokalbehov och arbetsmiljö.",
  },
];

export const AudienceSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            För vem är tjänsten?
          </h2>
          <p className="text-lg text-muted-foreground">
            Vår plattform är anpassad för olika aktörer inom fastighets- och lokalförvaltning.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="group flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:border-accent/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <audience.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  {audience.title}
                </h3>
                <p className="text-xs text-muted-foreground max-w-[200px]">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
