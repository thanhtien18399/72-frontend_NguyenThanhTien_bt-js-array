// bài 1
function array() {
    var a =[];
    var tam = 0;
    for (var i = 0; i < 10; i++) {
        for (var j = tam; j < tam + 10; j++) {
            a+= j + 1;
        }
        tam += 10;
        a+="\n";
    }
    console.log("Bài 1:", "Xuất ra mảng từ 1 đến 100:", "\n", a);
}
array();

// bài 2
function checkInSoNguyeTo(a) {
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0 && a[i] > 1) {
            arr.push(a[i]);
        }
    }
    console.log("Bài 2:", "mảng nhập: 1, 3, 4, 5, 9", "\nSố nguyên Tô là: ", arr);

}
checkInSoNguyeTo([1, 3, 4, 5, 9]);

// bài 3
function sum(n) {
    var s = 0;
    for (var i = 2; i <= n; i++) {
        s += i;
    }
    s += 2 * n;
    console.log("Bài 3:", "Tổng của s là: nhập n = 2: KQ:", s)
}
sum(2);

// bài 4
function uocSoN(n) {
    count = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    console.log("Bài 4:", "Tổng số lượng ước của n: nhập n=8: KQ:", count);
}
uocSoN(8);

// Bài 5

function soDaoNguoc(n) {
    var tmp;
    var res = 0;
    if (n < 0) {
        console.log("Bài 5: Vui Lòng Nhập Số nguyên dương");
        return;
    }
    while (n > 0) {
        tmp = n % 10;
        res = res * 10 + tmp;
        n = Math.floor(n / 10);
    }
    console.log("Bài 5: đảo ngược của 1 số nguyên dương : n=1234 KQ:", res);
}
soDaoNguoc(1234);

// Bài 6:
function timXMax(s) {
    var x = 100;
    var sum = 0;
    var count = 0;
    if (s > 0) {
        for (var i = 1; i <= x; i++) {
            sum += i;
            if (sum >= s) {
                break;
            }
            count += 1;
        }
        console.log("Bài 6: x nguyên dương lớn nhất là : s có tổng là 99 KQ:", count);
    } else
        console.log("Bài 6: vui lòng nhập sô nguyên dương");
}
timXMax(99);

//Bài 7:
function inBangCuuChuong(n) {
    console.log("Bài 7: Xuất ra bảng cửu Chương : nhập n=3 ")
    for (var i = 0; i <= 10; i++) {
        console.log(n.toString(), "*", i.toString(), "=", n * i);
    }
}
inBangCuuChuong(3);

// Bài 8
function chibai() {
    console.log("Bài 8: Chia Bài có chia bài cho 4 người chơi")
    var player1 = [];
    var player2 = [];
    var player3 = [];
    var player4 = [];
    var players = [[], [], [], []];
    var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S",
        "AS", "7H", "9K", "10D"]
    for (var i = 0; i < cards.length; i++) {
        players = [[player1.push(cards[i])],
        [player2.push(cards[i + 1])],
        [player3.push(cards[i + 2])],
        [player4.push(cards[i + 3])]];
        // player1 = player1.concat([cards[i]]);
        // player2 = player2.concat([cards[i + 1]]);
        // player3 = player3.concat([cards[i + 2]]);
        // player4 = player4.concat([cards[i + 3]]);
        i = i + 3;
    }
    console.log("player1 :", player1);
    console.log("player2 :", player2);
    console.log("player3 :", player3);
    console.log("player4 :", player4);

}
chibai();

//Bài 9:
function tinhTong(m, n) {
    var ga, cho;
    for (ga = 0; ga <= n / 2; ga++) {
        for (cho = 0; cho <= n / 4; cho++) {
            if ((ga + cho == m) && (ga * 2 + cho * 4) == 100) {
                console.log("Bài 9: Tổng số con Chó Và Gà", cho, ga);
                console.log(" Tổng số chân con Chó Và Gà", cho * 4, ga * 2);
                break;
            }
        }
    }
}
tinhTong(36, 100);
//Bài 10:
function gocGioPhut(g, p) {
    var p1 = 6;//360/60
    var g1 = 30;//360/12
    var gp1 = 0.5;//30/60
    var gocGP = ((p * 6) - 0.5 * (g * 60 + p));
    console.log("Bài 10  Nhập vào số giờ và số phút tính góc lệch giữa kim giờ và kim phút: 2:20 Góc lệch là: "
        , gocGP, "\ngóc lệch kim phút là :", p * 6,
        "\nGóc lệnh kim giờ là :", 0.5 * (g * 60 + p));
}
gocGioPhut(2, 20);
