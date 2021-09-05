import {board, elements, makeBoard, isBeside} from './dotsBoard.js';
const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext("2d");
const colorArray = [
    "green",
    "red",
    "blue",
    "orange",
    "purple"
]

let selected = [];
let colorCheck = "";

let radius = 50;

let x = 0;
let y = 0;

window.addEventListener('keyup', e => {
    if (e.code == "ArrowUp" && y > 0)
        y -= 1;
    if (e.code == "ArrowDown" && y < 5)
        y += 1;

    if (e.code == "ArrowLeft" && x > 0)
        x -= 1;
    if (e.code == "ArrowRight" && x < 5)
        x += 1;

    if (e.code == "Space") {
        //console.log(colorCheck);
        if (colorCheck == "" || (colorCheck == board[x][y] && isBeside(selected, x.toString() + y.toString()))) {
            if (selected[selected.length - 1] == x.toString() + y.toString()) {
                selected.pop();
                elements[x][y] = false;
            }
            else if (selected.indexOf(x.toString() + y.toString()) == -1) {
                selected.push(x.toString() + y.toString());
                elements[x][y] = true;
                colorCheck = board[x][y];
            }
            //console.log(selected);

            if (selected.length == 0)
                colorCheck = "";
        }
    }
        
});

//Game Loop
function drawGame() {
    requestAnimationFrame(drawGame);
    clearScreen();
    drawDots();
    drawSelector(x, y, "white");
}

function drawDots() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            ctx.fillStyle = board[i][j];
            ctx.beginPath();
            ctx.arc(60 + 110 * i, 60 + 110 * j, radius, 0, Math.PI * 2);
            ctx.fill();
            if (elements[i][j]) {
                drawSelector(i, j, "LightYellow");
            }
        }
    }
}

function drawSelector(x, y, color) {
    ctx.beginPath();
    ctx.arc(60 + 110 * x, 60 + 110 * y, radius, 0, Math.PI * 2);
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.stroke();
}

function clearScreen() {
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

makeBoard(6);
drawGame();
console.log(board);