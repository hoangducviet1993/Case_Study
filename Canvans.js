let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0];

function draw() {
    moves++;
    mov = document.getElementById("moves").innerHTML = "Số bước " + moves.toString();
    let t = false;
    // im = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 0]);
    if (restart === 1) {
        im = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 0]);
        for (let i = 0; i <= 8; i++) {
            if (im[i] === 0)
                empty = i + 1;
        }
        console.log(empty);
        ctx.clearRect(0, 0, 450, 450);
        restart = 0;
    }
    for (let i = 0; i < 9; i++) {
        if (im[i] !== arr[i])
            t = true;
    }
    console.log(im);
    console.log(arr);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            component(i, j);
        }
    }

    console.log(t);

    if (t === false) {
        checkWin();
    }
}

function component(x, y) {

    let text = "puzz";
    let z = x + 3 * y;
    z = im[z];
    text = text + z.toString();
    if (z !== 0) {
        let img = document.getElementById(text);
        dra = ctx.createPattern(img, "repeat");
        ctx.beginPath();
        ctx.fillStyle = dra;
    } else {
        ctx.fillStyle = "white";
    }
    ctx.closePath()

    ctx.fillRect(150 * x, 150 * y, 150, 150);
}

function button() {
    moves = -1;
    restart = 1;
    draw();
    return
}
