const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function warmup(val, num) {
    const lowerCase = val.toLowerCase();
    let isLowerCase;
    if (val === lowerCase) {
        isLowerCase = true;
    } else {
        isLowerCase = false;
    }

    const index = arr.indexOf(lowerCase);

    if (index < 0) {
        return val;
    }

    const encryptedLetterIndex = (index + num) < 25 ? index + num : (index + num) - 26;

    if (!isLowerCase) {
        return arr[encryptedLetterIndex].toUpperCase();
    }
    return arr[encryptedLetterIndex];


}

console.log(warmup('z', 1));
function caesar(val, num) {
    if (num < 0 || num > 26) {
        return null;
    }
    const box = [];
    for (let i = 0; i < val.length; i++) {
        box.push(warmup(val[i], num));
    }
    return box.join('');
}

function caesar_interpreter(val) {
    const scoreRef = [3, -1, 1, 1, 4, 0, 0, 2, 2, -5, -2, 1, 0, 2, 3, 0, -6, 2, 2, 3, 1, -1, 0, -5, 0, -7];
    const inputLimit = 26;
    let curr_shifted;
    let max_score = 0;
    let result;

    for (let i = 0; i < inputLimit; i++) {
        curr_shifted = caesar(val, i)
        if (getValScore(curr_shifted) > max_score) {
            max_score = getValScore(curr_shifted);
            result = curr_shifted;
        }
    }
    function getValScore(curr) {
        let curr_score = 0; let average = 0;
        for (let i = 0; i < curr.length; i++) {
            if (arr.indexOf(curr[i]) !== -1) {
                curr_score += scoreRef[arr.indexOf(curr[i])];
            }
        }
        average = curr_score / curr.length;
        return Math.round(average);
    }
    return result;
}

// console.log(caesar("Daily Programmer!", 6));
// console.log(caesar("Zol abyulk tl puav h ulda.", 6));
// console.log(caesar_interpreter('Zol abyulk tl puav h ulda.'));

