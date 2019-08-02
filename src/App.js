import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Services from './components/Services';
import Portifolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Admin from './admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <Route path='/' exact component={Inicio} />
        <Route path='/services' component={Services} />
        <Route path='/portfolio' component={Portifolio} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/contact' component={Contact} />
        <Route path='/admin' component={Admin} />


        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
