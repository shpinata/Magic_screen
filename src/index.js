const setka = document.getElementById("setka"); // обращается к контейнеру в котором будет создаваться div

let collor = null;                          // задаем переменную с изначальным цветом
function rainbow() {
    const random = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase(); //Комьютер рандомно выдает параметр
    return random;
}

let black = document.getElementById("black"); // обращаемся к кнопке
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let rainbowClick = document.getElementById("rainbowClick");
let lastik = document.getElementById("lastik");

red.addEventListener("click", function () { // создаем обработчик для кнопки, и он проверяет
    collor = "red";                         //  кликнули на нее или нет. И если кликнули выполняет функцию
});                                         // в которой меняется цвет на красный

black.addEventListener("click", function () {
    collor = "black";
});

blue.addEventListener("click", function () {
    collor = "blue";
});

green.addEventListener("click", function () {
    collor = "green";
});

rainbowClick.addEventListener("click", function () {
    collor = null;
});

lastik.addEventListener("click", function () {
    collor = "white";
});

let mouseDown = false;

document.body.addEventListener("mousedown", function () {
    mouseDown = true;
});
document.body.addEventListener("mouseup", function () {
    mouseDown = false;
});

function qestion() {
    const hiro = prompt("Введите параметр сетки в пикселях", 10);
    return hiro || 10;
}
let result = qestion();
for (let i = 1; i < (window.innerWidth / result); i++) {
    const div = document.createElement("div"); // создает в памяти (в цикле)  div
    setka.appendChild(div);  // помещает div в body (в цикле) так были созданы длинные вертикальные контейнеры
    // следующий for делит эти вертикальные контейнеры на ячейки
    for (let i = 1; i < ((window.innerHeight - 53) / result); i++) {
        const div1 = document.createElement("div");
        div.appendChild(div1);
        div1.style.width = `${result}px`;
        div1.style.height = `${result}px`;
        div1.addEventListener('mouseover', function () {
            if (mouseDown == true) {
                if (collor != null) {
                    event.target.style.background = collor;
                } else {
                    event.target.style.background = rainbow();
                }
            }
        })
    }
} 