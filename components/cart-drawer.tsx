'use client';

import { X, Minus, Plus, Trash2, ArrowRight, Printer } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { deliveryZones } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export function CartDrawer({ isOpen, onClose, onCheckout }: CartDrawerProps) {
  const {
    items,
    deliveryZone,
    setDeliveryZone,
    updateQuantity,
    removeItem,
    subtotal,
    deliveryFee,
    total,
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  // Função para imprimir o pedido no formato de cupom
  const handlePrint = () => {
    const agora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Manaus' });
    const win = window.open('', 'PRINT', 'height=600,width=400');
    
    if (!win) return;

    win.document.write(`
      <html>
        <head>
          <title>Assado no Ponto - Cupom</title>
          <style>
            body { font-family: monospace; width: 80mm; padding: 10px; }
            .header { text-align: center; border-bottom: 1px dashed #000; padding-bottom: 10px; }
            .item { display: flex; justify-content: space-between; margin: 5px 0; }
            .total-section { border-top: 1px dashed #000; margin-top: 10px; padding-top: 10px; font-weight: bold; }
            .footer { margin-top: 20px; text-align: center; font-size: 0.8em; }
          </style>
        </head>
        <body>
          <div class="header">
            <h3>ASSADO NO PONTO</h3>
            <p>Data: ${agora}</p>
          </div>
          ${items.map(item => `
            <div class="item">
              <span>${item.quantity}x ${item.product.name}</span>
              <span>${formatPrice(item.product.price * item.quantity)}</span>
            </div>
            ${item.addons.map(a => `<div style="font-size: 0.8em">+ ${a.name}</div>`).join('')}
          `).join('')}
          <div class="total-section">
            <div class="item"><span>Subtotal:</span><span>${formatPrice(subtotal)}</span></div>
            <div class="item"><span>Entrega:</span><span>${formatPrice(deliveryFee)}</span></div>
            <div class="item" style="font-size: 1.2em"><span>TOTAL:</span><span>${formatPrice(total)}</span></div>
          </div>
          <div class="footer">Obrigado pela preferência!</div>
        </body>
      </html>
    `);

    win.document.close();
    win.focus();
    win.print();
    win.close();
  };

  const handleZoneChange = (zoneName: string) => {
    const zone = deliveryZones.find((z) => z.name === zoneName);
    setDeliveryZone(zone || null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/50 backdrop-blur-sm">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Fechar carrinho"
      />
      <div className="relative w-full max-w-lg animate-in slide-in-from-bottom duration-300 rounded-t-3xl bg-card shadow-2xl max-h-[85vh] flex flex-col">
        <div className="sticky top-0 flex items-center justify-between border-b border-border bg-card p-4 rounded-t-3xl">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-card-foreground">Sua Sacola</h2>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
              Manaus - AM
            </span>
          </div>
          <div className="flex gap-2">
            {items.length > 0 && (
              <Button variant="outline" size="icon" onClick={handlePrint} title="Imprimir cupom">
                <Printer className="h-4 w-4" />
              </Button>
            )}
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 text-6xl">🛒</div>
              <p className="text-lg font-medium text-card-foreground">Sua sacola está vazia</p>
              <p className="mt-1 text-sm text-muted-foreground">Adicione itens para continuar</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item, index) => {
                const itemTotal =
                  (item.product.price +
                    item.addons.reduce((sum, addon) => sum + addon.price, 0)) *
                  item.quantity;
                return (
                  <div
                    key={`${item.product.id}-${index}`}
                    className="rounded-xl border border-border bg-card p-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-card-foreground">{item.product.name}</h4>
                        {item.removedItems && item.removedItems.length > 0 && (
                          <p className="mt-0.5 text-xs text-primary">
                            SEM: {item.removedItems.map((r) => r.name).join(', ')}
                          </p>
                        )}
                        {item.addons.length > 0 && (
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            + {item.addons.map((a) => a.name).join(', ')}
                          </p>
                        )}
                        <p className="mt-1 font-bold text-primary">{formatPrice(itemTotal)}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                        aria-label="Remover item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition-colors"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-semibold text-card-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {items.length > 0 && (
            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-card-foreground">
                  Bairro de entrega
                </label>
                <Select
                  value={deliveryZone?.name || ''}
                  onValueChange={handleZoneChange}
                >
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder="Selecione o bairro" />
                  </SelectTrigger>
                  <SelectContent>
                    {deliveryZones.map((zone) => (
                      <SelectItem key={zone.name} value={zone.name}>
                        {zone.name} - {formatPrice(zone.fee)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 rounded-xl bg-muted p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-card-foreground">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Taxa de entrega</span>
                  <span className="font-medium text-card-foreground">
                    {deliveryZone ? formatPrice(deliveryFee) : '-'}
                  </span>
                </div>
                <div className="border-t border-border pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="text-base font-bold text-card-foreground">Total</span>
                    <span className="text-lg font-bold text-primary">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="sticky bottom-0 border-t border-border bg-card p-4 safe-area-inset-bottom">
            <Button
              onClick={onCheckout}
              disabled={!deliveryZone}
              className="w-full h-12 text-base font-semibold gap-2"
            >
              Continuar para WhatsApp
              <ArrowRight className="h-5 w-5" />
            </Button>
            {!deliveryZone && (
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Selecione o bairro para continuar
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
