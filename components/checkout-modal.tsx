'use client';

import { useState } from 'react';
import { X, Send, CreditCard, Banknote, QrCode } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { CheckoutData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

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
    // Pega a data e hora de Manaus
    const agora = new Date().toLocaleString('pt-BR', { 
      timeZone: 'America/Manaus' 
    });

    let message = `🔥 *PEDIDO - ASSADO NO PONTO*\n`;
    message += `📅 *Data/Hora:* ${agora}\n`;
    message += `━━━━━━━━━━━━━━━━\n\n`;
    message += `👤 *Cliente:* ${formData.name}\n`;
    message += `📍 *Endereço:* ${formData.address}\n`;
    message += `🏘️ *Bairro:* ${deliveryZone?.name}\n`;
    message += `📌 *Referência:* ${formData.reference}\n`;
    message += `💳 *Pagamento:* ${formData.paymentMethod === 'pix' ? 'PIX' : formData.paymentMethod === 'cartao' ? 'Cartão' : 'Dinheiro'}\n\n`;
    message += `━━━━━━━━━━━━━━━━\n`;
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
      message += `  ${formatPrice(itemTotal)}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━\n`;
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
    const phoneNumber = '+5592992212466'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
    clearCart();
    onClose();
  };

  const isFormValid = formData.name && formData.address && formData.paymentMethod;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/50 backdrop-blur-sm">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Fechar checkout"
      />
      <div className="relative w-full max-w-lg animate-in slide-in-from-bottom duration-300 rounded-t-3xl bg-card shadow-2xl max-h-[90vh] flex flex-col">
        <div className="sticky top-0 flex items-center justify-between border-b border-border bg-card p-4 rounded-t-3xl">
          <h2 className="text-lg font-bold text-card-foreground">Finalizar Pedido</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-card-foreground">
                Nome completo *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Digite seu nome"
                className="mt-1.5 h-12"
                required
              />
            </div>

            <div>
              <Label htmlFor="address" className="text-card-foreground">
                Endereço completo *
              </Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Rua, número, complemento"
                className="mt-1.5 h-12"
                required
              />
            </div>

            <div>
              <Label htmlFor="reference" className="text-card-foreground">
                Ponto de referência
              </Label>
              <Input
                id="reference"
                value={formData.reference}
                onChange={(e) => handleInputChange('reference', e.target.value)}
                placeholder="Ex: Próximo ao supermercado"
                className="mt-1.5 h-12"
              />
            </div>

            <div className="rounded-xl bg-muted p-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Bairro</span>
                <span className="font-medium text-card-foreground">{deliveryZone?.name}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-muted-foreground">Taxa de entrega</span>
                <span className="font-medium text-card-foreground">{formatPrice(deliveryFee)}</span>
              </div>
            </div>

            <div>
              <Label className="text-card-foreground mb-2 block">Forma de pagamento *</Label>
              <div className="grid grid-cols-3 gap-2">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  const isSelected = formData.paymentMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => handleInputChange('paymentMethod', method.id)}
                      className={cn(
                        'flex flex-col items-center justify-center gap-1.5 rounded-xl border p-3 transition-all',
                        isSelected
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-border bg-card text-muted-foreground hover:border-primary/50'
                      )}
                    >
                      <Icon className="h-6 w-6" />
                      <span className="text-xs font-medium">{method.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium text-card-foreground">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-muted-foreground">Taxa de entrega</span>
                <span className="font-medium text-card-foreground">{formatPrice(deliveryFee)}</span>
              </div>
              <div className="border-t border-primary/20 pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="text-base font-bold text-card-foreground">Total a pagar</span>
                  <span className="text-xl font-bold text-primary">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="sticky bottom-0 border-t border-border bg-card p-4 safe-area-inset-bottom">
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className="w-full h-12 text-base font-semibold gap-2 bg-[#25D366] hover:bg-[#20BD5A]"
          >
            <Send className="h-5 w-5" />
            Finalizar pelo WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
