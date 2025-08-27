import React from 'react';
import ProductChatInterface from '../components/ProductChatInterface';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const copilotoDePromptConfig = {
  productName: 'Copiloto de Prompt',
  pageTitle: 'Apolus | Copiloto de Prompt',
  initialMessage: 'Olá! Sou o Copiloto de Prompt, seu parceiro para criar os melhores prompts. Como posso te ajudar hoje?',
  suggestionPrompts: [
    "Como posso criar um prompt para resumir um processo?",
    "Preciso de um prompt para analisar um contrato.",
    "Qual o melhor prompt para encontrar jurisprudência?",
    "Como posso usar um prompt para criar uma petição?"
  ],
  apiEndpoint: 'https://api-dev.apolus.ai/webhook/copiloto-de-prompt',
  productType: 'copilot',
  icon: faLightbulb,
  iconColorLight: 'text-yellow-500',
  iconColorDark: 'text-yellow-300'
};

function CopilotoDePrompt() {
  const chatId = "7c66dd7e-bb20-4a22-be86-165bac5da40b";
  return <ProductChatInterface {...copilotoDePromptConfig} chatId={chatId} />;
}

export default CopilotoDePrompt;