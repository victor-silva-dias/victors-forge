import React from 'react';
import ProductChatInterface from '../components/ProductChatInterface';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const copilotoEstrategistaConfig = {
  productName: 'Copiloto Estrategista',
  pageTitle: 'Apolus | Copiloto Estrategista',
  initialMessage: 'Olá! Sou o Copiloto Estrategista, seu parceiro intelectual para maximizar o valor estratégico dos seus casos. Para que eu possa te ajudar a construir a melhor estratégia, me apresente o seu desafio jurídico.',
  suggestionPrompts: [
    "Tenho um novo caso penal.",
    "Preciso anular provas.",
    "Meu cliente quer pedir horas extras.",
    "Estou com um problema em um contrato."
  ],
  apiEndpoint: 'https://api-dev.apolus.ai/webhook/copiloto-estrategista',
  productType: 'copilot',
  icon: faBrain,
  iconColorLight: 'text-indigo-500',
  iconColorDark: 'text-indigo-300'
};

function CopilotoEstrategista() {
  const chatId = "2f71e1b4-a9f3-47e4-8e04-8c1b366b6e14";
  return <ProductChatInterface {...copilotoEstrategistaConfig} chatId={chatId} />;
}

export default CopilotoEstrategista;
