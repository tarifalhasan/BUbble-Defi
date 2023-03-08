import React from 'react';
import logo from '../../assets/image/logo.png';
import gradient1 from '../../assets/image/header_grdient.png';
import { navLinks } from '../../constant/data';
const Navbar = () => {
  return (
    <header className="sr-only lg:not-sr-only  fixed w-full    ">
      <nav className="flex py-3 justify-between items-center px-5">
        <div className="logo">
          <img width={135} src={logo} alt="bubblelefi" />
        </div>
        <div className="nav-links">
          <ul className="flex items-center gap-x-5">
            {navLinks.map((link, index) => (
              <li
                className="text-[13px] nav-link rounded-lg h-10 flex items-center px-4 font-normal"
                key={index}
              >
                <a className="block" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="x-40">
          <button className="menu_btn">Launch Testnet</button>
        </div>
        <div className="absolute -z-10 top-1 right-0">
          <img className="max-w-[300px]" src={gradient1} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
