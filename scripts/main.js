const tilesContainer = document.querySelector('.tiles-container');

for (let i = 0; i < 256; i++) {
    let tile = document.createElement('div');
    tile.classList.add('tile');
    tilesContainer.appendChild(tile);
}

let tiles = document.querySelectorAll('.tile');

tiles.forEach(tile => tile.addEventListener('mouseover', () => {
    tile.style.backgroundColor = '#b8b8b8';
}));