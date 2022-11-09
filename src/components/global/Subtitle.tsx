import React from 'react';

const Subtitle = ({text, classes}: {text: string; classes?: string}) => {
  return <h1 className={`text-center font-bold text-[52px] text-blue ${classes}`}>{text}</h1>;
};

export default Subtitle;
