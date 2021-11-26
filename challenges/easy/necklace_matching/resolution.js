

function same_necklace(necklace1, necklace2) {
    let word2 = necklace2 ;
    let firstLetter;
        if( necklace1 === necklace2 ){
            return true;
        } 
         if(  necklace1.length !== necklace2.length){
            return false;
        }
        for (let i = 0; i < necklace1.length; i++) {
            firstLetter = word2.charAt(0);
            word2 = word2.substr(1) + firstLetter;
            if( necklace1 === word2 ){
                return true
            } 
        }
    return false 
}

 function repeats(necklace) {
     let arr = necklace;
     let result = 0;
        for (let i = 0; i < necklace.length; i++) {
            let firstLetter = arr.charAt(0);            
            arr = arr.substr(1) + firstLetter;;
            if(necklace === arr){
                result++;
            }
        }
     return result;

 }

//  console.log(same_necklace('cat', '')); 
//  console.log(repeats("abcabcabc")); 
