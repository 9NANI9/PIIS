const backgroundCanvas = document.getElementById('background-canvas');
const drawingCanvas = document.getElementById('drawing-canvas');
const shapeSelect = document.getElementById('shape-select');
const bgCtx = backgroundCanvas.getContext('2d');
const drawCtx = drawingCanvas.getContext('2d');

let isDrawing = false;
let startX, startY;
let shapes = [];

drawingCanvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    startX = event.offsetX;
    startY = event.offsetY;
});

drawingCanvas.addEventListener('mousemove', (event) => {
    if (!isDrawing) return;

    drawCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height); 

    const currentX = event.offsetX;
    const currentY = event.offsetY;

    const shape = shapeSelect.value;
    if (shape === 'circle') {
        const radius = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2));
        drawCtx.beginPath();
        drawCtx.arc(startX, startY, radius, 0, Math.PI * 2);
        drawCtx.fillStyle = 'rgba(0, 150, 255, 0.5)';
        drawCtx.fill();
    } else if (shape === 'rectangle') {
        const width = currentX - startX;
        const height = currentY - startY;
        const x = width < 0 ? currentX : startX;
        const y = height < 0 ? currentY : startY;
        drawCtx.fillStyle = 'rgba(255, 150, 0, 0.5)';
        drawCtx.fillRect(x, y, Math.abs(width), Math.abs(height));
    } else if (shape === 'triangle') {
        drawCtx.beginPath();
        drawCtx.moveTo(startX, startY);
        drawCtx.lineTo(currentX, currentY);
        drawCtx.lineTo(startX, currentY);
        drawCtx.closePath();
        drawCtx.fillStyle = 'rgba(0, 255, 0, 0.5)';
        drawCtx.fill();
    }
});

drawingCanvas.addEventListener('mouseup', (event) => {
    if (!isDrawing) return;

    const currentX = event.offsetX;
    const currentY = event.offsetY;
    const shape = shapeSelect.value;

    shapes.push({ shape, startX, startY, currentX, currentY });
    redrawShapes();

    isDrawing = false;
});

drawingCanvas.addEventListener('mouseleave', () => {
    isDrawing = false;
});

function redrawShapes() {
    bgCtx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height); 
    shapes.forEach(({ shape, startX, startY, currentX, currentY }) => {
        if (shape === 'circle') {
            const radius = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2));
            bgCtx.beginPath();
            bgCtx.arc(startX, startY, radius, 0, Math.PI * 2);
            bgCtx.fillStyle = 'rgba(0, 150, 255, 0.5)';
            bgCtx.fill();
        } else if (shape === 'rectangle') {
            const width = currentX - startX;
            const height = currentY - startY;
            const x = width < 0 ? currentX : startX;
            const y = height < 0 ? currentY : startY;
            bgCtx.fillStyle = 'rgba(255, 150, 0, 0.5)';
            bgCtx.fillRect(x, y, Math.abs(width), Math.abs(height));
        } else if (shape === 'triangle') {
            bgCtx.beginPath();
            bgCtx.moveTo(startX, startY);
            bgCtx.lineTo(currentX, currentY);
            bgCtx.lineTo(startX, currentY);
            bgCtx.closePath();
            bgCtx.fillStyle = 'rgba(0, 255, 0, 0.5)';
            bgCtx.fill();
        }
    });
}

//commit