

function same_necklace(necklace1, necklace2) {
    let word2 = Array.from(necklace2);
    let firstLetter;
        if( necklace1 === necklace2 ){
            return true;
        } 
         if(  necklace1.length !== necklace2.length){
            return false;
        }
        for (let i = 0; i < necklace1.length; i++) {
            firstLetter = word2[0];
            word2.splice(0, 1);
            word2.push(firstLetter);
            if( necklace1 === word2.join("")){
                return true
            } 
        }
    return false 
}


 function repeats(necklace) {
     let arr = Array.from(necklace);
     let result = 0;
        for (let i = 0; i < necklace.length; i++) {
            let firstLetter = arr[0];            
            arr.splice(0,1);
            arr.push(firstLetter);
            if(necklace === arr.join("")){
                result++;
            }
        }
     return result;

 }

//  console.log(same_necklace('cat', '')); 
//  console.log(repeats("abcabcabc")); 
