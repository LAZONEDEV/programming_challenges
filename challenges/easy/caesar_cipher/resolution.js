const arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function warmup(val, num){
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
    if(num < 0 || num > 26) {
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

function caesar_interpreter(val) {
    const scoreRef = [3,-1,1,1,4,0,0,2,2,-5,-2,1,0,2,3,0,-6,2,2,3,1,-1,0,-5,0,-7];
    const inputLimit = 26;
    let curr_shifted ;
    let arr_box = [];
    let max_score = 0;
    let result;

    for (let i = 0; i < inputLimit; i++) {
        
        curr_shifted = caesar(val, i)
        // console.log('curr_shifted', curr_shifted);
        arr_box = Array.from(curr_shifted);
        // console.log('arr_box', arr_box);

        // max_score = getValScore(arr_box) > max_score ? getValScore(arr_box) : max_score;
        if( getValScore(arr_box) > max_score) { 
            max_score = getValScore(arr_box);
        // console.log('max_score', max_score);

            result = curr_shifted;
            console.log('result', result);

        }
        // if(i === inputLimit - 1){
        //     return result;
        // }
    }
    function getAlphabetIndex(elt) {
        for (let i = 0; i < arr.length; i++) {
                if(elt === arr[i]){ 
                    // console.log('i',i); 
                    return i
                }
        }
        return null
    }
    function getCharScore(index) {
        return scoreRef[index];
    }
    function getValScore(curr) {
        let curr_score = 0; let average = 0; 
        for (let i = 0; i < curr.length; i++) {
            // count = getCharScore(getAlphabetIndex(curr[i]) ) 
            // curr_score += count;
            if(getAlphabetIndex(curr[i]) !== null) {
                curr_score += getCharScore(getAlphabetIndex(curr[i]) ) 
                // console.log('curr_score', curr_score);
            }
        // console.log('curr[i]', curr[i]);
        // console.log('getAlphabetIndex', getAlphabetIndex(curr[i]));
        // console.log('getCharScore', getCharScore(getAlphabetIndex(curr[i])));


        }
        average = curr_score / curr.length;
        // console.log('average', Math.round(average));
        
        return Math.round(average);
    }
    console.log('last', result);
   return result;
}

// console.log(caesar("Daily Programmer!", 6));
// console.log(caesar("Zol abyulk tl puav h ulda.", 6));
console.log(caesar_interpreter('Zol abyulk tl puav h ulda.'))





