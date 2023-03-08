import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import collectWallectImg from '../../assets/image/collectwallat.png';
import collectWallectImgMobile from '../../assets/image/collectwalletmobile.png';
import bingImg from '../../assets/image/header.png';
import graidint1 from '../../assets/image/hero-bg.png';
import MobileMenu from '../Navbar/MobileMenu';
import bubble1 from '../../assets/image/drop.3fea1a245d051d03eed8.png';
import bubble2 from '../../assets/image/drop1.62681e765f4af08909e0.png';
import logo from '../../assets/image/logo.png';
import hombargarMenu from '../../assets/image/menu.png';

import close from '../../assets/image/close.png';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <div className="hidden md:block top-[20%] lg:top-0 absolute -z-20 right-0">
        <img
          className=" md:max-w-[1000px] lg:max-w-[800px]"
          src={bingImg}
          alt=""
        />
      </div>
      <div className="absolute md:top-0 -z-40 left-0">
        <img className=" h-[358px] md:h-auto" src={graidint1} alt="" />
      </div>
      <div className="flex gap-10 container lg:hidden  items-center">
        <button onClick={openNav}>
          {!isOpen ? (
            <img src={hombargarMenu} alt="" />
          ) : (
            <img src={close} alt="" />
          )}
        </button>
        <img className="w-[135px]" src={logo} alt="" />
      </div>
      <Navbar />

      {isOpen && <MobileMenu openNavbar={openNav} isOpen={isOpen} />}
      {/*  */}
      {/* Hero aria */}
      <div className=" z-30">
        <div className="">
          <div className="grid grid-cols-1 container md:pt-20 lg:grid-cols-2">
            <div className=" md:pt-10">
              <p className="lg:text-center relative m-0 text-center leading-[2] md:leading-[1.5] text-[24px] lg:text-[40px] font-sandro uppercase">
                Unleash the Power of Liquid Trading
                <br />
                <span className="text-[24px]  text-[#C3C9DA] font-sandro">
                  with Bubble DeFi!{' '}
                </span>
                <div className="absolute left-[65%] top-0">
                  <img src={bubble1} alt="bubble1" />
                </div>
                <div className="absolute left-[47%] top-[-10%]">
                  <img src={bubble2} alt="bubble1" />
                </div>
              </p>
              <div className="hidden md:block space-y-3 lg:ml-16 mr-7 pt-10">
                <p className="text-[1.1em] tracking-[0.00938em]	  font-normal leading-[1.5] ">
                  Get ready to experience the future of decentralized trading
                  with Bubble DeFi.
                </p>
                <p className="text-[#C3C9DA] text-[14px]">
                  Our revolutionary Liquid DEX Trading platform offers deeper
                  liquidity, smarter trades, and higher rewards. Say goodbye to
                  suboptimal trades and hello to efficient, secure, and
                  profitable market activity.
                </p>
              </div>
            </div>

            <div>
              <img
                className=" hidden lg:block w-[120%]"
                src={collectWallectImg}
                alt="collectWallectImgMobile"
              />
              <img
                className=" lg:hidden"
                src={collectWallectImgMobile}
                alt="collectWallectImgMobile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
