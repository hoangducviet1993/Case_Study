let restart = 0
function won() {
    ctx.clearRect(300, 300, 150, 150);
    let img = document.getElementById("puzz9");
    dra = ctx.createPattern(img, "repeat");
    ctx.fillStyle = dra;
    ctx.fillRect(300, 300, 150, 150);
    mes = document.getElementById("message").innerHTML = "Bạn đã thắng trong " + moves.toString() + " bước";
    au = document.getElementById("cheers").play();
    restart = 1;
    moves = 0;
}
