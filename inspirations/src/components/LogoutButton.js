import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { getAuth, signOut } from 'firebase/auth';
import clsx from 'clsx';
import { ThemeContext } from '../context/ThemeContext';

const LogoutButton = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      // The ActivityTracker component will automatically handle tracking 'Session End'
      // with the correct duration when the user is signed out and the component unmounts.
      // No need to manually track a 'Logout' event here.
      await signOut(auth);
      localStorage.removeItem('visualizouModalBoasVindas');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const hoverBg = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200';
  const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  return (
    <button
      onClick={handleLogout}
      className={clsx(
        'flex items-center p-2 rounded-md transition-colors duration-200',
        textColor,
        hoverBg
      )}
      title="Logout"
    >
      <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
