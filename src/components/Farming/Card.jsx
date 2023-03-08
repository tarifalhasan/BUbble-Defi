import React from 'react';

const Card = ({ title, subTitle, heading }) => {
  return (
    <div className="farming_card text-center md:text-left space-y-3">
      <p className="text-[24px] font-sandro">{heading}</p>
      <p className="text-[20px] ">{title}</p>
      <p className="text-[#3A5168] f text-[13px]">{subTitle}</p>
    </div>
  );
};

export default Card;
