import { openingHours } from '@/data/salon';
import { Clock } from 'lucide-react';

export default function Hours() {
  return (
    <section id="hours" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Horaires d'ouverture</h2>
            <p className="text-lg text-muted-foreground">
              Nous sommes ouverts du lundi au samedi
            </p>
          </div>

          {/* Hours grid */}
          <div className="bg-background rounded-lg border border-border p-8 shadow-lg animate-fade-in-up">
            <div className="space-y-4">
              {openingHours.map((hour, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between pb-4 border-b border-border last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="font-semibold">{hour.day}</span>
                  </div>
                  <span className="text-muted-foreground">
                    {hour.opens === 'Fermé' ? (
                      <span className="text-red-600 font-medium">Fermé</span>
                    ) : (
                      `${hour.opens} - ${hour.closes}`
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                📞 Appelez-nous au <span className="font-semibold">03 88 73 25 70</span> pour toute question
              </p>
            </div>
          </div>

          {/* Quick booking */}
          <div className="mt-8 p-6 bg-foreground text-background rounded-lg text-center animate-fade-in-up">
            <p className="mb-3">Prêt à prendre rendez-vous ?</p>
            <a
              href="https://www.planity.com/coiffure-damien-67500-haguenau"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-colors"
            >
              Réserver maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
