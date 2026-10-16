import { Brand, Product, BusinessUnit } from '../types';

export const COMPANY_INFO = {
  name: 'A&D QUÍMICOS Y DIVERSOS S.A.',
  shortName: 'A&D Químicos',
  slogan: 'Comprometidos con la calidad. Comprometidos contigo.',
  isoCertification: 'ISO 9001:2015 BUREAU VERITAS Certification N° CO.000000',
  catalogCode: 'AYDCL001-21',
  phone: '511 7110550',
  phoneDisplay: '(01) 711-0550',
  phoneInternational: '+5117110550',
  whatsappNumber: '51987654321', // typical Peruvian commercial contact format
  email: 'ventas@aydquimicos.com',
  website: 'www.aydquimicos.com',
};

export const BUSINESS_UNITS: BusinessUnit[] = [
  {
    title: 'Productos de Limpieza',
    description: 'Desinfectantes, lejías concentradas, detergentes, lavavajillas y limpiatodo de alto desempeño para el hogar y la industria.',
    icon: 'Sparkles',
  },
  {
    title: 'Insumos Químicos',
    description: 'Materias primas e insumos químicos de calidad certificada para diversos procesos de manufactura y desinfección.',
    icon: 'FlaskConical',
  },
  {
    title: 'Envases y Embalajes',
    description: 'Soluciones integrales de envasado plástico resistente: botellas con tapa de seguridad, galoneras y bidones industriales.',
    icon: 'Package',
  },
  {
    title: 'Tecnología de la Información',
    description: 'Implementación de plataformas tecnológicas e infraestructura para optimización y trazabilidad operativa.',
    icon: 'Cpu',
  },
];

export const BRANDS: Brand[] = [
  {
    id: 'lesly',
    name: 'Lesly',
    slogan: 'Calidad y protección para el hogar',
    color: '#059669', // Emerald/Teal green
    accentColor: '#f97316', // Orange
    badgeBg: 'bg-emerald-600',
    description: 'Línea insignia de desinfección, lavavajilla, detergente, limpiatodo y quitamanchas con poder antibacterial al 99.99%.',
    featuredProductsCount: 7,
  },
  {
    id: 'clorosur',
    name: 'Clorosur',
    slogan: 'Mayor desinfección, mejor precio',
    color: '#1d4ed8', // Royal Blue
    accentColor: '#dc2626', // Red
    badgeBg: 'bg-blue-700',
    description: 'Lejía de alto rendimiento y concentración de hasta 7.5% en envases desde cojín 125g hasta bidón industrial de 20kg.',
    featuredProductsCount: 1,
  },
  {
    id: 'margot',
    name: 'Margot',
    slogan: '6.5% concentración Hipoclorito de Sodio',
    color: '#15803d', // Green
    accentColor: '#b91c1c', // Crimson Red
    badgeBg: 'bg-green-700',
    description: 'Lejía concentrada al 6.5% de hipoclorito de sodio para máximo poder de blanqueo y desinfección profunda.',
    featuredProductsCount: 1,
  },
  {
    id: 'mariana',
    name: 'Mariana',
    slogan: 'Tradición y blancura garantizada',
    color: '#16a34a',
    accentColor: '#dc2626',
    badgeBg: 'bg-emerald-700',
    description: 'Lejía concentrada para el hogar, máxima blancura para ropa blanca y desinfección de superficies.',
    featuredProductsCount: 1,
  },
  {
    id: 'zambo',
    name: 'Zambo',
    slogan: '¡Insuperable...!',
    color: '#eab308',
    accentColor: '#15803d',
    badgeBg: 'bg-amber-600',
    description: 'Lejía para uso doméstico e institucional de fórmula insuperable y máxima economía.',
    featuredProductsCount: 1,
  },
  {
    id: 'rayo',
    name: 'Rayo',
    slogan: 'Poder industrial y calidad comprobada',
    color: '#dc2626',
    accentColor: '#f59e0b',
    badgeBg: 'bg-red-700',
    description: 'Ácido concentrado antibacterial, quitasarro de alto poder que elimina hongos y sarro, y velas de mecha trenzada.',
    featuredProductsCount: 3,
  },
];

