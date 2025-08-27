import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { ThemeContext } from '../context/ThemeContext';

const ApolusAcademyBanner = ({ title, description, buttonText, onClick }) => {
    const { isDarkMode } = useContext(ThemeContext);

    // Default values to prevent rendering errors if props are not passed
    const displayTitle = title || "Apolus Academy";
    const displayDescription = description || "Cursos e materiais para aprimorar sua prática jurídica com IA. Em breve.";
    const displayButtonText = buttonText || "Saiba Mais";

    return (
        <div
            onClick={onClick}
            className={clsx(
                'rounded-lg p-8 mb-12 w-full text-center transition-all duration-300 cursor-pointer group',
                isDarkMode
                    ? 'bg-gray-800 border border-transparent hover:border-apolusBlue'
                    : 'bg-blue-50 border border-blue-200 hover:border-apolusBlue'
            )}
        >
            <FontAwesomeIcon icon={faGraduationCap} className="text-4xl mb-4 text-apolusBlue" />
            <h3 className={clsx('font-bold text-2xl mb-2', isDarkMode ? 'text-stellarWhite' : 'text-deepDark')}>
                {displayTitle}
            </h3>
            <p className={clsx('text-md mb-4 max-w-3xl mx-auto', isDarkMode ? 'text-gray-300' : 'text-gray-600')}>
                {displayDescription}
            </p>
            <div className="inline-flex items-center font-semibold transition-transform group-hover:translate-x-1 text-apolusBlue">
                <span>{displayButtonText}</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </div>
        </div>
    );
};

export default ApolusAcademyBanner;
