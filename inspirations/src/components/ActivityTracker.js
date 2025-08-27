import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import mixpanel from '../mixpanel';

const ActivityTracker = ({ children }) => {
  const navigate = useNavigate();
  const startTimeRef = useRef(Date.now());
  const idleTimer = useRef(null);

  // This effect handles the session lifecycle: start and end.
  useEffect(() => {
    // Record the start time when the component mounts.
    startTimeRef.current = Date.now();

    // Return a cleanup function to run when the component unmounts.
    return () => {
      // const sessionDuration = (Date.now() - startTimeRef.current) / 1000;
    };
  }, []); // The empty dependency array ensures this runs only on mount and unmount.

  // This effect handles the idle timer for automatic logout.
  useEffect(() => {
    const resetTimer = () => {
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
      idleTimer.current = setTimeout(() => {
        // const sessionDurationInSeconds = (Date.now() - startTimeRef.current) / 1000;
        // const sessionDurationInMinutes = Math.round(sessionDurationInSeconds / 60);
        // mixpanel.track('Sessão Expirada por Inatividade', { "Duração da Sessão (minutos)": sessionDurationInMinutes });
        navigate('/login');
      }, 15 * 60 * 1000); // 15 minutes
    };

    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart'];
    events.forEach(event => window.addEventListener(event, resetTimer));
    resetTimer(); // Initial call

    return () => {
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
      events.forEach(event => window.removeEventListener(event, resetTimer));
    };
  }, [navigate]);

  return <>{children}</>;
};

export default ActivityTracker;
