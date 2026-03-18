// BEGIN
export const flatten = (array) => {
  const newArray = [];
  for (const members of array) {
    if (Array.isArray(members)) {
      newArray.push(...members);
    } else {
      newArray.push(members);
    }
  }
  return newArray;
};
// END