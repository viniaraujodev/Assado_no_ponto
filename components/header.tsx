'use client';

import { Flame } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-md">
      <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
            <Flame className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-black uppercase tracking-wide leading-tight">ASSADO NO PONTO</h1>
            <p className="text-xs text-primary-foreground/80">Delivery de Assados</p>
          </div>
        </div>
        <div className="text-right text-xs">
          <p className="font-medium">Aberto agora</p>
          <p className="text-primary-foreground/80">10h - 15h</p>
        </div>
      </div>
    </header>
  );
}
