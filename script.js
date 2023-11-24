//your JS code here. If required.
function createPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10

    // 50% chance of resolving with a number or rejecting with an error
    if (Math.random() < 0.5) {
      resolve(randomNumber);
    } else {
      reject(new Error(`Error for promise with random number ${randomNumber}`));
    }
  });
}

// Create an array of five promises
const promises = Array.from({ length: 5 }, createPromise);

// Use Promise.all to wait for all promises to settle
Promise.allSettled(promises)
  .then((results) => {
    // Log the results or errors in the output div
    const outputDiv = document.getElementById('output');

    results.forEach((result, index) => {
      const p = document.createElement('p');

      if (result.status === 'fulfilled') {
        p.innerText = `Promise ${index + 1} resolved with result: ${result.value}`;
      } else {
        p.innerText = `Promise ${index + 1} rejected with error: ${result.reason.message}`;
      }

      outputDiv.appendChild(p);
    });
  })
  .catch((error) => {
    // Handle errors if Promise.allSettled fails
    console.error(error);
  });