import React from 'react';
import logo from '/images/logo.png';

const Navbar = () => {
  return (
    <header className="h-16 flex items-center shadow-sm head  fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center w-9/12 mx-auto">
        {/* Uncomment if you want to use the logo */}
        {/* <a href="/" className="text-white font-bold uppercase text-xl bg-white">
          <img src={logo} alt="logo" />
        </a> */}

        <a href="/" className="text-white font-bold uppercase text-2xl">
          Quizard
        </a>
        <div className="space-x-5 flex items-center">
          <ul className="space-x-5 sm:flex hidden">
            <li className="text-white hover:text-yellow-500 ">
              <a href="/">How it works?</a>
            </li>
            <li className="text-white hover:text-yellow-500">
              <a href="/">Features</a>
            </li>
            <li className="text-white hover:text-yellow-500">
              <a href="/">About us</a>
            </li>
          </ul>
          <button
            className="font-medium px-5 py-1 border border-[#FCC822] rounded text-[#FCC822]"
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
