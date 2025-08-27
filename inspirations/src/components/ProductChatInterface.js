import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faTimes } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import ChatInput from './ChatInput';
import Header from './Header';
import { ThemeContext } from '../context/ThemeContext';
import mixpanel from '../mixpanel';
import { auth } from '../firebase';
import { basicLlmCall } from '../services/llm';

// =================================================================================================
// INÍCIO: LÓGICA DA API DE MEMÓRIA (PRODUÇÃO)
// =================================================================================================
const MEMORY_API_BASE_URL = 'https://api-dev.apolus.ai/webhook/chat-memory';

const getConversations = async (chatId, userId) => {
  if (!chatId || !userId) return [];
  const API_URL = `${MEMORY_API_BASE_URL}/conversations?chat_id=${chatId}&user_id=${userId}`;
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Falha ao buscar o histórico de conversas.');
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Erro ao buscar conversas:", error);
    return [];
  }
};

const getMessages = async (sessionId) => {
  if (!sessionId) return [];
  const API_URL = `${MEMORY_API_BASE_URL}/messages?session_id=${sessionId}`;
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Falha ao buscar o histórico de mensagens.');
    const data = await response.json();
    return data.map(msg => ({
      text: msg.conteudo,
      sender: msg.tipo === 'input' ? 'user' : 'bot'
    }));
  } catch (error) {
    console.error("Erro ao buscar mensagens:", error);
    return [];
  }
};

