function yahtzee_upper(roll) {
    const  round = [1,2,3,4,5,6];
    let  counter = 0;
    function checkDice(roll, index) {
        let count = 0;
        for (let i = 0; i < roll.length; i++) {
            if( index === roll[i]) {
                count ++;
            }
            
        }

        return count === 0 ? 0 : index * count
    }

    for (let i = 0; i < round.length; i++) {
        counter = checkDice(roll, round[i]) > counter ? checkDice(roll, round[i]) : counter
    }

    return counter
}

// console.log(yahtzee_upper([6, 6, 6, 6, 6]));
