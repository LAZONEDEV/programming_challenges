function flipFront(arr, val){
    if(val > arr.length){
        val = arr.length;
    } 
    if( val < 2){
        return arr
    }
    // get front array
    const result = arr.slice(0, val).reverse()

    const backArray = arr.slice(val);

    for (let i = 0; i < backArray.length ; i++) {
         result.push(backArray[i]);
    }
    return result
}
// const inputArray = [2, 1, 3, 5, 3]

// console.log(flipFront(inputArray, 2));


