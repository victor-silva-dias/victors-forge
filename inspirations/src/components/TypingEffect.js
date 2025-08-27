import React, { useState, useEffect, useCallback, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const TypingEffect = ({ text, onFinished }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const handleTyping = useCallback(() => {
    setIsTyping(true);
    if (text) {
      let i = 0;
      setDisplayedText('');
      const intervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
          if (onFinished) {
            onFinished();
          }
        }
      }, 5);
      return () => clearInterval(intervalId);
    }
  }, [text, onFinished]);

  useEffect(() => {
    const cleanup = handleTyping();
    return cleanup;
  }, [handleTyping]);

  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{`${displayedText}${isTyping ? '▍' : ''}`}</ReactMarkdown>;
};

export default memo(TypingEffect);
