const svg = document.getElementById('drawing-area');
const shapeSelect = document.getElementById('shape-select');

let isDrawing = false;
let startX, startY;

svg.addEventListener('mousedown', (event) => {
    isDrawing = true;
    startX = event.offsetX;
    startY = event.offsetY;
});

svg.addEventListener('mousemove', (event) => {
    if (!isDrawing) return;

    const currentX = event.offsetX;
    const currentY = event.offsetY;


    //svg.innerHTML = '';

    const shape = shapeSelect.value;
    if (shape === 'circle') {
        const radius = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2));
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', startX);
        circle.setAttribute('cy', startY);
        circle.setAttribute('r', radius);
        circle.setAttribute('fill', 'rgba(0, 150, 255, 0.5)');
        svg.appendChild(circle);
    } else if (shape === 'rectangle') {
        const width = currentX - startX;
        const height = currentY - startY;
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', width < 0 ? currentX : startX);
        rect.setAttribute('y', height < 0 ? currentY : startY);
        rect.setAttribute('width', Math.abs(width));
        rect.setAttribute('height', Math.abs(height));
        rect.setAttribute('fill', 'rgba(255, 150, 0, 0.5)');
        svg.appendChild(rect);
    } else if (shape === 'triangle') {
        const points = `${startX},${startY} ${currentX},${currentY} ${startX},${currentY}`;
        const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        triangle.setAttribute('points', points);
        triangle.setAttribute('fill', 'rgba(0, 255, 0, 0.5)');
        svg.appendChild(triangle);
    }
});

svg.addEventListener('mouseup', () => {
    isDrawing = false;
});

svg.addEventListener('mouseleave', () => {
    isDrawing = false;
});

//commit