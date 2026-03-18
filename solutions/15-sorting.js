// BEGIN
export default (array) => {
  const bubbleSort = [...array];
  for (let i = 0; i < bubbleSort.length - 1; i+=1) {
    for (let j = 0; j < bubbleSort.length - 1 - i; j += 1) {
      if (bubbleSort[j] > bubbleSort[j + 1]) {
        const number = bubbleSort[j];
        bubbleSort[j] = bubbleSort[j + 1];
        bubbleSort[j + 1] = number;
      }
    }
  }
  return bubbleSort;
}
// END