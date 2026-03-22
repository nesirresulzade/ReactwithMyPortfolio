import React from 'react';
import '../style/animatedBorder.css';

/**
 * AnimatedBorder Component
 * Provides a premium, performant rotating gradient border.
 * 
 * @param {React.ReactNode} children - Content to wrap
 * @param {string} color1 - First gradient color
 * @param {string} color2 - Second gradient color
 * @param {string} borderRadius - Border radius for the container
 * @param {string} thickness - Border thickness
 * @param {string} className - Additional CSS classes
 */
const AnimatedBorder = ({
  children,
  color1 = '#5227FF',
  color2 = '#FF00FF',
  borderRadius = '32px',
  thickness = '2px',
  className = '',
  style = {}
}) => {
  const containerStyle = {
    '--border-radius': borderRadius,
    '--border-thickness': thickness,
    '--color-1': color1,
    '--color-2': color2,
    ...style
  };

  return (
    <div 
      className={`animated-border-container ${className}`} 
      style={containerStyle}
    >
      <div className="animated-border-glow" aria-hidden="true" />
      <div className="animated-border-inner">
        {children}
      </div>
    </div>
  );
};

export default React.memo(AnimatedBorder);
