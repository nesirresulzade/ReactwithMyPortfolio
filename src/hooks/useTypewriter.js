import { useState, useEffect, useRef } from 'react';

export function useTypewriter(text, speed = 100, delay = 0) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!text) return;
    
    setDisplayedText('');
    setIsComplete(false);
    
    // Clear any existing intervals/timeouts
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      let index = 0;
      
      intervalRef.current = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.substring(0, index));
          index++;
        } else {
          setIsComplete(true);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      }, speed);
    }, delay);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed, delay]);
  
  return { displayedText, isComplete };
}

