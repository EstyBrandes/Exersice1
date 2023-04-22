const headerSquare = document.getElementById('header-square');
const header = document.getElementById('header');
const sizeIncrement = 20;
let squareSize = sizeIncrement;

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const squares = [];
let revealedSquares = [];

function createSquare(letter) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = squareSize + 'px';
    square.style.height = squareSize + 'px';
    square.style.backgroundColor = 'black';
    square.style.marginRight = 20 + 'px';
    square.style.marginTop = '20px';
    square.style.marginTop = '123px';
    square.style.marginRight = 132 + 'px';
    square.style.fontSize = (squareSize / 2) + 'px';
    square.style.display = 'flex';
    square.style.justifyContent = 'center';
    square.style.alignItems = 'center';
    square.innerText = letter;
    square.isRevealed = false;
    square.isMatched = false;


    square.onclick = function () {
        revealSquare(square);
    };

    return square;
}

function revealSquare(square) {
    if (revealedSquares.length < 2 && !square.isRevealed && !square.isMatched) {
        square.isRevealed = true;
        square.style.color = 'white';
        revealedSquares.push(square);

        if (revealedSquares.length === 2) {
            if (revealedSquares[0].innerText === revealedSquares[1].innerText) {
                revealedSquares[0].style.backgroundColor = 'blue';
                revealedSquares[0].isMatched = true;
                revealedSquares[1].style.backgroundColor = 'blue';
                revealedSquares[1].isMatched = true;
                revealedSquares = [];
            }
            else {
                setTimeout(hideSquares, 1000);

            }


        }
    }
}
function hideSquares() {
    console.log(revealedSquares.length);
    revealedSquares.forEach(function (square) {
        square.isRevealed = false;
        square.style.color = 'black';
    });
    revealedSquares = [];

}

headerSquare.onclick = function () {
    const whiteContainer = document.querySelector('.white');
    for (let i = 0; i < 3; i++) {
        const letter = letters[Math.floor(Math.random() * letters.length)];
        const square = createSquare(letter);
        squares.push(square);
        whiteContainer.appendChild(square);
        squareSize += sizeIncrement;
    }
};










