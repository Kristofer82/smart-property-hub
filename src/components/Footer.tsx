export const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="font-semibold">Avtalssystem</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/funktioner" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Funktioner
            </a>
            <a href="/#malgrupper" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Målgrupper
            </a>
            <a href="/#kontakt" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Kontakt
            </a>
          </nav>

          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Avtalssystem. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};
