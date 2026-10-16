import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  BookOpen, 
  ShoppingCart, 
  Plus, 
  Check, 
  Award, 
  Info,
  Phone,
  Mail,
  Globe,
  Building2,
  Sparkles,
  Layers
} from 'lucide-react';
import { CATALOG_PAGES_META, PRODUCTS, COMPANY_INFO, BRANDS, BUSINESS_UNITS } from '../data/catalogData';
import { Product, Presentation } from '../types';
import { ProductIllustration } from './ProductIllustration';

interface FlipbookViewProps {
  onOpenProductModal: (product: Product) => void;
  onAddToCart: (product: Product, presentation: Presentation, quantity: number) => void;
}

export const FlipbookView: React.FC<FlipbookViewProps> = ({
  onOpenProductModal,
  onAddToCart,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPage(p => Math.min(16, p + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPage(p => Math.max(1, p - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const pageMeta = CATALOG_PAGES_META.find(p => p.page === currentPage) || CATALOG_PAGES_META[0];
  const associatedProduct = PRODUCTS.find(p => p.pageNumber === currentPage);

  const handleQuickAdd = (presentation: Presentation) => {
    if (associatedProduct) {
      onAddToCart(associatedProduct, presentation, 1);
      setAddedItemNotice(presentation.id);
      setTimeout(() => setAddedItemNotice(null), 1500);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      
      {/* Top Controls Toolbar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 mb-6 flex flex-wrap items-center justify-between gap-4">
        
        {/* Page title and breadcrumb */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow">
            {currentPage}
          </div>
          <div>
            <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
              <span>Página {currentPage} de 16</span>
              <span>•</span>
              <span className="font-bold text-emerald-600 uppercase">{pageMeta.brand}</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              {pageMeta.title}
            </h2>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:pointer-events-none rounded-xl text-xs font-bold text-slate-800 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Página Anterior</span>
          </button>

          {/* Page jump dropdown */}
          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2 px-3 rounded-xl border border-slate-300 outline-none cursor-pointer"
          >
            {CATALOG_PAGES_META.map(pm => (
              <option key={pm.page} value={pm.page}>
                Pág. {pm.page}: {pm.title}
              </option>
            ))}
          </select>

          <button
            onClick={() => setCurrentPage(p => Math.min(16, p + 1))}
            disabled={currentPage === 16}
            className="flex items-center gap-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:pointer-events-none rounded-xl text-xs font-bold text-white transition-colors cursor-pointer"
          >
            <span className="hidden sm:inline">Siguiente Página</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Main Catalog Sheet Container */}
      <div className="relative bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden min-h-[640px] flex flex-col justify-between transition-all duration-300">
        
        {/* PAGE 1: PORTADA OFICIAL (Cover) */}
        {currentPage === 1 && (
          <div className="p-6 sm:p-10 flex flex-col justify-between min-h-[650px] bg-gradient-to-br from-emerald-800 via-teal-800 to-slate-900 text-white relative overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Header: ISO Certification & Catalog Code */}
            <div className="flex items-center justify-between z-10 border-b border-white/10 pb-4">
              <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-xs flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-300" />
                <span className="font-semibold">{COMPANY_INFO.isoCertification}</span>
              </div>
              <span className="font-mono text-xs text-white/70 bg-black/30 px-3 py-1 rounded-lg">
                Cód: {COMPANY_INFO.catalogCode}
              </span>
            </div>

            {/* Center: Hero Branding & Catalog Title */}
            <div className="my-8 text-center z-10 max-w-2xl mx-auto">
              
              {/* Official A&D Logo */}
              <div className="inline-flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-2xl shadow-xl mb-6">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-black text-xl">
                  A&D
                </div>
                <div className="text-left">
                  <div className="text-lg font-black tracking-tight font-heading leading-tight">
                    QUÍMICOS Y DIVERSOS S.A.
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase">
                    División Limpieza & Desinfección
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-heading drop-shadow-md">
                CATÁLOGO <br />
                <span className="text-emerald-300">DE PRODUCTOS</span>
              </h1>

              <p className="mt-4 text-slate-200 text-sm sm:text-base max-w-lg mx-auto font-medium">
                {COMPANY_INFO.slogan}
              </p>

              {/* Quick action: Explore pages */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setCurrentPage(2)}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all cursor-pointer flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Comenzar a Explorar Productos</span>
                </button>
              </div>

            </div>

            {/* Bottom: Official Brands Ribbon (from cover page) */}
            <div className="z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider mb-2.5 text-center">
                Marcas Oficiales Garantizadas en este Catálogo:
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                {['Lesly', 'Clorosur', 'Margot', 'Mariana', 'Zambo', 'Rayo', 'Blancura'].map((brandName) => (
                  <span
                    key={brandName}
                    className="bg-white/95 text-slate-900 px-3.5 py-1.5 rounded-xl font-black text-xs sm:text-sm shadow-sm flex items-center gap-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    {brandName}
                  </span>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* PAGES 2 to 15: PRODUCT PRESENTATION PAGES */}
        {currentPage >= 2 && currentPage <= 15 && associatedProduct && (
          <div className="p-6 sm:p-10 flex flex-col justify-between min-h-[640px]">
            
            {/* Page Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white">
                  {associatedProduct.brandName}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {associatedProduct.catalogCode} • Página {associatedProduct.pageNumber}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenProductModal(associatedProduct)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Ver Ficha Técnica Completa</span>
                </button>
              </div>
            </div>

            {/* Page Main Content: Two Columns mirroring Catalog Graphic Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6 items-center">
              
              {/* Left Column: Visual Product Showcase */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-3xl p-6 border border-slate-200 relative min-h-[360px]">
                
                {/* Badges */}
                <div className="w-full flex flex-wrap gap-1.5 mb-2 justify-start">
                  {associatedProduct.badges.map((b, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[11px] font-black uppercase rounded-md bg-red-600 text-white shadow-xs"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* Packaging SVG Artwork */}
                <ProductIllustration 
                  imageType={associatedProduct.imageType} 
                  size="hero" 
                />

                <span className="mt-3 text-xs font-semibold text-slate-500 text-center">
                  Diseño y colores originales oficiales A&D Químicos
                </span>
              </div>

              {/* Right Column: Titles, Bullets & Official Presentations Matrix */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    {associatedProduct.categoryLabel}
                  </span>
                  
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-1">
                    {associatedProduct.name}
                  </h2>

                  {associatedProduct.subtitle && (
                    <p className="text-sm font-semibold text-slate-600 mt-1 mb-4">
                      {associatedProduct.subtitle}
                    </p>
                  )}

                  {/* Unmodified Description Bullets */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Especificaciones del Producto:
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      {associatedProduct.descriptionBullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Presentations Table & Quick Add to Quote */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-emerald-600" />
                      <span>Presentaciones Disponibles (Agregar a Cotización):</span>
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {associatedProduct.presentations.map((pres) => {
                      const isAdded = addedItemNotice === pres.id;
                      return (
                        <div
                          key={pres.id}
                          className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 hover:bg-emerald-50/30 transition-all"
                        >
                          <div>
                            <div className="font-bold text-xs text-slate-900">{pres.size}</div>
                            <div className="text-[11px] text-slate-500">{pres.packing}</div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleQuickAdd(pres)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                              isAdded
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-900 hover:bg-emerald-600 text-white active:scale-95'
                            }`}
                            title="Agregar a la cotización"
                          >
                            {isAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Agregado</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" />
                                <span>Cotizar</span>
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>

            {/* Page Footer Guarantee */}
            <div className="border-t border-slate-200 pt-3 flex flex-wrap items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-slate-700 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                Con la garantía A&D Químicos y Diversos S.A.
              </span>
              <span>
                Página {associatedProduct.pageNumber} • Catálogo Oficial AYDCL001-21
              </span>
            </div>

          </div>
        )}

        {/* PAGE 16: CONTRAPORTADA (Back cover) */}
        {currentPage === 16 && (
          <div className="p-6 sm:p-10 flex flex-col justify-between min-h-[650px] bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center font-black text-lg text-white">
                  A&D
                </div>
                <div>
                  <h3 className="font-black text-lg text-white font-heading">
                    A&D QUÍMICOS Y DIVERSOS S.A.
                  </h3>
                  <p className="text-xs text-slate-300">
                    Contraportada Institucional • {COMPANY_INFO.isoCertification}
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Unidades de Negocio Section */}
            <div className="my-6">
              <h2 className="text-xl sm:text-2xl font-black text-white font-heading mb-4 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-emerald-400" />
                <span>UNIDADES DE NEGOCIO</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BUSINESS_UNITS.map((unit, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>{unit.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {unit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands Showcase */}
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 text-center">
                Línea de Marcas Registradas:
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {['Blancura A&D', 'Mariana', 'Clorosur', 'Lesly', 'Margot', 'Zambo', 'Rayo'].map((brand) => (
                  <span key={brand} className="text-xs font-bold bg-white text-slate-900 px-3 py-1 rounded-lg">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Contact Footer */}
            <div className="border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-300">
                <a 
                  href={`tel:${COMPANY_INFO.phoneInternational}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold">{COMPANY_INFO.phoneDisplay}</span>
                </a>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>{COMPANY_INFO.website}</span>
                </span>
              </div>

              <div className="text-right">
                <span className="font-black text-sm tracking-wider text-red-400 block font-heading">
                  COMPROMETIDOS CON LA CALIDAD CONTIGO.
                </span>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Interactive Thumbnails Ribbon at Bottom */}
      <div className="mt-6 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
        <div className="text-xs font-bold text-slate-600 mb-2 flex items-center justify-between px-2">
          <span>Hojas del Catálogo (16 Páginas Oficiales):</span>
          <span className="text-[11px] text-slate-600 font-mono">Usa las flechas ← → del teclado</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar px-1">
          {CATALOG_PAGES_META.map((pm) => {
            const isCurrent = pm.page === currentPage;
            return (
              <button
                key={pm.page}
                onClick={() => setCurrentPage(pm.page)}
                className={`flex-shrink-0 text-left p-2 rounded-xl border transition-all cursor-pointer w-28 ${
                  isCurrent
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500 shadow-sm'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold">Pág. {pm.page}</span>
                  <span className="text-[10px] text-slate-600 font-semibold uppercase">{pm.brand}</span>
                </div>
                <div className="text-[11px] truncate mt-0.5 font-medium">{pm.title}</div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
