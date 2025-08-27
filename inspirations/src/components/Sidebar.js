import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faComment, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { ThemeContext } from '../context/ThemeContext';

const Sidebar = ({ isSidebarCollapsed, toggleSidebar, conversations, activeConversationId, onNewConversation, onConversationSelect }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isTemporarilyExpanded, setIsTemporarilyExpanded] = useState(false);
  const sidebarBg = isDarkMode ? 'bg-darkSurface' : 'bg-gray-100';
  const textColor = isDarkMode ? 'text-stellarWhite' : 'text-deepDark';
  const hoverBg = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200';
  const activeBg = isDarkMode ? 'bg-gray-700' : 'bg-gray-200';

  const isExpanded = !isSidebarCollapsed || isTemporarilyExpanded;

  const handleMouseEnter = () => {
    if (isSidebarCollapsed) {
      setIsTemporarilyExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    setIsTemporarilyExpanded(false);
  };

  return (
    <aside
      className={clsx(
        sidebarBg,
        textColor,
        'flex flex-col transition-all duration-300 ease-in-out z-10',
        {
          'w-64': isExpanded,
          'w-20': !isExpanded,
        }
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-4 flex items-center justify-between">
        {isExpanded && <h2 className="text-lg font-semibold">Conversas</h2>}
        <button onClick={toggleSidebar} className={clsx('p-2 rounded-md', hoverBg)}>
          <FontAwesomeIcon icon={isSidebarCollapsed ? faBars : faTimes} />
        </button>
      </div>

      <div className="px-4 py-2">
        <button
          onClick={onNewConversation}
          className="w-full flex items-center justify-center p-3 rounded-md bg-rocketBlue text-stellarWhite hover:bg-opacity-90 transition-all duration-200"
        >
          <FontAwesomeIcon icon={faPlus} className={clsx({ 'mr-2': isExpanded })} />
          {isExpanded && <span>Nova Conversa</span>}
        </button>
      </div>

      <nav className="flex-1 mt-4 overflow-y-auto">
        <ul>
          {conversations.map((convo) => (
            <li key={convo.id} className="px-2 mb-1">
              <button
                onClick={() => onConversationSelect(convo.id)}
                className={clsx(
                  'w-full text-left p-3 rounded-md transition-colors duration-200 truncate flex items-center',
                  {
                    [activeBg]: activeConversationId === convo.id,
                    [hoverBg]: activeConversationId !== convo.id,
                  }
                )}
              >
                <FontAwesomeIcon icon={faComment} className={clsx('transition-all', {
                  'mr-3': isExpanded,
                  'mx-auto text-lg': !isExpanded
                })} />
                {isExpanded && convo.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
