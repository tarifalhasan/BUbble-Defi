import React from 'react';
import Navbar from '../Navbar/Navbar';
import collectWallectImg from '../../assets/image/collectwallat.png';
import bingImg from '../../assets/image/header.png';
import graidint1 from '../../assets/image/hero-bg.png';
const Header = () => {
  return (
    <div className="relative">
      <div className="absolute -z-20 right-0">
        <img
          className=" md:max-w-[500px] lg:max-w-[800px]"
          src={bingImg}
          alt=""
        />
      </div>
      <div className="absolute -z-40 left-0">
        <img className="w-full" src={graidint1} alt="" />
      </div>
      <Navbar />
      {/* Hero aria */}
      <div className=" z-30">
        <div className="">
          <div className="grid grid-cols-1 container pt-20 lg:grid-cols-2">
            <div className=" pt-10">
              <p className="lg:text-center m-0 leading-[1.5] text-[24px] lg:text-[40px] font-sandro uppercase">
                Unleash the Power of Liquid Trading
                <br />
                <span className="text-[24px]  text-[#C3C9DA] font-sandro">
                  with Bubble DeFi!{' '}
                </span>
              </p>
              <div className="space-y-3 lg:ml-16 mr-7 pt-10">
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
              <img className="w-[120%]" src={collectWallectImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
