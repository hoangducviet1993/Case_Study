let canvans = document.getElementById("canvas");
let ctx = canvans.getContext("2d");


function draw() {
        im = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 0]);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            component(i, j);
        }
    }

}

function component(x, y) {

    let text = "puzz";
    let z = x + 3 * y;
    z = im[z];
    text = text + z.toString();
    if (z !== 0) {
        let img = document.getElementById(text);
        pat = ctx.createPattern(img, "repeat");
        ctx.fillStyle = pat;
    } else {
        ctx.fillStyle = "white";
    }

    ctx.fillRect(150 * x, 150 * y, 150, 150);
}
function button(){
    draw();
}

