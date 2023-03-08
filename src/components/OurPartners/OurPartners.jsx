import React from 'react';
import gotbitLogo from '../../assets/image/gotbit.png';
import pinksale from '../../assets/image/pinksale.png';
import dexview from '../../assets/image/dexview.png';
const OurPartners = () => {
  return (
    <div id="partners" className="container  px-2 py-4">
      <div className="">
        <h2 className="text-[1.2em] pb-16 text-center uppercase text-muted font-sandro lg:text-[29px]">
          our partners{' '}
        </h2>
        <div className="grid gap-9 grid-cols-1 lg:grid-cols-3">
          <div className="partner">
            <img className="w-[200px]" src={pinksale} alt="" />
          </div>
          <div className="partner">
            <img className="w-[200px]" src={dexview} alt="" />
          </div>
          <div className="partner">
            <img className="w-[200px]" src={gotbitLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
