function updateGrid() {
    initializeGrid(gridSizeInput.value ** 2);
    tileGrid.style.gridTemplateColumns = `repeat(${gridSizeInput.value}, 1fr)`;
    tileGrid.style.gridTemplateRows = `repeat(${gridSizeInput.value}, 1fr)`;
}

function initializeGrid(tileCount) {
    tileGrid.innerHTML = '';
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
        tile.classList.add('filled');
    }));
}

function initializeControls() {
    gridSizeDisplay.textContent = `${gridSizeInput.value} x ${gridSizeInput.value}`;
    gridSizeInput.addEventListener('input', () => {
        gridSizeDisplay.textContent = `${gridSizeInput.value} x ${gridSizeInput.value}`;
    });
}

function clearGrid() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => tile.classList.remove('filled'));
}

const tileGrid = document.querySelector('.tile-grid');
const gridSizeInput = document.querySelector('.grid-size-input');
const gridSizeDisplay = document.querySelector('.grid-size-display');
const gridSizeButton = document.querySelector('.grid-size-button');
const gridClearButton = document.querySelector('.grid-clear-button');

initializeGrid(256);
initializeControls();
gridSizeButton.addEventListener('click', updateGrid);
gridClearButton.addEventListener('click', clearGrid);