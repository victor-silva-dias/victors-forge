import React, { useRef, useEffect, memo, useCallback, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faCopy } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import TypingEffect from './TypingEffect';
import { ThemeContext } from '../context/ThemeContext';
import mixpanel from '../mixpanel';

const MessageContent = memo(({ msg, isLastMessage, isLoading, hasFinishedTyping, onTypingFinished, index }) => {
  if (isLastMessage && !isLoading && !hasFinishedTyping) {
    return <TypingEffect text={String(msg.text)} onFinished={() => onTypingFinished(index)} />;
  }
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{String(msg.text)}</ReactMarkdown>;
});

const BotMessage = memo(({ msg, index, isLoading, isLastMessage, hasFinishedTyping, onTypingFinished, onCopy, onSuggestionClick, showSuggestions, suggestionPrompts }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const aiMessageText = isDarkMode ? 'text-stellarWhite' : 'text-deepDark';
  
  const showFeedbackButtons = index > 0 && (hasFinishedTyping || !isLastMessage);

  const handleLike = () => {
    mixpanel.track('Like Response');
  };

  const handleDislike = () => {
    mixpanel.track('Dislike Response');
  };

  return (
    <div className={clsx(aiMessageText, 'noselect')}>
      <div className={clsx('prose max-w-none', isDarkMode ? 'dark:prose-invert' : 'prose-light')}>
        <MessageContent 
          msg={msg}
          isLastMessage={isLastMessage}
          isLoading={isLoading}
          hasFinishedTyping={hasFinishedTyping}
          onTypingFinished={onTypingFinished}
          index={index}
        />
      </div>

      {showSuggestions && suggestionPrompts && suggestionPrompts.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {suggestionPrompts.map((suggestion, i) => (
            <button
              key={i}
              onClick={() => onSuggestionClick(suggestion)}
              className="bg-gray-200 dark:bg-darkSurface text-sm text-gray-800 dark:text-darkText rounded-full px-4 py-2 hover:bg-gray-300 dark:hover:bg-darkCard transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      {showFeedbackButtons && (
        <div className="flex items-center space-x-3 pt-2 border-t border-gray-100 dark:border-gray-700 mt-2">
          <button onClick={handleLike} className={clsx('flex items-center space-x-1 text-naveGray transition-colors py-1', isDarkMode ? 'hover:text-stellarWhite' : 'hover:text-rocketBlue')}>
            <FontAwesomeIcon icon={faThumbsUp} className="text-sm" />
            <span className="text-sm">Útil</span>
          </button>
          <button onClick={handleDislike} className={clsx('flex items-center space-x-1 text-naveGray transition-colors py-1', isDarkMode ? 'hover:text-stellarWhite' : 'hover:text-red-500')}>
            <FontAwesomeIcon icon={faThumbsDown} className="text-sm" />
            <span className="text-sm">Não útil</span>
          </button>
          <button onClick={() => onCopy(msg.text)} className={clsx('flex items-center space-x-1 text-naveGray transition-colors py-1', isDarkMode ? 'hover:text-stellarWhite' : 'hover:text-rocketBlue')}>
            <FontAwesomeIcon icon={faCopy} className="text-sm" />
            <span className="text-sm">Copiar</span>
          </button>
        </div>
      )}
    </div>
  );
});

// Memoized UserMessage Component
const UserMessage = memo(({ msg }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const userBubbleBg = 'bg-rocketBlue';
  const userBubbleText = 'text-stellarWhite';
  // Use a classe 'prose' para estilizar o HTML e 'prose-invert' para o modo escuro
  const proseTheme = isDarkMode ? 'prose-invert' : 'prose-light';

  return (
    <div className={clsx('rounded-lg px-4 py-3 max-w-2xl ml-auto', userBubbleBg, userBubbleText)}>
      <div 
        className={clsx('prose', proseTheme, userBubbleText)}
        dangerouslySetInnerHTML={{ __html: msg.text }} 
      />
    </div>
  );
});

// Main ChatArea Component
const ChatArea = ({ messages, isLoading, onSendMessage, finishedTyping, onTypingFinished, showSuggestions, suggestionPrompts = [] }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, finishedTyping]);

  const handleCopy = useCallback((text) => {
    navigator.clipboard.writeText(text);
    mixpanel.track('Copy Response');
  }, []);

  const handleSuggestionClick = useCallback((suggestion) => {
    if (onSendMessage) {
      onSendMessage(suggestion);
    }
  }, [onSendMessage]);

  return (
    <div id="chat-messages" className="flex-1 p-6 overflow-y-auto max-w-4xl mx-auto w-full">
      {messages.map((msg, index) => {
        return (
          <div key={index} className="mb-6">
            {msg.sender === 'bot' ? (
              <BotMessage
                msg={msg}
                index={index}
                isLoading={isLoading}
                isLastMessage={index === messages.length - 1}
                hasFinishedTyping={!!finishedTyping[index]}
                onTypingFinished={onTypingFinished}
                onCopy={handleCopy}
                onSuggestionClick={handleSuggestionClick}
                showSuggestions={showSuggestions && index === 0}
                suggestionPrompts={suggestionPrompts}
              />
            ) : (
              <UserMessage msg={msg} />
            )}
          </div>
        );
      })}
      {isLoading && (
        <div className="mb-6">
          <div className={isDarkMode ? 'text-stellarWhite' : 'text-deepDark'}>
            <div className="inline-flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-fast"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-medium mx-1"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      )}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatArea;