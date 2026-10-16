import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Package, 
  Plus, 
  ShoppingCart, 
  Award, 
  Sparkles, 
  Layers, 
  ChevronRight,
  FileCheck2,
  Droplets
} from 'lucide-react';
import { Product, Presentation } from '../types';
import { ProductIllustration } from './ProductIllustration';
import { COMPANY_INFO } from '../data/catalogData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, presentation: Presentation, quantity: number, variety?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedPresId, setSelectedPresId] = useState<string>(product.presentations[0]?.id || '');
  const [selectedVariety, setSelectedVariety] = useState<string>(product.fragrances?.[0] || '');
  const [quantity, setQuantity] = useState<number>(1);
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  const selectedPresentation = product.presentations.find(p => p.id === selectedPresId) || product.presentations[0];

  const handleAdd = () => {
    if (selectedPresentation) {
      onAddToCart(product, selectedPresentation, quantity, selectedVariety || undefined);
      setAddedNotice(true);
      setTimeout(() => setAddedNotice(false), 1600);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in no-print">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-red-600 text-white font-black flex items-center justify-center text-xs">
              A&D
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {product.brandName}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs font-mono text-slate-400">
                  Cód: {product.catalogCode} (Pág. {product.pageNumber})
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white font-heading">
                Ficha Técnica Oficial del Producto
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left Column: Visual presentation & Badges */}
          <div className="md:col-span-5 flex flex-col">
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 flex flex-col items-center justify-center min-h-[300px]">
              
              {/* Product Badges */}
              <div className="w-full flex flex-wrap gap-1.5 justify-start mb-3">
                {product.badges.map((b, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-red-600 text-white shadow-xs uppercase tracking-wide"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* Realistic SVG Product Illustration */}
              <ProductIllustration 
                imageType={product.imageType} 
                size="hero" 
                variety={selectedVariety}
              />

              {product.highlightText && (
                <div className="mt-4 text-center px-4 py-2 bg-white/90 border border-slate-200 rounded-xl shadow-xs text-xs font-semibold text-slate-700">
                  ✨ {product.highlightText}
                </div>
              )}
            </div>

            {/* Quality Guarantee Seal */}
            <div className="mt-4 p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-3">
              <Award className="w-6 h-6 text-emerald-700 shrink-0" />
              <div className="text-xs text-emerald-900">
                <p className="font-bold">Garantía A&D Químicos y Diversos S.A.</p>
                <p className="text-[11px] text-emerald-700">Elaborado bajo estándares de calidad ISO 9001:2015.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Full Details, Bullet points, Presentations table */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              {/* Category */}
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                {product.categoryLabel}
              </span>

              {/* Title & Subtitle */}
              <h1 className="text-2xl font-black text-slate-900 font-heading mt-1">
                {product.name}
              </h1>

              {product.subtitle && (
                <p className="text-sm font-semibold text-slate-600 mt-1">
                  {product.subtitle}
                </p>
              )}

              {/* Unmodified Description Bullets */}
              <div className="mt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Características y Beneficios</span>
                </h3>
                <ul className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {product.descriptionBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <span className="text-emerald-600 font-bold mt-0.5 shrink-0">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fragrances / Varieties Selector (if available) */}
              {product.fragrances && product.fragrances.length > 0 && (
                <div className="mt-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-blue-500" />
                    <span>Variedad / Fragancia:</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.fragrances.map((frag, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedVariety(frag)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                          selectedVariety === frag
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {frag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Complete Presentations Matrix */}
              <div className="mt-4">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Seleccionar Presentación Comercial:</span>
                  </span>
                  <span className="text-[11px] text-slate-600 font-normal">
                    {product.presentations.length} opciones
                  </span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                  {product.presentations.map((p) => {
                    const isSelected = selectedPresId === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSelectedPresId(p.id)}
                        className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold ring-2 ring-emerald-500 shadow-sm'
                            : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">{p.size}</span>
                          {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                        </div>
                        <div className="text-xs text-slate-600 mt-0.5">{p.packing}</div>
                        {p.variety && (
                          <div className="text-[11px] text-emerald-700 mt-1 font-medium">{p.variety}</div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Actions: Quantity Selector & Add to Quote */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center border border-slate-300 rounded-xl bg-slate-50 p-1">
                <span className="text-xs text-slate-600 font-medium px-2">Cantidad:</span>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 flex items-center justify-center cursor-pointer"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-sm text-slate-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 flex items-center justify-center cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className={`flex-1 w-full sm:w-auto py-3 px-5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer ${
                  addedNotice
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white active:scale-95'
                }`}
              >
                {addedNotice ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>¡Agregado a la Cotización!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    <span>Agregar {quantity} × {selectedPresentation?.size} a Cotizar</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

        {/* Modal Footer Strip */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600">
          <span className="font-medium">
            Atención comercial: {COMPANY_INFO.phoneDisplay} • {COMPANY_INFO.email}
          </span>
          <span className="font-mono text-slate-600">
            {COMPANY_INFO.isoCertification}
          </span>
        </div>
      </div>
    </div>
  );
};
