let pin = [];

function updateCircles() {
    // Reset all circles
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`circle${i}`).classList.remove('filled');
    }

    // Fill the circles based on the length of the PIN
    for (let i = 0; i < pin.length; i++) {
        document.getElementById(`circle${i + 1}`).classList.add('filled');
    }
}

function handleInput(number) {
    if (pin.length < 4) {
        pin.push(number);
        updateCircles();
    }
}

function handleDelete() {
    if (pin.length > 0) {
        pin.pop();
        updateCircles();
    }
}

function handleGo() {
    if (pin.length === 4) {
        alert(`PIN entered: ${pin.join('')}`);
        //TODO: IZOOH ADD THE LOGIC TO VERIFY THE PIN HERE
    } else {
        alert('Please enter a 4-digit PIN.');
    }
}

// Handle keyboard input
function handleKey(event) {
    if (event.key >= 0 && event.key <= 9 && pin.length < 4) {
        handleInput(Number(event.key));
    } else if (event.key === "Backspace") {
        handleDelete();
    } else if (event.key === "Enter") {
        handleGo();
    }
}

