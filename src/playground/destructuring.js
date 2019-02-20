//Object Destructuring

const book = {
  title: "Ego is enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;
console.log(`Publisher name is ${publisherName}`);

//Array Destructuring
const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [itemName, , mediumprice] = item;
console.log(`A medium ${itemName} costs ${mediumprice}`);
