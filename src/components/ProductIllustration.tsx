import React from 'react';

interface ProductIllustrationProps {
  imageType: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  variety?: string;
}

export const ProductIllustration: React.FC<ProductIllustrationProps> = ({
  imageType,
  size = 'md',
  className = '',
  variety,
}) => {
  const sizeClasses = {
    sm: 'h-28 w-auto',
    md: 'h-48 w-auto',
    lg: 'h-64 w-auto',
    hero: 'h-80 w-auto',
  }[size];

  // Render SVG based on exact product bottle & branding design from the catalog
  switch (imageType) {
    case 'bottle-white-green-cap': // Lesly Lejía Concentrada (Page 2)
      return (
        <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
          <svg viewBox="0 0 200 320" className={`${sizeClasses} drop-shadow-xl transition-transform duration-300 hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="leslyWhiteBottle" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="25%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#f1f5f9" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
              <linearGradient id="leslyGreenCap" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#15803d" />
                <stop offset="50%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#166534" />
              </linearGradient>
              <linearGradient id="leslyLabel" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="45%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
            </defs>
            {/* Cap */}
            <rect x="84" y="24" width="32" height="24" rx="3" fill="url(#leslyGreenCap)" />
            <line x1="84" y1="32" x2="116" y2="32" stroke="#166534" strokeWidth="1.5" />
            <line x1="84" y1="40" x2="116" y2="40" stroke="#166534" strokeWidth="1.5" />
            {/* Neck */}
            <path d="M88 48H112V80C112 90 120 102 144 116C156 123 162 135 162 152V280C162 295 152 304 136 304H64C48 304 38 295 38 280V152C38 135 44 123 56 116C80 102 88 90 88 80V48Z" fill="url(#leslyWhiteBottle)" stroke="#cbd5e1" strokeWidth="2" />
            {/* Label Base */}
            <rect x="42" y="156" width="116" height="110" rx="4" fill="url(#leslyLabel)" />
            {/* Label details */}
            <rect x="46" y="160" width="108" height="16" fill="#f97316" rx="2" />
            <text x="100" y="172" fill="#ffffff" fontSize="8" fontWeight="800" textAnchor="middle" letterSpacing="0.5">LEJÍA CONCENTRADA</text>
            <text x="100" y="196" fill="#ffffff" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">LEJÍA</text>
            <text x="100" y="210" fill="#fef08a" fontSize="8" fontWeight="bold" textAnchor="middle">Cloro ~ Lavandina</text>
            {/* Lesly Script Logo */}
            <text x="96" y="238" fill="#ffffff" fontSize="24" fontWeight="900" fontStyle="italic" textAnchor="middle" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.4))">Lesly</text>
            {/* Badge 99.99% */}
            <circle cx="136" cy="190" r="14" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5" />
            <text x="136" y="188" fill="#ffffff" fontSize="5" fontWeight="bold" textAnchor="middle">ELIMINA</text>
            <text x="136" y="195" fill="#fef08a" fontSize="7" fontWeight="900" textAnchor="middle">99.9%</text>
            {/* Mascot badge on bottom right */}
            <circle cx="134" cy="246" r="14" fill="#15803d" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="134" cy="242" r="7" fill="#fed7aa" />
            <path d="M127 240C127 236 130 234 134 234C138 234 141 236 141 240C141 243 140 245 140 245H128C128 245 127 243 127 240Z" fill="#1e293b" />
            <path d="M128 250H140L137 259H131L128 250Z" fill="#22c55e" />
          </svg>
        </div>
      );

    case 'bag-green-powder': // Lesly Detergente Antibacterial (Page 3)
      return (
        <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
          <svg viewBox="0 0 220 300" className={`${sizeClasses} drop-shadow-xl transition-transform duration-300 hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="detergentBag" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="40%" stopColor="#15803d" />
                <stop offset="100%" stopColor="#14532d" />
              </linearGradient>
            </defs>
            {/* Bag Shape with crimped edges */}
            <path d="M35 25L40 15L45 25L50 15L55 25L60 15L65 25L70 15L75 25L80 15L85 25L90 15L95 25L100 15L105 25L110 15L115 25L120 15L125 25L130 15L135 25L140 15L145 25L150 15L155 25L160 15L165 25L170 15L175 25L180 15L185 25V275L180 285L175 275L170 285L165 275L160 285L155 275L150 285L145 275L140 285L135 275L130 285L125 275L120 285L115 275L110 285L105 275L100 285L95 275L90 285L85 275L80 285L75 275L70 285L65 275L60 285L55 275L50 285L45 275L40 285L35 275V25Z" fill="url(#detergentBag)" stroke="#166534" strokeWidth="2" />
            {/* Mascot on top */}
            <circle cx="110" cy="80" r="18" fill="#f8fafc" stroke="#22c55e" strokeWidth="2" />
            <circle cx="110" cy="76" r="9" fill="#fed7aa" />
            <path d="M102 72C102 66 106 64 110 64C114 64 118 66 118 72C118 76 117 78 117 78H103C103 78 102 76 102 72Z" fill="#0f172a" />
            <path d="M104 86H116L113 97H107L104 86Z" fill="#15803d" />
            {/* Detergente title */}
            <rect x="74" y="104" width="72" height="14" rx="7" fill="#ffffff" />
            <text x="110" y="114" fill="#047857" fontSize="8" fontWeight="900" textAnchor="middle">DETERGENTE</text>
            {/* Brand Logo Lesly script */}
            <text x="110" y="152" fill="#ffffff" stroke="#b91c1c" strokeWidth="2" fontSize="38" fontWeight="900" fontStyle="italic" textAnchor="middle">Lesly</text>
            {/* Antibacterial banner */}
            <rect x="52" y="162" width="116" height="20" rx="4" fill="#1e3a8a" />
            <text x="110" y="176" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle" letterSpacing="0.8">Antibacterial</text>
            {/* Lemon Icon */}
            <circle cx="110" cy="208" r="18" fill="#84cc16" stroke="#ffffff" strokeWidth="2" />
            <circle cx="110" cy="208" r="14" fill="#bef264" />
            <path d="M110 196V220M98 208H122M102 200L118 216M102 216L118 200" stroke="#65a30d" strokeWidth="1.5" />
            <text x="110" y="196" fill="#fef08a" fontSize="7" fontWeight="bold" textAnchor="middle">AROMA A LIMÓN</text>
            {/* Badges footer */}
            <text x="75" y="244" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">Máxima</text>
            <text x="75" y="252" fill="#93c5fd" fontSize="6" textAnchor="middle">protección tejidos</text>
            <rect x="88" y="258" width="44" height="14" rx="2" fill="#ea580c" />
            <text x="110" y="267" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">15% Activo</text>
            <text x="145" y="244" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">Máxima</text>
            <text x="145" y="252" fill="#93c5fd" fontSize="6" textAnchor="middle">limpieza 99.99%</text>
          </svg>
        </div>
      );

    case 'tub-cream': // Lesly Lavavajilla Crema (Page 4)
      return (
        <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
          <svg viewBox="0 0 240 220" className={`${sizeClasses} drop-shadow-xl transition-transform duration-300 hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="spongeGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#15803d" />
                <stop offset="50%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#166534" />
              </linearGradient>
              <linearGradient id="tubBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9333ea" />
                <stop offset="30%" stopColor="#a855f7" />
                <stop offset="70%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#7e22ce" />
              </linearGradient>
            </defs>
            {/* Green Dish Sponge on top */}
            <rect x="55" y="32" width="130" height="26" rx="4" fill="url(#spongeGreen)" stroke="#14532d" strokeWidth="2" />
            {/* Sponge pores texture */}
            <circle cx="75" cy="42" r="2" fill="#14532d" opacity="0.6" />
            <circle cx="105" cy="40" r="3" fill="#14532d" opacity="0.6" />
            <circle cx="135" cy="44" r="2" fill="#14532d" opacity="0.6" />
            <circle cx="165" cy="42" r="2.5" fill="#14532d" opacity="0.6" />
            {/* Tub Lid Lip */}
            <rect x="45" y="58" width="150" height="14" rx="4" fill="#6b21a8" />
            {/* Tub Container */}
            <path d="M50 72H190L178 178C176 186 168 192 160 192H80C72 192 64 186 62 178L50 72Z" fill="url(#tubBody)" stroke="#581c87" strokeWidth="2" />
            {/* Label inside Tub */}
            <path d="M56 82H184L175 168C174 172 170 176 164 176H76C70 176 66 172 65 168L56 82Z" fill="#faf5ff" />
            <rect x="62" y="86" width="116" height="16" fill="#7e22ce" rx="2" />
            <text x="120" y="97" fill="#ffffff" fontSize="7" fontWeight="900" textAnchor="middle">LAVAVAJILLA ANTIBACTERIAL</text>
            <text x="80" y="114" fill="#ea580c" fontSize="8" fontWeight="bold">✓ Abrillantador</text>
            <text x="80" y="124" fill="#ea580c" fontSize="8" fontWeight="bold">✓ Olvídate de la grasa</text>
            {/* Brand Logo Lesly script in orange/red */}
            <text x="120" y="152" fill="#ea580c" fontSize="28" fontWeight="900" fontStyle="italic" textAnchor="middle" stroke="#ffffff" strokeWidth="1">Lesly</text>
            {/* Badge 1000g */}
            <rect x="64" y="154" width="34" height="14" rx="3" fill="#16a34a" />
            <text x="81" y="164" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">1000 g.</text>
            {/* Mascot in circle */}
            <circle cx="162" cy="120" r="15" fill="#fef08a" stroke="#ea580c" strokeWidth="1.5" />
            <circle cx="162" cy="117" r="7" fill="#fed7aa" />
            <path d="M156 114C156 109 159 107 162 107C165 107 168 109 168 114H156Z" fill="#0f172a" />
            <path d="M157 124H167L164 132H160L157 124Z" fill="#15803d" />
            {/* Badge Elimina 99.99% */}
            <circle cx="36" cy="48" r="22" fill="#15803d" stroke="#ffffff" strokeWidth="2" />
            <text x="36" y="42" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">ELIMINA</text>
            <text x="36" y="52" fill="#fef08a" fontSize="8" fontWeight="900" textAnchor="middle">99.99%</text>
            <text x="36" y="59" fill="#ffffff" fontSize="5" fontWeight="bold" textAnchor="middle">BACTERIAS</text>
          </svg>
        </div>
      );

    case 'bottle-dish-liquid': // Lesly Lavavajilla Líquida (Page 5)
      return (
        <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
          <svg viewBox="0 0 200 320" className={`${sizeClasses} drop-shadow-xl transition-transform duration-300 hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="emeraldLiquid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="40%" stopColor="#10b981" />
                <stop offset="70%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
            {/* Dish Sponge next to bottle */}
            <rect x="22" y="160" width="28" height="90" rx="3" fill="#047857" stroke="#064e3b" strokeWidth="1.5" />
            <rect x="28" y="160" width="16" height="90" fill="#facc15" opacity="0.9" />
            {/* White Dispenser Cap */}
            <rect x="94" y="20" width="12" height="14" rx="2" fill="#ffffff" stroke="#94a3b8" />
            <rect x="88" y="34" width="24" height="14" rx="2" fill="#ffffff" stroke="#94a3b8" />
            {/* Bottle Grooved Neck & Body with Translucent Emerald Green */}
            <path d="M92 48H108V72C108 85 124 95 132 110C136 118 134 130 128 140C122 150 124 165 136 180C144 190 148 205 148 220V276C148 290 138 300 124 300H76C62 300 52 290 52 276V220C52 205 56 190 64 180C76 165 78 150 72 140C66 130 64 118 68 110C76 95 92 85 92 72V48Z" fill="url(#emeraldLiquid)" stroke="#065f46" strokeWidth="2" />
            {/* Label */}
            <rect x="62" y="180" width="76" height="90" rx="4" fill="#ffffff" />
            <text x="100" y="194" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">CONTIENE GLICERINA</text>
            <text x="100" y="203" fill="#ea580c" fontSize="6" fontWeight="bold" textAnchor="middle">PODER DESENGRASANTE</text>
            <text x="100" y="222" fill="#ea580c" fontSize="18" fontWeight="900" fontStyle="italic" textAnchor="middle">Lesly</text>
            <text x="100" y="232" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">Lavavajilla Líquida</text>
            {/* Lemon graphics */}
            <circle cx="94" cy="248" r="8" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            <circle cx="106" cy="252" r="7" fill="#84cc16" stroke="#4d7c0f" strokeWidth="1" />
            <text x="100" y="266" fill="#15803d" fontSize="6" fontWeight="bold" textAnchor="middle">Limón • 950 ml</text>
          </svg>
        </div>
      );

    case 'bottle-cleaner-multi': // Lesly Limpiatodo Desinfectante (Page 6)
      return (
        <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
          <svg viewBox="0 0 240 280" className={`${sizeClasses} drop-shadow-xl transition-transform duration-300 hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="pinkLiquid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f43f5e" /><stop offset="50%" stopColor="#fb7185" /><stop offset="100%" stopColor="#e11d48" />
              </linearGradient>
              <linearGradient id="redLiquid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" /><stop offset="50%" stopColor="#ef4444" /><stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>
              <linearGradient id="yellowLiquid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#eab308" /><stop offset="50%" stopColor="#facc15" /><stop offset="100%" stopColor="#ca8a04" />
              </linearGradient>
              <linearGradient id="purpleLiquid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7c3aed" /><stop offset="50%" stopColor="#a855f7" /><stop offset="100%" stopColor="#6d28d9" />
              </linearGradient>
            </defs>
            {/* 4 bottles side by side representing Bebé, Floral, Limón, Lavanda */}
            {/* Bottle 1: Bebé (Pink) */}
            <g transform="translate(10, 30)">
              <rect x="18" y="10" width="14" height="12" rx="2" fill="#dc2626" />
              <path d="M21 22H29V40C29 48 38 56 38 68V210C38 218 32 222 25 222C18 222 12 218 12 210V68C12 56 21 48 21 40V22Z" fill="url(#pinkLiquid)" stroke="#be123c" strokeWidth="1" />
              <rect x="14" y="90" width="22" height="45" fill="#ffffff" rx="2" />
              <text x="25" y="102" fill="#e11d48" fontSize="4.5" fontWeight="bold" textAnchor="middle">Limpia</text>
              <text x="25" y="108" fill="#e11d48" fontSize="4.5" fontWeight="bold" textAnchor="middle">todo</text>
              <text x="25" y="118" fill="#ea580c" fontSize="6" fontWeight="bold" fontStyle="italic" textAnchor="middle">Lesly</text>
              <text x="25" y="128" fill="#be123c" fontSize="4" textAnchor="middle">Bebé</text>
            </g>
            {/* Bottle 2: Floral (Red) */}
            <g transform="translate(62, 20)">
              <rect x="18" y="10" width="14" height="12" rx="2" fill="#dc2626" />
              <path d="M21 22H29V40C29 48 40 56 40 68V220C40 228 33 232 25 232C17 232 10 228 10 220V68C10 56 21 48 21 40V22Z" fill="url(#redLiquid)" stroke="#991b1b" strokeWidth="1" />
              <rect x="13" y="100" width="24" height="48" fill="#ffffff" rx="2" />
              <text x="25" y="112" fill="#b91c1c" fontSize="5" fontWeight="bold" textAnchor="middle">Limpia</text>
              <text x="25" y="118" fill="#b91c1c" fontSize="5" fontWeight="bold" textAnchor="middle">todo</text>
              <text x="25" y="128" fill="#ea580c" fontSize="7" fontWeight="bold" fontStyle="italic" textAnchor="middle">Lesly</text>
              <text x="25" y="139" fill="#991b1b" fontSize="4.5" textAnchor="middle">Floral</text>
            </g>
            {/* Bottle 3: Limón (Yellow) */}
            <g transform="translate(116, 20)">
              <rect x="18" y="10" width="14" height="12" rx="2" fill="#dc2626" />
              <path d="M21 22H29V40C29 48 40 56 40 68V220C40 228 33 232 25 232C17 232 10 228 10 220V68C10 56 21 48 21 40V22Z" fill="url(#yellowLiquid)" stroke="#a16207" strokeWidth="1" />
              <rect x="13" y="100" width="24" height="48" fill="#ffffff" rx="2" />
              <text x="25" y="112" fill="#a16207" fontSize="5" fontWeight="bold" textAnchor="middle">Limpia</text>
              <text x="25" y="118" fill="#a16207" fontSize="5" fontWeight="bold" textAnchor="middle">todo</text>
              <text x="25" y="128" fill="#ea580c" fontSize="7" fontWeight="bold" fontStyle="italic" textAnchor="middle">Lesly</text>
              <text x="25" y="139" fill="#a16207" fontSize="4.5" textAnchor="middle">Limón</text>
            </g>
            {/* Bottle 4: Lavanda (Purple) */}
            <g transform="translate(170, 30)">
              <rect x="18" y="10" width="14" height="12" rx="2" fill="#dc2626" />
              <path d="M21 22H29V40C29 48 38 56 38 68V210C38 218 32 222 25 222C18 222 12 218 12 210V68C12 56 21 48 21 40V22Z" fill="url(#purpleLiquid)" stroke="#581c87" strokeWidth="1" />
              <rect x="14" y="90" width="22" height="45" fill="#ffffff" rx="2" />
              <text x="25" y="102" fill="#6b21a8" fontSize="4.5" fontWeight="bold" textAnchor="middle">Limpia</text>
              <text x="25" y="108" fill="#6b21a8" fontSize="4.5" fontWeight="bold" textAnchor="middle">todo</text>
              <text x="25" y="118" fill="#ea580c" fontSize="6" fontWeight="bold" fontStyle="italic" textAnchor="middle">Lesly</text>
              <text x="25" y="128" fill="#6b21a8" fontSize="4" textAnchor="middle">Lavanda</text>
            </g>
          </svg>
        </div>
      );

    case 'bottle-softener-detergent': // Lesly Detergente & Suavizante (Page 7)
      return (
        <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
          <svg viewBox="0 0 240 260" className={`${sizeClasses} drop-shadow-xl transition-transform duration-300 hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Detergente Líquido Bottle (Blue) */}
            <g transform="translate(10, 20)">
              <rect x="26" y="8" width="16" height="18" rx="2" fill="#1d4ed8" />
              <path d="M20 26H48V50C48 58 64 70 64 90V200C64 214 52 224 38 224H28C14 224 2 214 2 200V90C2 70 18 58 18 50V26H20Z" fill="#1e40af" stroke="#172554" strokeWidth="1.5" />
              {/* Handle */}
              <path d="M48 60H56C62 60 66 65 66 72V120C66 128 60 134 52 134H48" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
              <rect x="12" y="96" width="42" height="70" fill="#ffffff" rx="3" />
              <text x="33" y="110" fill="#1e40af" fontSize="5" fontWeight="900" textAnchor="middle">DETERGENTE</text>
              <text x="33" y="116" fill="#1e40af" fontSize="5" fontWeight="bold" textAnchor="middle">LÍQUIDO</text>
              <text x="33" y="132" fill="#ea580c" fontSize="11" fontWeight="bold" fontStyle="italic" textAnchor="middle">Lesly</text>
              <text x="33" y="145" fill="#15803d" fontSize="5" fontWeight="bold" textAnchor="middle">Colores Vivos</text>
            </g>
            {/* Suavizante Bebé Bottle (Pink) */}
            <g transform="translate(85, 10)">
              <rect x="28" y="8" width="16" height="18" rx="2" fill="#f43f5e" />
              <path d="M22 26H50V50C50 58 66 70 66 90V210C66 224 54 234 40 234H30C16 234 4 224 4 210V90C4 70 20 58 20 50V26H22Z" fill="#fbcfe8" stroke="#f43f5e" strokeWidth="1.5" />
              <rect x="14" y="96" width="42" height="70" fill="#ffffff" rx="3" />
              <text x="35" y="112" fill="#db2777" fontSize="7" fontWeight="bold" textAnchor="middle">Suavizante</text>
              <text x="35" y="128" fill="#ea580c" fontSize="11" fontWeight="bold" fontStyle="italic" textAnchor="middle">Lesly</text>
              <text x="35" y="142" fill="#ec4899" fontSize="6" fontWeight="bold" textAnchor="middle">Bebé • 950ml</text>
            </g>
            {/* Suavizante Floral Bottle (Blue-Sky) */}
            <g transform="translate(160, 20)">
              <rect x="26" y="8" width="16" height="18" rx="2" fill="#0284c7" />
              <path d="M20 26H48V50C48 58 64 70 64 90V200C64 214 52 224 38 224H28C14 224 2 214 2 200V90C2 70 18 58 18 50V26H20Z" fill="#0369a1" stroke="#082f49" strokeWidth="1.5" />
              <rect x="12" y="96" width="42" height="70" fill="#ffffff" rx="3" />
              <text x="33" y="112" fill="#0369a1" fontSize="7" fontWeight="bold" textAnchor="middle">Suavizante</text>
              <text x="33" y="128" fill="#ea580c" fontSize="11" fontWeight="bold" fontStyle="italic" textAnchor="middle">Lesly</text>
              <text x="33" y="142" fill="#0284c7" fontSize="6" fontWeight="bold" textAnchor="middle">Floral • 950ml</text>
            </g>
          </svg>
        </div>
      );

    case 'bottle-stain-remover': // Lesly Quitamanchas Color (Page 8)
      return (
        <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
          <svg viewBox="0 0 200 300" className={`${sizeClasses} drop-shadow-xl transition-transform duration-300 hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="purplePlastic" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4c1d95" />
                <stop offset="35%" stopColor="#6d28d9" />
                <stop offset="70%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4c1d95" />
              </linearGradient>
            </defs>
            {/* Red Cap */}
            <rect x="88" y="24" width="24" height="20" rx="3" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
            {/* Purple Bottle */}
            <path d="M92 44H108V72C108 84 128 98 138 116C144 128 144 142 144 156V260C144 274 134 284 120 284H80C66 284 56 274 56 260V156C56 142 56 128 62 116C72 98 92 84 92 72V44Z" fill="url(#purplePlastic)" stroke="#2e1065" strokeWidth="2" />
            {/* Label */}
            <rect x="62" y="140" width="76" height="85" rx="3" fill="#ffffff" />
            <rect x="66" y="144" width="68" height="14" rx="2" fill="#7c3aed" />
            <text x="100" y="154" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">QUITAMANCHAS</text>
            <text x="100" y="174" fill="#ea580c" fontSize="20" fontWeight="900" fontStyle="italic" textAnchor="middle">Lesly</text>
            <text x="100" y="190" fill="#dc2626" fontSize="8" fontWeight="bold" textAnchor="middle">ROPA COLOR</text>
            <text x="100" y="202" fill="#581c87" fontSize="6" fontWeight="bold" textAnchor="middle">Desinfectante</text>
            {/* Sachet next to it */}
            <rect x="18" y="200" width="34" height="60" rx="4" fill="#6d28d9" stroke="#dc2626" strokeWidth="1.5" />
            <text x="35" y="234" fill="#ffffff" fontSize="5" fontWeight="bold" textAnchor="middle">135 ml.</text>
          </svg>
        </div>
      );

    case 'pack-cloth': // Lesly Paño Absorbente (Page 9)
      return (
        <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
          <svg viewBox="0 0 220 260" className={`${sizeClasses} drop-shadow-xl transition-transform duration-300 hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Package Body */}
            <rect x="30" y="30" width="160" height="200" rx="8" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" />
            {/* Cloth fold layers behind clear window */}
            <rect x="42" y="42" width="136" height="176" rx="4" fill="#facc15" />
            <line x1="42" y1="80" x2="178" y2="80" stroke="#eab308" strokeWidth="2" />
            <line x1="42" y1="120" x2="178" y2="120" stroke="#eab308" strokeWidth="2" />
            {/* Green Header */}
            <path d="M42 42H178V95H42V42Z" fill="#047857" />
            <text x="110" y="65" fill="#ffffff" fontSize="14" fontWeight="900" textAnchor="middle">PAÑO</text>
            <text x="110" y="85" fill="#fef08a" fontSize="16" fontWeight="900" textAnchor="middle">ABSORBENTE</text>
            {/* Mascot circular badge */}
            <circle cx="150" cy="140" r="18" fill="#ffffff" stroke="#047857" strokeWidth="2" />
            <circle cx="150" cy="136" r="8" fill="#fed7aa" />
            <path d="M144 132C144 128 147 126 150 126C153 126 156 128 156 132H144Z" fill="#0f172a" />
            <path d="M144 144H156L153 154H147L144 144Z" fill="#15803d" />
            {/* Pack 20 badge */}
            <circle cx="68" cy="140" r="20" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
            <text x="68" y="138" fill="#ffffff" fontSize="16" fontWeight="900" textAnchor="middle">20</text>
            <text x="68" y="148" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">unidades</text>
            {/* Slogan */}
            <rect x="46" y="184" width="128" height="24" rx="3" fill="#ffffff" />
            <text x="110" y="196" fill="#065f46" fontSize="7" fontWeight="bold" textAnchor="middle">Alta durabilidad y máxima resistencia</text>
            <text x="110" y="204" fill="#047857" fontSize="6" textAnchor="middle">No deja pelusa • Súper absorbente</text>
          </svg>
        </div>
      );

    case 'bottle-blue-clorosur': // Clorosur Lejía (Page 10)
      return (
        <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
          <svg viewBox="0 0 220 310" className={`${sizeClasses} drop-shadow-xl transition-transform duration-300 hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="clorosurBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="35%" stopColor="#2563eb" />
                <stop offset="70%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            {/* Red Cap */}
            <rect x="74" y="22" width="28" height="22" rx="3" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
            {/* Blue Fluted Bottle */}
            <path d="M78 44H98V75C98 88 116 102 126 120C132 132 132 146 132 160V265C132 278 124 288 110 288H66C52 288 44 278 44 265V160C44 146 44 132 50 120C60 102 78 88 78 75V44Z" fill="url(#clorosurBlue)" stroke="#172554" strokeWidth="2" />
            {/* Clorosur Label */}
            <rect x="48" y="152" width="80" height="70" rx="3" fill="#f8fafc" />
            <text x="88" y="165" fill="#dc2626" fontSize="7" fontWeight="900" textAnchor="middle">LEJÍA</text>
            <text x="88" y="186" fill="#dc2626" stroke="#ffffff" strokeWidth="1" fontSize="16" fontWeight="900" textAnchor="middle">Clorosur</text>
            <text x="88" y="200" fill="#1e3a8a" fontSize="6.5" fontWeight="bold" textAnchor="middle">DESINFECCIÓN TOTAL</text>
            <rect x="58" y="205" width="60" height="11" rx="2" fill="#eab308" />
            <text x="88" y="213" fill="#1e3a8a" fontSize="6" fontWeight="900" textAnchor="middle">1000 g.</text>
            {/* 20kg Industrial Bidon on right */}
            <rect x="142" y="160" width="62" height="115" rx="6" fill="#0d9488" stroke="#115e59" strokeWidth="2" />
            <rect x="162" y="148" width="22" height="12" rx="2" fill="#0f766e" />
            <rect x="146" y="195" width="54" height="46" rx="2" fill="#ffffff" />
            <text x="173" y="208" fill="#115e59" fontSize="5" fontWeight="900" textAnchor="middle">LEJÍA CONCENTRADA</text>
            <text x="173" y="222" fill="#dc2626" fontSize="9" fontWeight="900" textAnchor="middle">Clorosur</text>
            {/* 7.5% badge */}
            <circle cx="188" cy="180" r="14" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5" />
            <text x="188" y="179" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">7.5%</text>
            <text x="188" y="185" fill="#ffffff" fontSize="4" textAnchor="middle">CONCENTRACIÓN</text>
          </svg>
        </div>
      );

    case 'bottle-green-margot': // Margot Lejía (Page 11)
      return (
        <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
          <svg viewBox="0 0 200 300" className={`${sizeClasses} drop-shadow-xl transition-transform duration-300 hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="margotGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#15803d" />
                <stop offset="35%" stopColor="#16a34a" />
                <stop offset="70%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#14532d" />
              </linearGradient>
            </defs>
            {/* Red Cap */}
            <rect x="88" y="24" width="24" height="20" rx="3" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
            {/* Emerald Bottle */}
            <path d="M92 44H108V75C108 86 126 100 136 118C142 130 142 144 142 158V260C142 274 132 284 118 284H82C68 284 58 274 58 260V158C58 144 58 130 64 118C74 100 92 86 92 75V44Z" fill="url(#margotGreen)" stroke="#14532d" strokeWidth="2" />
            {/* Red & Yellow label */}
            <rect x="64" y="150" width="72" height="75" rx="3" fill="#f8fafc" />
            <rect x="68" y="154" width="64" height="12" rx="2" fill="#dc2626" />
            <text x="100" y="163" fill="#ffffff" fontSize="6.5" fontWeight="900" textAnchor="middle">LEJÍA CONCENTRADA</text>
            <text x="100" y="188" fill="#dc2626" fontSize="20" fontWeight="900" fontStyle="italic" textAnchor="middle">Margot</text>
            <rect x="74" y="196" width="52" height="12" rx="2" fill="#15803d" />
            <text x="100" y="205" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">BLANQUEA Y DESINFECTA</text>
            {/* Badge 6.5% Hipoclorito */}
            <circle cx="44" cy="90" r="22" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
            <text x="44" y="84" fill="#ffffff" fontSize="7" fontWeight="900" textAnchor="middle">6.5%</text>
            <text x="44" y="91" fill="#fef08a" fontSize="5" fontWeight="bold" textAnchor="middle">CONCENTRACIÓN</text>
            <text x="44" y="98" fill="#ffffff" fontSize="4.5" textAnchor="middle">Hipoclorito de Sodio</text>
            {/* Cojín Sachet */}
            <rect x="20" y="220" width="36" height="50" rx="3" fill="#15803d" stroke="#ca8a04" strokeWidth="1.5" />
            <rect x="22" y="238" width="32" height="14" fill="#facc15" />
            <text x="38" y="248" fill="#dc2626" fontSize="5" fontWeight="bold" textAnchor="middle">Margot</text>
          </svg>
        </div>
      );

    case 'bottle-green-mariana': // Mariana Lejía (Page 12)
      return (
        <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
          <svg viewBox="0 0 200 300" className={`${sizeClasses} drop-shadow-xl transition-transform duration-300 hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="marianaGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#16a34a" />
                <stop offset="35%" stopColor="#22c55e" />
                <stop offset="70%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#15803d" />
              </linearGradient>
            </defs>
            {/* Red Cap */}
            <rect x="88" y="24" width="24" height="20" rx="3" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
            {/* Green Bottle */}
            <path d="M92 44H108V75C108 86 126 100 136 118C142 130 142 144 142 158V260C142 274 132 284 118 284H82C68 284 58 274 58 260V158C58 144 58 130 64 118C74 100 92 86 92 75V44Z" fill="url(#marianaGreen)" stroke="#15803d" strokeWidth="2" />
            {/* Mariana Label */}
            <rect x="64" y="150" width="72" height="75" rx="3" fill="#ffffff" />
            <rect x="68" y="154" width="64" height="10" rx="2" fill="#dc2626" />
            <text x="100" y="162" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">LEJÍA</text>
            <circle cx="76" cy="186" r="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1" />
            <text x="104" y="190" fill="#dc2626" fontSize="16" fontWeight="900" fontStyle="italic" textAnchor="middle">Mariana</text>
            <text x="100" y="206" fill="#15803d" fontSize="6.5" fontWeight="bold" textAnchor="middle">1000 gr. • Pack x 12</text>
          </svg>
        </div>
      );

    case 'bottle-green-zambo': // Zambo Lejía (Page 13)
      return (
        <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
          <svg viewBox="0 0 200 300" className={`${sizeClasses} drop-shadow-xl transition-transform duration-300 hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="zamboGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#15803d" />
                <stop offset="50%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#14532d" />
              </linearGradient>
            </defs>
            {/* Red Cap */}
            <rect x="88" y="24" width="24" height="20" rx="3" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
            {/* Green Bottle */}
            <path d="M92 44H108V75C108 86 126 100 136 118C142 130 142 144 142 158V260C142 274 132 284 118 284H82C68 284 58 274 58 260V158C58 144 58 130 64 118C74 100 92 86 92 75V44Z" fill="url(#zamboGreen)" stroke="#14532d" strokeWidth="2" />
            {/* Zambo Label */}
            <rect x="64" y="150" width="72" height="75" rx="3" fill="#ffffff" />
            <rect x="68" y="154" width="64" height="10" rx="2" fill="#dc2626" />
            <text x="100" y="162" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">LEJÍA USO DOMÉSTICO</text>
            {/* Zambo Mascot character icon */}
            <circle cx="76" cy="186" r="9" fill="#facc15" stroke="#15803d" strokeWidth="1" />
            <circle cx="76" cy="184" r="5" fill="#78350f" />
            <path d="M72 180C72 176 74 175 76 175C78 175 80 176 80 180H72Z" fill="#dc2626" />
            <text x="104" y="190" fill="#1e293b" fontSize="15" fontWeight="900" textAnchor="middle">Zambo</text>
            <text x="100" y="202" fill="#ea580c" fontSize="5.5" fontWeight="bold" textAnchor="middle">¡insuperable...!</text>
          </svg>
        </div>
      );

    case 'bottle-acid-rayo': // Rayo Ácido Concentrado & Quitasarro (Page 14)
      return (
        <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
          <svg viewBox="0 0 240 280" className={`${sizeClasses} drop-shadow-xl transition-transform duration-300 hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Bottle 1: Ácido Concentrado (Dark Amber/Black Bottle) */}
            <g transform="translate(15, 15)">
              <rect x="28" y="12" width="20" height="18" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              <path d="M30 30H46V55C46 64 62 76 62 90V205C62 216 54 224 42 224H34C22 224 14 216 14 205V90C14 76 30 64 30 55V30Z" fill="#18181b" stroke="#09090b" strokeWidth="1.5" />
              <rect x="18" y="105" width="40" height="60" rx="2" fill="#b91c1c" />
              <text x="38" y="120" fill="#ffffff" fontSize="4.5" fontWeight="bold" textAnchor="middle">ÁCIDO</text>
              <text x="38" y="127" fill="#ffffff" fontSize="4" fontWeight="bold" textAnchor="middle">CONCENTRADO</text>
              <polygon points="34,136 44,136 38,148 44,148 32,160 35,149 30,149" fill="#facc15" />
              <text x="38" y="160" fill="#ffffff" fontSize="7" fontWeight="900" textAnchor="middle">RAYO</text>
            </g>
            {/* White Galón 4kg in Middle */}
            <g transform="translate(85, 30)">
              <rect x="26" y="8" width="18" height="14" rx="2" fill="#dc2626" />
              <path d="M22 22H48V42C48 50 68 62 68 80V180C68 190 58 198 46 198H24C12 198 2 190 2 180V80C2 62 22 50 22 42V22Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
              <rect x="10" y="70" width="50" height="50" rx="3" fill="#dc2626" />
              <text x="35" y="85" fill="#ffffff" fontSize="5" fontWeight="bold" textAnchor="middle">ÁCIDO CONCENTRADO</text>
              <text x="35" y="102" fill="#fef08a" fontSize="10" fontWeight="900" textAnchor="middle">RAYO</text>
              <text x="35" y="114" fill="#ffffff" fontSize="5" textAnchor="middle">Galón 4 Kg.</text>
            </g>
            {/* Industrial Bidón 20kg (Teal) on Right */}
            <g transform="translate(160, 45)">
              <rect x="0" y="10" width="65" height="145" rx="6" fill="#0f766e" stroke="#134e4a" strokeWidth="2" />
              <rect x="20" y="0" width="25" height="12" rx="2" fill="#115e59" />
              <rect x="6" y="45" width="53" height="60" rx="3" fill="#dc2626" />
              <text x="32" y="60" fill="#ffffff" fontSize="5" fontWeight="900" textAnchor="middle">ÁCIDO CONCENTRADO</text>
              <text x="32" y="82" fill="#fef08a" fontSize="10" fontWeight="900" textAnchor="middle">RAYO</text>
              <circle cx="32" cy="120" r="14" fill="#ffffff" />
              <text x="32" y="118" fill="#b91c1c" fontSize="5" fontWeight="bold" textAnchor="middle">ELIMINA</text>
              <text x="32" y="125" fill="#b91c1c" fontSize="5" fontWeight="900" textAnchor="middle">HONGOS</text>
            </g>
          </svg>
        </div>
      );

    case 'candle-rayo': // Rayo Velas (Page 15)
      return (
        <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
          <svg viewBox="0 0 200 280" className={`${sizeClasses} drop-shadow-xl transition-transform duration-300 hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="candleBoxGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="40%" stopColor="#fbbf24" />
                <stop offset="70%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            {/* Candle Box Vertical Pack F5 */}
            <rect x="50" y="20" width="100" height="230" rx="4" fill="url(#candleBoxGold)" stroke="#b45309" strokeWidth="2" />
            {/* Header logo */}
            <rect x="62" y="30" width="76" height="22" rx="2" fill="#dc2626" />
            <text x="100" y="44" fill="#ffffff" fontSize="10" fontWeight="900" textAnchor="middle">A & D</text>
            <text x="100" y="70" fill="#1e3a8a" fontSize="14" fontWeight="900" textAnchor="middle">VELAS</text>
            {/* Rayo Stallion silhouette leaping */}
            <path d="M85 92C88 88 92 84 96 82C98 80 102 81 106 82C108 83 111 86 113 89C115 92 118 95 120 98L114 99C110 97 106 95 104 96C102 97 100 100 98 102L90 106C88 104 86 98 85 92Z" fill="#dc2626" />
            <text x="100" y="125" fill="#1e3a8a" fontSize="22" fontWeight="900" textAnchor="middle">RAYO</text>
            {/* Transparent Window cutout with candles inside */}
            <rect x="62" y="136" width="76" height="58" rx="8" fill="#1e293b" opacity="0.85" />
            {/* Fluted white candles inside window */}
            <rect x="68" y="142" width="12" height="46" rx="2" fill="#ffffff" />
            <rect x="84" y="142" width="12" height="46" rx="2" fill="#ffffff" />
            <rect x="100" y="142" width="12" height="46" rx="2" fill="#ffffff" />
            <rect x="116" y="142" width="12" height="46" rx="2" fill="#ffffff" />
            {/* Wicks */}
            <line x1="74" y1="138" x2="74" y2="142" stroke="#475569" strokeWidth="1.5" />
            <line x1="90" y1="138" x2="90" y2="142" stroke="#475569" strokeWidth="1.5" />
            <line x1="106" y1="138" x2="106" y2="142" stroke="#475569" strokeWidth="1.5" />
            <line x1="122" y1="138" x2="122" y2="142" stroke="#475569" strokeWidth="1.5" />
            {/* Product stamp */}
            <rect x="62" y="202" width="76" height="14" fill="#dc2626" rx="2" />
            <text x="100" y="212" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">PRODUCTO PERUANO</text>
            <text x="100" y="235" fill="#78350f" fontSize="7" fontWeight="bold" textAnchor="middle">Mecha Trenzada</text>
          </svg>
        </div>
      );

    default:
      return (
        <div className={`flex items-center justify-center bg-slate-100 rounded-xl p-4 ${sizeClasses} ${className}`}>
          <div className="w-16 h-28 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
            A&D
          </div>
        </div>
      );
  }
};
