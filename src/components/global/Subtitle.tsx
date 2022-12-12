import React from 'react';

const Subtitle = ({ text, classes }: { text: string; classes?: string }) => {
  return (
    <h1
      className={`text-center font-bold lg:text-[52px] md:text-3xl text-2xl text-blue ${classes}`}
    >
      {text}
    </h1>
  );
};

export default Subtitle;
