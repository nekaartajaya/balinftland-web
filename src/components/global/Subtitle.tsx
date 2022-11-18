import React from 'react';

const Subtitle = ({ text, classes }: { text: string; classes?: string }) => {
  return (
    <h1
      className={`text-center font-bold md:text-[52px] text-4xl text-blue ${classes}`}
    >
      {text}
    </h1>
  );
};

export default Subtitle;
