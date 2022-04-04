import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home'
import Passagens from './views/Passagens'
import Pacotes from './views/Pacotes'
import Contato from './views/Contato'

import Menu from './components/Menu'
import Footer from './components/Footer';


import './assets/css/style.css'

function App() {

  return (
    <BrowserRouter>
      <section>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Passagens" element={<Passagens />} />
          <Route path="/Pacotes" element={<Pacotes />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>

  )
}

export default App;
