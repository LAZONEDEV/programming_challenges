function additive_persistence(val) {
    let result = {
        counter : 0,
        currSum : val
    };
    function sum(value){
        result.counter ++;
        let acc = 0;
        const limit = Array.from(value.toString())
        for (let i = 0; i < limit.length; i++) {
            acc +=  parseInt(limit[i]);
        }

        return result.currSum = acc
    }
    do{
         sum(result.currSum);
    }
    while(result.currSum > 9)  

    return result.counter
}

// console.log(additive_persistence(199));

// Bonus

function additive_persistence2(val) {
    let result = {
        counter : 0,
        currSum : 0
    }
    function getDigit() {
       let digit = [];
        let currVal =  result.counter !== 0 ? result.currSum : val
        while (currVal > 0 ) {
            digit.push(currVal % 10)
            currVal = Math.trunc(currVal / 10) ;
        } 
        return result.currSum = digit.reverse()
    }
     
    function sum(value){
        result.counter ++;
        let acc = 0;
        for (let i = 0; i < value.length; i++) {
            acc +=  value[i];
        }
        return result.currSum = acc
    }
    do{
        getDigit();
        sum(result.currSum);
    }
    while(result.currSum > 9) 
   
    return result.counter
}

// console.log(additive_persistence2(199));