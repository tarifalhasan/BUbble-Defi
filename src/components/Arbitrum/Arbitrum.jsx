import React from 'react';

const Arbitrum = () => {
  return (
    <section id="arbitrum">
      <div className="grid px-4 container lg:px-14 grid-cols-1 lg:grid-cols-2">
        <div>
          <img src={'/image/Arbitrum.png'} alt="ArbitrumImg" />
        </div>
        <div className="relative w-full lg:max-w-[560px]">
          <div className="space-y-4 text-center md:text-left lg:absolute top-[36%]">
            <h1 className="text-[1.5em] font-bold md:text-[2em] font-sandro">
              UNLOCK A NEW FRONTIER WITH BUBBLE & ARBITRUM
            </h1>
            <p className="text-[0.875em] md:text-[1.25em]">
              Join the <span></span>
              <span className="text-[#00D0AA]">
                cutting-edge DeFi movement <span></span>
              </span>
              by bridging the gap between two thriving chains.
            </p>
            <p className="text-[0.75em] md:text-[0.875em] text-[#C3C9DA]">
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
