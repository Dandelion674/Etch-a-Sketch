const container = document.querySelector('#container');
const newGridBtn = document.querySelector('#new-grid-btn');

const containerSize = 500; 

container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

//Grid Creation Func
function createGrid(size) {
    
    container.innerHTML = '';
    
    const squareSize = containerSize / size;
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        
        square.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#000000ff';
        });
        
        container.appendChild(square);
    }
}

//Grid Resize Func
function createNewGrid() {
    let gridSize = prompt('Enter the number of squares(maximum 100):');
    
    gridSize = parseInt(gridSize);
    
    if (isNaN(gridSize) || gridSize < 1) {
        alert('Please enter a valid positive number.');
        return;
    }
    
    if (gridSize > 100) {
        alert('Maximum grid size is 100. Setting grid size to 100.');
        gridSize = 100;
    }
    
    createGrid(gridSize);
}

newGridBtn.addEventListener('click', createNewGrid);

createGrid(16);