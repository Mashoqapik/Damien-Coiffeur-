import { useEffect, useState } from 'react';

/**
 * Hook pour détecter le scroll et adapter les couleurs
 * Retourne true si on est en bas de la page (texte noir)
 * Retourne false si on est en haut (texte blanc)
 */
export function useScrollColor(threshold: number = 100) {
  const [isDarkText, setIsDarkText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsDarkText(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isDarkText;
}
