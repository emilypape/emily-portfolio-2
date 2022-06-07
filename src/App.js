import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <main>
        <Nav />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
