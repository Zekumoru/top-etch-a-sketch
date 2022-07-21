
const BLACK_DECREASE_PERCENT = 0.1;

let grid;
let blackMultiplier = 1;

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
    return grid;
}

function createSquare(length) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = length + 'px';
    square.style.height = length + 'px';
    addHoverEffect(square);
    return square;
}

function addHoverEffect(square) {
    square.addEventListener('mouseover', (e) => {
        square.style.backgroundColor = generateRandomRGB(blackMultiplier);
        if (blackMultiplier > 0) {
            blackMultiplier -= BLACK_DECREASE_PERCENT;
        }
        else if (blackMultiplier < 0) {
            blackMultiplier = 0;
        }
    });
}

function generateRandomRGB(blackMultiplier = 1) {
    let r = random(255 * blackMultiplier);
    let g = random(255 * blackMultiplier);
    let b = random(255 * blackMultiplier);
    return `rgb(${r}, ${g}, ${b})`;
}

function random(max) {
    return Math.floor(Math.random() * max);
}

document.querySelector('button.resize').addEventListener('click', (e) => {
    let size = +prompt('Enter new grid size. (Min: 8, Max: 100)');
    
    if (!size || size < 8) {
        size = 8;
    }
    else if (size > 100) {
        size = 100;
    }

    grid.remove();
    grid = createGrid(size, size);
    blackMultiplier = 1;
});

grid = createGrid(32, 32);