import React from 'react';

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
              <img
                className="w-[200px]"
                src={'/image/pinksale.png'}
                alt="/image/pinksale.png"
              />
            </a>
          </div>
          <div className="partner">
            <a href="https://www.dexview.com/" target={'_blank'}>
              <img className="w-[200px]" src={'/image/dexview.png'} alt="" />
            </a>
          </div>
          <div className="partner">
            <a href="https://gotbit.io/" target={'_blank'}>
              <img
                className="w-[200px]"
                src={'/image/gotbit.png'}
                alt="https://gotbit.io/"
              />
            </a>
          </div>
          <div className="partner">
            <a href="https://catapult.ac/" target={'_blank'}>
              <img className="w-[200px]" src={'/image/catapult.svg'} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="logo block md:hidden  mt-6  absolute">
        <img className="w-[200px]" src={'/image/logo.png'} alt="logo" />
      </div>
    </div>
  );
};

export default OurPartners;
