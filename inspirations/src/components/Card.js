import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTractor } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { ThemeContext } from '../context/ThemeContext';

const Card = ({
  title,
  description,
  icon,
  isAvailable,
  onClick,
  children,
  className,
}) => {
  const { isDarkMode } = useContext(ThemeContext);

  const cardBorder = isDarkMode ? 'border-darkBorder' : 'border-gray-100';

  // If Card is used as a generic container, render children.
  if (children) {
    return (
      <div className={clsx(
        'rounded-lg border',
        cardBorder,
        className, // Use className from props
      )}>
        {children}
      </div>
    );
  }

  const cardBg = isDarkMode ? 'bg-darkCard' : 'bg-stellarWhite';
  const cardHoverBg = isDarkMode ? 'hover:bg-darkHover' : 'hover:shadow-md';
  const availableTagBg = isDarkMode
    ? 'bg-rocketBlue text-stellarWhite'
    : 'bg-rocketBlue bg-opacity-5 text-rocketBlue';

  const constructionTagStyle = isDarkMode
    ? 'bg-yellow-500 bg-opacity-10 text-yellow-500'
    : 'bg-yellow-100 text-yellow-800';

  // Original Card logic for catalog items
  return (
    <div
      className={clsx(
        'rounded-lg p-6 border flex flex-col justify-between',
        isAvailable ? 'border-rocketBlue' : cardBorder,
        cardBg,
        isDarkMode && isAvailable ? 'shadow-lg' : 'shadow-sm',
        cardHoverBg,
        'transition-all duration-200',
        isAvailable ? 'cursor-pointer' : 'cursor-default',
        className
      )}
      onClick={isAvailable ? onClick : undefined}
    >
      <div>
        <div className="flex items-center mb-4">
          <div
            className={clsx(
              'w-10 h-10 rounded-full flex items-center justify-center mr-3',
              isAvailable
                ? isDarkMode
                  ? 'bg-rocketBlue'
                  : 'bg-rocketBlue bg-opacity-10'
                : isDarkMode
                ? 'bg-darkSurface'
                : 'bg-gray-100'
            )}
          >
            <FontAwesomeIcon
              icon={icon}
              className={clsx(
                isAvailable
                  ? isDarkMode
                    ? 'text-stellarWhite'
                    : 'text-rocketBlue'
                  : 'text-naveGray'
              )}
            />
          </div>
          <h3
            className={clsx(
              'text-lg font-semibold',
              isAvailable
                ? isDarkMode
                  ? 'text-stellarWhite'
                  : 'text-deepDark'
                : 'text-naveGray'
            )}
          >
            {title}
          </h3>
        </div>
        <p className="text-naveGray mb-6">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-auto">
        {isAvailable ? (
          <>
            <span className={clsx('text-xs font-medium px-3 py-1 rounded-full', availableTagBg)}>
              Disponível
            </span>
            <button
              className={clsx(
                'transition-all text-rocketBlue',
                { 'hover:brightness-110': isDarkMode },
                { 'hover:text-opacity-80': !isDarkMode }
              )}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </>
        ) : (
          <div className={clsx(
            'flex items-center px-3 py-1 rounded-full',
            constructionTagStyle
          )}>
            <FontAwesomeIcon icon={faTractor} className="mr-2" />
            <span className="text-xs font-semibold">Em construção</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
