let divBox = document.getElementById("box-container");

/*This section makes squares and enables them to be hovered */
function createSquares(squaresPerRow, squareColor = 'black') {
    divBox.textContent = ' '; // Clears existing squares //

    // Maximum value for squares
    const maxLength = 100;
    if (squaresPerRow > maxLength) {
        alert (`Maximum Length is ${maxLength}. Setting to ${maxLength}`);
        squaresPerRow = maxLength;
    }

    let totalSquares = (squaresPerRow * squaresPerRow);

    /*This section calculates the value of the square size so that it always has the same size, no matter the input */
    const squareSize = Math.floor(640 / squaresPerRow ); 

    for (let i = 0 ; i < totalSquares ; i++) {
        let squareDiv = document.createElement('div');
        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;

        /* color randomizer for squares */
        let colorOne = Math.floor(Math.random() * 256);
        let colorTwo = Math.floor(Math.random() * 256);
        let colorThree = Math.floor(Math.random() * 256);

        if (squareColor === 'random') {
        squareDiv.addEventListener('mouseover', function() {
            squareDiv.style.backgroundColor = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
        })};

        if (squareColor === 'black') {
            squareDiv.addEventListener('mouseover', function() {
                squareDiv.style.backgroundColor = 'black';
            })};

        divBox.appendChild(squareDiv);
    }
};

/*Initial creation of squares */
createSquares(16);

// user input function:
document.querySelector('#createBtn').addEventListener('click', function () {
    let squaresPerRow = parseInt(document.querySelector('#squareInput').value);
    if (!isNaN(squaresPerRow) && squaresPerRow > 0) {
        createSquares(squaresPerRow);
    } else {
        alert ("Please enter a valid number greater than 0.")
    };
});

// Reset function section:
document.querySelector('#resetBtn').addEventListener('click', function () {
    createSquares(16);
});

// random colors function :
document.querySelector('#activate-random-colors').addEventListener('click', function () {
    let squaresPerRow = parseInt(document.querySelector('#squareInput').value);
    if (!isNaN(squaresPerRow) && squaresPerRow > 0) {
        createSquares(squaresPerRow, 'random');
    } else {
        alert ("Please enter a valid number greater than 0.")
    };
});
