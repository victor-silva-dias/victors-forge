import React, { useState, useEffect, useRef, useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../Quill.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { ThemeContext } from '../context/ThemeContext';

const ChatInputModal = ({ initialValue, onSave, onClose }) => {
  const [modalValue, setModalValue] = useState(initialValue);
  const { isDarkMode } = useContext(ThemeContext);
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      quillRef.current.focus();
    }
  }, []);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  const modalBg = isDarkMode ? 'bg-darkSurface' : 'bg-stellarWhite';
  const textColor = isDarkMode ? 'text-stellarWhite' : 'text-deepDark';
  const borderColor = isDarkMode ? 'border-darkBorder' : 'border-gray-200';

  const handleSaveClick = () => {
    // MODIFICAÇÃO: Salvar o conteúdo HTML completo (modalValue)
    // em vez de apenas o texto simples.
    onSave(modalValue);
  };
  
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean']
    ],
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={clsx('relative flex flex-col w-full max-w-2xl h-3/4 rounded-lg shadow-xl', modalBg)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={clsx("flex items-center justify-between p-4 border-b", borderColor)}>
          <h2 className={clsx('text-lg font-semibold', textColor)}>Editor de Mensagem</h2>
          <button onClick={onClose} className={clsx('p-1 rounded-full hover:bg-gray-500/20', textColor)} title="Fechar (Esc)">
             <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <ReactQuill
            ref={quillRef}
            value={modalValue}
            onChange={setModalValue}
            modules={modules}
            className={clsx('h-full', isDarkMode && 'dark-mode')}
            theme="snow"
            placeholder="Digite sua mensagem detalhada aqui..."
          />
        </div>

        <div className={clsx('flex justify-end p-4 border-t', borderColor)}>
          <button
            onClick={handleSaveClick}
            className="flex items-center justify-center px-6 py-2 font-semibold text-white bg-rocketBlue rounded-md hover:bg-opacity-90 disabled:bg-gray-400"
            // Desabilitar o botão se o conteúdo estiver vazio ou for apenas HTML vazio como <p><br></p>
            disabled={!quillRef.current?.getEditor().getText().trim()}
          >
            <FontAwesomeIcon icon={faFloppyDisk} className="mr-2" />
            <span>Salvar Alterações</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInputModal;
