import React from 'react';

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="container relative">
      <p className="text-[32px] absolute top-[13%]">Tokenomics</p>
      <img
        className="sr-only md:not-sr-only"
        src={'/image/Tokenomics.png'}
        alt="tokenomicsimg"
      />
      <img
        className="md:sr-only not-sr-only"
        src={'/image/tokenmicsmobile.png'}
        alt="tokenomicsimgmobile"
      />
    </div>
  );
};

export default Tokenomics;
