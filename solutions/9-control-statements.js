// BEGIN
export default(array, currency) => {
    let sum = 0;
    for ( let i = 0; i < array.length; i += 1){
        if (array[i].slice(0,3) === currency){
            sum += Number(array[i].slice(4));
        }
    }
    return sum;
}
// END