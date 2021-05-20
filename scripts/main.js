const tileGrid = document.querySelector('.tile-grid');
const gridSizeInput = document.querySelector('.grid-size-input');
const gridSizeDisplay = document.querySelector('.grid-size-display');
const gridSizeButton = document.querySelector('.grid-size-button');

initializeGrid(tileGrid, 256);
initializeControls();
gridSizeButton.addEventListener('click', updateGrid);


function updateGrid() {
    initializeGrid(tileGrid, gridSizeInput.value ** 2);
    tileGrid.style.gridTemplateColumns = `repeat(${gridSizeInput.value}, 1fr)`;
    tileGrid.style.gridTemplateRows = `repeat(${gridSizeInput.value}, 1fr)`;
}

function initializeGrid(grid, tileCount) {
    grid.innerHTML = '';
    fillContainerWithTiles(tileCount);
    makeTilesFillable();
}

function fillContainerWithTiles(tileCount) {
    for (let i = 0; i < tileCount; i++) {
        let tile = document.createElement('div');
        tile.classList.add('tile');
        tileGrid.appendChild(tile);
    }
}

function makeTilesFillable() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => tile.addEventListener('mouseover', () => {
        tile.style.backgroundColor = '#b8b8b8';
    }));
}

function initializeControls() {
    gridSizeDisplay.textContent = `${gridSizeInput.value} x ${gridSizeInput.value}`;
    gridSizeInput.addEventListener('input', () => {
        gridSizeDisplay.textContent = `${gridSizeInput.value} x ${gridSizeInput.value}`;
    });
}