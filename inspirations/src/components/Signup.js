import React, { useContext } from 'react';
import clsx from 'clsx';
import SignupForm from './SignupForm';
import Logo from './Logo';
import { ThemeContext } from '../context/ThemeContext';
import DarkModeToggle from './DarkModeToggle';

function Signup() {
  const { isDarkMode } = useContext(ThemeContext);

  const bgColor = isDarkMode ? 'bg-deepDark' : 'bg-stellarWhite';
  const textColor = isDarkMode ? 'text-stellarWhite' : 'text-deepDark';

  return (
    <div className={clsx(bgColor, textColor, 'min-h-screen flex flex-col font-sans')}>
      <div className="absolute top-4 right-4 z-50">
        <DarkModeToggle />
      </div>
      <main className="flex-1 flex items-center justify-center">
        <div id="auth-container" className="w-full max-w-md">
          <Logo />
          <SignupForm />
        </div>
      </main>
    </div>
  );
}

export default Signup;
