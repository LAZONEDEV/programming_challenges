function nonogramrow(arr) {
    const limit = arr.length;
    let count = 0;
    let prev;
    let result = [];

    const case0 = arr.every(function(elt){
        return elt === 0;
    })

    const case1 = arr.every(function(elt){
        return elt === 1;
    })
    if(case0){
        return result ;
    }else if (case1){
        result.push(limit)
        return result; 
    }

    for (let i = 0; i < limit; i++) {
        prev =  i > 0 ? arr[i - 1] : 0;
        if(arr[i] === 1){
            count++;
        } else{
            if(prev === 1){
                result.push(count);
            }
            count = 0;
        }
        if(arr[i] === 1 && i === limit - 1 ){
            result.push(count);
        }
    }
    return result
}
        

