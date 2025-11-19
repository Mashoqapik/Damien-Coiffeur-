import { salonInfo } from '@/data/salon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground text-background py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Coiffeur Damien" 
                className="w-8 h-8"
              />
              <h3 className="text-lg font-bold">{salonInfo.name}</h3>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Salon de coiffure familial situé au cœur de Haguenau. Techniques modernes, coloration INOA, et expertise pour toute la famille.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p>{salonInfo.address}</p>
                <p>{salonInfo.postalCode} {salonInfo.city}</p>
              </div>
              <div>
                <a
                  href={`tel:${salonInfo.phoneLink}`}
                  className="hover:opacity-80 transition-opacity"
                >
                  {salonInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <div className="space-y-2 text-sm">
              <p>Lun-Mar: 09:00 - 18:30</p>
              <p>Mer: 08:00 - 17:00</p>
              <p>Jeu: 08:30 - 18:30</p>
              <p>Ven: 09:00 - 18:30</p>
              <p>Sam: 08:00 - 17:00</p>
              <p>Dim: Fermé</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>
              © {currentYear} {salonInfo.name}. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>

        {/* Planity link */}
        <div className="text-center text-sm text-background/80">
          <p>
            Réservez directement sur{' '}
            <a
              href={salonInfo.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-background transition-colors"
            >
              Planity
            </a>
          </p>
        </div>

        {/* Creator credit */}
        <div className="absolute bottom-4 right-4 text-xs text-background/60 hover:text-background/80 transition-colors">
          <p>créateur site web Mashoqapik</p>
        </div>
      </div>
    </footer>
  );
}
