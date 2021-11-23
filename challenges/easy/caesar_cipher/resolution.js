function warmup(val, num){
    const arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    function getIndex(elt){
        for (let i = 0; i < arr.length; i++) {
                if(elt === arr[i]){  
                    return i
                }else{
                    if(elt.toLowerCase() === arr[i]){
                        // let edgeCaseIndex = arr[i + num] === arr.length - 1 ? (arr[i + num]) % (arr.length - 1)
                        //                   : arr[i + num] > arr.length - 1 ? (arr[i + num]) % ((arr.length - 1) - 1) 
                        //                   : arr[i + num]
                                            
                        // return edgeCaseIndex.toUpperCase()
                        return  arr[i + num].toUpperCase()  
                    }
                }
        }
        return elt
    }
    const currentIndex =  (typeof getIndex(val) === 'string') ? getIndex(val) 
                          : (getIndex(val) + num === arr.length - 1) ? (getIndex(val) + num) % (arr.length  - 1)
                          : (getIndex(val) + num > arr.length - 1) ? ((getIndex(val) + num) % (arr.length  - 1) - 1)
                          : getIndex(val) + num;

    if(typeof currentIndex === 'number' ){
       return arr[currentIndex]
    }

    return currentIndex;
}

function caesar(val, num) {
    const firstArg = Array.from(val);
    const box = [];
    let curr;
    for (let i = 0; i < firstArg.length; i++) {
        curr = warmup(firstArg[i], num)
        // console.log('curr', curr);
        box.push(curr);
        
    }
    return box.join('');
}

// console.log('caesar', caesar("Daily Programmer!", 6));



