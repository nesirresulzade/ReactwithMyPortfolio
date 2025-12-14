import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PhoneMockup = ({ children, index = 0 }) => {
  const ref = React.useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div 
      ref={ref}
      className="phone-mockup-wrapper"
      style={{
        rotateY: prefersReducedMotion ? 0 : rotateY,
        y: prefersReducedMotion ? 0 : y,
      }}
    >
      <div className="phone-frame">
        <div className="phone-screen">
          {children}
        </div>
        <div className="phone-notch"></div>
        <div className="phone-home-indicator"></div>
      </div>
    </motion.div>
  );
};

export default React.memo(PhoneMockup);

