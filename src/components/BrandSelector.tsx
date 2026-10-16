import React from 'react';
import { BRANDS } from '../data/catalogData';
import { Brand } from '../types';

interface BrandSelectorProps {
  selectedBrandId: string;
  onSelectBrand: (brandId: string) => void;
  productCountsByBrand: Record<string, number>;
}

export const BrandSelector: React.FC<BrandSelectorProps> = ({
  selectedBrandId,
  onSelectBrand,
  productCountsByBrand,
}) => {
  const allCount = Object.values(productCountsByBrand).reduce((a, b) => a + b, 0);

  return (
    <div className="w-full overflow-x-auto py-2 no-scrollbar">
      <div className="flex items-center gap-2 min-w-max px-1">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-600 mr-2 flex items-center gap-1">
          <span>Marcas:</span>
        </span>

        {/* All brands button */}
        <button
          onClick={() => onSelectBrand('todas')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
            selectedBrandId === 'todas'
              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
          }`}
        >
          <span>Todas las Marcas</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
            selectedBrandId === 'todas' ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-600'
          }`}>
            {allCount}
          </span>
        </button>

        {/* Specific brands */}
        {BRANDS.map((brand: Brand) => {
          const isSelected = selectedBrandId === brand.id;
          const count = productCountsByBrand[brand.id] || 0;

          // Brand color pill accents
          let activeStyles = 'bg-slate-900 text-white border-slate-900';
          if (brand.id === 'lesly') activeStyles = 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-500/20';
          if (brand.id === 'clorosur') activeStyles = 'bg-blue-700 text-white border-blue-700 shadow-blue-500/20';
          if (brand.id === 'margot') activeStyles = 'bg-green-700 text-white border-green-700 shadow-green-500/20';
          if (brand.id === 'mariana') activeStyles = 'bg-emerald-700 text-white border-emerald-700 shadow-emerald-500/20';
          if (brand.id === 'zambo') activeStyles = 'bg-amber-600 text-white border-amber-600 shadow-amber-500/20';
          if (brand.id === 'rayo') activeStyles = 'bg-red-700 text-white border-red-700 shadow-red-500/20';

          return (
            <button
              key={brand.id}
              onClick={() => onSelectBrand(brand.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                isSelected
                  ? `${activeStyles} shadow-sm scale-105`
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {/* Color dot */}
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs"
                style={{ backgroundColor: brand.color }}
              />
              <span>{brand.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isSelected ? 'bg-black/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
