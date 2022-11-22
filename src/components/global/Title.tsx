import React from 'react';

const Title = ({ text, classes }: { text: string; classes?: string }) => {
  return (
    <h1
      className={`md:text-[64px] text-4xl tracking-wide text-blue text-center font-semibold ${classes}`}
    >
      {text}
    </h1>
  );
};

export default Title;
