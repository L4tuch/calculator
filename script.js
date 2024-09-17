let display = document.getElementById("result");

function clearDisplay() {
    display.value = "";
}

function deleteDigit() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += " " + operator + " ";
}

function calculateResult() {
    try {
        // Używamy eval, aby obliczyć wynik
        display.value = eval(display.value.replace("×", "*").replace("÷", "/"));
    } catch (error) {
        display.value = "Błąd";
    }
}

//Pierwiastki
function squareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = "Błąd";
    }
}
