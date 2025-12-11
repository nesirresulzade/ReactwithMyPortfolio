import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import '../style/RippleAnimation.css';

const RippleAnimation = React.memo(() => {
  const [ripples, setRipples] = useState([]);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // ✅ Optimizasiya: useCallback ilə createRipple
  const createRipple = useCallback(() => {
    const newRipple = {
      id: Date.now(),
      startTime: Date.now(),
    };
    setRipples((prev) => [...prev, newRipple]);
  }, []);

  useEffect(() => {
    // İlk ripple-i dərhal yarat
    createRipple();

    // Hər 2 saniyədə bir yeni ripple yarat
    intervalRef.current = setInterval(createRipple, 2000);

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [createRipple]);

  // ✅ Optimizasiya: Cleanup interval-i artırıldı (100ms → 500ms)
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setRipples((prev) => {
        const filtered = prev.filter((ripple) => now - ripple.startTime < 3000);
        // Yalnız dəyişiklik varsa update et
        return filtered.length !== prev.length ? filtered : prev;
      });
    }, 500); // ✅ 100ms → 500ms (5 dəfə az tez)

    return () => clearInterval(cleanupInterval);
  }, []);

  // ✅ Optimizasiya: SVG filter-i yalnız bir dəfə render et
  const svgFilter = useMemo(() => (
    <svg className="ripple-svg-mask">
      <defs>
        <filter id="wavy-filter" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.02 0.02" 
            numOctaves="2" 
            result="noise"
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="10"
            result="displacement"
          />
        </filter>
      </defs>
    </svg>
  ), []);

  return (
    <div ref={containerRef} className="ripple-container">
      {svgFilter}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple-wave"
        />
      ))}
    </div>
  );
});

export default RippleAnimation;

