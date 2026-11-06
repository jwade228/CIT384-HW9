// Part 1: Date Display

// Create a Date object for the current date.
const currentDate = new Date();

// Get the month, day, and year.
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");
const year = currentDate.getFullYear();

// Format the date as MM/DD/YYYY.
const formattedDate = `Today is ${month}/${day}/${year}`;

// Display the date on the webpage.
document.getElementById("dateOutput").textContent = formattedDate;

// Part 2: Number Conversion and Validation

// Create four separate string values for testing.
const firstValue = "42";
const secondValue = "19.75";
const thirdValue = "hello";
const fourthValue = "100";

// Convert each string into a number.
const firstNumber = Number(firstValue);
const secondNumber = Number(secondValue);
const thirdNumber = Number(thirdValue);
const fourthNumber = Number(fourthValue);

// Check whether each converted value is NaN or an integer.
const firstIsNaN = Number.isNaN(firstNumber);
const secondIsNaN = Number.isNaN(secondNumber);
const thirdIsNaN = Number.isNaN(thirdNumber);
const fourthIsNaN = Number.isNaN(fourthNumber);

const firstIsInteger = Number.isInteger(firstNumber);
const secondIsInteger = Number.isInteger(secondNumber);
const thirdIsInteger = Number.isInteger(thirdNumber);
const fourthIsInteger = Number.isInteger(fourthNumber);

// Use if/else statements to create messages for two of the values.
let thirdMessage;
if (thirdIsNaN) {
  thirdMessage = "This value is not a valid number.";
} else {
  thirdMessage = "This value is a valid number.";
}

let secondMessage;
if (secondIsInteger) {
  secondMessage = "This value is an integer.";
} else {
  secondMessage = "This value is not an integer because it contains a decimal.";
}

// Display all conversion and validation results on the webpage.
document.getElementById("numberConversionOutput").innerHTML = `
  <p>Original: "${firstValue}" &rarr; Converted: ${firstNumber} &rarr; isNaN: ${firstIsNaN} &rarr; isInteger: ${firstIsInteger}</p>
  <p>Original: "${secondValue}" &rarr; Converted: ${secondNumber} &rarr; isNaN: ${secondIsNaN} &rarr; isInteger: ${secondIsInteger}<br>${secondMessage}</p>
  <p>Original: "${thirdValue}" &rarr; Converted: ${thirdNumber} &rarr; isNaN: ${thirdIsNaN} &rarr; isInteger: ${thirdIsInteger}<br>${thirdMessage}</p>
  <p>Original: "${fourthValue}" &rarr; Converted: ${fourthNumber} &rarr; isNaN: ${fourthIsNaN} &rarr; isInteger: ${fourthIsInteger}</p>';

// Part 3: Math and Number Formatting

// Create numeric values for a simple price calculator.
const itemPrice = 24.99;
const taxRate = 0.0725;
const shippingCost = 5.99;

// Perform addition and multiplication calculations.
const subtotal = itemPrice + shippingCost;
const taxAmount = subtotal * taxRate;
const totalCost = subtotal + taxAmount;

// Use toFixed(2) to display money with two decimal places.
document.getElementById("mathOutput").innerHTML = `
  <p>Item price: $${itemPrice.toFixed(2)}</p>
  <p>Shipping cost: $${shippingCost.toFixed(2)}</p>
  <p>Subtotal: $${subtotal.toFixed(2)}</p>
  <p>Tax amount: $${taxAmount.toFixed(2)}</p>
  <p><strong>Total cost: $${totalCost.toFixed(2)}</strong></p>
`;
