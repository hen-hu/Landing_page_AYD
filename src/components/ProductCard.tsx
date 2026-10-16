import React, { useState } from 'react';
import { 
  Plus, 
  Check, 
  ShieldCheck, 
  Package, 
  ExternalLink, 
  Sparkles,
  Info
} from 'lucide-react';
import { Product, Presentation } from '../types';
import { ProductIllustration } from './ProductIllustration';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product, presentation: Presentation, quantity: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
  onAddToCart,
}) => {
  const [selectedPresId, setSelectedPresId] = useState<string>(product.presentations[0]?.id || '');
  const [quantity, setQuantity] = useState<number>(1);
  const [justAdded, setJustAdded] = useState<boolean>(false);

  const currentPresentation = product.presentations.find(p => p.id === selectedPresId) || product.presentations[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentPresentation) {
      onAddToCart(product, currentPresentation, quantity);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1400);
    }
  };

  // Brand header badges
  const getBrandHeaderBadge = () => {
    switch (product.brandId) {
      case 'lesly':
        return {
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          dot: 'bg-emerald-500',
          tag: 'LESLY HOGAR',
        };
      case 'clorosur':
        return {
          bg: 'bg-blue-50 text-blue-800 border-blue-200',
          dot: 'bg-blue-600',
          tag: 'CLOROSUR',
        };
      case 'margot':
        return {
          bg: 'bg-green-50 text-green-800 border-green-200',
          dot: 'bg-green-600',
          tag: 'MARGOT',
        };
      case 'mariana':
        return {
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          dot: 'bg-emerald-600',
          tag: 'MARIANA',
        };
      case 'zambo':
        return {
          bg: 'bg-amber-50 text-amber-800 border-amber-200',
          dot: 'bg-amber-500',
          tag: 'ZAMBO',
        };
      case 'rayo':
        return {
          bg: 'bg-red-50 text-red-800 border-red-200',
          dot: 'bg-red-600',
          tag: 'RAYO INDUSTRIAL',
        };
      default:
        return {
          bg: 'bg-slate-50 text-slate-800 border-slate-200',
          dot: 'bg-slate-500',
          tag: 'A&D QUÍMICOS',
        };
    }
  };

  const brandStyle = getBrandHeaderBadge();

  return (
    <div 
      onClick={() => onOpenDetails(product)}
      className="group relative bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Top Meta Strip */}
      <div className="flex items-center justify-between px-4 pt-3.5 pb-2 border-b border-slate-100">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${brandStyle.bg}`}>
          <span className={`w-2 h-2 rounded-full ${brandStyle.dot}`} />
          {product.brandName}
        </span>
        <span className="text-[11px] font-mono text-slate-600 font-medium">
          Pág. {product.pageNumber < 10 ? `0${product.pageNumber}` : product.pageNumber} • {product.catalogCode}
        </span>
      </div>

      {/* Product Image / Illustration Hero Container */}
      <div className="relative bg-gradient-to-b from-slate-50/70 to-slate-100/50 py-4 px-4 flex items-center justify-center min-h-[220px] overflow-hidden">
        {/* Subtle background glow */}
        <div 
          className="absolute inset-0 opacity-10 blur-2xl transition-opacity group-hover:opacity-20"
          style={{ background: product.accentColor }}
        />

        {/* Badges Floating on Card */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {product.badges.map((b, idx) => (
            <span
              key={idx}
              className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md shadow-xs ${
                b.includes('99.99%') || b.includes('Nuevo') || b.includes('ELIMINA')
                  ? 'bg-red-600 text-white'
                  : b.includes('Concentración') || b.includes('Materia')
                  ? 'bg-amber-500 text-slate-900'
                  : 'bg-emerald-700 text-white'
              }`}
            >
              {b}
            </span>
          ))}
        </div>

        {/* Realistic packaging visualizer */}
        <ProductIllustration imageType={product.imageType} size="md" />

        {/* Quick view floating hint */}
        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-xs text-slate-600 text-[11px] px-2 py-1 rounded-lg border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          <Info className="w-3 h-3 text-emerald-600" />
          <span>Ver ficha</span>
        </div>
      </div>

      {/* Product Body Information */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Subtitle / Category Label */}
          <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide">
            {product.categoryLabel}
          </span>

          {/* Product Name */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors font-heading mt-0.5">
            {product.name}
          </h3>

          {/* Catalog Subtitle */}
          {product.subtitle && (
            <p className="text-xs text-slate-600 font-medium mt-0.5 mb-2.5">
              {product.subtitle}
            </p>
          )}

          {/* Bullet points (unmodified data from brochure) */}
          <ul className="space-y-1 mb-4 text-xs text-slate-600">
            {product.descriptionBullets.slice(0, 2).map((bullet, i) => (
              <li key={i} className="flex items-start gap-1.5 leading-tight">
                <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                <span className="line-clamp-2">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Presentations Selection Matrix */}
        <div className="pt-3 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between text-xs text-slate-600 mb-1.5">
            <span className="font-semibold flex items-center gap-1">
              <Package className="w-3.5 h-3.5 text-slate-600" />
              <span>Presentación:</span>
            </span>
            <span className="text-[11px] text-emerald-700 font-medium">
              {product.presentations.length} formato{product.presentations.length > 1 ? 's' : ''}
            </span>
          </div>

          {/* Presentation chips */}
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {product.presentations.slice(0, 4).map((p) => {
              const isSelected = selectedPresId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPresId(p.id)}
                  type="button"
                  className={`text-left p-1.5 rounded-lg border text-[11px] transition-all cursor-pointer ${
                    isSelected
                      ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold ring-1 ring-emerald-600'
                      : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="truncate font-semibold text-slate-900">{p.size}</div>
                  <div className="text-[10px] text-slate-600 truncate">{p.packing}</div>
                </button>
              );
            })}
          </div>

          {product.presentations.length > 4 && (
            <div className="text-[11px] text-slate-600 text-center mb-2 italic">
              + {product.presentations.length - 4} presentación(es) adicionales disponibles
            </div>
          )}

          {/* Action Row: Quantity + Add to Quote */}
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 text-xs">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-2 py-1.5 text-slate-600 hover:text-slate-900 font-bold hover:bg-slate-200 rounded-l-lg"
              >
                -
              </button>
              <span className="px-2 font-bold text-slate-800 min-w-6 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-2 py-1.5 text-slate-600 hover:text-slate-900 font-bold hover:bg-slate-200 rounded-r-lg"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleQuickAdd}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                justAdded
                  ? 'bg-emerald-700 text-white'
                  : 'bg-slate-900 hover:bg-emerald-700 text-white active:scale-95'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>¡Agregado!</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Cotizar {currentPresentation?.size || 'Formato'}</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
