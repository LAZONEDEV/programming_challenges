function nonogramrow(arr) {
    const limit = arr.length;
    let count = 0;
    let result = [];

    arr.forEach((num, i) => {
        if (num === 1) {
            count++;
            if (i === limit - 1) {
                result.push(count);
            }
        } else if (count !== 0) {
            result.push(count);
            count = 0;
        }
    });

    return result
}

// console.log(nonogramrow([0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1]));

