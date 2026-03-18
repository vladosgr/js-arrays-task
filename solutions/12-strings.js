// BEGIN
export default(text, stopWords) => {
  const words = text.split(' ');
  const censore = [];
  const replacement = '$#%!';
  for (const word of words) {
    censore.push(stopWords.includes(word) ? replacement : word);
  }
  return censore.join(' ');
};
// END