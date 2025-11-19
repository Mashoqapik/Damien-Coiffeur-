import { salonInfo } from '@/data/salon';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Salon image */}
          <div className="animate-fade-in-left">
            <div className="aspect-square rounded-lg overflow-hidden border border-border shadow-lg">
              <img 
                src="/salon.jpg" 
                alt="Coiffeur Damien - Salon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-right">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">À propos</h2>
              <div className="w-12 h-1 bg-foreground mb-6" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {salonInfo.about}
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold">Notre expertise</h3>
              <ul className="space-y-3">
                {salonInfo.specialties.map((specialty, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-foreground font-bold mt-1">•</span>
                <span className="text-muted-foreground">{specialty}</span>
              </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                « Chaque client est unique. Nous écoutons vos envies et créons la coupe qui vous met en valeur. »
              </p>
              <p className="text-sm font-semibold mt-3">— Damien</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
