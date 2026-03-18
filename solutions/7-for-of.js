// BEGIN
export default (array) => {
    if (array.length === 0){
        return null;
    }
    else {
        let sum = 0;
        for (let i = 0; i < array.length; i += 1){
            sum += array[i];
        }
        const avarage = sum / array.length;
        return avarage
    } 
}
// END