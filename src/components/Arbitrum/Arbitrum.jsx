import React from 'react';
import ArbitrumImg from '../../assets/image/Arbitrum.png';
const Arbitrum = () => {
  return (
    <section id="arbitrum">
      <div className="grid container grid-cols-1 lg:grid-cols-2">
        <div>
          <img src={ArbitrumImg} alt="ArbitrumImg" />
        </div>
        <div className="relative">
          <div className="space-y-4 lg:absolute top-[36%]">
            <p className="text-[24px] md:text-[32px] font-sandro">
              UNLOCK A NEW FRONTIER WITH BUBBLE & ARBITRUM
            </p>
            <p className="text-[20px]">
              Join the{' '}
              <span className="text-[#00D0AA] text-[20px]">
                cutting-edge DeFi movement
              </span>{' '}
              by bridging the gap between two thriving chains.
            </p>
            <p className="text-[14px] text-[#C3C9DA]">
              Integrating the Arbitrum bridge, Bubble users now have the
              opportunity to trade their tokens on both the Ethereum and
              Arbitrum chains, unlocking a whole new realm of possibilities and
              potential rewards. Take advantage of this game-changing
              integration and be a part of the next evolution in DeFi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arbitrum;
