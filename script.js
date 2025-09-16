const books = [
  {
    title: "O Senhor dos Anéis",
    authorName: "J.R.R. Tolkin",
    releaseYear: 1954,
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949,
  },
  {
    title: "Duna",
    authorName: "Frank Herbert",
    releaseYear: 1965,
  },
  {
    title: "A Revolução dos Bichos",
    authorName: "George Orwell",
    releaseYear: 1945,
  },
  {
    title: "Fahrenheit 451",
    authorName: "Ray Bradbury",
    releaseYear: 1953,
  },
  {
    title: "O Hobbit",
    authorName: "J.R.R. Tolkien",
    releaseYear: 1937,
  },
  {
    title: "Orgulho e Preconceito",
    authorName: "Jane Austen",
    releaseYear: 1813,
  },
  {
    title: "Cem Anos de Solidão",
    authorName: "Gabriel García Márquez",
    releaseYear: 1967,
  },
];

function sortByYear(bookA, bookB) {
  if (bookA.releaseYear < bookB.releaseYear) {
    return -1;
  } else if (bookA.releaseYear > bookB.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter((book) => book.releaseYear >= 1950);

// item 9:
filteredBooks.sort(sortByYear);

console.log(filteredBooks);
