const container = document.querySelector('.container');

let eraseMode = false;
const modeButton = document.querySelector('button.mode');
modeButton.onclick = toggleMode;
function toggleMode() {
    eraseMode = !eraseMode;
    modeButton.textContent = eraseMode ? 'Draw' : 'Erase';
}

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
    eventListener(event.target.value);
});

function createGrid (n) {
    const containerSize = container.clientWidth;
    let color = document.querySelector('input#fillColor').value;

    for (i=0; i<n*n; i++) {
        const div = document.createElement('div');
        div.style.width = `${(containerSize-3*n) / n }px`;
        div.style.height = `${(containerSize-3*n) / n }px`;
        div.id = `square-${i+1}`;
        div.className = 'square';
        div.style.opacity = '0';

        setColor(color)

        container.appendChild(div);
    }
}

function setColor(color) {
    
    div.style.backgroundColor = color;

    // event click listener
    div.addEventListener('mouseover', newColor)
}

function newColor() {
    let currentOpacity = parseFloat(div.style.opacity);
        if (!eraseMode) {
            // drawing mode
            console.log(eraseMode)
            if (currentOpacity < 1) {
                currentOpacity = Math.min(1, currentOpacity + 0.1 );
                div.style.opacity = currentOpacity.toFixed(1);
            } else {
                // erase mode
                console.log(eraseMode)
                if (currentOpacity > 0) {
                    currentOpacity = Math.max(0, currentOpacity - 0.1 );
                    div.style.opacity = currentOpacity.toFixed(1);
                }
            }
        }
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
