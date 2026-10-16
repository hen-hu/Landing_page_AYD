import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Send, 
  MessageCircle, 
  Mail, 
  Printer, 
  ShoppingBag, 
  CheckCircle,
  Building,
  User,
  Phone,
  MapPin,
  Sparkles
} from 'lucide-react';
import { CartItem } from '../types';
import { COMPANY_INFO } from '../data/catalogData';

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, presentationId: string, delta: number) => void;
  onRemoveItem: (productId: string, presentationId: string) => void;
  onClearCart: () => void;
  onLoadSampleOrder: () => void;
}

export const QuotationModal: React.FC<QuotationModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onLoadSampleOrder,
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [customerCompany, setCustomerCompany] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerCity, setCustomerCity] = useState('');

  const totalPackages = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Generate WhatsApp message
  const handleSendWhatsApp = () => {
    let message = `*SOLICITUD DE COTIZACIÓN - CATÁLOGO VIRTUAL*\n`;
    message += `*A&D QUÍMICOS Y DIVERSOS S.A.*\n`;
    message += `--------------------------------------\n`;

    if (customerName) message += `👤 *Cliente:* ${customerName}\n`;
    if (customerCompany) message += `🏢 *Empresa / RUC:* ${customerCompany}\n`;
    if (customerPhone) message += `📱 *Teléfono:* ${customerPhone}\n`;
    if (customerCity) message += `📍 *Ciudad / Destino:* ${customerCity}\n`;
    message += `--------------------------------------\n`;
    message += `*DETALLE DE PRODUCTOS SOLICITADOS:*\n`;

    cartItems.forEach((item, index) => {
      const varietyStr = item.variety ? ` (${item.variety})` : '';
      message += `${index + 1}. *${item.brandName}* - ${item.productName}${varietyStr}\n`;
      message += `   Presentación: ${item.presentationSize} [${item.presentationPacking}]\n`;
      message += `   Cantidad solicitada: *${item.quantity}*\n\n`;
    });

    message += `*Total de paquetes/cajas:* ${totalPackages} unidades.\n`;
    message += `--------------------------------------\n`;
    message += `Por favor cotizar disponibilidad y tiempos de entrega. ¡Gracias!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/51987654321?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  // Generate Email message
  const handleSendEmail = () => {
    let body = `Estimado equipo de ventas A&D Químicos y Diversos S.A.,\n\n`;
    body += `Solicito la cotización formal de los siguientes productos de su Catálogo Oficial:\n\n`;

    cartItems.forEach((item, index) => {
      const varietyStr = item.variety ? ` (${item.variety})` : '';
      body += `${index + 1}. ${item.brandName} - ${item.productName}${varietyStr}\n`;
      body += `   Presentación: ${item.presentationSize} (${item.presentationPacking})\n`;
      body += `   Cantidad: ${item.quantity}\n\n`;
    });

    body += `Total de bultos/paquetes: ${totalPackages}\n\n`;
    body += `Datos del Solicitante:\n`;
    body += `Nombre: ${customerName || 'No especificado'}\n`;
    body += `Empresa: ${customerCompany || 'No especificado'}\n`;
    body += `Teléfono: ${customerPhone || 'No especificado'}\n`;
    body += `Ciudad: ${customerCity || 'No especificado'}\n\n`;
    body += `Atentamente,\n${customerName || 'Cliente'}`;

    const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
      'Solicitud de Cotización - Catálogo Virtual A&D Químicos'
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in no-print">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-heading">
                Cotizador de Pedidos Virtual
              </h2>
              <p className="text-xs text-slate-400">
                A&D Químicos y Diversos S.A. • Envío directo a Ventas
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 flex-1 space-y-6">
          
          {/* Cart Items List */}
          {cartItems.length === 0 ? (
            <div className="text-center py-12 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <ShoppingBag className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 font-heading">
                Tu cotización está vacía
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-5">
                Navega por las presentaciones del catálogo y pulsa &ldquo;Cotizar&rdquo; en cualquier producto para agregarlo a la lista.
              </p>
              <button
                type="button"
                onClick={onLoadSampleOrder}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer inline-flex items-center gap-2 shadow"
              >
                <Sparkles className="w-4 h-4" />
                <span>Cargar Pedido Modelo Distribuidor (Ejemplo)</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Productos Seleccionados ({cartItems.length} ítem{cartItems.length > 1 ? 's' : ''}):
                </span>
                <button
                  onClick={onClearCart}
                  className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Vaciar lista</span>
                </button>
              </div>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs">
                {cartItems.map((item) => (
                  <div key={`${item.productId}-${item.presentationId}`} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/70 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-900 text-white">
                          {item.brandName}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">
                          {item.productName}
                        </h4>
                      </div>
                      
                      <div className="text-xs text-slate-600 mt-1 flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-emerald-700">{item.presentationSize}</span>
                        <span>•</span>
                        <span className="text-slate-500">{item.presentationPacking}</span>
                        {item.variety && (
                          <>
                            <span>•</span>
                            <span className="italic text-slate-600 font-medium">{item.variety}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 justify-between sm:justify-end">
                      <div className="flex items-center border border-slate-200 rounded-lg bg-slate-100 text-xs">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.productId, item.presentationId, -1)}
                          className="px-2.5 py-1.5 text-slate-700 hover:bg-slate-200 font-bold rounded-l-lg"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 font-bold text-slate-900 min-w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.productId, item.presentationId, 1)}
                          className="px-2.5 py-1.5 text-slate-700 hover:bg-slate-200 font-bold rounded-r-lg"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.productId, item.presentationId)}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                        title="Eliminar producto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Summary */}
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-emerald-900">
                  Total acumulado de paquetes / cajas a cotizar:
                </span>
                <span className="text-base font-black text-emerald-800 font-heading">
                  {totalPackages} bultos/unidades
                </span>
              </div>
            </div>
          )}

          {/* Customer Information Form */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tus Datos de Contacto para la Cotización:</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                  Nombre Completo / Contacto:
                </label>
                <input
                  type="text"
                  placeholder="Ej. Carlos Mendoza"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 bg-white text-xs rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                  Empresa o RUC (Opcional):
                </label>
                <input
                  type="text"
                  placeholder="Ej. Distribuidora Lima SAC / 20601234567"
                  value={customerCompany}
                  onChange={(e) => setCustomerCompany(e.target.value)}
                  className="w-full px-3 py-2 bg-white text-xs rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                  Teléfono / WhatsApp:
                </label>
                <input
                  type="tel"
                  placeholder="Ej. 987 654 321"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-white text-xs rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                  Ciudad o Distrito de Despacho:
                </label>
                <input
                  type="text"
                  placeholder="Ej. Lima, Arequipa, Trujillo, etc."
                  value={customerCity}
                  onChange={(e) => setCustomerCity(e.target.value)}
                  className="w-full px-3 py-2 bg-white text-xs rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              disabled={cartItems.length === 0}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-bold rounded-xl border border-slate-300 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir Hoja</span>
            </button>

            <button
              onClick={handleSendEmail}
              disabled={cartItems.length === 0}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white hover:bg-slate-200 disabled:opacity-40 text-slate-700 text-xs font-bold rounded-xl border border-slate-300 transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-red-600" />
              <span>Enviar por Correo</span>
            </button>
          </div>

          <button
            onClick={handleSendWhatsApp}
            disabled={cartItems.length === 0}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:pointer-events-none text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Enviar Cotización a Ventas por WhatsApp</span>
          </button>

        </div>

      </div>
    </div>
  );
};
