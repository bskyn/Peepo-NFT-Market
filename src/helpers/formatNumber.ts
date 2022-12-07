function formatNumber(num: number, decimalPlace: number) {
  return num?.toLocaleString('en-US', {
    maximumFractionDigits: decimalPlace,
    minimumFractionDigits: decimalPlace,
  });
}

function strToNumber(num: string) {
  try {
    return parseFloat(num);
  } catch (err) {
    // if hit NaN case (e.g. null, undefined)
    return 0;
  }
}

export { formatNumber, strToNumber };
