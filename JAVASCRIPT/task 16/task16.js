function displayEvenNumbers() {
    const n = parseInt(document.getElementById('task1Input').value);
    if (isNaN(n) || n < 2) {
      document.getElementById('task1Output').innerText = "Please enter a number greater than or equal to 2.";
      return;
    }
    let evens = [];
    for (let i = 2; i <= n; i += 2) {
      evens.push(i);
    }
    document.getElementById('task1Output').innerText = "Even numbers: " + evens.join(", ");
  }

  function checkVowelConsonant() {
    const ch = document.getElementById('task2Input').value.toLowerCase();
    if (!ch || ch.length !== 1 || !ch.match(/[a-z]/i)) {
      document.getElementById('task2Output').innerText = "Please enter a single alphabet character.";
      return;
    }
    const vowels = "aeiou";
    if (vowels.includes(ch)) {
      document.getElementById('task2Output').innerText = ch + " is a vowel.";
    } else {
      document.getElementById('task2Output').innerText = ch + " is a consonant.";
    }
  }

  function countEvenOdd() {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 1; i <= 999; i++) {
      if (i % 2 === 0) evenCount++;
      else oddCount++;
    }
    document.getElementById('task3Output').innerText = 
      "Even numbers count: " + evenCount + "\nOdd numbers count: " + oddCount;
  }

  function countCharOccurrence() {
    const str = document.getElementById('task4String').value;
    const charToCount = document.getElementById('task4Char').value;
    if (!charToCount || charToCount.length !== 1) {
      document.getElementById('task4Output').innerText = "Please enter a single character to count.";
      return;
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === charToCount) count++;
    }
    document.getElementById('task4Output').innerText = 
      "Count of '" + charToCount + "' in \"" + str + "\" is: " + count;
  }

  function sumAndAverage() {
    const arr = [1, 9, 8];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const avg = sum / arr.length;
    document.getElementById('task5Output').innerText = 
      "Array: [" + arr.join(", ") + "]\nSum: " + sum + "\nAverage: " + avg.toFixed(2);
  }

  function findLargest() {
    const arr = [1, 9, 8];
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    document.getElementById('task6Output').innerText = 
      "Array: [" + arr.join(", ") + "]\nLargest number: " + largest;
  }