import React from 'react';
import gotbitLogo from '../../assets/image/gotbit.png';
import pinksale from '../../assets/image/pinksale.png';
import dexview from '../../assets/image/dexview.png';
import catapult from '../../assets/image/catapult.svg';
import logo from '../../assets/image/logo.png';
const OurPartners = () => {
  return (
    <div id="partners" className="container pb-10 md:pb-20 lg:px-14  px-2 py-4">
      <div className="">
        <h2 className="text-[1.2em] pb-9 md:pb-16 text-center uppercase text-muted font-sandro lg:text-[29px]">
          our partners
        </h2>
        <div className="grid gap-9 grid-cols-1 lg:grid-cols-4">
          <div className="partner">
            <a href="https://www.pinksale.finance/" target="_blank">
              <img className="w-[200px]" src={pinksale} alt="" />
            </a>
          </div>
          <div className="partner">
            <a href="https://www.dexview.com/" target={'_blank'}>
              <img className="w-[200px]" src={dexview} alt="" />
            </a>
          </div>
          <div className="partner">
            <a href="https://gotbit.io/" target={'_blank'}>
              <img className="w-[200px]" src={gotbitLogo} alt="" />
            </a>
          </div>
          <div className="partner">
            <a href="https://catapult.ac/" target={'_blank'}>
              <img className="w-[200px]" src={catapult} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="logo block md:hidden  mt-6  absolute">
        <img className="w-[200px]" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default OurPartners;
