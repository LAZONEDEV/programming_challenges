
function sequence() {
    // const arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"];
    const arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N"];
    let result;
    let box = [];
   return arr.reduce(function(prev, curr, indexCurr) {
        if(indexCurr === 0){
            result = curr;
        }else{
            box.push(prev);
            box.push(curr);
            box.push(prev);
            result = box.join("");
            box = [];
        }
        return result
    },[])
}

console.log(sequence());

