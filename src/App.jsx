import Navbar from './companentler/Navbar'
import About from './companentler/About'
import Experience from './companentler/Experience'
import RecentPro from './companentler/RecentPro'
import Contact from './companentler/Contact'
import Footer from './companentler/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {  Element } from 'react-scroll';

function App() {

  return (
    <>
      {/* <Navbar/>
      <About/>
      <Experience/>
      <RecentPro/>
      <Contact/>
      <Footer/> */}

      <Router>
        <Navbar />

        <Element name='section1'><About /></Element>
        <Element name='section2'><Experience /></Element>
        <Element name='Project'><RecentPro /></Element>
        <Element name='Contact'><Contact /></Element>

        <Footer />
      </Router>
    </>
  )
}

export default App
