let gridSize = 8;

if (isNaN(gridSize)) {
    console.log('Please enter a number between 8 and 64');
} else if (gridSize < 8 || gridSize > 64) {
    console.log('Please enter a number between 8 and 64');
} else {
    createGrid(gridSize);
    createCells(gridSize);
}

// hover over cell --> color background accordingly 

// add event listener 'hover' to each of the cells

function createGrid(gridSize) {
    let divContainer = document.getElementById('grid-container');

    divContainer.style.setProperty('grid-template-columns', `repeat(${gridSize}, 1fr)`);
    divContainer.style.setProperty('grid-template-rows', `repeat(${gridSize}, 1fr)`);
    //divContainer.style.setProperty('place-items', 'center');

    //if this works, read the documentation.
}

function colorIn(cell) {
    cell.classList.add('touched');
}

function createCells(gridSize) {
    let counter = 1;
    for (y = 1; y <= gridSize; y++) {
        for (x = 1; x <= gridSize; x++) {
            // create cell
            let newId = 'div' + counter;
            let divCell = document.createElement('div');
            divCell.setAttribute('id', newId);
            divCell.classList.add('cellId');
            divCell.addEventListener("mouseover", function (e) {
                e.target.classList.add('touched');
            });

            let divContainer = document.getElementById('grid-container');
            divContainer.appendChild(divCell);

            let newDiv = document.getElementById(newId);
            newDiv.setAttribute('grid-column-start', `${x}`);
            newDiv.setAttribute('grid-column-end', `${x}`);
            newDiv.setAttribute('grid-row-start', `${y}`);
            newDiv.setAttribute('grid-row-end', `${y}`);
            newDiv.setAttribute('border-style', 'solid');
            newDiv.setAttribute('border-color', 'black');
            
            // at some point check to see whether newDiv can be replaced with divCell

            counter++;
            // return counter ++
        }
    }
}

const btnEraser = document.getElementById('btn-eraser');
btnEraser.addEventListener('click', function() {
    console.log('hello, this is a test.');
    stateOfPage == 'eraser';
})

// states of page

let stateOfPage = null;
