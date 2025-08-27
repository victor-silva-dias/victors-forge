import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import clsx from 'clsx';

const ModalNotificacao = ({
  titulo,
  mensagem,
  textoDoBotao,
  acaoDoBotao,
  onClose,
  isDarkMode,
  videoUrl,
}) => {
  const navigate = useNavigate();

  const handleAction = () => {
    if (typeof acaoDoBotao === 'function') {
      acaoDoBotao();
    } else {
      navigate(acaoDoBotao);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <Card className={clsx(
        "w-full flex flex-col",
        videoUrl ? "max-w-4xl h-[90vh] max-h-[700px]" : "max-w-md",
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      )}>
        <div className="p-6 flex-shrink-0">
          <h2 className={clsx("text-2xl font-bold", isDarkMode ? 'text-white' : 'text-gray-900')}>{titulo}</h2>
        </div>

        <div className={clsx("px-6", videoUrl ? "flex-grow relative" : "pb-6")}>
          {videoUrl ? (
            <iframe
              src={videoUrl}
              title={titulo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          ) : (
            <p className={clsx("mb-6", isDarkMode ? 'text-gray-300' : 'text-gray-600')}>{mensagem}</p>
          )}
        </div>

        <div className="p-6 flex justify-end space-x-4 flex-shrink-0">
          <button
            onClick={onClose}
            className={clsx(
              "px-4 py-2 rounded-md font-semibold text-sm",
              "focus:outline-none focus:ring-2 focus:ring-offset-2",
              isDarkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400'
            )}
          >
            Fechar
          </button>
          {textoDoBotao && acaoDoBotao && (
            <button
              onClick={handleAction}
              className="px-4 py-2 bg-rocketBlue text-white rounded-md font-semibold text-sm hover:bg-rocketBlue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rocketBlue"
            >
              {textoDoBotao}
            </button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ModalNotificacao;
