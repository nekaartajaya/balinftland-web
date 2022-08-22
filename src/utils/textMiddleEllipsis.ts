const textMiddleEllipsis: ({text}: {text: string}) => string = ({text}) => {
  if (text) {
    const first = text.substring(0, 5);
    const middle = '...';
    const last = text.substring(text.length - 5);
    return first + middle + last;
  }
};

export default textMiddleEllipsis;
