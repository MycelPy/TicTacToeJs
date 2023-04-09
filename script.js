const griditems = document.querySelectorAll('.griditem');
const resetBtn = document.querySelector('.button-49')
let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1
let gameOn = true;

function check() {
    if ((gameboard[0] === player1 && gameboard[1] === player1 && gameboard[2] === player1) ||
        (gameboard[3] === player1 && gameboard[4] === player1 && gameboard[5] === player1) ||
        (gameboard[6] === player1 && gameboard[7] === player1 && gameboard[8] === player1) ||
        (gameboard[0] === player1 && gameboard[3] === player1 && gameboard[6] === player1) ||
        (gameboard[1] === player1 && gameboard[4] === player1 && gameboard[7] === player1) ||
        (gameboard[2] === player1 && gameboard[5] === player1 && gameboard[8] === player1) ||
        (gameboard[0] === player1 && gameboard[4] === player1 && gameboard[8] === player1) ||
        (gameboard[6] === player1 && gameboard[4] === player1 && gameboard[2] === player1)) {
        gameOn = false
        alert(`Player ${player1} WINS!`)
    } else if ((gameboard[0] === player2 && gameboard[1] === player2 && gameboard[2] === player2) ||
        (gameboard[3] === player2 && gameboard[4] === player2 && gameboard[5] === player2) ||
        (gameboard[6] === player2 && gameboard[7] === player2 && gameboard[8] === player2) ||
        (gameboard[0] === player2 && gameboard[3] === player2 && gameboard[6] === player2) ||
        (gameboard[1] === player2 && gameboard[4] === player2 && gameboard[7] === player2) ||
        (gameboard[2] === player2 && gameboard[5] === player2 && gameboard[8] === player2) ||
        (gameboard[0] === player2 && gameboard[4] === player2 && gameboard[8] === player2) ||
        (gameboard[6] === player2 && gameboard[4] === player2 && gameboard[2] === player2)) {
        gameOn = false
        alert(`Player ${player2} WINS!`)
    }
}

function reset() {
    gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    griditems.forEach((griditem) => {
        griditem.textContent = ""
    })
    gameOn = true
}

function game(griditem, currentPlayer, gameOn) {
    if (griditem.textContent !== '' || gameOn === false) {
        pass
    } else {
        let numba = parseInt(griditem.className)
        let index = gameboard.indexOf(numba)
        gameboard[index] = currentPlayer
        griditem.textContent = gameboard[index]
    }
}

griditems.forEach((griditem) => {
    griditem.addEventListener('click', () => {
        if (gameOn === true) {
            check()
            if (currentPlayer === 'X') {
                game(griditem, currentPlayer, gameOn)
                currentPlayer = 'O'
            } else if (currentPlayer === 'O') {
                game(griditem, currentPlayer, gameOn)
                currentPlayer = 'X'
            }
        } else {
            resetBtn.addEventListener('click', () => {
                reset()
            })
        }
    })
})