// BEGIN
export default (text) => {
  if (text.length === 0) {
    return 0;
  }
  const uniqSymbol = [];
  for (const symbol of text) {
    if (!uniqSymbol.includes(symbol)) {
      uniqSymbol.push(symbol);
    }
  }
  return uniqSymbol.length;
}
// END