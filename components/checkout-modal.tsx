'use client';

import { useState } from 'react';
import { X, Send, CreditCard, Banknote, QrCode } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { CheckoutData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
// IMPORTANTE: Importando o número da loja do seu data.ts
import { STORE_PHONE } from '@/lib/data';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const paymentMethods = [
  { id: 'pix' as const, label: 'PIX', icon: QrCode },
  { id: 'cartao' as const, label: 'Cartão', icon: CreditCard },
  { id: 'dinheiro' as const, label: 'Dinheiro', icon: Banknote },
];

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, deliveryZone, subtotal, deliveryFee, total, clearCart } = useCart();
  const [formData, setFormData] = useState<CheckoutData>({
    name: '',
    address: '',
    reference: '',
    neighborhood: deliveryZone?.name || '',
    paymentMethod: 'pix',
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const handleInputChange = (field: keyof CheckoutData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateWhatsAppMessage = () => {
    // GERANDO DATA E HORA LOCAL
    const agora = new Date();
    const dataHora = agora.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // CABEÇALHO DO PEDIDO
    let message = `🔥 *PEDIDO - ASSADO NO PONTO*\n`;
    message += `🗓️ *Data/Hora:* ${dataHora}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;

    // INFORMAÇÕES DO CLIENTE
    message += `👤 *Cliente:* ${formData.name}\n`;
    message += `📍 *Endereço:* ${formData.address}\n`;
    message += `🏘️ *Bairro:* ${deliveryZone?.name}\n`;
    message += `📌 *Referência:* ${formData.reference}\n`;
    message += `💳 *Pagamento:* ${formData.paymentMethod === 'pix' ? 'PIX' : formData.paymentMethod === 'cartao' ? 'Cartão' : 'Dinheiro'}\n\n`;
    
    message += `🛒 *ITENS DO PEDIDO:*\n\n`;

    items.forEach((item) => {
      const itemTotal =
        (item.product.price + item.addons.reduce((sum, addon) => sum + addon.price, 0)) *
        item.quantity;
      message += `• ${item.quantity}x ${item.product.name}\n`;
      
      if (item.removedItems && item.removedItems.length > 0) {
        message += `  _SEM: ${item.removedItems.map((r) => r.name).join(', ')}_\n`;
      }
      
      if (item.addons.length > 0) {
        message += `  _Adicionais: ${item.addons.map((a) => a.name).join(', ')}_\n`;
      }
      
      message += `  *${formatPrice(itemTotal)}*\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📦 *Subtotal:* ${formatPrice(subtotal)}\n`;
    message += `🚗 *Entrega:* ${formatPrice(deliveryFee)}\n`;
    message += `💰 *TOTAL:* ${formatPrice(total)}\n\n`;
    message += `_Obrigado pela preferência!_`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.address) {
      alert('Por favor, preencha nome e endereço');
      return;
    }

    const message = generateWhatsAppMessage();
    // USANDO A VARIÁVEL QUE VEM DO DATA.TS
    const whatsappUrl = `https://wa.me/${STORE_PHONE}?text=${message}`;

    window.open(whatsappUrl, '_blank');
    clearCart();
    onClose();
  };

  const isFormValid = formData.name && formData.address && formData.paymentMethod;

  if (!isOpen) return null;

  return (
    // ... (resto do seu código de UI permanece o mesmo)
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/50 backdrop-blur-sm">
       {/* O código de UI que você mandou continua igual daqui para baixo */}
       <div className="absolute inset-0" onClick={onClose} />
       <div className="relative w-full max-w-lg rounded-t-3xl bg-card shadow-2xl max-h-[90vh] flex flex-col">
          {/* ... conteúdo do formulário ... */}
          <div className="sticky top-0 flex items-center justify-between border-b border-border bg-card p-4 rounded-t-3xl">
             <h2 className="text-lg font-bold text-card-foreground">Finalizar Pedido</h2>
             <button onClick={onClose} className="h-8 w-8 flex items-center justify-center rounded-full bg-muted"><X className="h-5 w-5"/></button>
          </div>
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4">
             {/* Seus inputs de nome, endereço, referência e pagamento */}
             <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input id="name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} required className="mt-1.5 h-12"/>
                </div>
                <div>
                  <Label htmlFor="address">Endereço completo *</Label>
                  <Input id="address" value={formData.address} onChange={(e) => handleInputChange('address', e.target.value)} required className="mt-1.5 h-12"/>
                </div>
                <div>
                  <Label htmlFor="reference">Ponto de referência</Label>
                  <Input id="reference" value={formData.reference} onChange={(e) => handleInputChange('reference', e.target.value)} className="mt-1.5 h-12"/>
                </div>
                {/* Exibição da taxa baseada no bairro selecionado no início */}
                <div className="rounded-xl bg-muted p-3">
                   <div className="flex justify-between text-sm"><span>Bairro</span><span className="font-medium">{deliveryZone?.name}</span></div>
                   <div className="flex justify-between text-sm mt-1"><span>Taxa de entrega</span><span className="font-medium">{formatPrice(deliveryFee)}</span></div>
                </div>
                {/* Seleção de Pagamento */}
                <div>
                   <Label className="mb-2 block">Forma de pagamento *</Label>
                   <div className="grid grid-cols-3 gap-2">
                      {paymentMethods.map((method) => (
                        <button 
                          key={method.id} 
                          type="button" 
                          onClick={() => handleInputChange('paymentMethod', method.id)}
                          className={cn("flex flex-col items-center p-3 rounded-xl border", formData.paymentMethod === method.id ? "border-primary bg-primary/5 text-primary" : "border-border")}
                        >
                          <method.icon className="h-6 w-6 mb-1"/>
                          <span className="text-xs">{method.label}</span>
                        </button>
                      ))}
                   </div>
                </div>
                {/* Resumo de Valores */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                   <div className="flex justify-between text-sm"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                   <div className="flex justify-between text-sm mt-1"><span>Taxa de entrega</span><span>{formatPrice(deliveryFee)}</span></div>
                   <div className="border-t border-primary/20 pt-2 mt-2 flex justify-between">
                      <span className="font-bold">Total a pagar</span>
                      <span className="text-xl font-bold text-primary">{formatPrice(total)}</span>
                   </div>
                </div>
             </div>
          </form>
          <div className="p-4 bg-card border-t">
             <Button onClick={handleSubmit} disabled={!isFormValid} className="w-full h-12 bg-[#25D366] hover:bg-[#20BD5A] gap-2">
                <Send className="h-5 w-5" /> Finalizar pelo WhatsApp
             </Button>
          </div>
       </div>
    </div>
  );
}
