//Sets work like python sets
let books = new Set();

books.add("Harry Potter");
books.add("Art of War");

console.log(books);

//Look at size of this set
console.log(books.size);

//Check if a value is present in this set
console.log(books.has("Harry Potter"));
console.log(books.has("The Witcher"));

//Lets delete a book
books.delete("Art of War")
console.log(books);