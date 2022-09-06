import React from 'react'
import  './index.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Testimonials from './components/Testimonials/Testimonials'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'





const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About/>
            <Experience/>
            <Services/>
            <Portfolio/>
            <Testimonials/>
            <Contact/>
            <Footer/>
            
        </>

    )
}

export default App