function insert(num) {
    document.getElementById("screen").value += num;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

function backspace() {
    let screen = document.getElementById("screen");
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        document.getElementById("screen").value = eval(document.getElementById("screen").value);
    } catch (e) {
        alert("Input tidak valid");
    }
}

function calculateScientific(operation) {
    let screen = document.getElementById("screen");
    let value = parseFloat(screen.value);
    
    if (isNaN(value)) {
        alert("Masukkan angkanya terlebih dahulu");
        return;
    }
    
    switch (operation) {
        case 'sqrt':
            screen.value = Math.sqrt(value);
            break;
        case 'pow':
            screen.value = Math.pow(value, 2);
            break;
        case 'sin':
            screen.value = Math.sin(value * Math.PI / 180);
            break;
        case 'cos':
            screen.value = Math.cos(value * Math.PI / 180);
            break;
        case 'tan':
            screen.value = Math.tan(value * Math.PI / 180);
            break;
        case 'log':
            screen.value = Math.log10(value);
            break;
    }
}