import React, { useContext } from 'react';
import clsx from 'clsx';
import AuthForm from './AuthForm';
import Logo from './Logo';
import { ThemeContext } from '../context/ThemeContext';
import DarkModeToggle from './DarkModeToggle';

// This component is now purely presentational.
// It doesn't contain any navigation or auth state logic.
// App.js is solely responsible for routing decisions.
function Login() {
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
          <AuthForm />
        </div>
      </main>
    </div>
  );
}

export default Login;
