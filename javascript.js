let eraseMode = false;
let color = document.querySelector('input#fillColor').value;
const container = document.querySelector('div.container');

let gridSize = document.querySelector('input#gridSize').value;
createGrid(gridSize);

const resetButton = document.querySelector('button.reset')
resetButton.addEventListener('click', () => {
    resetGrid();
})

const resizeButton = document.querySelector('button.resize');
resizeButton.addEventListener('click', () => {
    resizeGrid();
});

const newColorInput = document.querySelector('input#fillColor');
newColorInput.addEventListener('change', (event) => {
    color = event.target.value;
});


const eraserButton = document.querySelector('button.mode');
eraserButton.addEventListener('click', () => {
    eraseMode = !eraseMode;
    eraserButton.textContent = eraseMode ? 'Draw' : 'Erase';
    console.log(eraseMode)
});

function createGrid (n) {
    const containerSize = container.clientWidth;

    for (i=0; i<n*n; i++) {
        const square = document.createElement('div');
        square.style.width = `${(containerSize-2*n) / n }px`;
        square.style.height = `${(containerSize-2*n) / n }px`;
        square.id = `square-${i+1}`;
        square.className = 'square';
        square.style.opacity = '0';

        square.addEventListener('mouseover', () => {
            let opacity = parseFloat(square.style.opacity)
            if (!eraseMode) {
                // draw mode
                square.style.backgroundColor = color;
                if (opacity < 1) {
                    opacity = Math.min(1, opacity + 0.1 );
                    square.style.opacity = opacity.toFixed(1);
                } 
            } else if (eraseMode) {
                // erase mode
                console.log('erasing')
                if (opacity > 0) {
                    opacity = Math.max(0, opacity - 0.1 );
                    console.log(opacity)
                    square.style.opacity = opacity.toFixed(1);
                }
            }
        });

        container.appendChild(square);
    }
}

function toggleDraw(color) {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            let opacity = parseFloat(square.style.opacity)
            if (!eraseMode) {
                // draw mode
                square.style.backgroundColor = color;
                if (opacity < 1) {
                    opacity = Math.min(1, opacity + 0.1 );
                    square.style.opacity = opacity.toFixed(1);
                } else if (eraseMode) {
                    // erase mode
                    console.log('erasing')
                    if (opacity > 0) {
                        opacity = Math.max(0, opacity - 0.1 );
                        console.log(opacity)
                        square.style.opacity = opacity.toFixed(1);
                    }
                }
            }
        });
    })
}

function resetGrid() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = '';
        square.style.opacity = '';
    })
}

function deleteGrid() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.remove();
    })
}

function resizeGrid() {
    deleteGrid();
    let gridSize = document.querySelector('input#gridSize').value;
    createGrid(gridSize);
}
