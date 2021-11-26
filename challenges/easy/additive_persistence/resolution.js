function additive_persistence(val) {
    let counter = 0;
    let currSum = val;
    function sum(value) {
        counter ++;
        let acc = 0;
        const limit = Array.from(value.toString())
        for (let i = 0; i < limit.length; i++) {
            acc +=  parseInt(limit[i]);
        }

        return currSum = acc
    }
    do {
         sum(currSum);
    }
    while (currSum > 9)  

    return counter
}

// console.log(additive_persistence(199));

// Bonus

function additive_persistence2(val) {
    let counter = 0;
    let currSum = val;
    function getDigit() {
        let digit = [];
        let currVal =  counter !== 0 ? currSum : val
        while (currVal > 0 ) {
            digit.push(currVal % 10)
            currVal = Math.trunc(currVal / 10) ;
        } 
        return currSum = digit.reverse()
    }
     
    function sum(value) {
        counter ++;
        let acc = 0;
        for(let i = 0; i < value.length; i++) {
            acc +=  value[i];
        }
        return currSum = acc
    }
    do {
        getDigit();
        sum(currSum);
    }
    while (currSum > 9) 
   
    return counter
}

// console.log(additive_persistence2(199));