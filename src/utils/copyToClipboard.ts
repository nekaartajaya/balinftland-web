const copyToClipboard: ({text}: {text: string}) => void = async ({text}) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch ($e) {
    console.log('Cannot copy');
  }
};

export default copyToClipboard;
