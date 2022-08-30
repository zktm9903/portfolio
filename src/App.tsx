import Footer from 'components/Footer';
import Header from 'components/Header';
import Introduce from 'components/Introduce';
import Skill from 'components/Skill';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Introduce/>
      <Skill/>
      <Footer/>
    </>
  );
}

export default App;
