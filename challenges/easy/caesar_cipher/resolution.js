function warmup(val, num){
    const arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    function getValIndex(elt){
        for (let i = 0; i < arr.length; i++) {
                if(elt === arr[i]){  
                    return i
                }else{
                    if(elt.toLowerCase() === arr[i]){
                        return  arr[getFinalIndex(i + num, arr.length - 1 )].toUpperCase()  
                    }
                }
        }
        return elt
    }
    function getFinalIndex(finalIndex, arrLimit) {
        return finalIndex === arrLimit ? finalIndex % arrLimit
               : finalIndex > arrLimit ? ((finalIndex % arrLimit) - 1) 
               : finalIndex
    }
    const currentIndex =  (typeof getValIndex(val) === 'string') ? getValIndex(val) 
                          : arr[getFinalIndex(getValIndex(val) + num, arr.length - 1 )]

    return currentIndex;
}

function caesar(val, num) {
    if(typeof val !== 'string' || num < 0 || num> 26) {
        // Do some stuff
        return null;
    }
    const firstArg = Array.from(val);
    const box = [];
    let curr;
    for (let i = 0; i < firstArg.length; i++) {
        curr = warmup(firstArg[i], num)
        box.push(curr);
    }
    return box.join('');
}

// console.log(caesar("Daily Programmer!", 6));





