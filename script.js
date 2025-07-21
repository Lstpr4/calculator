// Get the display element
const display = document.getElementById('display');

// Function to append values to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        // Use eval to calculate the expression in the display
        display.value = eval(display.value);
    } catch (error) {
        // Handle errors (invalid expressions)
        display.value = 'Error';
        
        // Reset after a short delay
        setTimeout(() => {
            clearDisplay();
        }, 1500);
    }
}