export const PRODUCTS: Product[] = [
  // Page 2: Lesly Lejía Concentrada
  {
    id: 'lesly-lejia-concentrada',
    pageNumber: 2,
    catalogCode: 'AYDCL001-21',
    brandId: 'lesly',
    brandName: 'Lesly',
    name: 'Lejía Concentrada',
    subtitle: 'Cloro ~ Lavandina',
    tagline: '¡Nuevo Producto!',
    category: 'desinfeccion',
    categoryLabel: 'Desinfección & Lejías',
    badges: ['¡Nuevo Producto!', 'ELIMINA 99.99% BACTERIAS', 'Cloro ~ Lavandina'],
    descriptionBullets: [
      'Elimina el 99.99% de bacterias, hongos y virus.',
      'Fórmula concentrada de máxima efectividad desinfectante y blanqueadora.',
      'Ideal para pisos, baños, cocinas y desinfección profunda de superficies.',
      'Con la garantía oficial de A&D Químicos y Diversos S.A.'
    ],
    presentations: [
      { id: 'llc-250', size: '250 gr.', packing: 'Pack x 24 unid.', formatType: 'botella' },
      { id: 'llc-680', size: '680 gr.', packing: 'Pack x 12 unid.', formatType: 'botella' },
      { id: 'llc-1050', size: '1050 gr.', packing: 'Pack x 12 unid.', formatType: 'botella' },
      { id: 'llc-4000', size: '4 kg.', packing: 'Pack x 4 unid.', formatType: 'galon' },
    ],
    accentColor: '#059669',
    bgGradient: 'from-emerald-500 to-teal-700',
    imageType: 'bottle-white-green-cap',
    highlightText: 'Fórmula enriquecida con poder desinfectante continuo',
  },

  // Page 3: Lesly Detergente Antibacterial
  {
    id: 'lesly-detergente-antibacterial',
    pageNumber: 3,
    catalogCode: 'AYDCL001-21',
    brandId: 'lesly',
    brandName: 'Lesly',
    name: 'Detergente Antibacterial',
    subtitle: 'Detergente en polvo - Aroma a Limón',
    category: 'lavado',
    categoryLabel: 'Lavado & Cuidado de Ropa',
    badges: ['ELIMINA 99.99% BACTERIAS', 'Materia Activa 15%', 'Aroma a Limón'],
    descriptionBullets: [
      'Alto contenido de materia activa al 15%',
      'Enzimas que remueven manchas difíciles',
      'Colores vivos por su abrillantador óptico.',
      'Poder antibacterial eliminando el 99.99% de bacterias',
      'Alta solubilidad en el agua evitando manchas de detergente en las prendas',
      'Máxima protección de tejidos',
      'Máxima limpieza y desinfección',
      'Fórmula enriquecida con poder desengrasante'
    ],
    fragrances: ['Aroma a Limón'],
    presentations: [
      { id: 'lda-150', size: '150 gr.', packing: 'Bolsa x 60 unidades', formatType: 'bolsa' },
      { id: 'lda-1k', size: '1 Kg.', packing: 'Bolsa x 10 unidades', formatType: 'bolsa' },
      { id: 'lda-15k', size: '15 Kg.', packing: 'Saco', formatType: 'saco' },
    ],
    accentColor: '#16a34a',
    bgGradient: 'from-green-500 to-emerald-700',
    imageType: 'bag-green-powder',
    highlightText: '15% de materia activa y enzimas quita manchas',
  },

  // Page 4: Lesly Lavavajilla Antibacterial en Crema
  {
    id: 'lesly-lavavajilla-crema',
    pageNumber: 4,
    catalogCode: 'AYDCL001-21',
    brandId: 'lesly',
    brandName: 'Lesly',
    name: 'Lavavajilla Antibacterial en Crema',
    subtitle: 'Crema con Abrillantador - Olvídate de la grasa',
    category: 'vajilla',
    categoryLabel: 'Cocina & Lavavajillas',
    badges: ['ELIMINA 99.99% BACTERIAS', 'Con Abrillantador', 'Olvídate de la grasa'],
    descriptionBullets: [
      'Elimina el 99.99% de bacterias en platos, vajilla y cubiertos.',
      'Fórmula cremosa concentrada enriquecida con agentes desengrasantes activos.',
      'Contiene abrillantador óptico que deja la vajilla reluciente y sin residuos.',
      'Disponible en 4 frescos y deliciosos aromas: Aloe Vera, Uva, Limón y Tutti Frutti.'
    ],
    fragrances: ['Aloe Vera', 'Uva', 'Limón', 'Tutti Frutti'],
    presentations: [
      { id: 'lvc-180', size: '180 gr.', packing: 'Caja x 24 unidades', formatType: 'pote' },
      { id: 'lvc-400', size: '400 gr.', packing: 'Caja x 6 unidades', formatType: 'pote' },
      { id: 'lvc-850', size: '850 gr.', packing: 'Caja x 6 unidades', formatType: 'pote' },
      { id: 'lvc-1000', size: '1000 gr.', packing: 'Caja x 12 unidades', formatType: 'pote', variety: 'Aloe Vera / Uva / Limón / Tutti Frutti' },
      { id: 'lvc-1200', size: '1200 gr.', packing: 'Caja x 6 unidades', formatType: 'pote' },
    ],
    accentColor: '#e11d48',
    bgGradient: 'from-rose-500 to-purple-700',
    imageType: 'tub-cream',
    highlightText: '4 Variedades: Aloe Vera, Uva, Limón y Tutti Frutti',
  },

  // Page 5: Lesly Lavavajilla Líquida Antibacterial
  {
    id: 'lesly-lavavajilla-liquida',
    pageNumber: 5,
    catalogCode: 'AYDCL001-21',
    brandId: 'lesly',
    brandName: 'Lesly',
    name: 'Lavavajilla Líquida Antibacterial',
    subtitle: 'Con Glicerina & Poder Desengrasante - Aroma Limón',
    category: 'vajilla',
    categoryLabel: 'Cocina & Lavavajillas',
    badges: ['ELIMINA 99.99% BACTERIAS', 'Contiene Glicerina', 'Máximo Rendimiento'],
    descriptionBullets: [
      'Elimina el 99.99% de bacterias al instante en cristalería y ollas.',
      'Fórmula con glicerina que cuida la piel de tus manos mientras remueve grasa pesada.',
      'Alto poder desengrasante de acción rápida que ahorra agua en el enjuague.',
      'Máximo rendimiento con pocas gotas, incluye abrillantador.'
    ],
    fragrances: ['Aroma a Limón'],
    presentations: [
      { id: 'lvl-500', size: '500 ml.', packing: 'Caja de 12 unidades', formatType: 'botella' },
      { id: 'lvl-950', size: '950 ml.', packing: 'Caja de 12 unidades', formatType: 'botella' },
      { id: 'lvl-3780', size: 'Galón de 3780 ml.', packing: 'Pack x 4 unidades', formatType: 'galon' },
    ],
    accentColor: '#10b981',
    bgGradient: 'from-emerald-600 to-teal-800',
    imageType: 'bottle-dish-liquid',
    highlightText: 'Contiene glicerina protectora y abrillantador',
  },

  // Page 6: Lesly Limpiatodo Desinfectante
  {
    id: 'lesly-limpiatodo-desinfectante',
    pageNumber: 6,
    catalogCode: 'AYDCL001-21',
    brandId: 'lesly',
    brandName: 'Lesly',
    name: 'Limpiatodo Desinfectante',
    subtitle: 'Uso Doméstico - 4 Aromas Duraderos',
    category: 'limpieza',
    categoryLabel: 'Superficies & Multiuso',
    badges: ['ELIMINA BACTERIAS', '¡Ahora en Caja 900 mL!', '4 Fragancias'],
    descriptionBullets: [
      'Desinfecta y perfuma todas las superficies de la casa por más tiempo.',
      'Elimina bacterias patógenas en pisos de cerámica, mayólicas, mármol y laminados.',
      'Disponible en 4 agradables fragancias: Bebé (suavidad), Floral (frescura viva), Limón (cítrico intenso) y Lavanda (relajante).',
      '¡Nueva presentación innovadora de 900 mL en caja dispensadora!'
    ],
    fragrances: ['Bebé (Rosado)', 'Floral (Rojo)', 'Limón (Amarillo)', 'Lavanda (Morado)'],
    presentations: [
      { id: 'ltd-250', size: 'Botella de 250 ml.', packing: 'Pack x 24 unidades', formatType: 'botella', variety: 'Bebé / Floral / Limón / Lavanda' },
      { id: 'ltd-900', size: 'Botella de 900 ml.', packing: 'Pack x 12 unidades', formatType: 'botella', variety: 'Bebé / Floral / Limón / Lavanda' },
      { id: 'ltd-900-caja', size: '900 ml. en caja', packing: 'Presentación en caja', formatType: 'caja', variety: 'Bebé / Floral / Limón / Lavanda' },
      { id: 'ltd-3780', size: 'Galón de 3780 ml.', packing: 'Pack x 4 unidades', formatType: 'galon', variety: 'Bebé / Floral / Limón / Lavanda' },
    ],
    accentColor: '#8b5cf6',
    bgGradient: 'from-purple-500 to-pink-600',
    imageType: 'bottle-cleaner-multi',
    highlightText: 'Presentaciones en botella, caja dispensadora y galón',
  },

  // Page 7: Lesly Detergente y Suavizante Antibacterial
  {
    id: 'lesly-detergente-suavizante',
    pageNumber: 7,
    catalogCode: 'AYDCL001-21',
    brandId: 'lesly',
    brandName: 'Lesly',
    name: 'Detergente Líquido y Suavizante Antibacterial',
    subtitle: 'Colores Vivos / Suavidad Bebé / Aroma Floral',
    category: 'lavado',
    categoryLabel: 'Lavado & Cuidado de Ropa',
    badges: ['ELIMINA 99.99% BACTERIAS', 'Colores Vivos', 'Cuidado de Fibras'],
    descriptionBullets: [
      'Detergente Líquido Antibacterial: máxima protección de tejidos, conserva los colores vivos de tus prendas y elimina el 99.99% de bacterias.',
      'Suavizante Antibacterial Bebé: máxima ternura para la ropa delicada de los más pequeños con fragancia hipoalergénica.',
      'Suavizante Antibacterial Floral: suaviza profundamente los tejidos facilitando el planchado y otorgando perfume prolongado.'
    ],
    fragrances: ['Detergente Líquido Colores Vivos', 'Suavizante Bebé', 'Suavizante Floral'],
    presentations: [
      { id: 'lds-det-950', size: 'Detergente Líquido 950 ml.', packing: 'Caja x 12 unidades', formatType: 'botella', variety: 'Colores Vivos (Azul)' },
      { id: 'lds-det-3780', size: 'Detergente Líquido Galón 3780 ml.', packing: 'Pack x 4 unidades', formatType: 'galon', variety: 'Colores Vivos (Azul)' },
      { id: 'lds-suav-bebe-950', size: 'Suavizante Bebé 950 ml.', packing: 'Caja x 12 unidades', formatType: 'botella', variety: 'Bebé (Rosado)' },
      { id: 'lds-suav-bebe-3780', size: 'Suavizante Bebé Galón 3780 ml.', packing: 'Pack x 4 unidades', formatType: 'galon', variety: 'Bebé (Rosado)' },
      { id: 'lds-suav-floral-950', size: 'Suavizante Floral 950 ml.', packing: 'Caja x 12 unidades', formatType: 'botella', variety: 'Floral (Celeste)' },
    ],
    accentColor: '#3b82f6',
    bgGradient: 'from-blue-600 to-indigo-800',
    imageType: 'bottle-softener-detergent',
    highlightText: 'Línea premium de cuidado textil y desinfección',
  },

  // Page 8: Lesly Quitamanchas Ropa Color Desinfectante
  {
    id: 'lesly-quitamanchas-color',
    pageNumber: 8,
    catalogCode: 'AYDCL001-21',
    brandId: 'lesly',
    brandName: 'Lesly',
    name: 'Quitamanchas Ropa Color Desinfectante',
    subtitle: 'Desinfectante - Removedor de Manchas',
    category: 'lavado',
    categoryLabel: 'Lavado & Cuidado de Ropa',
    badges: ['ELIMINA BACTERIAS', 'Desinfectante', 'Removedor de manchas'],
    descriptionBullets: [
      'Desinfectante.',
      'Removedor de manchas.',
      'Seguro y diseñado especialmente para prendas de color, protege los tonos originales sin decolorar.',
      'Actúa sobre manchas difíciles de grasa, café, salsas y suciedad rebelde.'
    ],
    presentations: [
      { id: 'lqc-135', size: 'Envase de 135 ml.', packing: 'Bolsa x 100 unidades', formatType: 'bolsa' },
      { id: 'lqc-265', size: 'Envase de 265 ml.', packing: 'Pack x 24 unidades', formatType: 'botella' },
      { id: 'lqc-500', size: 'Envase de 500 ml.', packing: 'Pack x 12 unidades', formatType: 'botella' },
      { id: 'lqc-950', size: 'Envase de 950 ml.', packing: 'Pack x 12 unidades', formatType: 'botella' },
      { id: 'lqc-3780', size: 'Galón de 3780 ml.', packing: 'Pack x 4 unidades', formatType: 'galon' },
    ],
    accentColor: '#7c3aed',
    bgGradient: 'from-purple-600 to-indigo-900',
    imageType: 'bottle-stain-remover',
    highlightText: 'Fórmula sin cloro que cuida el tejido y reaviva el color',
  },

  // Page 9: Lesly Paño Absorbente
  {
    id: 'lesly-pano-absorbente',
    pageNumber: 9,
    catalogCode: 'AYDCL001-21',
    brandId: 'lesly',
    brandName: 'Lesly',
    name: 'Paño Absorbente',
    subtitle: 'Alta Durabilidad y Máxima Resistencia',
    category: 'limpieza',
    categoryLabel: 'Superficies & Multiuso',
    badges: ['Súper Absorbente', 'No Deja Pelusa', 'Fácil de Usar'],
    descriptionBullets: [
      'Alta durabilidad y máxima resistencia.',
      'Súper absorbente: atrapa líquidos y grasas en una sola pasada.',
      'Fácil de usar y de escurrir.',
      'No deja pelusa ni rayas en cristales, acero inoxidable o encimeras.'
    ],
    presentations: [
      { id: 'lpa-10', size: 'Paquete x 10 unidades', packing: 'Paquete de 10 paños', formatType: 'paquete' },
      { id: 'lpa-20', size: 'Paquete x 20 unidades', packing: 'Paquete de 20 paños', formatType: 'paquete' },
    ],
    accentColor: '#10b981',
    bgGradient: 'from-emerald-500 to-teal-700',
    imageType: 'pack-cloth',
    highlightText: 'Paños multicapa reutilizables de alta absorción',
  },

  // Page 10: Clorosur Lejía
  {
    id: 'clorosur-lejia',
    pageNumber: 10,
    catalogCode: 'AYDCL001-21',
    brandId: 'clorosur',
    brandName: 'Clorosur',
    name: 'Lejía Clorosur',
    subtitle: 'Mayor desinfección, mejor precio - 7.5% de concentración',
    category: 'desinfeccion',
    categoryLabel: 'Desinfección & Lejías',
    badges: ['Mayor Desinfección', 'Mejor Precio', '7.5% Concentración en Bidón'],
    descriptionBullets: [
      'Mayor desinfección, mejor precio.',
      '7.5% de concentración en presentación industrial / bidón.',
      'Apto para uso doméstico, comercial e industrial pesado.',
      'Blanqueador potente que elimina gérmenes y malos olores.'
    ],
    presentations: [
      { id: 'cl-125', size: 'Envase de 125 gr.', packing: 'Bolsa x 100 unidades', formatType: 'bolsa' },
      { id: 'cl-230', size: 'Envase de 230 gr.', packing: 'Pack x 24 unidades', formatType: 'botella' },
      { id: 'cl-680', size: 'Envase de 680 gr.', packing: 'Pack x 15 unidades', formatType: 'botella' },
      { id: 'cl-1000', size: 'Envase de 1000 gr.', packing: 'Pack x 12 unidades', formatType: 'botella' },
      { id: 'cl-2100', size: 'Envase de 2100 gr.', packing: 'Pack x 6 unidades', formatType: 'botella' },
      { id: 'cl-4000', size: 'Galón de 4 kg.', packing: 'Pack x 4 unidades', formatType: 'galon' },
      { id: 'cl-bidon', size: 'Bidón de 18 kg. y/o 20 kg.', packing: 'Bidón industrial 7.5%', formatType: 'bidon' },
    ],
    accentColor: '#1d4ed8',
    bgGradient: 'from-blue-600 to-indigo-900',
    imageType: 'bottle-blue-clorosur',
    highlightText: 'Disponible desde cojín 125g hasta bidón industrial 20kg al 7.5%',
  },

  // Page 11: Margot Lejía
  {
    id: 'margot-lejia',
    pageNumber: 11,
    catalogCode: 'AYDMG001-21',
    brandId: 'margot',
    brandName: 'Margot',
    name: 'Lejía Margot',
    subtitle: '6.5% de concentración Hipoclorito de Sodio',
    category: 'desinfeccion',
    categoryLabel: 'Desinfección & Lejías',
    badges: ['6.5% de Concentración', 'Hipoclorito de Sodio', 'Mayor Desinfección'],
    descriptionBullets: [
      '6.5% de concentración de Hipoclorito de Sodio.',
      'Especialmente balanceada para una mayor desinfección y blanqueo impecable.',
      'Formulada para higiene en baños, pisos y desinfección de ropa blanca.',
      'Con la garantía oficial de A&D Químicos y Diversos S.A.'
    ],
    presentations: [
      { id: 'ml-140', size: 'Envase de 140 gr.', packing: 'Bolsa x 100 unidades', formatType: 'bolsa' },
      { id: 'ml-230', size: 'Envase de 230 gr.', packing: 'Pack x 24 unidades', formatType: 'botella' },
      { id: 'ml-680', size: 'Envase de 680 gr.', packing: 'Pack x 12 unidades', formatType: 'botella' },
      { id: 'ml-1000', size: 'Envase de 1000 gr.', packing: 'Pack x 12 unidades', formatType: 'botella' },
    ],
    accentColor: '#15803d',
    bgGradient: 'from-green-600 to-emerald-900',
    imageType: 'bottle-green-margot',
    highlightText: 'Concentración exacta de 6.5% para higiene hospitalaria y del hogar',
  },

  // Page 12: Mariana Lejía
  {
    id: 'mariana-lejia',
    pageNumber: 12,
    catalogCode: 'AYDMR001-21',
    brandId: 'mariana',
    brandName: 'Mariana',
    name: 'Lejía Mariana',
    subtitle: 'Blancura Insuperable & Máxima Pureza',
    category: 'desinfeccion',
    categoryLabel: 'Desinfección & Lejías',
    badges: ['Blancura Garantizada', 'Desinfección Total', 'Con Garantía A&D'],
    descriptionBullets: [
      'Lejía tradicional de alta pureza y poder desinfectante.',
      'Garantiza prendas blancas radiantes y libres de manchas amarillentas.',
      'Desinfección de pisos, encimeras y áreas de alto tránsito.',
      'Con la garantía oficial de A&D Químicos y Diversos S.A.'
    ],
    presentations: [
      { id: 'mrl-175', size: 'Envase de 175 gr.', packing: 'Bolsa x 100 unidades', formatType: 'bolsa' },
      { id: 'mrl-230', size: 'Envase de 230 gr.', packing: 'Pack x 24 unidades', formatType: 'botella' },
      { id: 'mrl-680', size: 'Envase de 680 gr.', packing: 'Pack x 12 unidades', formatType: 'botella' },
      { id: 'mrl-1000', size: 'Envase de 1000 gr.', packing: 'Pack x 12 unidades', formatType: 'botella' },
      { id: 'mrl-4000', size: 'Galón de 4 kg.', packing: 'Pack x 4 unidades', formatType: 'galon' },
    ],
    accentColor: '#16a34a',
    bgGradient: 'from-emerald-600 to-teal-900',
    imageType: 'bottle-green-mariana',
    highlightText: 'Especialista en desinfección y cuidado de ropa blanca',
  },

  // Page 13: Zambo Lejía
  {
    id: 'zambo-lejia',
    pageNumber: 13,
    catalogCode: 'AYDZM001-21',
    brandId: 'zambo',
    brandName: 'Zambo',
    name: 'Lejía Zambo',
    subtitle: '¡Insuperable...! - Uso Doméstico',
    category: 'desinfeccion',
    categoryLabel: 'Desinfección & Lejías',
    badges: ['¡Insuperable...!', 'Uso Doméstico', 'Económico & Eficaz'],
    descriptionBullets: [
      'Lejía para uso doméstico: desinfección profunda a un precio insuperable.',
      'Elimina bacterias y neutraliza olores de origen orgánico.',
      'Ideal para limpieza diaria del hogar y lavado de prendas blancas.',
      'Con la garantía oficial de A&D Químicos y Diversos S.A.'
    ],
    presentations: [
      { id: 'zl-135', size: 'Envase de 135 gr.', packing: 'Bolsa x 100 unidades', formatType: 'bolsa' },
      { id: 'zl-230', size: 'Envase de 230 gr.', packing: 'Pack x 24 unidades', formatType: 'botella' },
      { id: 'zl-680', size: 'Envase de 680 gr.', packing: 'Pack x 12 unidades', formatType: 'botella' },
      { id: 'zl-1000', size: 'Envase de 1000 gr.', packing: 'Pack x 12 unidades', formatType: 'botella' },
    ],
    accentColor: '#ca8a04',
    bgGradient: 'from-amber-600 to-yellow-800',
    imageType: 'bottle-green-zambo',
    highlightText: 'Fórmula clásica de gran rendimiento para el hogar',
  },

  // Page 14: Rayo Ácido Concentrado Antibacterial & Quitasarro Antibacterial
  {
    id: 'rayo-acido-quitasarro',
    pageNumber: 14,
    catalogCode: 'AYDCL001-21',
    brandId: 'rayo',
    brandName: 'Rayo',
    name: 'Ácido Concentrado & Quitasarro Antibacterial',
    subtitle: 'Elimina Hongos, Sarro & Bacterias Resistentes',
    category: 'especialidades',
    categoryLabel: 'Especialidades & Ácidos',
    badges: ['ELIMINA HONGOS', 'Antibacterial', 'Acción Desincrustante'],
    descriptionBullets: [
      'Ácido Concentrado Antibacterial: remueve suciedad extrema, manchas de óxido, hongos y bacterias resistentes en pisos industriales y sanitarios.',
      'Quitasarro Antibacterial: formulación especializada que disuelve sarro incrustado en inodoros, urinarios, lavatorios y griferías.',
      'Acción bactericida y fungicida de choque.',
      'Disponible en envases oscuros de seguridad, galones y bidones de 18/20 kg.'
    ],
    presentations: [
      { id: 'ra-500', size: 'Ácido Concentrado 500 gr.', packing: 'Pack x 12 unidades', formatType: 'botella', variety: 'Ácido Concentrado' },
      { id: 'ra-1000', size: 'Ácido Concentrado 1000 gr.', packing: 'Pack x 12 unidades', formatType: 'botella', variety: 'Ácido Concentrado' },
      { id: 'ra-4000', size: 'Ácido Concentrado Galón 4 kg.', packing: 'Pack x 4 unidades', formatType: 'galon', variety: 'Ácido Concentrado' },
      { id: 'ra-bidon', size: 'Ácido Concentrado Bidón 18/20 kg.', packing: 'Bidón industrial', formatType: 'bidon', variety: 'Ácido Concentrado' },
      { id: 'rq-500', size: 'Quitasarro 500 gr.', packing: 'Pack x 12 unidades', formatType: 'botella', variety: 'Quitasarro' },
      { id: 'rq-1000', size: 'Quitasarro 1000 gr.', packing: 'Pack x 12 unidades', formatType: 'botella', variety: 'Quitasarro' },
      { id: 'rq-4000', size: 'Quitasarro Galón 4 kg.', packing: 'Pack x 4 unidades', formatType: 'galon', variety: 'Quitasarro' },
      { id: 'rq-bidon', size: 'Quitasarro Bidón 18/20 kg.', packing: 'Bidón industrial', formatType: 'bidon', variety: 'Quitasarro' },
    ],
    accentColor: '#b91c1c',
    bgGradient: 'from-red-600 to-amber-700',
    imageType: 'bottle-acid-rayo',
    highlightText: 'Poder desincrustante industrial que elimina sarro y hongos',
  },

  // Page 15: Rayo Velas
  {
    id: 'rayo-velas',
    pageNumber: 15,
    catalogCode: 'AYDCL001-21',
    brandId: 'rayo',
    brandName: 'Rayo',
    name: 'Velas Rayo',
    subtitle: 'Mecha Trenzada - Producto Peruano',
    category: 'hogar',
    categoryLabel: 'Velas & Hogar',
    badges: ['Mecha Trenzada', 'Producto Peruano', 'Combustión Limpia'],
    descriptionBullets: [
      'Vela de alta calidad con mecha trenzada que no humea ni gotea.',
      'Combustión prolongada y llama estable y luminosa.',
      '100% Producto Peruano elaborado con parafina refinada de primera selección.',
      'Comprometidos con la calidad. Comprometidos contigo.'
    ],
    presentations: [
      { id: 'rv-f3', size: 'Vela F3', packing: '20 Paquetes x 10 (200 und)', formatType: 'paquete' },
      { id: 'rv-a4', size: 'Vela ranurada A4', packing: 'Caja x 4 Atd. 400 Unid.', formatType: 'caja' },
      { id: 'rv-f5', size: 'Vela F5', packing: 'Caja x 27 Docenas (324 Und).', formatType: 'caja' },
    ],
    accentColor: '#f59e0b',
    bgGradient: 'from-amber-500 to-yellow-600',
    imageType: 'candle-rayo',
    highlightText: 'Mecha trenzada de larga duración y encendido perfecto',
  },
];

