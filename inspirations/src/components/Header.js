import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from './DarkModeToggle';
import LogoutButton from './LogoutButton';
import TrialBadge from './TrialBadge'; // Import the new badge component
import { ThemeContext } from '../context/ThemeContext';
import './Tooltip.css';

const Header = ({ title, showBackButton = false, icon, iconSrc, iconAlt, iconColorLight, iconColorDark }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const headerBg = isDarkMode ? 'bg-deepDark' : 'bg-stellarWhite';
  const headerBorder = isDarkMode ? 'border-darkBorder' : 'border-gray-200';
  const subtitleColor = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const titleColor = isDarkMode ? 'text-white' : 'text-black';

  const renderIcon = () => {
    if (icon) {
      const iconColor = isDarkMode ? iconColorDark : iconColorLight;
      return (
        <div className={clsx('w-10 h-10 flex items-center justify-center rounded-full mr-3', isDarkMode ? 'bg-gray-800' : 'bg-gray-200')}>
            <FontAwesomeIcon icon={icon} className={clsx('text-lg', iconColor)} />
        </div>
      );
    }
    if (iconSrc) {
      return <img src={iconSrc} alt={iconAlt} className="w-8 h-8 mr-3" />;
    }
    return null;
  };

  return (
    <header className={clsx(headerBg, 'border-b', headerBorder, 'shadow-sm')}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side */}
        <div className="flex-1 flex justify-start items-center">
          {showBackButton && (
            <button onClick={() => navigate('/catalogo')} className="mr-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <FontAwesomeIcon icon={faArrowLeft} className={clsx('w-5 h-5', isDarkMode ? 'text-white' : 'text-black')} />
            </button>
          )}
          {renderIcon()}
          {title && <h1 className={clsx('text-xl font-semibold', titleColor)}>{title}</h1>}
          <div className="flex items-center space-x-3 ml-3">
            <TrialBadge />
            <div className="tooltip">
              <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Closed Beta</span>
              <span className="tooltiptext">Você está entre os primeiros a experimentar a Plataforma Apolus. Novas funcionalidades são adicionadas toda semana. Seu feedback é essencial para nós!</span>
            </div>
          </div>
        </div>

        {/* Center: Title */}
        <div className="text-center">
             <img
                src={isDarkMode ? "/logo-apolus/nome_logo_dark.svg" : "/logo-apolus/nome_logo_light.svg"}
                alt="Nome Apolus"
                className="h-6 mx-auto"
                />
            <p className={clsx('text-sm', subtitleColor)}>Plataforma de Inteligência Jurídica</p>
        </div>

        {/* Right side: Buttons */}
        <div className="flex-1 flex justify-end items-center space-x-4">
            <LogoutButton />
            <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;