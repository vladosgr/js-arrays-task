const _ = require("lodash"); 

// BEGIN
export default(firstArray, secondArray) => {
    const leftArray = _.uniq(firstArray);
    const rightArray = _.uniq(secondArray);
    let sameCount = 0;
    for (let i = 0; i < leftArray.length; i += 1) {
        if (rightArray.includes(leftArray[i])){
            sameCount += 1;
        }
    }
    return sameCount;
}
// END