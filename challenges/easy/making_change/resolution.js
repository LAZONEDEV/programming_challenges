function change(val){
    const arr = [500, 100, 25, 10, 5, 1];
    let count, rest;
    let stock = 0;
    if(val === 0){
        return 0
    }else{
        for (let i = 0; i < arr.length; i++) {
            
            if(val >= arr[i]){
                rest = val % arr[i];
                count = parseInt(val / arr[i]);
                stock += count;
                val = rest;
            }
        }
    }
    return stock
}

// console.log(change(468));

