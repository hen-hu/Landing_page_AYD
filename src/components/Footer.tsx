import React from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  Award, 
  ShieldCheck, 
  FileText, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, BRANDS } from '../data/catalogData';

interface FooterProps {
  onSelectBrand: (brandId: string) => void;
  onOpenCorporate: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectBrand,
  onOpenCorporate,
}) => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-12 pb-8 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Company presentation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-md">
                A&D
              </div>
              <div>
                <h3 className="font-black text-xl tracking-tight text-white font-heading">
                  QUÍMICOS Y DIVERSOS S.A.
                </h3>
                <p className="text-xs text-slate-400">
                  RUC y Registro Sanitario Oficial
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Fabricación, envasado y comercialización de productos de limpieza, desinfectantes, detergentes y químicos industriales. Calidad certificada internacionalmente.
            </p>

            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 inline-flex items-center gap-2.5 text-xs text-emerald-400">
              <Award className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{COMPANY_INFO.isoCertification}</span>
            </div>
          </div>

          {/* Brands Directory */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Marcas en el Catálogo
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {BRANDS.map((b) => (
                <li key={b.id}>
                  <button
                    onClick={() => onSelectBrand(b.id)}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                    <span>{b.name}</span>
                    <span className="text-[10px] text-slate-500">({b.slogan})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Channels */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Canales de Venta & Distribución
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a 
                href={`tel:${COMPANY_INFO.phoneInternational}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-[10px] text-slate-400">Central Telefónica:</div>
                  <div className="font-bold text-white">{COMPANY_INFO.phoneDisplay}</div>
                </div>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4 text-red-400" />
                <div>
                  <div className="text-[10px] text-slate-400">Correo Electrónico de Ventas:</div>
                  <div className="font-bold text-white">{COMPANY_INFO.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800/50">
                <Globe className="w-4 h-4 text-blue-400" />
                <div>
                  <div className="text-[10px] text-slate-400">Portal Web Corporativo:</div>
                  <div className="font-bold text-white">{COMPANY_INFO.website}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-slate-400">Catálogo N° {COMPANY_INFO.catalogCode}</span>
            <span>•</span>
            <span className="text-slate-300 font-semibold">{COMPANY_INFO.slogan}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
