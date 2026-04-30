const generateWhatsAppMessage = () => {
    // Captura data e hora exata de Manaus
    const agora = new Date().toLocaleString('pt-BR', { 
      timeZone: 'America/Manaus' 
    });

    let message = `🔥 *PEDIDO - ASSADO NO PONTO*\n`;
    message += `📅 *Data/Hora:* ${agora}\n`; // Linha incluída
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
