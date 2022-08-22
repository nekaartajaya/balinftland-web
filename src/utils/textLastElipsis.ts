const textLastEllipsis: ({text, length}: {text: string; length: number}) => string = ({
  text,
  length,
}) => {
  if (text) {
    const first = text.substring(0, length);
    const last = '...';
    return first + last;
  }
};

export default textLastEllipsis;
