import React from 'react';
import '../style/Button.css';

// size: 'xs' | 'sm' | 'md' | 'lg'
// variant: 'filled' | 'outline'
// color: 'dark' | 'light'
function Button({
  label,
  onClick,
  type = 'button',
  size = 'sm',
  variant = 'outline',
  color = 'dark',
  className = '',
  style = {},
  disabled = false,
}) {
  const sizeTokens = {
    xs: { py: '0.3rem', px: '0.7rem', fs: '0.78rem', radius: '9999px' },
    sm: { py: '0.4rem', px: '0.9rem', fs: '0.85rem', radius: '9999px' },
    md: { py: '0.5rem', px: '1.1rem', fs: '0.92rem', radius: '1.6rem' },
    lg: { py: '0.6rem', px: '1.3rem', fs: '0.98rem', radius: '1.8rem' },
  };

  const palette = {
    dark: {
      filled: { bg: '#000', color: '#fff', border: '#000', hoverBg: '#111', hoverColor: '#fff' },
      outline: { bg: '#fff', color: '#000', border: '#000', hoverBg: '#000', hoverColor: '#fff' },
    },
    light: {
      filled: { bg: '#fff', color: '#000', border: '#ddd', hoverBg: '#f5f5f5', hoverColor: '#000' },
      outline: { bg: 'transparent', color: '#000', border: '#ccc', hoverBg: '#f7f7f7', hoverColor: '#000' },
    },
  };

  const sz = sizeTokens[size] || sizeTokens.sm;
  const pal = (palette[color] && palette[color][variant]) || palette.dark.outline;

  const composedClassName = `nsr-btn nsr-btn--${variant} ${className}`.trim();
  const cssVars = {
    '--btn-padding-y': sz.py,
    '--btn-padding-x': sz.px,
    '--btn-radius': sz.radius,
    '--btn-font-size': sz.fs,
    '--btn-bg': pal.bg,
    '--btn-color': pal.color,
    '--btn-border-color': pal.border,
    '--btn-hover-bg': pal.hoverBg,
    '--btn-hover-color': pal.hoverColor,
    ...style,
  };

  return (
    <button type={type} className={composedClassName} onClick={onClick} style={cssVars} disabled={disabled}>
      <span className="nsr-btn__label">{label}</span>
    </button>
  );
}

export default Button;


