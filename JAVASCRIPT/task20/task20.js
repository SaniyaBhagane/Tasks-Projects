const numbers = [10, 25, 30, 8, 15];
const data = [
  { id: 1, name: "Saniya" },
  { id: 2, name: "Riya" },
  { id: 3, name: "Aman" }
];

const mixNumbers = [90, 89, 56, 45];

//  1. First value > 20
const firstGreaterThan20 = numbers.find(num => num > 20);
console.log("1️ First number > 20:", firstGreaterThan20);
//Output => 1️ First number > 20: 25

// 2. First value < 20
const firstLessThan20 = numbers.find(num => num < 20);
console.log("2️ First number < 20:", firstLessThan20);
//Output =>2️ First number < 20: 10

// 3. Filter by ID (e.g. id = 2)
const filteredById = data.filter(person => person.id === 2);
console.log("3️ Filtered by ID = 2:", filteredById);
//Output =>3️ Filtered by ID = 2: [ { id: 2, name: 'Riya' } ]

// 4. Check odd or even in array
mixNumbers.forEach(num => {
  const type = num % 2 === 0 ? "Even" : "Odd";
  console.log(`4️ ${num} is ${type}`);
});
//Output =>4 90 is Even
//         4️ 89 is Odd
//         4️ 56 is Even
//         4️ 45 is Odd


// 5. create a class Book: type_of_book(), no. of pages, type of pages, author
class Book {
  constructor(title, pages, pageType, author) {
    this.title = title;
    this.pages = pages;
    this.pageType = pageType;
    this.author = author;
  }

  type_of_book() {
    if (this.pages > 300) {
      return "Novel";
    } else if (this.pages > 100) {
      return "Story Book";
    } else {
      return "Short Read";
    }
  }

  getDetails() {
    return ` "${this.title}" by ${this.author}, ${this.pages} pages (${this.pageType}). Type: ${this.type_of_book()}`;
  }
}
const myBook = new Book("The Great Escape", 250, "Glossy", "John Smith");
console.log(myBook.getDetails());
//Output =>  "The Great Escape" by John Smith, 250 pages (Glossy). Type: Story Book


//6. create a class Animal: walk(), eat(), climb(), gender, name, disease
class Animal {
  constructor(name, gender, disease) {
    this.name = name;
    this.gender = gender;
    this.disease = disease;
  }
  walk() {
    return `${this.name} is walking. `;
  }
  eat() {
    return `${this.name} is eating. `;
  }
  climb() {
    return `${this.name} is climbing a tree. `;
  }
  getInfo() {
    return ` Animal: ${this.name}, Gender: ${this.gender}, Disease: ${this.disease}`;
  }
}

const tiger = new Animal("Tiger", "Male", "None");
console.log(tiger.getInfo());
console.log(tiger.walk());
console.log(tiger.eat());
console.log(tiger.climb());
//Output =>
    // Animal: Tiger, Gender: Male, Disease: None
    //         Tiger is walking.
    //         Tiger is eating.
    //         Tiger is climbing a tree.