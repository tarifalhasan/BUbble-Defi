import React from 'react';
import bubble from '../../assets/image/bubble.png';
import discard from '../../assets/image/discard.png';
import telegram from '../../assets/image/telegram.png';
import twitter from '../../assets/image/twitter.png';
import getbook from '../../assets/image/getbook.png';
import medium from '../../assets/image/medium.png';
const Contact = () => {
  return (
    <div className="container pt-20 pb-8">
      <div className="relative">
        <img className="block mx-auto" src={bubble} alt="" />
        <div className="absolute top-[26%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a href="https://discord.com/invite/J99shRsxHC" target={'_blank'}>
            <img
              className=" max-w-[100px] md:max-w-[220px] Imghover"
              src={discard}
              alt=""
            />
          </a>
        </div>
        <div className="absolute top-[59%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-4">
            <a href="https://t.me/BubbleDefiPortal" target={'_blank'}>
              <img
                className=" max-w-[100px] md:max-w-[220px] Imghover"
                src={telegram}
                alt=""
              />
            </a>
            <a href="https://twitter.com/Bubble_DeFi" target={'_blank'}>
              <img className="md:max-w-[220px] Imghover" src={twitter} alt="" />
            </a>
          </div>
        </div>
        <div className="absolute top-[41%] left-[88%] transform -translate-x-1/2 -translate-y-1/2">
          <a href="https://medium.com/@Bubble_DeFi" target={'_blank'}>
            <img
              className="max-w-[100px] md:max-w-[220px] Imghover"
              src={medium}
              alt=""
            />
          </a>
        </div>
        <div className="absolute top-[59%] left-[5%] transform -translate-x-1/2 -translate-y-1/2">
          <a href="https://docs.bubbledefi.xyz/bubbledefi/" target={'_blank'}>
            <img
              className="max-w-[100px] md:max-w-[220px] Imghover"
              src={getbook}
              alt=""
            />
          </a>
        </div>
        <button className=" md:sr-only flex justify-center w-full btn-primary px-9 py-4">
          <span className="tezr"> PITCH DECK</span>
        </button>
        <div className="hidden md:block absolute top-[90%] md:top-[83%] lg:top-[72%] right-[10%]">
          <button className="w-full btn-primary px-9 py-4">PITCH DECK</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
