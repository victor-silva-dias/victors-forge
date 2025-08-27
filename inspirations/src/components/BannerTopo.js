import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

const BannerTopo = ({ mensagem, textoDoBotao, acaoDoBotao, isDarkMode }) => {
  const [visivel, setVisivel] = useState(true);
  const navigate = useNavigate();

  const handleAction = () => {
    if (typeof acaoDoBotao === 'function') {
      acaoDoBotao();
    } else {
      navigate(acaoDoBotao);
    }
  };
  
  const handleClose = () => {
    setVisivel(false);
    // Optional: sessionStorage can be used here to keep it hidden for the session
    sessionStorage.setItem('bannerD7Closed', 'true');
  };

  if (!visivel) {
    return null;
  }
  
  // Check session storage on initial render
  if (sessionStorage.getItem('bannerD7Closed') === 'true') {
      return null;
  }

  return (
    <div className={clsx(
        "w-full p-3 flex items-center justify-center text-sm font-medium z-40",
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-yellow-400 text-gray-900'
    )}>
      <p>{mensagem}</p>
      <button
        onClick={handleAction}
        className="ml-4 underline hover:opacity-80 font-bold"
      >
        {textoDoBotao}
      </button>
      <button onClick={handleClose} className="absolute right-4 top-1/2 -translate-y-1/2">
        <XMarkIcon className="h-5 w-5"/>
      </button>
    </div>
  );
};

export default BannerTopo;
