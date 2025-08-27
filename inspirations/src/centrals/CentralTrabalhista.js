import React from 'react';
import ProductChatInterface from '../components/ProductChatInterface';

const centralTrabalhistaConfig = {
  productName: 'Central Trabalhista',
  pageTitle: 'Apolus | Central Trabalhista',
  initialMessage: 'Olá! Sou a Central Trabalhista da Apolus. Como posso te ajudar hoje? Você pode me perguntar sobre direitos trabalhistas, como por exemplo: "Quais são as regras para férias?" ou "Como funciona o aviso prévio?".',
  suggestionPrompts: [
    "Quais são as regras para férias?",
    "Como funciona o aviso prévio?",
    "Como calcular o décimo terceiro?",
    "Quais são os meus direitos em caso de demissão sem justa causa?"
  ],
  apiEndpoint: 'https://api-dev.apolus.ai/webhook/central-trabalhista/supervisor',
  productType: 'central',
  iconLight: "/logo-apolus/central_logo_light.svg",
  iconDark: "/logo-apolus/central_logo_dark.svg"
};

function CentralTrabalhista() {
  const chatId = "1ca55cd8-c30f-4452-936e-300581fb8e83";

  return <ProductChatInterface {...centralTrabalhistaConfig} chatId={chatId} />;
}

export default CentralTrabalhista;
