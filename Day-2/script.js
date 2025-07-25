function calculate() {
    // Get input values
    const num1Input = document.getElementById("num1");
    const operatorInput = document.getElementById("operator");
    const num2Input = document.getElementById("num2");
    const resultElement = document.getElementById("result");

    // Log initial values to console
    console.log("Calculation initiated with values:", {
        num1: num1Input.value,
        operator: operatorInput.value,
        num2: num2Input.value
    });

    // Validate inputs
    if (!num1Input.value || !operatorInput.value || !num2Input.value) {
        const errorMsg = "Error: Please fill all fields";
        console.error(errorMsg);
        resultElement.textContent = errorMsg;
        resultElement.style.color = "red";
        return;
    }

    const num1 = parseFloat(num1Input.value);
    const operator = operatorInput.value.trim();
    const num2 = parseFloat(num2Input.value);

    // Check if numbers are valid
    if (isNaN(num1) || isNaN(num2)) {
        const errorMsg = "Error: Please enter valid numbers";
        console.error(errorMsg, {
            parsedNum1: num1,
            parsedNum2: num2
        });
        resultElement.textContent = errorMsg;
        resultElement.style.color = "red";
        return;
    }

    let result;
    let error = null;

    // Perform calculation based on operator
    console.log(`Performing calculation: ${num1} ${operator} ${num2}`);
    
    switch (operator) {
        case "+":
            result = num1 + num2;
            console.log("Addition operation performed");
            break;
        case "-":
            result = num1 - num2;
            console.log("Subtraction operation performed");
            break;
        case "*":
            result = num1 * num2;
            console.log("Multiplication operation performed");
            break;
        case "/":
            if (num2 === 0) {
                error = "Cannot divide by zero";
                console.error("Division by zero attempted");
            } else {
                result = num1 / num2;
                console.log("Division operation performed");
            }
            break;
        default:
            error = "Invalid operator (use +, -, *, /)";
            console.error("Invalid operator used:", operator);
    }

    // Display result or error
    if (error) {
        console.error("Calculation failed:", error);
        resultElement.textContent = "Error: " + error;
        resultElement.style.color = "red";
    } else {
        // Round to 4 decimal places to avoid long decimals
        result = Math.round(result * 10000) / 10000;
        console.log("Calculation successful. Result:", result);
        resultElement.textContent = "Result: " + result;
        resultElement.style.color = "black";
    }

    // Log final state
    console.log("Calculation completed", {
        num1: num1,
        operator: operator,
        num2: num2,
        result: error ? "Failed: " + error : result,
        timestamp: new Date().toISOString()
    });
}

// Bonus: Add keyboard support
document.addEventListener('DOMContentLoaded', function() {
    console.log("Calculator initialized. Listening for Enter key...");
    
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            console.log("Enter key pressed - triggering calculation");
            calculate();
        }
    });
});