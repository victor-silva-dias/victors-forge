import React, { useState, useContext, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner, faShieldAlt, faExpand, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import TextareaAutosize from 'react-textarea-autosize';
import { htmlToText } from 'html-to-text';
import { ThemeContext } from '../context/ThemeContext';
import ChatInputModal from './ChatInputModal';
import mixpanel from '../mixpanel';

function ChatInput({ onSendMessage, isLoading, onFileChange, fileSelected }) {
  const { isDarkMode } = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState('');
  const [htmlValue, setHtmlValue] = useState(''); // Estado para o conteúdo HTML
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // Se o usuário digitar, reseta o valor HTML.
    if (htmlValue) {
      setHtmlValue('');
    }
  };

  const handleSend = () => {
    // Prioriza o envio do HTML se ele existir, senão usa o texto simples.
    const contentToSend = htmlValue || inputValue;
    if ((contentToSend.trim() || fileSelected) && !isLoading) {
      onSendMessage(contentToSend);
      setInputValue('');
      setHtmlValue('');
      // Reset the file input visually, although the parent state handles the actual file.
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    mixpanel.track('Chat Input Modal Opened');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSave = (newContentAsHtml) => {
    setHtmlValue(newContentAsHtml);
    // Converte o HTML para texto simples apenas para exibição na textarea
    const plainText = htmlToText(newContentAsHtml, {
      wordwrap: false,
      selectors: [
        { selector: 'a', options: { ignoreHref: true } },
        { selector: 'img', format: 'skip' },
      ],
    });
    setInputValue(plainText);
    closeModal();
    mixpanel.track('Chat Input Modal Saved');
  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileChange(file);
      mixpanel.track('File Attached', {
        'File Name': file.name,
        'File Size': file.size,
        'File Type': file.type,
      });
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current.click();
  };


  const inputBg = isDarkMode ? 'bg-darkSurface' : 'bg-gray-100';
  const inputText = isDarkMode ? 'text-stellarWhite' : 'text-deepDark';
  const iconButtonColor = isDarkMode ? 'text-gray-400 hover:text-stellarWhite' : 'text-gray-500 hover:text-rocketBlue';
  const borderColor = isDarkMode ? 'border-darkBorder' : 'border-gray-300';
  const footerTextColor = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  // O modal deve sempre editar a versão mais recente, seja HTML ou texto.
  const modalInitialValue = htmlValue || inputValue;

  return (
    <>
      <div className="relative flex items-center max-w-4xl mx-auto">
        <input 
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".pdf,.doc,.docx,.txt,.md"
          disabled={isLoading || fileSelected}
        />
        <TextareaAutosize
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem ou anexe um arquivo..."
          className={clsx(
            'w-full', 'p-3', 'pl-12', 'pr-20', 'text-base', 'rounded-lg', 'border',
            'focus:outline-none', 'focus:ring-2', 'focus:ring-rocketBlue', 'transition',
            inputBg, inputText, borderColor
          )}
          minRows={1}
          maxRows={6}
          disabled={isLoading}
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={handleAttachClick}
              disabled={isLoading || fileSelected}
              className={clsx(
                'transition-colors', iconButtonColor, 
                (isLoading || fileSelected) && 'opacity-50 cursor-not-allowed'
              )}
              title="Anexar arquivo"
            >
              <FontAwesomeIcon icon={faPaperclip} />
            </button>
        </div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-3">
          <button
            onClick={openModal}
            className={clsx('transition-colors', iconButtonColor)}
            title="Expandir editor"
          >
            <FontAwesomeIcon icon={faExpand} />
          </button>
          <button
            onClick={handleSend}
            className={clsx(
              'transition-colors', 'disabled:opacity-50', iconButtonColor
            )}
            disabled={isLoading || (!inputValue.trim() && !fileSelected)}
            title="Enviar mensagem"
          >
            {isLoading ? (
              <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            ) : (
              <FontAwesomeIcon icon={faPaperPlane} />
            )}
          </button>
        </div>
      </div>
      <div className={clsx('text-xs', 'text-center', 'mt-2', footerTextColor)}>
        <FontAwesomeIcon icon={faShieldAlt} className="mr-1" />
        Seus dados estão protegidos.
      </div>
      {isModalOpen && (
        <ChatInputModal
          initialValue={modalInitialValue}
          onSave={handleModalSave}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default ChatInput;
