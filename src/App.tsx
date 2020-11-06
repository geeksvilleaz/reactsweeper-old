import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Gameboard from './components/Gameboard/Gameboard';
import './App.scss';
import './styles/global.scss';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main>
        <Gameboard width={9} height={9} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
