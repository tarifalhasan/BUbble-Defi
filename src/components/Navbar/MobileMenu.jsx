import React from 'react';

import { navLinks } from '../../constant/data';

const MobileMenu = ({ openNavbar, isOpen }) => {
  return (
    <div
      className={`fixed mobile_navbar 2xl:px-0 px-4 pt-6 w-full h-full bg-skin-dark  ${
        isOpen ? 'right-0' : 'right-full'
      }  z-50 top-0 bg-[#0d141b] `}
    >
      <div className="logo  flex  justify-between">
        <div className="flex gap-x-10 items-center">
          <button onClick={() => openNavbar()}>
            <img className="w-[21px]" src={'/image/close.png'} alt="" />
          </button>
          <img
            src={'/image/logo.png'}
            className="h-[49px] mr-3 sm:h-[56px]"
            alt="solve3web"
          />
        </div>
      </div>
      <ul className="flex flex-col pt-7 md:flex-row gap-6">
        {navLinks.map((link, index) => (
          <li key={index} className="text-white" onClick={openNavbar}>
            <a
              href={link.href}
              className="block py-2 pl-3 pr-4 text-white text-base leading-[19px] font-bold font-segoe"
            >
              {link.name}
            </a>
          </li>
        ))}

        <a
          href="https://dapp.bubbledefi.com/"
          target="_blank"
          className="w-full "
          rel="noopener noreferrer"
        >
          <button type="button" className="menu_btn w-full font-sandro">
            Launch App
          </button>
        </a>
      </ul>
    </div>
  );
};

export default MobileMenu;
