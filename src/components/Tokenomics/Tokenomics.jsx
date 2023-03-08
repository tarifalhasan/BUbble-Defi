import React from 'react';
import tokenomicsimg from '../../assets/image/Tokenomics.png';
const Tokenomics = () => {
  return (
    <div id="tokenomics" className="container relative">
      <p className="text-[32px] absolute top-[13%]">Tokenomics</p>
      <img src={tokenomicsimg} alt="" />
    </div>
  );
};

export default Tokenomics;
