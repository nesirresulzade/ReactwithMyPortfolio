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
  once: false,
  offset: 50,
  mirror: true,
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

// Mobile və tablet üçün AOS-u yenilə
window.addEventListener('resize', () => {
  AOS.refresh();
});

// Touch events üçün AOS-u yenilə
window.addEventListener('touchstart', () => {
  AOS.refresh();
}, { passive: true });

// Hər scroll zamanı AOS-u yenilə
let scrollTimeout;
window.addEventListener('scroll', () => {
  // Scroll bitdikdən sonra AOS-u yenilə
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    AOS.refresh();
  }, 100);
}, { passive: true });

// Wheel event üçün də AOS-u yenilə
window.addEventListener('wheel', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    AOS.refresh();
  }, 100);
}, { passive: true });

// AOS-u məcburi yenilə
function forceRefreshAOS() {
  AOS.refresh();
  // Bütün animasiyaları yenidən başlat
  document.querySelectorAll('[data-aos]').forEach(element => {
    element.classList.remove('aos-animate');
    element.classList.add('aos-init');
  });
  // Qısa gecikmədən sonra yenidən başlat
  setTimeout(() => {
    AOS.refresh();
  }, 50);
}

// Hər 2 saniyədə bir AOS-u yenilə (backup üçün)
setInterval(() => {
  AOS.refresh();
}, 2000);

createRoot(document.getElementById('root')).render(
    <App />
)
