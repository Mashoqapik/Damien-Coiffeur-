import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { salonInfo } from '@/data/salon';
import { useScrollColor } from '@/hooks/useScrollColor';

export default function Hero() {
  const isDarkText = useScrollColor(500);
  
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
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url(/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Gradient overlay from black to transparent - enhanced for immersion */}
      <div className="absolute inset-0 -z-10" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 100%)',
      }} />



      <div className="container max-w-4xl text-center">
        {/* Main heading with animation */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance leading-tight transition-all duration-300 ${
            isDarkText ? 'text-foreground' : 'text-white'
          }`}>
            Coiffeur Damien
          </h1>

          {/* Subheading */}
          <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className={`text-xl md:text-2xl font-light transition-all duration-300 ${
              isDarkText ? 'text-muted-foreground' : 'text-white/80'
            }`}>
              153 Grand Rue · Haguenau
            </p>
            <p className={`text-lg md:text-xl transition-all duration-300 ${
              isDarkText ? 'text-muted-foreground' : 'text-white/80'
            }`}>
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
                className={`w-full sm:w-auto px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300 ${
                  isDarkText
                    ? 'bg-foreground text-background hover:bg-foreground/90'
                    : 'bg-white text-foreground hover:bg-white/90'
                }`}
              >
                Prendre rendez-vous
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={handleScrollToServices}
              className={`w-full sm:w-auto px-8 py-6 text-lg transition-all duration-300 ${
                isDarkText
                  ? 'border-border text-foreground hover:bg-muted'
                  : 'border-white text-white hover:bg-white/10'
              }`}
            >
              Voir les prestations
            </Button>
          </div>

          {/* Trust indicators */}
          <div className={`pt-12 transition-all duration-300 ${
            isDarkText ? 'border-t border-border' : 'border-t border-white/20'
          } animate-fade-in-up`} style={{ animationDelay: '0.3s' }}>
            <p className={`text-sm mb-4 transition-all duration-300 ${
              isDarkText ? 'text-muted-foreground' : 'text-white/70'
            }`}>
              Réservez facilement via Planity
            </p>
            <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 text-sm transition-all duration-300 ${
              isDarkText ? 'text-muted-foreground' : 'text-white/70'
            }`}>
              <span>Paiement sécurisé</span>
              <span className="hidden sm:inline">•</span>
              <span>Confirmations instantanées</span>
              <span className="hidden sm:inline">•</span>
              <span>Rappels par SMS</span>
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
