import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Style from './App.module.css';
import Navbar from './Navbar/navbar';
import Home from './Home/home';
import About from './About/about';
import Work from './Work/work';
import Contact from './Contact/contact';
import Footer from './Footer/footer';

function App() {
  useEffect(() => {
    if (window.location.pathname !== '/') {
        window.location.href = '/';
    }
  }, []);
  
  return (
    <div className={Style.App}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