export const CATEGORIES = [
  { id: 'todas', label: 'Todos los Productos', icon: 'Layers' },
  { id: 'desinfeccion', label: 'Desinfección & Lejías', icon: 'ShieldCheck' },
  { id: 'lavado', label: 'Lavado & Ropa', icon: 'Shirt' },
  { id: 'vajilla', label: 'Cocina & Vajilla', icon: 'Utensils' },
  { id: 'limpieza', label: 'Multiuso & Superficies', icon: 'Sparkles' },
  { id: 'especialidades', label: 'Ácidos & Especialidades', icon: 'Flame' },
  { id: 'hogar', label: 'Velas & Hogar', icon: 'Zap' },
];

export const CATALOG_PAGES_META = [
  { page: 1, title: 'Portada Oficial A&D Químicos', subtitle: 'Catálogo de Productos', brand: 'A&D Químicos', type: 'cover' },
  { page: 2, title: 'Lejía Concentrada', subtitle: '¡Nuevo Producto! Elimina 99.99% bacterias', brand: 'Lesly', type: 'product', productId: 'lesly-lejia-concentrada' },
  { page: 3, title: 'Detergente Antibacterial', subtitle: 'Detergente en polvo - Materia Activa 15%', brand: 'Lesly', type: 'product', productId: 'lesly-detergente-antibacterial' },
  { page: 4, title: 'Lavavajilla Antibacterial en Crema', subtitle: 'Crema con Abrillantador - 4 Aromas', brand: 'Lesly', type: 'product', productId: 'lesly-lavavajilla-crema' },
  { page: 5, title: 'Lavavajilla Líquida Antibacterial', subtitle: 'Contiene Glicerina y Abrillantador', brand: 'Lesly', type: 'product', productId: 'lesly-lavavajilla-liquida' },
  { page: 6, title: 'Limpiatodo Desinfectante', subtitle: '4 Aromas - Presentación en Botella y Caja', brand: 'Lesly', type: 'product', productId: 'lesly-limpiatodo-desinfectante' },
  { page: 7, title: 'Detergente y Suavizante Antibacterial', subtitle: 'Detergente Líquido y Suavizantes Bebé / Floral', brand: 'Lesly', type: 'product', productId: 'lesly-detergente-suavizante' },
  { page: 8, title: 'Quitamanchas Ropa Color', subtitle: 'Desinfectante y Removedor de Manchas', brand: 'Lesly', type: 'product', productId: 'lesly-quitamanchas-color' },
  { page: 9, title: 'Paño Absorbente', subtitle: 'Súper Absorbente - Alta Resistencia', brand: 'Lesly', type: 'product', productId: 'lesly-pano-absorbente' },
  { page: 10, title: 'Lejía Clorosur', subtitle: '7.5% Concentración en Bidón - Mayor desinfección', brand: 'Clorosur', type: 'product', productId: 'clorosur-lejia' },
  { page: 11, title: 'Lejía Margot', subtitle: '6.5% concentración Hipoclorito de Sodio', brand: 'Margot', type: 'product', productId: 'margot-lejia' },
  { page: 12, title: 'Lejía Mariana', subtitle: 'Blancura garantizada y desinfección total', brand: 'Mariana', type: 'product', productId: 'mariana-lejia' },
  { page: 13, title: 'Lejía Zambo', subtitle: '¡Insuperable...! Uso doméstico', brand: 'Zambo', type: 'product', productId: 'zambo-lejia' },
  { page: 14, title: 'Ácido Concentrado & Quitasarro', subtitle: 'Elimina Hongos, Sarro & Bacterias', brand: 'Rayo', type: 'product', productId: 'rayo-acido-quitasarro' },
  { page: 15, title: 'Velas Rayo', subtitle: 'Mecha trenzada - Producto Peruano', brand: 'Rayo', type: 'product', productId: 'rayo-velas' },
  { page: 16, title: 'Contraportada Corporativa', subtitle: 'Unidades de Negocio & Contacto', brand: 'A&D Químicos', type: 'backcover' },
];
