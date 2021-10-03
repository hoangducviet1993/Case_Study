function changeImg(number) {
    document.getElementById("backGround").background = "images" + number + "/background.jpg"
    for (let i = 1; i <= 9; i++) {
        document.getElementById("puzz" + i).src = "images" + number + "/puzz" + i + ".jpg";
    }

}

function button2() {
    let a = document.getElementById("chuyenanh").value;
    if (a === "zoro") {
        changeImg(1);
    }
    if (a === "pokemon") {
        changeImg(2);
    }
    if (a === "naruto") {
        changeImg(3);
    }
    if (a === "doraemon") {
        changeImg(4);
    }
    if (a === "18+") {
        alert("Bạn chưa đủ 18 tuổi")
    }

}

