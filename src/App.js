import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div>
        <main>
          <Nav />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/Resume' element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
