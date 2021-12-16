function nonogramrow(arr) {
    const limit = arr.length;
    let count = 0;
    let result = [];

    arr.forEach((num, i) => {
        if (num === 1) {
            count++;
        } else {
            if (arr[i - 1] === 1 && i !== 0) {
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

// console.log(nonogramrow([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]));

