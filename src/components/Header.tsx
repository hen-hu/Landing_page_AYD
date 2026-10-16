import React from 'react';
import { 
  Phone, 
  Mail, 
  Award, 
  Search, 
  BookOpen, 
  Grid3X3, 
  FileText, 
  ShoppingCart,
  MessageCircle,
  Building2,
  X
} from 'lucide-react';
import { COMPANY_INFO } from '../data/catalogData';

interface HeaderProps {
  viewMode: 'grid' | 'flipbook';
  setViewMode: (mode: 'grid' | 'flipbook') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenCorporate: () => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  setViewMode,
  searchQuery,
  setSearchQuery,
  cartCount,
  onOpenCart,
  onOpenCorporate,
  onPrint,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm no-print">
      {/* Top Corporate Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>ISO 9001:2015 Bureau Veritas Certification</span>
            </span>
            <span className="hidden md:inline-block text-slate-500">•</span>
            <span className="hidden md:inline-block text-slate-400 font-mono">
              Cód. Catálogo: {COMPANY_INFO.catalogCode}
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href={`tel:${COMPANY_INFO.phoneInternational}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Llamar a ventas"
            >
              <Phone className="w-3 h-3 text-red-400" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-red-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="text-slate-600">|</span>
            <button 
              onClick={onOpenCorporate}
              className="flex items-center gap-1 hover:text-white text-emerald-400 font-medium transition-colors cursor-pointer"
            >
              <Building2 className="w-3 h-3" />
              <span>Unidades de Negocio</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Logo & Slogan */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Brand Red Flask Symbol */}
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white shadow-md shadow-red-500/20 font-black text-xl tracking-tight border border-red-500">
                A&D
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-heading">
                    QUÍMICOS Y DIVERSOS <span className="text-red-600 text-sm sm:text-base font-bold">S.A.</span>
                  </h1>
                </div>
                <p className="text-xs text-slate-600 font-medium hidden sm:block">
                  {COMPANY_INFO.slogan}
                </p>
              </div>
            </div>

            {/* Mobile Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="md:hidden relative p-2.5 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-colors"
              aria-label="Abrir cotizador"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md mx-auto md:mx-0 w-full relative">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar lejía, detergente, lavavajilla, limpiatodo, ácido..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 bg-slate-100 hover:bg-slate-50 focus:bg-white text-slate-800 placeholder-slate-400 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all text-sm outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Controls: View Switcher & Cart */}
          <div className="flex items-center gap-2 justify-end">
            
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Ver cuadrícula interactiva con filtros"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                <span>Explorador</span>
              </button>
              <button
                onClick={() => setViewMode('flipbook')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'flipbook'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Ver catálogo folleto página por página"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Modo Catálogo (16 págs)</span>
              </button>
            </div>

            {/* Print / Save button */}
            <button
              onClick={onPrint}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors border border-slate-200"
              title="Imprimir o Guardar Catálogo en PDF"
            >
              <FileText className="w-3.5 h-3.5 text-slate-600" />
              <span>Imprimir / PDF</span>
            </button>

            {/* Cart / Quotation Builder Button */}
            <button
              onClick={onOpenCart}
              className="relative hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white rounded-xl shadow-sm hover:shadow transition-all font-semibold text-xs active:scale-95"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Cotizador Virtual</span>
              {cartCount > 0 && (
                <span className="bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
