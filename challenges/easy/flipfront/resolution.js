function flipFront(arr, val){
    if( val < 2){
        return arr
    }
    if(val > arr.length){
        val = arr.length;
    } 
    const frontArray = arr.slice(0, val).reverse()
    const backArray = arr.slice(val);
    const result = frontArray.concat(backArray)
    return result
}
// const inputArray = [2, 1, 3, 5, 3]

// console.log(flipFront(inputArray, 2));


