import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Partner from './pages/Partner';
import Sectors from './pages/Sectors';
import Service from './pages/Service';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/partner' element={<Partner/>}/>
        <Route path='/sectors' element={<Sectors/>}/>
        <Route path='/services' element={<Service/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
