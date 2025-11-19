import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { salonInfo } from '@/data/salon';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Prestations', href: '#services' },
    { label: 'À propos', href: '#about' },
    { label: 'Horaires', href: '#hours' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="Coiffeur Damien" 
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="text-lg md:text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Coiffeur Damien
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium hover:opacity-60 transition-opacity underline-animated"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href={salonInfo.planityUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="hidden sm:inline-flex bg-foreground text-background hover:bg-foreground/90"
            >
              Réserver
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-background border-b border-border animate-slide-in-down">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left py-2 text-sm font-medium hover:opacity-60 transition-opacity"
              >
                {item.label}
              </button>
            ))}
            <a
              href={salonInfo.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-2 border-t border-border"
            >
              <Button
                size="sm"
                className="w-full bg-foreground text-background hover:bg-foreground/90"
              >
                Réserver sur Planity
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
