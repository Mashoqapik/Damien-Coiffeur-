export interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
  category: 'homme' | 'femme' | 'technique' | 'enfant';
  description?: string;
  icon?: string;
}

export const services: Service[] = [
  // Homme
  {
    id: 'homme-1',
    name: 'Shampoing + Coupe + Coiffage classique',
    duration: '30 min',
    price: '24,50 €',
    category: 'homme',
  },
  {
    id: 'homme-2',
    name: 'Application Mèches / Éclaircissement / Décoloration',
    duration: '30 min',
    price: 'à partir de 45 €',
    category: 'homme',
    description: 'sur devis',
  },
  {
    id: 'homme-3',
    name: 'Permanente + coupe + coiffage',
    duration: '1h30',
    price: 'à partir de 61 €',
    category: 'homme',
  },
  {
    id: 'homme-4',
    name: 'Shamp.+coupe spécifique (taper, mulet, dégradé à blanc) + coiffage',
    duration: '45 min',
    price: 'à partir de 27 €',
    category: 'homme',
  },

  // Femme
  {
    id: 'femme-1',
    name: 'Shampoing Brushing court',
    duration: '30 min',
    price: 'à partir de 26 €',
    category: 'femme',
  },
  {
    id: 'femme-2',
    name: 'Shampoing Brushing mi-long',
    duration: '45 min',
    price: 'à partir de 29 €',
    category: 'femme',
  },
  {
    id: 'femme-3',
    name: 'Shampoing Brushing long',
    duration: '1h',
    price: 'à partir de 32 €',
    category: 'femme',
  },
  {
    id: 'femme-4',
    name: 'Shampoing Coupe Brushing court',
    duration: '45 min',
    price: 'à partir de 42,50 €',
    category: 'femme',
  },
  {
    id: 'femme-5',
    name: 'Shampoing Coupe Brushing mi-long',
    duration: '1h',
    price: 'à partir de 47,50 €',
    category: 'femme',
  },
  {
    id: 'femme-6',
    name: 'Shampoing Coupe Brushing long',
    duration: '1h',
    price: 'à partir de 52,50 €',
    category: 'femme',
  },
  {
    id: 'femme-7',
    name: 'Bon cadeau',
    duration: '30 min',
    price: 'Sur devis',
    category: 'femme',
  },
  {
    id: 'femme-8',
    name: 'BOTOX soin profond',
    duration: 'Sur rendez-vous',
    price: 'Sur devis',
    category: 'femme',
    description: 'Réservation par téléphone',
  },

  // Technique Femme
  {
    id: 'technique-1',
    name: 'Coloration L\'Oréal INOA (sans ammoniac)',
    duration: 'Variable',
    price: 'Sur devis',
    category: 'technique',
    description: 'Coloration premium sans ammoniac',
  },
  {
    id: 'technique-2',
    name: 'Mèches / Balayage',
    duration: 'Variable',
    price: 'Sur devis',
    category: 'technique',
  },

  // Enfant / Jeune
  {
    id: 'enfant-1',
    name: 'Coupe enfant',
    duration: '20 min',
    price: 'à partir de 15 €',
    category: 'enfant',
  },
  {
    id: 'enfant-2',
    name: 'Coupe jeune',
    duration: '30 min',
    price: 'à partir de 18 €',
    category: 'enfant',
  },
];

export const serviceCategories = [
  { id: 'homme', label: 'Homme', icon: '👨' },
  { id: 'femme', label: 'Femme', icon: '👩' },
  { id: 'technique', label: 'Technique', icon: '✨' },
  { id: 'enfant', label: 'Enfant / Jeune', icon: '👧' },
];
