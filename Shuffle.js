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

let im = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 0]);
for (let i = 0; i <= 8; i++) {
    if (im[i] === 0) {
        empty = i + 1;
    }
}
