let clickCount = 0;
const btn = document.getElementById('btn-glow');
const title = document.getElementById('title');
const stats = document.getElementById('stats');
const counterDisplay = document.getElementById('count');

btn.addEventListener('click', () => {
    clickCount++;
    
    // Update text and show stats
    title.textContent = "Keep Going!";
    stats.classList.remove('hidden');
    counterDisplay.textContent = clickCount;

    // Change button color slightly on every 5 clicks
    if (clickCount % 5 === 0) {
        btn.style.filter = `hue-rotate(${clickCount * 10}deg)`;
        console.log("Visual Evolution triggered!");
    }
});