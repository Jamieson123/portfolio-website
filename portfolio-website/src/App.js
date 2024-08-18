// src/App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Element } from 'react-scroll';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
