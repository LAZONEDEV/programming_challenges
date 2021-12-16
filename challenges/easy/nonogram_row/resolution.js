function nonogramrow(arr) {
    const limit = arr.length;
    let count = 0;
    let prev;
    let result = [];

    arr.forEach((num, i) => {
        prev = i > 0 ? arr[i - 1] : 0;
        if (num === 1) {
            count++;
        } else {
            if (prev === 1) {
                result.push(count);
            }
            count = 0;
        }
        if (num === 1 && i === limit - 1) {
            result.push(count);
        }
    });

    return result
}


