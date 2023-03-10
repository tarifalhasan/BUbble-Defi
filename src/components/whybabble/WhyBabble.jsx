import React from 'react';
import whyusimg from '../../assets/image/whybabble.png';
import whyusimgmobile from '../../assets/image/whybubblemobile.png';
import discordIcon from '../../assets/image/brand-discord.svg';
const WhyBabble = () => {
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row mt-32 container md:px-14 items-center">
        <div className=" basis-[35%] ">
          <div className="hidden md:block absolute -z-10 top-[-28%]  md:-top-[60%] left-0">
            <img className="lg:max-w-[600px]" src={whyusimg} alt="" />
          </div>
          <div className="md:sr-only absolute -z-10 top-[-28%]  md:-top-[60%] left-0">
            <img src={whyusimgmobile} alt="" />
          </div>
        </div>
        <div className=" basis-[65%] text-center md:text-left mt-[20rem] md:mt-32 lg:mt-1 z-20 space-y-7 ">
          <h1 className="text-[1.5em] font-bold md:text-[2.5em] uppercase font-sandro">
            The Ultimate Governance & Utility Token
          </h1>
          <div className="md:ml-14 ml-0">
            <p className="text-[0.875em] md:text-[1.25em]">
              Join the revolution and take control of your financial future with
              Bubble's $BUB token.
              <span className="text-[#00D0AA]">
                With delegated community governance and stake-based earnings
              </span>
              , you can now vote on proposals and earn passive income from the
              protocol's generated revenue. Empower yourself and become a part
              of the decentralized financial movement with Bubble.
            </p>
            <div className="space-y-5">
              <p className="text-[0.75em] md:text-[0.906em] mt-5 text-[#C3C9DA]">
                Vote for the future of Bubble and submit your proposals.
                Together, the community has ownership over the treasury and on
                top of that passive income earnings based on generated revenue.
              </p>

              <div className="btn-group flex gap-y-3 flex-col md:flex-row items-center gap-x-2">
                <a
                  href=" https://discord.com/invite/J99shRsxHC"
                  className="w-full md:w-auto"
                  target={'_blank'}
                >
                  <button className="btn-primary uppercase w-full md:w-auto  px-4 py-4 ">
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.39287 4.56426C9.84287 3.57854 11.8143 3.57854 15.2643 4.56426M5.90001 13.4357C9.35001 14.4214 12.3072 14.4214 15.7572 13.4357M14.2786 13.9285C14.2786 14.9143 15.7572 16.8857 16.25 16.8857C17.7286 16.8857 19.0425 15.2425 19.7 13.9285C20.3575 12.2854 20.1929 8.17887 18.2214 2.59283C16.7853 1.59233 15.2643 1.27197 13.7857 1.11426L12.8 3.57854M7.37857 13.9285C7.37857 14.9143 6.04194 16.8857 5.57274 16.8857C4.16416 16.8857 2.91328 15.2425 2.28736 13.9285C1.66143 12.2854 1.81816 8.17887 3.69496 2.59283C5.06313 1.59233 6.43721 1.27197 7.87143 1.11426L8.85714 3.57854M8.85715 8.99997C8.85715 9.54437 8.41583 9.98569 7.87144 9.98569C7.32704 9.98569 6.88572 9.54437 6.88572 8.99997C6.88572 8.45558 7.32704 8.01426 7.87144 8.01426C8.41583 8.01426 8.85715 8.45558 8.85715 8.99997ZM14.7714 8.99997C14.7714 9.54437 14.3301 9.98569 13.7857 9.98569C13.2413 9.98569 12.8 9.54437 12.8 8.99997C12.8 8.45558 13.2413 8.01426 13.7857 8.01426C14.3301 8.01426 14.7714 8.45558 14.7714 8.99997Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Join Discord
                  </button>
                </a>
                <a
                  href="https://t.me/BubbleDefiPortal "
                  className="w-full md:w-auto"
                  target="_blank"
                >
                  <button className="btn-primary uppercase w-full md:w-auto  px-4 py-4 ">
                    <svg
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4428 7.02854L9.49997 10.9714L15.4143 16.8857L19.3571 1.11426L1.61426 8.01426L5.55712 9.98569L7.52854 15.9L10.4857 11.9571"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Join telegram
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBabble;
