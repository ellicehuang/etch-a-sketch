document.addEventListener('DOMContentLoaded',() => {
    // handle DOMContentLoaded event
    
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
});

function createGrid (n) {
    const container = document.querySelector('div.container');
    const containerSize = container.clientWidth;
    for (i=0; i<n*n; i++) {
        const div = document.createElement('div');
        div.className = 'square';
        div.style.width = `${(containerSize-3*n) / n }px`;
        div.style.height = `${(containerSize-3*n) / n}px`;
        div.id = `square-${i+1}`;
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'seagreen';
        })
        document.querySelector('.container').appendChild(div);
    }
}

function resetGrid() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
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
