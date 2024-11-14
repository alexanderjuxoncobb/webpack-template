// src/index.js
import "./style.css";

// Function to calculate the square of a number using the backend API
function calculateSquare(number) {
  // Send data to the Python server and get the response
  fetch("/api/main", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ number: number }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`The square of ${number} is:`, data.square);
      // You can use data.square here or call another function
    })
    .catch((error) => console.error("Error:", error));
}

// Call the function with the desired number
calculateSquare(6);
