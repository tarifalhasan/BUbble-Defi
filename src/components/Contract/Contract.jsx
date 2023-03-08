import React from 'react';
import conteactImg from '../../assets/image/contract.png';
import contractImgMobile from '../../assets/image/bubblemobile.png';
import gradient from '../../assets/image/contrctlight.png';
const Contract = () => {
  return (
    <section id="contract" className="my-10 relative lm">
      <div className="absolute top-[10%] md:top-[5%] lg:-top-[10%] -z-10 left-0">
        <img src={gradient} alt="" />
      </div>
      <div className="container z-20">
        <div>
          <p className="text-[14px] m-10 font-light font-MacPawFixel">
            Maximize Liquidity & Earn <br /> Passive Rewards with BubbleSwap
          </p>
          <img className="hidden lg:block" src={conteactImg} alt="" />
          <img className="lg:hidden" src={contractImgMobile} alt="" />
          <div className="lg:flex my-1">
            <div className="basis-[40%]"></div>
            <div className="basis-[60%]">
              <p className="text-[14px] md:text-[16px]  leading-snug">
                BubbleSwap is a revolutionary DeFi protocol that offers a unique
                liquidity tax of 5% — increasing your LP tokens' value with
                every trade. The LP tokens collected are burned forever,
                guaranteeing maximum liquidity and 100% safety. Join the new era
                of yield farming and earn passive rewards with BubbleSwap's
                liquidity crunch-proof technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bubble my-3 container px-2">
        <div className="grid gap-0 md:gap-4 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="bubble_contract rounded-tr-3xl  rounded-tl-3xl  md:rounded-3xl">
            <p className="md:text-center gap-x-2 flex py-5 items-center md:block">
              <p className="md:text-[26px] text-[40px] font-sandro text-pink-500">
                5%
              </p>
              <p className="text-[#3A5168] font-sandro">on all $BUB pairs</p>
            </p>
          </div>
          <div className="bubble_contract md:rounded-3xl lg:mt-8">
            <p className="md:text-centergap-x-2 flex items-center py-5 md:block">
              <p className="md:text-[26px] text-[40px] font-sandro text-pink-500">
                All
              </p>
              <p className="text-[#3A5168] font-sandro">
                LP tokens burned forever
              </p>
            </p>
          </div>
          <div className="bubble_contract  md:rounded-3xl lg:mt-14">
            <p className="md:text-centergap-x-2 flex items-center py-5 md:block">
              <p className="md:text-[26px] text-[40px] font-sandro text-pink-500">
                100%
              </p>
              <p className="text-[#3A5168] font-sandro">
                LP tokens burned forever
              </p>
            </p>
          </div>
          <div className="bubble_contract rounded-br-3xl  rounded-bl-3xl  md:rounded-3xl lg:mt-24">
            <p className="md:text-centergap-x-2 flex items-center py-5 md:block">
              <p className="md:text-[26px] text-[40px] font-sandro text-pink-500">
                100%
              </p>
              <p className="text-[#3A5168] font-sandro">SAFU</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contract;
