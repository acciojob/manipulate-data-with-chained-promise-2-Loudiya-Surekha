//your JS code here. If required.
// Step 1: Create initial promise that resolves with [1, 2, 3, 4] after 3 seconds
function getInitialArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // 3-second delay
  });
}

// Step 2: Function to filter even numbers after 1 second
function filterEvenNumbers(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = arr.filter(num => num % 2 === 0);
      document.getElementById("output").innerText = evenNumbers.join(",");
      resolve(evenNumbers);
    }, 1000); // 1-second delay
  });
}

// Step 3: Function to multiply numbers by 2 after 2 seconds
function multiplyByTwo(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multiplied = arr.map(num => num * 2);
      document.getElementById("output").innerText = multiplied.join(",");
      resolve(multiplied);
    }, 2000); // 2-second delay
  });
}

// Run the transformations in sequence
getInitialArray()
  .then(filterEvenNumbers)
  .then(multiplyByTwo)
  .catch(err => console.error("Error:", err));
