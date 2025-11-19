import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services, serviceCategories } from '@/data/services';
import { salonInfo } from '@/data/salon';
import { Clock, Euro } from 'lucide-react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('homme');

  const filteredServices = services.filter(
    (service) => service.category === selectedCategory
  );

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Prestations</h2>
          <p className="text-lg text-muted-foreground">
            Découvrez nos services de coiffure pour toute la famille, du classique au premium.
          </p>
        </div>

        {/* Specialties banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {salonInfo.specialties.map((specialty, i) => (
            <div
              key={i}
              className="p-4 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="text-sm font-medium text-center">{specialty}</p>
            </div>
          ))}
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-12 animate-fade-in-up">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-foreground text-background'
                  : 'bg-background border border-border hover:border-foreground'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, i) => (
            <Card
              key={service.id}
              className="hover:shadow-premium-hover transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{service.name}</CardTitle>
                {service.description && (
                  <CardDescription className="text-sm italic">
                    {service.description}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Duration and price */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    <Euro className="w-4 h-4" />
                    <span>{service.price}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={salonInfo.planityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="w-full hover:bg-foreground hover:text-background transition-colors"
                  >
                    Choisir
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional services note */}
        <div className="mt-12 p-6 bg-background rounded-lg border border-border text-center animate-fade-in-up">
          <p className="text-muted-foreground mb-3">
            Vous cherchez une prestation spécifique ?
          </p>
          <a href={salonInfo.planityUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="bg-foreground text-background">
              Voir toutes les prestations sur Planity
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
