document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const distance = parseFloat(document.getElementById('distance').value);

    const voltageDrop = voltageDropCalculator(voltage, current, distance);
    const wireSize = wireSizeCalculator(current);

    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = `
        <h2>Results:</h2>
        <p>Voltage Drop: ${voltageDrop.toFixed(2)} V</p>
        <p>Recommended Wire Size: ${wireSize} AWG</p>
    `;
});

function voltageDropCalculator(voltage, current, distance) {
    // Simple voltage drop calculation (Ohm's Law)
    const resistancePer1000ft = 10.4; // Example resistance for copper wire
    const resistance = (resistancePer1000ft / 1000) * distance;
    return resistance * current;
}

function wireSizeCalculator(current) {
    // Simple wire size calculation based on current (assumed values)
    if (current <= 10) {
        return '14';
    } else if (current <= 20) {
        return '12';
    } else if (current <= 30) {
        return '10';
    } else {
        return '8';
    }
}
