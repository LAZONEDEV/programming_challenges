function flipFront(arr, val){
    if(val > arr.length){
        val = arr.length;
    } else if( val < 2){
        return arr
    }
    const frontArray = arr.slice(0, val);
    let result = [];
    const backArray = arr.slice(val);
    for (let i = val - 1; i >= 0; i--) {
        result.push(frontArray[i]);
    }
    for (let i = 0; i < backArray.length ; i++) {
         result.push(backArray[i]);
    }
    return result
}
// const inputArray = [2, 1, 3, 5, 3]

// console.log(flipFront(inputArray, 2));

