// BEGIN
export const reverse = (array) => {
    for (let i = 0; i < array.length/2; i += 1){
        const newIndex = array.length - 1 - i;
        const leftNumber = array[i];
        array[i] = array[newIndex];
        array[newIndex] = leftNumber;
    }
}
// END