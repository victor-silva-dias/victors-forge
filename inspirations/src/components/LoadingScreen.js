import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const LoadingScreen = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const LightLogo = process.env.PUBLIC_URL + '/logo-apolus/central_logo_light.svg';
  const DarkLogo = process.env.PUBLIC_URL + '/logo-apolus/central_logo_dark.svg';

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${isDarkMode ? 'bg-deepDark' : 'bg-stellarWhite'}`}>
      <img 
        src={isDarkMode ? DarkLogo : LightLogo} 
        alt="Apolus Logo" 
        className="w-48 h-48 animate-pulse" 
      />
      <p className={`mt-4 text-lg font-semibold ${isDarkMode ? 'text-stellarWhite' : 'text-deepDark'}`}>
        Verificando acesso...
      </p>
    </div>
  );
};

export default LoadingScreen;
