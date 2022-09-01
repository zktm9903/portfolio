import Footer from 'components/Footer';
import Header from 'components/Header';
import Introduce from 'components/Introduce';
import Skill from 'components/Skill';
import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);
  const whereSkill = useRef();

  const changeIndex = (e:number) => {
    console.log(e);
    if(e > 100) setIndex(1);
  } 

  return (
    <div className='w-[calc(100%_-_1px)]'>
      <Header changeIndex={changeIndex}/>
      <Introduce/>
      <Skill ref={whereSkill}/>
      <Footer/>
    </div>
  );
}

export default App;
