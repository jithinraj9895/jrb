debugger;
const textLoopElement = document.getElementById('textLoop');
const texts = ['TECH!', 'DESIGN!', 'ART!'];
let index = 0;

function loopText() {
    textLoopElement.textContent = texts[index];
    index = (index + 1) % texts.length;
}

// Call loopText function initially
loopText();

// Call loopText function every 6 seconds (matching the animation duration)
setInterval(loopText, 3000);
