import React, { useState, useEffect } from 'react';
import logo from '../../assets/image/logo.png';
import hombargarMenu from '../../assets/image/menu.png';
import { navLinks } from '../../constant/data';
import close from '../../assets/image/close.png';
import gradient1 from '../../assets/image/overlydown.png';
import graident from '../../assets/image/mobilemenugradient.png';
import icon from '../../assets/image/icon.png';
const MobileMenu = () => {
  return (
    <div className="relative">
      <div className="lg:hidden   z-[999999] text-white px-4 h-screen bg-[#0d141b]">
        <ul className="flex p-10 gap-6 flex-col">
          {navLinks.map((link, index) => (
            <li
              className="text-[18px] font-sandro ms:text-[26px] text-white uppercase"
              key={index}
            >
              {link.name}
            </li>
          ))}
        </ul>
        <div className="btn absolute top-[70%]">
          <div className="">
            <button className="menu_btn">Launch Testnet</button>
            <div className=" top-[-30%] left-[70%] right-0">
              <img src={icon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <img src={gradient1} className="w-[100vw]" alt="" />
      </div>
      <div className="absolute top-0 right-0">
        <img src={graident} alt="" />
      </div>
    </div>
  );
};

export default MobileMenu;
