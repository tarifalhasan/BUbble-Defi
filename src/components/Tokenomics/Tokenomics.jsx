import React from 'react';
import tokenomicsimg from '../../assets/image/Tokenomics.png';
import tokenomicsimgmobile from '../../assets/image/tokenmicsmobile.png';
const Tokenomics = () => {
  return (
    <div id="tokenomics" className="container relative">
      <p className="text-[32px] absolute top-[13%]">Tokenomics</p>
      <img
        className="sr-only md:not-sr-only"
        src={tokenomicsimg}
        alt="tokenomicsimg"
      />
      <img
        className="md:sr-only not-sr-only"
        src={tokenomicsimgmobile}
        alt="tokenomicsimgmobile"
      />
    </div>
  );
};

export default Tokenomics;
