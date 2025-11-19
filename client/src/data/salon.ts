export const salonInfo = {
  name: 'Coiffeur Damien',
  address: '153 Grand Rue',
  city: 'Haguenau',
  postalCode: '67500',
  country: 'FR',
  phone: '03 88 73 25 70',
  phoneLink: '+33388732570',
  planityUrl: 'https://www.planity.com/coiffure-damien-67500-haguenau',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.8948738261446!2d7.7479!3d48.7697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795c8e8e8e8e8e9%3A0x8e8e8e8e8e8e8e8e!2s153%20Grand%20Rue%2C%2067500%20Haguenau!5e0!3m2!1sfr!2sfr!4v1234567890',
  coordinates: {
    lat: 48.7697,
    lng: 7.7479,
  },
  about: 'Coiffeur Damien, salon familial situé au cœur de Haguenau. Nous allions savoir-faire technique et conseil personnalisé pour chaque client.',
  specialties: [
    'Techniques modernes de coiffure',
    'Coloration L\'Oréal INOA (sans ammoniac)',
    'Expertise hommes, femmes et enfants',
    'Diagnostic personnalisé et conseil',
  ],
};

export const openingHours = [
  { day: 'Lundi', opens: '09:00', closes: '18:30' },
  { day: 'Mardi', opens: '09:00', closes: '18:30' },
  { day: 'Mercredi', opens: '08:00', closes: '17:00' },
  { day: 'Jeudi', opens: '08:30', closes: '18:30' },
  { day: 'Vendredi', opens: '09:00', closes: '18:30' },
  { day: 'Samedi', opens: '08:00', closes: '17:00' },
  { day: 'Dimanche', opens: 'Fermé', closes: '' },
];

export const openingHoursJSON = [
  { dayOfWeek: ['Monday'], opens: '09:00', closes: '18:30' },
  { dayOfWeek: ['Tuesday'], opens: '09:00', closes: '18:30' },
  { dayOfWeek: ['Wednesday'], opens: '08:00', closes: '17:00' },
  { dayOfWeek: ['Thursday'], opens: '08:30', closes: '18:30' },
  { dayOfWeek: ['Friday'], opens: '09:00', closes: '18:30' },
  { dayOfWeek: ['Saturday'], opens: '08:00', closes: '17:00' },
];
