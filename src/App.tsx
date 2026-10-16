import React, { useState, useMemo, useEffect } from 'react';
import { 
  Header 
} from './components/Header';
import { 
  BrandSelector 
} from './components/BrandSelector';
import { 
  CategoryNav 
} from './components/CategoryNav';
import { 
  ProductCard 
} from './components/ProductCard';
import { 
  ProductModal 
} from './components/ProductModal';
import { 
  FlipbookView 
} from './components/FlipbookView';
import { 
  QuotationModal 
} from './components/QuotationModal';
import { 
  CorporateSection 
} from './components/CorporateSection';
import { 
  Footer 
} from './components/Footer';
import { 
  PRODUCTS, 
  BRANDS, 
  CATEGORIES, 
  COMPANY_INFO 
} from './data/catalogData';
import { 
  Product, 
  Presentation, 
  CartItem 
} from './types';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Search, 
  ShoppingCart, 
  RotateCcw,
  BookOpen,
  Grid3X3,
  PhoneCall,
  MessageCircle,
  PackageCheck,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<'grid' | 'flipbook'>('grid');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('todas');
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ayd_virtual_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ayd_virtual_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [cart]);

  // Dynamic counts for brands and categories
  const productCountsByBrand = useMemo(() => {
    const counts: Record<string, number> = {};
    PRODUCTS.forEach(p => {
      counts[p.brandId] = (counts[p.brandId] || 0) + 1;
    });
    return counts;
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { todas: PRODUCTS.length };
    CATEGORIES.forEach(c => {
      if (c.id !== 'todas') {
        counts[c.id] = PRODUCTS.filter(p => p.category === c.id).length;
      }
    });
    return counts;
  }, []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Brand filter
      if (selectedBrand !== 'todas' && product.brandId !== selectedBrand) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'todas' && product.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inName = product.name.toLowerCase().includes(query);
        const inSubtitle = (product.subtitle || '').toLowerCase().includes(query);
        const inBrand = product.brandName.toLowerCase().includes(query);
        const inCategory = product.categoryLabel.toLowerCase().includes(query);
        const inBullets = product.descriptionBullets.some(b => b.toLowerCase().includes(query));
        const inBadges = product.badges.some(b => b.toLowerCase().includes(query));
        const inPres = product.presentations.some(p => 
          p.size.toLowerCase().includes(query) || p.packing.toLowerCase().includes(query)
        );

        if (!inName && !inSubtitle && !inBrand && !inCategory && !inBullets && !inBadges && !inPres) {
          return false;
        }
      }

      return true;
    });
  }, [selectedBrand, selectedCategory, searchQuery]);

  // Cart operations
  const handleAddToCart = (
    product: Product, 
    presentation: Presentation, 
    quantity: number = 1,
    variety?: string
  ) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.productId === product.id && item.presentationId === presentation.id && item.variety === variety
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            productId: product.id,
            productName: product.name,
            brandName: product.brandName,
            presentationId: presentation.id,
            presentationSize: presentation.size,
            presentationPacking: presentation.packing,
            variety: variety || presentation.variety,
            quantity,
          }
        ];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, presentationId: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.productId === productId && item.presentationId === presentationId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const handleRemoveItem = (productId: string, presentationId: string) => {
    setCart(prev => prev.filter(item => !(item.productId === productId && item.presentationId === presentationId)));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleLoadSampleOrder = () => {
    // Populate with standard high-rotation distributor order from catalog
    setCart([
      {
        productId: 'lesly-lejia-concentrada',
        productName: 'Lejía Concentrada',
        brandName: 'Lesly',
        presentationId: 'llc-250',
        presentationSize: '250 gr.',
        presentationPacking: 'Pack x 24 unid.',
        quantity: 5,
      },
      {
        productId: 'lesly-detergente-antibacterial',
        productName: 'Detergente Antibacterial',
        brandName: 'Lesly',
        presentationId: 'lda-1k',
        presentationSize: '1 Kg.',
        presentationPacking: 'Bolsa x 10 unidades',
        variety: 'Aroma a Limón',
        quantity: 10,
      },
      {
        productId: 'lesly-lavavajilla-crema',
        productName: 'Lavavajilla Antibacterial en Crema',
        brandName: 'Lesly',
        presentationId: 'lvc-1000',
        presentationSize: '1000 gr.',
        presentationPacking: 'Caja x 12 unidades',
        variety: 'Aroma Limón',
        quantity: 4,
      },
      {
        productId: 'clorosur-lejia',
        productName: 'Lejía Clorosur',
        brandName: 'Clorosur',
        presentationId: 'cl-bidon',
        presentationSize: 'Bidón de 18 kg. y/o 20 kg.',
        presentationPacking: 'Bidón industrial 7.5%',
        quantity: 2,
      },
    ]);
  };

  const resetFilters = () => {
    setSelectedBrand('todas');
    setSelectedCategory('todas');
    setSearchQuery('');
  };

  const scrollToCorporate = () => {
    const el = document.getElementById('corporate');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-emerald-600 selection:text-white">
      
      {/* Official Header */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCorporate={scrollToCorporate}
        onPrint={handlePrint}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* VIEW MODE 1: INTERACTIVE SMART EXPLORER */}
        {viewMode === 'grid' && (
          <div>
            
            {/* Hero Presentation Strip */}
            <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white py-8 px-4 sm:px-6 shadow-inner no-print">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold mb-2.5">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Catálogo Oficial A&D Químicos y Diversos S.A.</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
                    Catálogo Virtual de Productos
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                    Portafolio completo de limpieza, desinfección profunda y químicos industriales con la garantía de formulación certificada ISO 9001:2015.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setViewMode('flipbook')}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all cursor-pointer backdrop-blur-xs"
                  >
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                    <span>Ver Folleto Página por Página</span>
                  </button>

                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer active:scale-95"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Cotizador ({cart.length})</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Filter Navigation Bar */}
            <div className="sticky top-[105px] z-30 bg-white border-b border-slate-200 shadow-xs no-print">
              {/* Category Nav Tabs */}
              <CategoryNav
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                categoryCounts={categoryCounts}
              />

              {/* Brands Filter Chips */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
                <BrandSelector
                  selectedBrandId={selectedBrand}
                  onSelectBrand={setSelectedBrand}
                  productCountsByBrand={productCountsByBrand}
                />
              </div>
            </div>

            {/* Results Status & Active Filter Indicators */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="font-bold text-slate-900">
                  Mostrando {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
                </span>
                {(selectedBrand !== 'todas' || selectedCategory !== 'todas' || searchQuery) && (
                  <span className="text-slate-400">
                    (filtrado de {PRODUCTS.length} totales)
                  </span>
                )}
              </div>

              {(selectedBrand !== 'todas' || selectedCategory !== 'todas' || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1 rounded-lg border border-emerald-200 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Limpiar filtros</span>
                </button>
              )}
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200 shadow-sm my-6">
                  <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-800 font-heading">
                    No se encontraron productos coincidentes
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-6">
                    No hay productos que coincidan con &ldquo;{searchQuery}&rdquo; en la categoría o marca seleccionada.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow"
                  >
                    Mostrar todos los productos
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onOpenDetails={(p) => setActiveProduct(p)}
                      onAddToCart={(p, pres, qty) => handleAddToCart(p, pres, qty)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Corporate Section */}
            <CorporateSection />

          </div>
        )}

        {/* VIEW MODE 2: FLIPBOOK / BROCHURE MODE (16 Official Pages) */}
        {viewMode === 'flipbook' && (
          <div className="py-6">
            <FlipbookView
              onOpenProductModal={(p) => setActiveProduct(p)}
              onAddToCart={(p, pres, qty) => handleAddToCart(p, pres, qty)}
            />
          </div>
        )}

      </main>

      {/* Floating Action Button for Quotation / Cart */}
      <div className="fixed bottom-6 right-6 z-40 no-print">
        <button
          onClick={() => setIsCartOpen(true)}
          className="group flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer font-bold text-xs sm:text-sm border-2 border-emerald-400"
          aria-label="Abrir cotizador de pedidos"
        >
          <div className="relative">
            <ShoppingCart className="w-5 h-5" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
          <span className="hidden sm:inline">Cotizador Virtual</span>
          {cart.length > 0 && (
            <span className="bg-emerald-800/80 px-2 py-0.5 rounded-lg text-xs">
              {cart.reduce((a, b) => a + b.quantity, 0)} bultos
            </span>
          )}
        </button>
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onAddToCart={(p, pres, qty, variety) => {
          handleAddToCart(p, pres, qty, variety);
        }}
      />

      {/* Quotation / Order Cart Modal */}
      <QuotationModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onLoadSampleOrder={handleLoadSampleOrder}
      />

      {/* Corporate Footer */}
      <Footer
        onSelectBrand={(brandId) => {
          setSelectedBrand(brandId);
          setViewMode('grid');
          window.scrollTo({ top: 300, behavior: 'smooth' });
        }}
        onOpenCorporate={scrollToCorporate}
      />

    </div>
  );
}
