import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.jsx';

// AOS-u quraşdır
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: false,
  offset: 100,
  mirror: true,
  disable: 'mobile'
});

createRoot(document.getElementById('root')).render(
    <App />
)
