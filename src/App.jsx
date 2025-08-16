import Navbar from './companentler/Navbar'
import About from './companentler/About'
import Experience from './companentler/Experience'
import Skills from './companentler/Skills'
import RecentPro from './companentler/RecentPro'
import Contact from './companentler/Contact'
import Footer from './companentler/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {  Element } from 'react-scroll';

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Element name='section1'><About /></Element>
        <Element name='section2'><Experience /></Element>
        <Element name='section3'><Skills /></Element>
        <Element name='section4'><RecentPro /></Element>
        <Element name='section5'><Contact /></Element>

        <Footer />
      </Router>
    </>
  )
}

export default App
