import { useScroll } from 'Hooks/useScroll';
import React from 'react';

type changeIndexProps = {
  changeIndex: (e:number) => void;
};

function Header({changeIndex}: changeIndexProps) {
  const {scrollY} = useScroll();
  // console.log(scrollY);
  changeIndex(scrollY);
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center items-center h-11 bg-black opacity-80 text-white">
      <div className="w-screen max-w-[70rem] flex justify-around items-center">
        <p>introduce</p>
        <p>skills</p>
        <p>3</p>
      </div>
  </nav>
  );
}

export default Header;
