function shuffle(array) {
    let currenValue = array.length;
    let temporaryValue;
    let randomValue;
    while (currenValue !== 0) {
        randomValue = Math.floor(Math.random() * currenValue);
        currenValue--;
        temporaryValue = array[currenValue];
        array[currenValue] = array[randomValue];
        array[randomValue] = temporaryValue;
    }
    return array;
}

