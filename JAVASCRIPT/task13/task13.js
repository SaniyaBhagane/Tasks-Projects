// 1. create an object for animal, car.
const animal = { 
    name: 'Dog', 
    age: 5,
    breed: 'German Shepherd',
    weight: '13kg'
};
const car = { 
    brand: 'Honda', 
    model: 'Civic',
    color: 'White',
    fuelType: 'Petrol', 
    transmission: 'Automatic', 
    engine: '1.5L Turbo',
    mileage: 18000, 
    isElectric: false,
    features: ['Sunroof', 'Bluetooth', 'Backup Camera'],
    owner: {
        name: 'Rahul',
        licenseNumber: 'MH12AB1234'
    },    
};


//find the duplicate in a string()
function findDuplicates(str) {
  const count = {};
  const duplicates = [];

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char in count) {
    if (count[char] > 1) {
      duplicates.push(char);
    }
  }

  return duplicates;
}
console.log(findDuplicates("programming")); // Output: ['r', 'g', 'm']

// reverse a string (use array method)
let str = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];
console.log(str.reverse()); // Output: ['t', 'p', 'i', 'r','c', 's', 'a', 'v', 'a', 'j']


const numbers = [5, 8, 2, 19, 3];

// find the highest and lowest value in array
const highest = Math.max(...numbers);
const lowest = Math.min(...numbers);
console.log("Highest:", highest); // Highest: 19
console.log("Lowest:", lowest);   //Lowest: 2

//sorting of an array
numbers.sort((a, b) => b - a);
console.log("Descending:", numbers); //Descending: [ 19, 8, 5, 3, 2 ]

// 7. remove 4th (index) element and add 2 element there
const arr = [10, 20, 30, 40, 50, 60];
console.log("Original array:", arr);
arr.splice(4, 1, 500, 600);
console.log("Updated array:", arr);
// Output: [10, 20, 30, 40, 500, 600, 60]
