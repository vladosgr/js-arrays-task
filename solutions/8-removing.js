// BEGIN
export default (array) => {
    if (array.length === 0){
        return [];
    }
    const newArray = [];
    const firstParity = Math.abs(array[0])% 2;
    for (let i = 0; i < array.length; i += 1){
        if (Math.abs(array[i]) % 2 === firstParity) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}


// END