export const currencyFormatter: ({amount, type}: {amount: number; type: '' | string}) => string = ({
  amount,
  type,
}) => {
  const i = Math.abs(Number(amount) || 0)
    .toFixed()
    .toString();
  const j = i.length > 3 ? i.length % 3 : 0;

  if (type === 'USDC')
    return (
      (j ? i.substr(0, j) + ',' : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + ',') + ' USDC'
    );
  return (j ? i.substr(0, j) + '.' : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + '.');
};
