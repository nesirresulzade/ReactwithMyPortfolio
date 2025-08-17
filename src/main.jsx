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
  once: true,
  offset: 50,
  mirror: false,
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
  tablet: true
});

// Mobile və tablet üçün AOS-u yenilə
window.addEventListener('resize', () => {
  AOS.refresh();
});

// Touch events üçün AOS-u yenilə
window.addEventListener('touchstart', () => {
  AOS.refresh();
}, { passive: true });

createRoot(document.getElementById('root')).render(
    <App />
)
