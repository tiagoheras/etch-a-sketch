const gridContainer = document.getElementById('grid-container');
const resetButton = document.getElementById('reset-button');

function createGrid(size) {
    if (typeof size !== 'number') {
        return alert("grid size must be a number");
    } else if (size >= 100) {
        return alert("grid size must be under 100");
    } else {
        for (let divCount = 0; divCount < Math.pow(size, 2); divCount++) {
            const div = document.createElement('div');
            div.className = "grid-item";
            div.style.backgroundColor = 'rgba(0,0,0,0)';
            gridContainer.appendChild(div);
            let opacity = 0;
            div.addEventListener('mouseover', (e) => {
                opacity += 0.1;
                e.target.style.backgroundColor = `rgba(0,0,0,${opacity})`
            })
        }
    }

}

createGrid(16);

resetButton.addEventListener('click', () => {
    const gridSize = Number(prompt("Grid Size"));
    const divs = gridContainer.querySelectorAll('div');
    divs.forEach(div => {
        div.remove();
    });
    createGrid(gridSize);
})

