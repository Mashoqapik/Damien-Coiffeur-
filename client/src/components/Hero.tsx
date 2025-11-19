import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { salonInfo } from '@/data/salon';

export default function Hero() {
  const handleScrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

      <div className="container max-w-4xl text-center">
        {/* Main heading with animation */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance leading-tight">
            Coiffeur Damien
          </h1>

          {/* Subheading */}
          <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              153 Grand Rue · Haguenau
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Du style, de la technique, de l'écoute
            </p>
          </div>

          {/* CTA Buttons - Large and prominent */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              href={salonInfo.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Prendre rendez-vous
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={handleScrollToServices}
              className="w-full sm:w-auto px-8 py-6 text-lg"
            >
              Voir les prestations
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 border-t border-border animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-sm text-muted-foreground mb-4">
              Réservez facilement via Planity
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
              <span>✓ Paiement sécurisé</span>
              <span>✓ Confirmations instantanées</span>
              <span>✓ Rappels par SMS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
