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