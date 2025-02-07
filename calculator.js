function insert(num) {
    document.getElementById("screen").value += num;
}

function appendOperator(operator) {
    document.getElementById("screen").value += operator;
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
document.addEventListener("keydown", function (event) {
    let key = event.key;

    // Jika tombol angka ditekan (0-9)
    if (!isNaN(key) || key === ".") {
        insert(key);
    }
    // Jika tombol operator ditekan
    else if (["+", "-", "*", "/"].includes(key)) {
        insert(key);
    }
    // Jika tombol Enter ditekan untuk menghitung
    else if (key === "Enter") {
        calculate();
    }
    // Jika tombol Backspace ditekan untuk menghapus karakter terakhir
    else if (key === "Backspace") {
        backspace();
    }
    // Jika tombol Escape ditekan untuk menghapus semuanya
    else if (key === "Escape") {
        clearScreen();
    }
});
