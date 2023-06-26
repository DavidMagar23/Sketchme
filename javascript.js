// Initialize variables //
let rows = 16,
    columns = 16,
    newGrid = 0,
    colorCounter = 0,
    body = document.querySelector('body'),
    container = document.querySelector('.container'),
    wholeContainer = document.querySelector('.whole-container'),
    gridArray = [],
    colorPick = document.getElementById('color-pick'),
    spray = document.getElementById('spray'),
    options = document.querySelector('.options');

//Change color
colorPick.addEventListener("input", () => {
    colorPick.style.boxShadow = `3px 3px ${colorPick.value}`;
    document.documentElement.style.setProperty('--color1', `${colorPick.value}`);
})

// Onload make grid // 
makeGrid();

// Make grid // 
function makeGrid () {

    // Delete prev grid //
    if (newGrid > 0){
        container.innerHTML = '';
    }   

    // Initialize array // 
    for ( let i = 0; i < rows; i++) {
        gridArray[i] = [];
        for (let j = 0; j< columns; j++) {
            gridArray[i][j] = [];
        }
    }

    // Make div grid //
    for (let i = 0; i < rows; i++) {
        rowDiv = document.createElement('div');
        rowDiv.classList.add('row-div');
        container.appendChild(rowDiv);
        for (let j = 0; j < columns; j++) {
            gridArray[i][j] = document.createElement('div');
            gridArray[i][j].classList.add('grid-box');
            if (colorCounter % 2 == 0) {
                gridArray[i][j].classList.add('box-type-1');
                colorCounter++;
            }
            else {
                gridArray[i][j].classList.add('box-type-2');
                colorCounter++;
            }
            rowDiv.appendChild(gridArray[i][j]);
            responeGrid(gridArray[i][j]);
        }
        if (columns % 2 == 0) {
            colorCounter++;
        }
    }
    newGrid++;
}

// Button to get grid size
getSizeButton = document.createElement('button');
getSizeButton.classList.add('button');
getSizeButton.innerText = "Create new Grid";
options.appendChild(getSizeButton);

getSizeButton.addEventListener("click", () => {
    do {
        rows = prompt("Rows: ", 16);
    }
    while (rows > 35);
    switch (rows) {
        case null : return;
        case '' :
        case 0 : rows = 16;
    }

    do {
        columns = prompt("Columns: ", 16);
    }
    while (columns > 35);
    switch (columns) {
        case null : return;
        case '' :
        case 0 : columns = 16;
    }
    rows = +rows;
    columns =+ columns;
    makeGrid();
});

function responeGrid (square) {
    // square.addEventListener("click", () => {
    //     square.style.background = colorPick.value;
    // })
}

container.addEventListener("mousedown" , () => {
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < columns; y++) {
            gridArray[x][y].addEventListener("mousedown", () => {
                gridArray[x][y].style.background = colorPick.value;
            })
            gridArray[x][y].addEventListener("mouseup", () => {
                gridArray[x][y].style.background = colorPick.value;
            })
        }
    }
})
