function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const unitFrom = document.getElementById('unitFrom').value;
    let result;

    if (unitFrom === 'celsius') {
        result = celsiusToFahrenheit(inputValue);
        document.getElementById('result').textContent = `${inputValue} stopni Celsiusza to ${result.toFixed(2)} stopni Fahrenheit`;
    } else if (unitFrom === 'fahrenheit') {
        result = fahrenheitToCelsius(inputValue);
        document.getElementById('result').textContent = `${inputValue} stopni Fahrenheit to ${result.toFixed(2)} stopni Celsiusza`;
    }
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
