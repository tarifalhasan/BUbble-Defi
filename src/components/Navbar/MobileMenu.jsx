import React, { useState, useEffect } from 'react';
import logo from '../../assets/image/logo.png';
import hombargarMenu from '../../assets/image/menu.png';
import { navLinks } from '../../constant/data';
import close from '../../assets/image/close.png';
import gradient1 from '../../assets/image/overlydown.png';
import graident from '../../assets/image/mobilemenugradient.png';
import icon from '../../assets/image/icon.png';
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
            <img className="w-[21px]" src={close} alt="" />
          </button>
          <img
            src={logo}
            className="h-[49px] mr-3 sm:h-[56px]"
            alt="solve3web"
          />
        </div>
      </div>
      <ul className="flex flex-col pt-7 md:flex-row gap-6">
        {navLinks.map((link) => (
          <li key={link.href} className="text-white" onClick={openNavbar}>
            <a
              href={link.href}
              className="block py-2 pl-3 pr-4 text-white text-base leading-[19px] font-bold font-segoe"
            >
              {link.name}
            </a>
          </li>
        ))}
        <button type="button" className="menu_btn font-sandro">
          Launch App
        </button>
      </ul>
    </div>
  );
};

export default MobileMenu;