const createConversation = async (chatId, userId, title = 'Nova Conversa') => {
    if (!chatId || !userId) return null;
    const sessionID = uuidv4();
    const payload = { 
        session_id: sessionID, 
        user_id: userId, 
        chat_id: chatId, 
        criado_em: new Date().toISOString(),
        titulo: title 
    };
    try {
      const response = await fetch(`${MEMORY_API_BASE_URL}/conversations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`API error! status: ${response.status}`);
      return sessionID;
    } catch (error) {
      console.error("Erro ao criar a conversa:", error);
      return null;
    }
  };
  
  const updateConversationTitle = async (sessionId, newTitle, userId, chatId) => {
    if (!sessionId || !newTitle || !userId || !chatId) return;
    const payload = { 
        session_id: sessionId,
        user_id: userId,
        chat_id: chatId,
        titulo: newTitle 
    };
    try {
      const response = await fetch(`${MEMORY_API_BASE_URL}/conversations`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorBody = await response.text();
        console.error("Update title error response:", errorBody)
        throw new Error(`API error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Erro ao atualizar o título da conversa:", error);
    }
  };

const persistMessage = async (payload) => {
  if (!payload.session_id) return;
  try {
    await fetch(`${MEMORY_API_BASE_URL}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Erro ao persistir a mensagem:", error);
  }
};
// =================================================================================================
// FIM: LÓGICA DA API DE MEMÓRIA
// =================================================================================================


function ProductChatInterface({
  productName,
  pageTitle,
  initialMessage,
  suggestionPrompts,
  apiEndpoint, // Endpoint do agente de IA (NÃO TOCAR)
  productType,
  icon,
  iconColorLight,
  iconColorDark,
  chatId,
}) {
  const { isDarkMode } = useContext(ThemeContext);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [conversations, setConversations] = useState({});
  const [activeConversationId, setActiveConversationId] = useState(null);
  const [finishedTyping, setFinishedTyping] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileProcessing, setIsFileProcessing] = useState(false);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const handleTypingFinished = useCallback((convoId, messageIndex) => {
    setFinishedTyping(prev => ({
      ...prev,
      [convoId]: { ...(prev[convoId] || {}), [messageIndex]: true },
    }));
  }, []);
  
  // INÍCIO: Lógica de inicialização do Chat com Memória
  const handleNewConversation = useCallback(async () => {
    const userId = auth.currentUser?.uid;
    const newSessionId = await createConversation(chatId, userId);
    if (!newSessionId) {
        console.error("Falha ao criar nova conversa no backend.");
        return;
    }

    const newUiId = uuidv4();
    const newConversation = {
      id: newUiId,
      title: 'Nova Conversa',
      messages: [{ text: initialMessage, sender: 'bot' }],
      sessionID: newSessionId,
      criado_em: new Date().toISOString(),
    };
    
    setConversations(prev => ({ ...prev, [newUiId]: newConversation }));
    setActiveConversationId(newUiId);
    setShowSuggestions(true); // Garante que as sugestões apareçam na nova conversa
    handleTypingFinished(newUiId, 0);
  }, [chatId, initialMessage, handleTypingFinished]);

  useEffect(() => {
    const initializeChat = async () => {
      setIsLoading(true);
      await handleNewConversation();
      const userId = auth.currentUser?.uid;
      if (userId && chatId) {
        const fetchedConversations = await getConversations(chatId, userId);
        if (fetchedConversations.length > 0) {
          setConversations(prev => {
            const allConversations = { ...prev };
            fetchedConversations.forEach(convo => {
              if (!Object.values(allConversations).some(c => c.sessionID === convo.session_id)) {
                const uiId = uuidv4();
                allConversations[uiId] = { id: uiId, title: convo.titulo || 'Conversa Anterior', messages: [], sessionID: convo.session_id, criado_em: convo.criado_em };
              }
            });
            return allConversations;
          });
        }
      }
      setIsLoading(false);
    };

    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      initializeChat();
    }
  }, [chatId, handleNewConversation]);

  // INÍCIO: Lógica para carregar mensagens de conversas antigas
  const handleSelectConversation = useCallback(async (uiId) => {
    setActiveConversationId(uiId);
    setShowSuggestions(false); // Esconde sugestões ao ver conversas antigas
    const conversation = conversations[uiId];
    if (conversation?.messages.length > 0 || !conversation?.sessionID) return;

    setIsLoading(true);
    const fetchedMessages = await getMessages(conversation.sessionID);
    setConversations(prev => ({
      ...prev,
      [uiId]: { ...prev[uiId], messages: fetchedMessages },
    }));
    setIsLoading(false);
  }, [conversations]);


  const handleSendMessage = useCallback(async (message) => {
    if (!activeConversationId) return;
    if (!message.trim() && !selectedFile) return;
  
    setShowSuggestions(false);
  
    const userMessageText = selectedFile ? `${message || 'Analisar o documento.'} (Anexo: ${selectedFile.name})` : message;
    
    const activeConvo = conversations[activeConversationId];
    const isFirstUserMessage = activeConvo?.messages.length === 1;
  
    if (userMessageText.trim()) {
      const userMessage = { text: userMessageText, sender: 'user' };
      setConversations(prev => {
        const currentConversation = prev[activeConversationId];
        const updatedMessages = [...currentConversation.messages, userMessage];
        return {
          ...prev,
          [activeConversationId]: {
            ...currentConversation,
            messages: updatedMessages,
          },
        };
      });
      mixpanel.track('Message Sent', { productName, hasAttachment: !!selectedFile });
    }
  
    setIsLoading(true);
    let documentContext = null;
  
    if (selectedFile) {
      setIsFileProcessing(true);
      const currentFile = selectedFile;
      setSelectedFile(null);
  
      const formData = new FormData();
      formData.append('file', currentFile);
  
      try {
        const response = await fetch('https://api-dev.apolus.ai/webhook/support-agents/legal-document-processor', {
          method: 'POST',
          body: formData,
        });
  
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `Erro no processamento do arquivo. Status: ${response.status}`);
        }
        
        documentContext = await response.json(); 
  
      } catch (error) {
        console.error("File processing error:", error);
        const errorMessage = { text: `Erro no anexo: ${error.message}`, sender: 'bot' };
        setConversations(prev => {
            const currentConversation = prev[activeConversationId];
            return {
                ...prev,
                [activeConversationId]: {
                    ...currentConversation,
                    messages: [...currentConversation.messages, errorMessage]
                }
            };
        });
        setIsFileProcessing(false);
        setIsLoading(false);
        return;
      } finally {
        setIsFileProcessing(false);
      }
    }
  
    const sessionID = conversations[activeConversationId]?.sessionID;
    if (!sessionID) {
        console.error("Não foi possível encontrar a sessionID da conversa ativa.");
        setIsLoading(false)
        return;
    }
    
    await persistMessage({ message_id: uuidv4(), session_id: sessionID, tipo: 'input', conteudo: userMessageText });
  
    if (isFirstUserMessage) {
        const titlePrompt = `
Você é um assistente de IA especialista em criar títulos para conversas de chat.
Sua tarefa é gerar um título conciso e informativo com no máximo 5 palavras em português, baseado na primeira mensagem do usuário.
O título deve capturar a intenção principal da mensagem.
A conversa é com o produto: "${productName}".
A mensagem do usuário é: "${message}".

Responda APENAS com o título gerado, sem introduções, saudações, ou qualquer texto adicional. Não use aspas na sua resposta.`;
        
        try {
          const rawResponse = await basicLlmCall(titlePrompt);
          
          let newTitle = 'Conversa';
          if (typeof rawResponse.text === 'string') {
            newTitle = rawResponse.text;
          } else if (typeof rawResponse.output === 'string') {
            newTitle = rawResponse.output;
          } else if (Array.isArray(rawResponse) && rawResponse.length > 0 && rawResponse[0].json && typeof rawResponse[0].json.output === 'string') {
            newTitle = rawResponse[0].json.output;
          }

          newTitle = newTitle.replace(/"/g, '').trim();
    
          if (newTitle) {
            setConversations(prev => ({
              ...prev,
              [activeConversationId]: {
                ...prev[activeConversationId],
                title: newTitle,
              },
            }));
            const userId = auth.currentUser?.uid;
            await updateConversationTitle(sessionID, newTitle, userId, chatId);
          }
        } catch (error) {
          console.error("Erro ao gerar ou atualizar o título da conversa:", error);
        }
      }
  
    try {
        const payload = {
            question: message,
            sessionID: sessionID,
            ...(documentContext && { context: documentContext })
        };
  
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) throw new Error('Falha na resposta do modelo de IA.');
  
      const aiData = await response.json();
      const aiMessageText = aiData.output || 'Não foi possível obter uma resposta.';
      const botMessage = { text: aiMessageText, sender: 'bot' };
  
      setConversations(prev => {
        const currentConvo = prev[activeConversationId];
        return {
          ...prev,
          [activeConversationId]: { ...currentConvo, messages: [...currentConvo.messages, botMessage] },
        }
      });
      await persistMessage({ message_id: uuidv4(), session_id: sessionID, tipo: 'output', conteudo: aiMessageText });
  
    } catch (error) {
      console.error("Erro ao enviar mensagem para a IA:", error);
      const errorMessage = { text: "Ocorreu um erro de conexão. Tente novamente.", sender: 'bot' };
      setConversations(prev => {
        const currentConvo = prev[activeConversationId];
        return {
          ...prev,
          [activeConversationId]: { ...currentConvo, messages: [...currentConvo.messages, errorMessage] },
        }
      });
    } finally {
      setIsLoading(false);
    }
  }, [activeConversationId, conversations, apiEndpoint, productName, selectedFile, chatId]);

  const sortedConversations = Object.values(conversations).sort((a, b) => new Date(b.criado_em) - new Date(a.criado_em));
  const activeConversation = conversations[activeConversationId];
  
  const shouldShowSuggestions = activeConversationId &&
                                conversations[activeConversationId] &&
                                conversations[activeConversationId].messages.length === 1 &&
                                showSuggestions;

  return (
    <div className={clsx('h-screen flex flex-col font-sans', isDarkMode ? 'bg-deepDark text-stellarWhite' : 'bg-stellarWhite text-deepDark')}>
      <Header 
        title={productName} 
        showBackButton={true} 
        icon={icon} 
        iconColorLight={iconColorLight}
        iconColorDark={iconColorDark}
      />
      <main className="flex-1 flex overflow-hidden">
        <Sidebar
          isSidebarCollapsed={isSidebarCollapsed}
          toggleSidebar={() => setIsSidebarCollapsed(p => !p)}
          conversations={sortedConversations}
          activeConversationId={activeConversationId}
          onNewConversation={handleNewConversation}
          onConversationSelect={handleSelectConversation}
        />
        <section className={clsx('flex-1 flex flex-col', isDarkMode ? 'bg-deepDark' : 'bg-stellarWhite')}>
          <div className="flex-1 overflow-y-auto">
            <ChatArea
              messages={activeConversation ? activeConversation.messages : []}
              isLoading={isLoading || isFileProcessing}
              onSendMessage={handleSendMessage}
              finishedTyping={finishedTyping[activeConversationId] || {}}
              onTypingFinished={(messageIndex) => activeConversationId && handleTypingFinished(activeConversationId, messageIndex)}
              showSuggestions={shouldShowSuggestions}
              suggestionPrompts={suggestionPrompts}
            />
          </div>
          <div className={clsx('p-4 border-t', isDarkMode ? 'bg-deepDark border-darkBorder' : 'bg-stellarWhite border-gray-200')}>
            {selectedFile && (
              <div className="max-w-4xl mx-auto mb-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg flex justify-between items-center text-sm">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <FontAwesomeIcon icon={faPaperclip} className="mr-2" />
                  <span className="truncate">{selectedFile.name}</span>
                </div>
                <button 
                  onClick={() => setSelectedFile(null)} 
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white ml-2"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            )}
            <ChatInput 
              onSendMessage={handleSendMessage} 
              isLoading={isLoading || isFileProcessing}
              onFileChange={setSelectedFile}
              fileSelected={!!selectedFile}
              disabled={!activeConversationId}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProductChatInterface;