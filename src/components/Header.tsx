import React from 'react';

function Header() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-center items-center h-11 bg-black opacity-80 text-white">
        <div className="w-full max-w-[70rem] flex justify-around items-center">
          <p>introduce</p>
          <p>skills</p>
          <p>3</p>
        </div>
      </nav>
      <div className="h-11 w-screen" />
    </>
  );
}

export default Header;
