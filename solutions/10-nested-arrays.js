// BEGIN
export default(array) => {
    let ussrPoints = 0;
    let canadaPoints = 0;
    for (let i = 0; i < array.length; i += 1){
        if (array[i][0] > array[i][1]){
            canadaPoints += 1;
        }
        if (array[i][0] < array[i][1]){
            ussrPoints += 1;
        }
    }
    if (ussrPoints >  canadaPoints){
        return 'ussr'
    }
    if (ussrPoints <  canadaPoints){
        return 'canada'
    }
    if (ussrPoints ===  canadaPoints){
        return null
    }
}
// END