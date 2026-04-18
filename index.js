// Select the button and the body
const btn = document.getElementById('colorBtn');
const body = document.body;

// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listener
btn.addEventListener('click', () => {
    const newColor = getRandomColor();
    body.style.backgroundColor = newColor;
    console.log(`Color changed to: ${newColor}`);
});