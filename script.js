let divBox = document.getElementById("box-container");

for (let i = 0; i < 256; i++) {
    let squareDiv = document.createElement('div');
    squareDiv.addEventListener('mouseover', function() {
        squareDiv.style.backgroundColor = "black";
    });
    divBox.appendChild(squareDiv);
}

