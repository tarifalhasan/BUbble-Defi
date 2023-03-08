import React from 'react';
import gotbitLogo from '../../assets/image/gotbit.png';
import pinksale from '../../assets/image/pinksale.png';
import dexview from '../../assets/image/dexview.png';
const OurPartners = () => {
  return (
    <div id="partners" className="container px-2 py-4">
      <div className="flex  gap-4 flex-col items-center ">
        <h2 className="text-[1.6em]">our partners </h2>
        <div>
          <ul className="flex items-center gap-6">
            <li>
              <img className="w-[170px]" src={gotbitLogo} alt="gotbitLogo" />
            </li>
            <li>
              <img className="w-[170px]" src={pinksale} alt="gotbitLogo" />
            </li>
            <li>
              <img className="w-[170px]" src={dexview} alt="gotbitLogo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
