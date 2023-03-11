import React from 'react';

const Contact = () => {
  return (
    <div className="container pt-20 pb-8">
      <div className="relative">
        <img className="block mx-auto" src={'/image/bubble.png'} alt="" />
        <div className="absolute top-[10%] md:top-[26%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a href="https://discord.com/invite/J99shRsxHC" target={'_blank'}>
            <img
              className=" max-w-[100px] md:max-w-[220px] Imghover"
              src={'/image/discard.png'}
              alt="discord"
            />
          </a>
        </div>
        <div className="absolute top-[59%] left-[65%] md:left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-4">
            <a href="https://t.me/BubbleDefiPortal" target={'_blank'}>
              <img
                className=" max-w-[100px] md:max-w-[220px] Imghover"
                src={'/image/telegram.png'}
                alt="bubbledefitelegram"
              />
            </a>
            <a href="https://twitter.com/Bubble_DeFi" target={'_blank'}>
              <img
                className="max-w-[100px] md:max-w-[220px] Imghover"
                src={'/image/twitter.png'}
                alt="twitter"
              />
            </a>
          </div>
        </div>
        <div className="absolute top-[15%] md:top-[41%] left-[88%] transform -translate-x-1/2 -translate-y-1/2">
          <a href="https://medium.com/@Bubble_DeFi" target={'_blank'}>
            <img
              className="max-w-[100px] md:max-w-[220px] Imghover"
              src={'/image/medium.png'}
              alt=""
            />
          </a>
        </div>
        <div className="absolute top-[59%] left-[20%] md:left-[5%] transform -translate-x-1/2 -translate-y-1/2">
          <a href="https://docs.bubbledefi.xyz/bubbledefi/" target={'_blank'}>
            <img
              className="max-w-[100px] md:max-w-[220px] Imghover"
              src={'/image/getbook.png'}
              alt=""
            />
          </a>
        </div>
        <button className=" md:sr-only flex justify-center mt-6 w-full btn-primary px-9 py-4">
          <span className="tezr"> PITCH DECK</span>
        </button>
        <div className="hidden md:block absolute top-[90%] md:top-[83%] lg:top-[72%] right-[10%]">
          <a href="/pitchdeck.pdf" className="w-full" download>
            <button className="w-full btn-primary px-9 py-4">PITCH DECK</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
