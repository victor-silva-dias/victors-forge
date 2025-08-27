import React, { useState, useEffect } from 'react';
import ProductChatInterface from './ProductChatInterface';

// O resto do código (funções de API) permanece o mesmo, o foco da mudança é no componente.
const API_BASE_URL = 'https://n8n-web-dev.apolus.ai/webhook-test';

const getConversations = async (chatId, userId) => {
  const response = await fetch(`${API_BASE_URL}/chat-memory/conversations?chat_id=${chatId}&user_id=${userId}`);
  if (!response.ok) {
    console.error('Falha ao buscar conversas. Status:', response.status);
    throw new Error('Falha ao buscar conversas');
  }
  const data = await response.json();
  return Array.isArray(data) ? data : data.data || [];
};


// --- The Corrected Container Component ---
// Ele agora renderiza APENAS a área de chat, sem duplicar o layout.
const ChatContainer = ({ chatId, productConfig }) => {
  const userId = 'user-test-123'; 

  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]); // Estado para as mensagens da conversa ativa
  const [activeSessionId, setActiveSessionId] = useState(null); // Estado para a sessão ativa
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efeito para buscar as conversas.
  // AVISO: Por enquanto, esta lista não será visível, mas estamos corrigindo o layout primeiro.
  useEffect(() => {
    if (chatId && userId) {
      setIsLoading(true);
      setError(null);
      getConversations(chatId, userId)
        .then(data => {
          setConversations(data); // Os dados são buscados mas ainda não são exibidos na sidebar correta
        })
        .catch(err => {
          console.error(err);
          setError('Não foi possível carregar o histórico.');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [chatId]);

  // O ChatContainer agora retorna diretamente a interface do produto,
  // que será renderizada na área de conteúdo principal do seu aplicativo.
  return (
    <main className="flex-1 flex flex-col h-full">
      {error && <div className="p-4 bg-red-500 text-white text-center">{error}</div>}
      
      <ProductChatInterface
        messages={messages}
        onSendMessage={() => {}} // Função vazia por enquanto
        isLoading={isLoading}
        {...productConfig}
        // A chave garante que a interface resete se a sessão mudar
        key={activeSessionId || 'new-conversation'}
      />
    </main>
  );
};

export default ChatContainer;
