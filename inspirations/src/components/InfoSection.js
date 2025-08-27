import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { ThemeContext } from '../context/ThemeContext';

const InfoSection = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const infoSectionBg = isDarkMode ? 'bg-darkCard' : 'bg-gray-50';

  return (
    <div
      className={clsx(
        'mt-12 rounded-lg p-6',
        infoSectionBg,
        isDarkMode ? 'shadow-lg border border-darkBorder' : 'shadow-sm'
      )}
    >
      <div className="flex items-start">
        <div className="mr-4 mt-1">
          <FontAwesomeIcon icon={faCircleInfo} className="text-rocketBlue" />
        </div>
        <div>
          <h3 className={clsx('text-lg font-semibold mb-2', isDarkMode ? 'text-stellarWhite' : 'text-deepDark')}>
            Sua Equipe de Inteligência Jurídica
          </h3>
          <p className="text-naveGray mb-3 font-medium">
            As Centrais da Apolus.ai operam como verdadeiras{' '}
            <strong className={clsx(isDarkMode ? 'text-stellarWhite' : 'text-deepDark')}>equipes de especialistas</strong>,
            cada uma dedicada a diferentes áreas do Direito.
          </p>
          <p className="text-naveGray font-medium">
            Por meio de{' '}
            <strong className={clsx(isDarkMode ? 'text-stellarWhite' : 'text-deepDark')}>IAs orquestradas</strong> que
            consultam e cruzam vastas bases de dados e a legislação brasileira atualizada, entregamos respostas precisas,
            contextualizadas e totalmente <strong className="text-rocketBlue">livres das 'alucinações'</strong> de IAs
            genéricas, garantindo a você o conhecimento jurídico mais confiável e eficiente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
