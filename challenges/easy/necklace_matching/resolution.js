
function same_necklace(necklace1, necklace2) {
    const loopLimit = necklace1.length;
    const word1 = Array.from(necklace1);
    let word2 = Array.from(necklace2);
    let result,firstLetter;
        if( necklace1 === necklace2 ){
            return result = true;
        } else if(  necklace1.length !== necklace2.length){
            
            return result = false;
        }
        for (let i = 0; i < loopLimit; i++) {
            firstLetter = word2[0];
            word2.splice(0, 1);
            word2.push(firstLetter);
            if( word1.join("") === word2.join("")){
                return result = true
            } else {
                if( i === loopLimit - 1 ){
                    result = false;
                }
            }
        }
    return result 
}


 function repeats(necklace) {
     const limit = necklace.length;
     let arr = Array.from(necklace);
     const refArr = Array.from(necklace);
     let result = 0;
        for (let i = 0; i < limit; i++) {
            let firstLetter = arr[0];            
            arr.splice(0,1);
            arr.push(firstLetter);
            if(refArr.join("") === arr.join("")){
                result++;
            }
        }
     return result;

 }

//  console.log(same_necklace('cat', '')); 
//  console.log(repeats("abcabcabc")); 
