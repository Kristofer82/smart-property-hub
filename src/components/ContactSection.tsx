import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Vänligen fyll i alla obligatoriska fält",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Tack för ditt meddelande!",
      description: "Vi återkommer så snart som möjligt.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="kontakt" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Boka en demo
            </h2>
            <p className="text-lg text-muted-foreground">
              Intresserad av att se hur plattformen kan hjälpa din organisation? 
              Kontakta oss för en personlig genomgång.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border shadow-card p-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Namn <span className="text-accent">*</span>
                  </label>
                  <Input
                    id="name"
                    placeholder="Ditt namn"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-post <span className="text-accent">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="din@epost.se"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                    maxLength={255}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Meddelande
                </label>
                <Textarea
                  id="message"
                  placeholder="Berätta mer om era behov..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] resize-none"
                  maxLength={1000}
                />
              </div>

              <Button 
                type="submit" 
                variant="accent" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Skickar..."
                ) : (
                  <>
                    Kontakta mig
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
