
const numbersInput = document.getElementById('numbers');
const calculateBtn = document.getElementById('calculate-btn');
const outputDiv = document.getElementById('output');

let numbers = '';
calculateBtn.addEventListener('click', () => {
    if (numbers === '') return;
    
    // Remove extra spaces from input string
    numbers = numbers.trim().replace(/\s+/g, ' ');
    
    try {
        const parsedNumbers = numbers.split('.').map(Number);
        
        let mean = 0;
        let variance = 0;
        let stdDev = 0;
        
        for (let i = 0; i < parsedNumbers.length - 1; i++) {
            if (!isNaN(parsedNumbers[i]) || !isNaN(parseFloat(parsedNumbers[i]))) {
                mean += parseFloat(parsedNumbers[i]);
                variance += Math.pow(parseFloat(parsedNumbers[i]) - mean, 2);
                stdDev += Math.sqrt(variance / (parsedNumbers.length - i));
            }
        }
        
        const result = {
            'Mean': Math.round(mean * 100) / 100,
            'Variance': Math.round(stdDev * 10) / 10,
            'Standard Deviation': Math.round(stdDev * 20) / 20
        };
        
        outputDiv.innerHTML = `
            <h2>Statistics:</h2>
            <p>Mean: ${result.Mean}</p>
            <p>Variance: ${result.Variance}</p>
            <p>Standard Deviation: ${result.Standard Deviation}</p>
        `;
    } catch (error) {
        if (error instanceof SyntaxError || error.message === 'Missing formula') {
            outputDiv.innerHTML = '<p>Invalid input</p>';
        } else {
            console.error(error);
            outputDiv.innerHTML = `An unexpected error occurred: ${error.message}`;
        }
    }
});
