const colorArray = [
    "green",
    "red",
    "blue",
    "orange",
    "purple"
]

var board = [];
var elements = [];

function makeBoard(n) {
    for (let i = 0; i < n; i++) {
        board[i] = [];
        elements[i] = [];
        for (let j = 0; j < n; j++) {
            var randomNumber = Math.floor(Math.random() * colorArray.length);
            board[i][j] = colorArray[randomNumber];
            elements[i][j] = false;
        }
    }
}

function isBeside(selected, coords) {
    for (let i = 0; i < selected.length; i++) {
        //console.log(selected[i].charAt(0) + " - " + coords.charAt(0) + " = " + (selected[i].charAt(0) - coords.charAt(0)));
        //console.log(selected[i].charAt(1) + " - " + coords.charAt(1) + " = " + (selected[i].charAt(1) - coords.charAt(1)));
        if (selected[i].charAt(0) - coords.charAt(0) == 1 || selected[i].charAt(0) - coords.charAt(0) == -1) {
            if (selected[i].charAt(1) - coords.charAt(1) == 0) {
                return true;
            }
        }
        else if (selected[i].charAt(1) - coords.charAt(1) == 1 || selected[i].charAt(1) - coords.charAt(1) == -1) {
            if (selected[i].charAt(0) - coords.charAt(0) == 0)
                return true;
        }
        else if (selected[i].charAt(0) - coords.charAt(0) == 0 && selected[i].charAt(1) - coords.charAt(1) == 0)
            return true;
    }
    return false;
}

export {board, elements, makeBoard, isBeside};