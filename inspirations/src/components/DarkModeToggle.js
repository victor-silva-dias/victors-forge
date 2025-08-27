import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { ThemeContext } from '../context/ThemeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className={clsx(
        'relative w-14 h-7 rounded-full transition-colors duration-500 ease-in-out focus:outline-none',
        'flex items-center', // Ensures vertical alignment
        isDarkMode ? 'bg-gray-800' : 'bg-blue-400'
      )}
      aria-label="Toggle dark mode"
    >
      <div
        className={clsx(
          'absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-transform duration-500 ease-in-out',
          isDarkMode ? 'translate-x-7' : 'translate-x-0'
        )}
      >
        <FontAwesomeIcon
          icon={faSun}
          className={clsx(
            'text-yellow-500 transition-all duration-500 ease-in-out',
            isDarkMode ? 'opacity-0 transform -rotate-90' : 'opacity-100 transform rotate-0'
          )}
        />
        <FontAwesomeIcon
          icon={faMoon}
          className={clsx(
            'absolute text-gray-800 transition-all duration-500 ease-in-out',
            isDarkMode ? 'opacity-100 transform rotate-0' : 'opacity-0 transform rotate-90'
          )}
        />
      </div>
    </button>
  );
};

export default DarkModeToggle;