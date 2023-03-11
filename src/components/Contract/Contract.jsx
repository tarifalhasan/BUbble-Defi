import React from 'react';

const Contract = () => {
  return (
    <section id="contract" className="my-10 relative lm">
      <div className="absolute top-[10%] md:top-[5%] lg:-top-[10%] -z-10 left-0">
        <img className="w-full" src={'/image/contrctlight.png'} alt="" />
      </div>
      <div className="relative container z-20">
        <div>
          <div className="sr-only md:not-sr-only">
            <p className="text-[14px] m-10 font-light font-MacPawFixel">
              Maximize Liquidity & Earn <br /> Passive Rewards with BubbleSwap
            </p>
          </div>
          <img
            className="hidden lg:block"
            src={'/image/contract.png'}
            alt="bubbledefi"
          />
          <img
            className="lg:hidden"
            src={'/image/bubblemobile.png'}
            alt="image/bubblemobile.png'"
          />
          <div className="lg:flex my-1">
            <div className="basis-[40%]"></div>
            <div className="basis-[60%] text-center md:text-left">
              <p className="text-[14px] md:text-[16px]  leading-snug">
                BubbleSwap is a revolutionary DeFi protocol that offers a unique
                liquidity tax of 5% — increasing your LP tokens' value with
                every trade. The LP tokens collected are burned forever,
                guaranteeing maximum liquidity and 100% safety. Join the new era
                of yield farming and earn passive rewards with BubbleSwap's
                liquidity crunch-proof technology.
              </p>
              <a
                href="/"
                className="text-center right-[15%] md:absolute md:text-right"
              >
                <img className="  my-10 mx-auto" src="/checkout.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bubble my-3 container px-2">
        <div className="grid gap-0 md:gap-4 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="bubble_contract rounded-tr-3xl  rounded-tl-3xl  md:rounded-3xl">
            <div className="md:text-centergap-x-2 flex items-center py-5 md:block">
              <h1 className="text-[36px] font-bold lg:text-[3em] font-sandro text-pink-500">
                5%
              </h1>
              <p className="text-[#3A5168] text-[0.813em] font-sandro">
                on all $BUB pairs
              </p>
            </div>
          </div>
          <div className="bubble_contract md:rounded-3xl lg:mt-8">
            <div className="md:text-centergap-x-2 flex items-center py-5 md:block">
              <h1 className="text-[36px] font-bold lg:text-[3em] font-sandro text-pink-500">
                All
              </h1>
              <p className="text-[#3A5168]  text-[0.813em] font-sandro">
                LP tokens burned forever
              </p>
            </div>
          </div>
          <div className="bubble_contract  md:rounded-3xl lg:mt-14">
            <div className="md:text-centergap-x-2 flex items-center py-5 md:block">
              <h1 className="text-[36px] font-bold lg:text-[3em] font-sandro text-pink-500">
                100%
              </h1>
              <p className="text-[#3A5168] text-[0.813em] font-sandro">
                LP tokens burned forever
              </p>
            </div>
          </div>
          <div className="bubble_contract rounded-br-3xl  rounded-bl-3xl  md:rounded-3xl lg:mt-24">
            <div className="md:text-centergap-x-2 flex items-center py-5 md:block">
              <h1 className="text-[36px] font-bold lg:text-[3em] font-sandro text-pink-500">
                100%
              </h1>
              <p className="text-[#3A5168] text-[0.813em] font-sandro">SAFU</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contract;
