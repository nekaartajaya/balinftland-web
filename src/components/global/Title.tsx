import React from 'react';

const Title = ({ text, classes }: { text: string; classes?: string }) => {
  return (
    <h1
      className={`md:text-[64px] sm:text-4xl text-2xl tracking-wide text-blue text-center font-semibold ${classes}`}
    >
      {text}
    </h1>
  );
};

export default Title;
