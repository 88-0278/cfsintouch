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

const modeBtn = document.getElementById('modeBtn');
const countDisplay = document.getElementById('count-display');

let count = 0;

// 1. Existing Color Logic + Counter
btn.addEventListener('click', () => {
    // Random Color
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    // Only change background if dark mode is OFF
    if (!body.classList.contains('dark-theme')) {
        body.style.backgroundColor = color;
    }

    // Update Counter
    count++;
    countDisplay.innerText = count;
    
    // Simple logic: make the text pulse when clicked
    countDisplay.style.transform = "scale(1.2)";
    setTimeout(() => countDisplay.style.transform = "scale(1)", 100);
});

// 2. New Dark Mode Logic
modeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Update button text based on state
    if (body.classList.contains('dark-theme')) {
        modeBtn.innerText = "Light Mode";
    } else {
        modeBtn.innerText = "Dark Mode";
    }
});