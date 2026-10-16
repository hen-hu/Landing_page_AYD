export interface Presentation {
  id: string;
  size: string; // e.g. "250 gr.", "1 Kg.", "3780 ml."
  packing: string; // e.g. "Pack x 24 unid.", "Bolsa x 10 unidades", "Caja x 12 unidades"
  formatType?: 'botella' | 'galon' | 'bidon' | 'pote' | 'bolsa' | 'saco' | 'caja' | 'paquete';
  variety?: string; // e.g. "Aroma a Limón", "Bebé / Floral / Limón / Lavanda"
}

export interface Product {
  id: string;
  pageNumber: number;
  catalogCode: string;
  brandId: 'lesly' | 'clorosur' | 'margot' | 'mariana' | 'zambo' | 'rayo';
  brandName: string;
  name: string;
  category: 'desinfeccion' | 'lavado' | 'vajilla' | 'limpieza' | 'especialidades' | 'hogar';
  categoryLabel: string;
  tagline?: string;
  subtitle?: string;
  badges: string[];
  descriptionBullets: string[];
  features?: string[];
  fragrances?: string[];
  presentations: Presentation[];
  accentColor: string; // Hex color
  bgGradient: string; // CSS gradient
  imageType: string;
  highlightText?: string;
}

export interface Brand {
  id: 'lesly' | 'clorosur' | 'margot' | 'mariana' | 'zambo' | 'rayo' | 'blancura';
  name: string;
  slogan?: string;
  color: string;
  accentColor: string;
  badgeBg: string;
  description: string;
  featuredProductsCount: number;
}

export interface CartItem {
  productId: string;
  productName: string;
  brandName: string;
  presentationId: string;
  presentationSize: string;
  presentationPacking: string;
  variety?: string;
  quantity: number;
}

export interface BusinessUnit {
  title: string;
  description: string;
  icon: string;
}
