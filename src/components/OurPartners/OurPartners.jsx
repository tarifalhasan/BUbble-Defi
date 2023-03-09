import React from 'react';
import gotbitLogo from '../../assets/image/gotbit.png';
import pinksale from '../../assets/image/pinksale.png';
import dexview from '../../assets/image/dexview.png';
const OurPartners = () => {
  return (
    <div id="partners" className="container pb-10 md:pb-20 lg:px-14  px-2 py-4">
      <div className="">
        <h2 className="text-[1.2em] pb-9 md:pb-16 text-center uppercase text-muted font-sandro lg:text-[29px]">
          our partners
        </h2>
        <div className="grid gap-9 grid-cols-1 lg:grid-cols-3">
          <div className="partner">
            <a href="/">
              <img className="w-[200px]" src={pinksale} alt="" />
            </a>
          </div>
          <div className="partner">
            <a href="">
              <img className="w-[200px]" src={dexview} alt="" />
            </a>
          </div>
          <div className="partner">
            <a href="">
              <img className="w-[200px]" src={gotbitLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
