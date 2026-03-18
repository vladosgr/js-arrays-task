// BEGIN
export const swap = (array) =>{
    if (array.length < 2){
        return array;
    }
    else{
    const firstNumber = array[0];
    array[0] = array[array.length - 1];
    array[array.length-1] = firstNumber;
    return array;
    }
}
// END