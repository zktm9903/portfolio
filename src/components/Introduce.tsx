import React from 'react';
import myImg from '../img/myImg.png';

function Introduce() {
  return (
    <div className="flex flex-col items-center bg-gray-100 mb-3 w-full">
      <p className="text-7xl font-bold mt-24">이 상 철</p>
      <p className="text-3xl font-bold mt-7">frontend developer portfolio</p>
      <picture>
        <source media="(min-width: 700px)" srcSet={myImg} />
        <source media="(min-width: 400px)" srcSet={myImg} />
        <img className="w-full max-w-xl" src={myImg} alt="People" />
      </picture>
    </div>
  );
}

export default Introduce;
