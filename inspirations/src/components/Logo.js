import React, { useContext } from 'react';
import clsx from 'clsx';
import { ThemeContext } from '../context/ThemeContext';

const Logo = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div id="logo-section" className="flex justify-center mb-8">
        <img src="/logo-apolus/escudo_logo.svg" alt="Apolus Logo" className="w-16 h-16" />
      </div>
      <div id="brand-section" className="text-center mb-8">
        <img 
          src={isDarkMode ? "/logo-apolus/nome_logo_dark.svg" : "/logo-apolus/nome_logo_light.svg"} 
          alt="Apolus" 
          className="w-40 mx-auto"
        />
        <p className="text-sm text-naveGray font-medium">Plataforma de Inteligência Jurídica</p>
      </div>
    </>
  );
};

export default Logo;
