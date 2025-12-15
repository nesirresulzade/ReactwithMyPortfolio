import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.jsx';

// AOS-u quraşdır
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true, // ✅ Optimizasiya: bir dəfə animasiya
  offset: 50,
  mirror: false, // ✅ Optimizasiya: mirror deaktiv
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  // Mobile optimizations
  mobile: true,
  tablet: true,
  // Performance optimizations
  anchorPlacement: 'top-bottom'
});

// ✅ Optimizasiya: Debounced resize handler
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
  AOS.refresh();
  }, 300); // 300ms debounce
}, { passive: true });

// ✅ Optimizasiya: Throttled scroll handler (yalnız lazım olduqda)
let scrollTimeout;
let lastScrollTime = 0;
window.addEventListener('scroll', () => {
  const now = Date.now();
  if (now - lastScrollTime > 500) { // 500ms throttle
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    AOS.refresh();
      lastScrollTime = now;
    }, 200);
  }
}, { passive: true });

createRoot(document.getElementById('root')).render(
    <App />
)
