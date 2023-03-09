import React, { useState, lazy } from 'react';

const Navbar = lazy(() => import('../Navbar/Navbar'));

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
      <div className="flex gap-10 container max-w-[1920px] lg:hidden  items-center">
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
          <div className="grid grid-cols-1 px-0 container pt-10 md:pt-20 lg:grid-cols-2">
            <div className=" md:pt-10">
              <h2 className="text-center md:text-left m-0 relative p-0  leading-[2] md:leading-[1.5] text-[24px] lg:text-[40px] font-sandro uppercase">
                <span className="md:ml-10"> Unleash the Power</span>
                <span className="inline md:block "> of Liquid Trading</span>

                <div className="-z-10 absolute left-[44%] top-[16%]">
                  <img
                    className="w-[120px] md:w-auto"
                    src={bubble1}
                    alt="bubble1"
                  />
                </div>
                <div className="absolute left-[34%] -z-10 top-[-18%]">
                  <img src={bubble2} alt="bubble1" />
                </div>
              </h2>
              <span className="text-[1em] text-center block md:hidden text-[#C3C9DA] font-sandro">
                with Bubble DeFi!
              </span>
              <div className="hidden md:block space-y-3 lg:ml-16 mr-7 ">
                <span className="text-[23px] block text-[#C3C9DA] font-sandro">
                  with Bubble DeFi!
                </span>
                <div className="pt-10">
                  <p className="text-[1.25em] tracking-[0.00938em]	  font-normal leading-[1.5] ">
                    Get ready to experience the future of decentralized trading
                    with Bubble DeFi.
                  </p>
                  <p className="text-[#C3C9DA] text-[0.875em]">
                    Our revolutionary Liquid DEX Trading platform offers deeper
                    liquidity, smarter trades, and higher rewards. Say goodbye
                    to suboptimal trades and hello to efficient, secure, and
                    profitable market activity.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                className=" hidden lg:block w-[120%]"
                src={collectWallectImg}
                alt="collectWallectImgMobile"
              />
              <img
                className="mt-[42px] lg:hidden"
                src={collectWallectImgMobile}
                alt="collectWallectImgMobile"
              />
              <div className="md:hidden space-y-3 px-5">
                <h3 className="text-center text-[#ffffff] text-[20px] font-MacPawFixel">
                  Get ready to experience the future of decentralized trading
                  with Bubble DeFi.
                </h3>
                <p className="text-[#C3C9DA] text-center text-[14px]">
                  Our revolutionary Liquid DEX Trading platform offers deeper
                  liquidity, smarter trades, and higher rewards. Say goodbye to
                  suboptimal trades and hello to efficient, secure, and
                  profitable market activity.
                </p>
                <button
                  className="hover:text-slate-50 mt-4 mx-auto block"
                  onClick={() =>
                    window.scrollTo({
                      top: window.innerHeight,
                      behavior: 'smooth',
                    })
                  }
                >
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 31.3333L12.6667 22M22 31.3333V12.6667M22 31.3333L31.3333 22M43 22C43 10.402 33.598 1 22 1C10.402 1 1 10.402 1 22C1 33.598 10.402 43 22 43C33.598 43 43 33.598 43 22Z"
                      stroke="#F1F5FD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden lg:block top-[88%] left-1/2 right-1/2">
        <button
          className="hover:text-slate-50"
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth',
            })
          }
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 31.3333L12.6667 22M22 31.3333V12.6667M22 31.3333L31.3333 22M43 22C43 10.402 33.598 1 22 1C10.402 1 1 10.402 1 22C1 33.598 10.402 43 22 43C33.598 43 43 33.598 43 22Z"
              stroke="#F1F5FD"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
