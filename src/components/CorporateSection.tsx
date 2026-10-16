import React from 'react';
import { 
  Building2, 
  Award, 
  Sparkles, 
  FlaskConical, 
  Package, 
  Cpu, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2,
  ShieldCheck,
  Factory
} from 'lucide-react';
import { COMPANY_INFO, BUSINESS_UNITS, BRANDS } from '../data/catalogData';

export const CorporateSection: React.FC = () => {
  const getUnitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-blue-600" />;
      case 'Package': return <Package className="w-6 h-6 text-amber-600" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-purple-600" />;
      default: return <Building2 className="w-6 h-6 text-slate-600" />;
    }
  };

  return (
    <section id="corporate" className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Banner with ISO & Credentials */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-12 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>{COMPANY_INFO.isoCertification}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight">
                {COMPANY_INFO.name}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Líderes en formulación, envasado y distribución de soluciones químicas de desinfección y limpieza para el canal tradicional, mayorista e industrial.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Control de Calidad Riguroso</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Fórmulas Antibacteriales 99.99%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Distribución a Nivel Nacional</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-2xl mx-auto flex items-center justify-center font-black text-2xl text-white shadow-lg mb-3">
                A&D
              </div>
              <p className="font-heading font-black text-sm uppercase tracking-wider text-white">
                Comprometidos con la Calidad.
              </p>
              <p className="text-xs text-emerald-300 font-bold">
                Comprometidos contigo.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-300 space-y-1.5">
                <div>Teléfono Central: <span className="text-white font-bold">{COMPANY_INFO.phoneDisplay}</span></div>
                <div>Correo: <span className="text-white font-bold">{COMPANY_INFO.email}</span></div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Unidades de Negocio */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Estructura Corporativa
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-1">
              Nuestras Unidades de Negocio
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Soluciones integrales que abastecen a la industria peruana desde materias primas hasta producto terminado y tecnología.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_UNITS.map((unit, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-4">
                    {getUnitIcon(unit.icon)}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-heading mb-2">
                    {unit.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {unit.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Línea Activa A&D</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registered Brands Family */}
        <div className="p-8 bg-slate-100 rounded-3xl border border-slate-200 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Portafolio Oficial de Marcas
          </span>
          <h4 className="text-xl font-black text-slate-900 font-heading mt-1 mb-6">
            Marcas con la Garantía A&D Químicos y Diversos S.A.
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {BRANDS.map((brand) => (
              <div
                key={brand.id}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 shadow-xs"
                  style={{ backgroundColor: brand.color }}
                >
                  {brand.name.substring(0, 2)}
                </div>
                <span className="font-bold text-sm text-slate-900">{brand.name}</span>
                <span className="text-[11px] text-slate-400 truncate max-w-full mt-0.5">{brand.slogan}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
