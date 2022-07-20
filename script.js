function createGrid(x, y) {
    const grid = document.createElement('div');
    grid.style.width = '600px';
    grid.classList.add('grid');

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            const square = createSquare(grid.style.width.slice(0, -2) / x);
            grid.appendChild(square);
        }
    }
    document.body.appendChild(grid);
}

function createSquare(length) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = length + 'px';
    square.style.height = length + 'px';
    return square;
}

createGrid(16, 16);