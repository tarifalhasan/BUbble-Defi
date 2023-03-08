import React from 'react';

const Card = ({ title, subTitle, heading }) => {
  return (
    <div className="farming_card text-center md:text-left space-y-3">
      <h2 className="text-[1.5em] uppercase font-sandro">{heading}</h2>
      <p className="text-[1.25em] ">{title}</p>
      <p className="text-[#3A5168]  text-[0.875em]">{subTitle}</p>
    </div>
  );
};

export default Card;
