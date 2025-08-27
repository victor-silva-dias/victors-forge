import React, { useContext } from 'react';
import clsx from 'clsx';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const footerBg = isDarkMode ? 'bg-deepDark' : 'bg-stellarWhite';
  const footerBorder = isDarkMode ? 'border-darkBorder' : 'border-gray-100';

  return (
    <footer className={clsx('w-full py-6 mt-10', footerBg, footerBorder, 'border-t')}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/logo-apolus/escudo_logo.svg" alt="Apolus Logo" className="w-8 h-8 mr-2" />
            <span className="text-sm text-naveGray">© 2025 Apolus. Todos os direitos reservados.</span>
          </div>
          <div className="flex space-x-6">
            <span className="text-sm text-naveGray hover:text-rocketBlue cursor-pointer">Termos de Uso</span>
            <span className="text-sm text-naveGray hover:text-rocketBlue cursor-pointer">Política de Privacidade</span>
            <span className="text-sm text-naveGray hover:text-rocketBlue cursor-pointer">Suporte</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
