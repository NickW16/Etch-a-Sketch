let divBox = document.getElementById("box-container");

/*This section makes squares and enables them to be hovered */
function createSquares(squaresPerRow, squareColor = 'black', opacity = false) {
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

        if (squareColor === 'random') {
            squareDiv.addEventListener('mouseover', function() {
                 /* color randomizer for squares */
                let colorOne = Math.floor(Math.random() * 256);
                let colorTwo = Math.floor(Math.random() * 256);
                let colorThree = Math.floor(Math.random() * 256);


                squareDiv.style.backgroundColor = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
            })};

        if (squareColor === 'black') {
            squareDiv.addEventListener('mouseover', function() {
                squareDiv.style.backgroundColor = 'black';
            })};

        if (opacity === true) {
            squareDiv.style.opacity = '0.1';
            squareDiv.addEventListener('mouseover', function() {
                let currentOpacity = parseFloat(squareDiv.style.opacity) || 1; // Default to 1 if not set
                currentOpacity = Math.min(currentOpacity + 0.1, 1); // Ensure opacity doesn't exceed 1
                squareDiv.style.opacity = currentOpacity;

        })}



        divBox.appendChild(squareDiv);
    }
};

/*Initial creation of squares */
createSquares(16, 'black');

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
        createSquares(16, 'random');
    };
});

// opacity function (random colors):
document.querySelector('#toggle-opacity-random').addEventListener('click', function () {
    let squaresPerRow = parseInt(document.querySelector('#squareInput').value);
    if (!isNaN(squaresPerRow) && squaresPerRow > 0) {
        createSquares(squaresPerRow, 'random', opacity = true);
    } else {
        createSquares(16, 'random', opacity = true);
    }
});
//opacity function (black):
document.querySelector('#toggle-opacity-black').addEventListener('click', function () {
    let squaresPerRow = parseInt(document.querySelector('#squareInput').value);
    if (!isNaN(squaresPerRow) && squaresPerRow > 0) {
        createSquares(squaresPerRow, 'black', opacity = true);
    } else {
        createSquares(16, 'black', opacity = true);
    }
});