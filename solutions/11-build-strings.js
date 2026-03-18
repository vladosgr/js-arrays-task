// BEGIN
export default (definition) => {
  if (definition.length === 0) {
    return '';
  }
  let result = '<dl>';
  for (let i = 0; i < definition.length; i += 1) {
    const [term, description] = definition[i];
    result += `<dt>${term}</dt><dd>${description}</dd>`;
  }
  result += '</dl>';
  return result;
};
// END