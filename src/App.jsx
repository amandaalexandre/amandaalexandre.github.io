import React from "react";
import Header from './components/Header'
import Main from './components/Main'
import Skills from './components/Skills'
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from './components/Footer'

function App() {
  return (
  
      <div>
        <Header/>
        <Main/>
        <Skills />
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
 
  )
}

export default App;
