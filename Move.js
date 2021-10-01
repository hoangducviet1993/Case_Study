function moveUp() {
    if (empty === 7 || empty === 8 || empty === 9) {
        au = document.getElementById("error").play();
        moves--;
        draw();
    } else {
        au = document.getElementById("cut").play();
        text = "buzz";
        let curr = empty;
        empty = empty + 3;
        let next = empty;
        im[curr - 1] = im[next - 1];
        im[next - 1] = 0;
        draw();
    }

}

function moveDown() {
    if (empty === 1 || empty === 2 || empty === 3) {
        au = document.getElementById("error").play();
        moves--;
        draw();
    } else {
        au = document.getElementById("cut").play();
        text = "buzz";
        let curr = empty;
        empty = empty - 3;
        let next = empty;
        im[curr - 1] = im[next - 1];
        im[next - 1] = 0;
        draw();
    }
}


function moveLeft() {
    if (empty === 3 || empty === 6 || empty === 9) {
        au = document.getElementById("error").play();
        moves--;
        draw();
    } else {
        au = document.getElementById("cut").play();
        text = "buzz";
        let curr = empty;
        empty = empty + 1;
        let next = empty;
        im[curr - 1] = im[next - 1]
        im[next - 1] = 0;
        draw();
    }
}


function moveRight() {
    if (empty === 1 || empty === 4 || empty === 7) {
        au = document.getElementById("error").play();
        moves--;
        draw();
    } else {
        au = document.getElementById("cut").play();
        text = "buzz";
        let curr = empty;
        empty = empty - 1;
        let next = empty;
        im[curr - 1] = im[next - 1]
        im[next - 1] = 0;
        draw();
    }
}

window.addEventListener("keydown", function (event) {
    key = event.keyCode;
    if (key === 37) {
        event.preventDefault();
        moveLeft()

    }
    if (key === 38) {
        event.preventDefault();
        moveUp()

    }
    if (key === 39) {
        event.preventDefault();
        moveRight()

    }
    if (key === 40) {
        event.preventDefault();
        moveDown()

    }

})