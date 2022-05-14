function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let total = 0
for (let i = 0; i < books.length; i++){
  const borrows = books[i].borrows
  for (let j = 0; j < borrows.length; j++){
    if (borrows[j].returned === false) { total += 1 }
  }
}
  return total
}

function getMostCommonGenres(books) {
  const result = books.reduce((acc, book) => {
    const genreCount = acc.find((genre) => genre.name === book.genre);
    if (!genreCount) {
      const newGenre = {
        name : book.genre,
        count : 1,
      }
      acc.push(newGenre)
    } else { genreCount.count += 1 }
    return acc
  }, [])
  result.sort((genre1, genre2) => genre2.count - genre1.count)
  result.splice(5)
  return result
}

function getMostPopularBooks(books) {
  const result = books.map((book) => {
    const newBook = {
      name : book.title,
      count : book.borrows.length,
    }
    return newBook
  })
  result.sort((book1, book2) => book2.count - book1.count)
  result.splice(5)
  return result
}

function getBooksByAuthor(books, author) {
  return books.filter((book) => book.authorId === author.id)
}

function getMostPopularAuthors(books, authors) {
  const result = authors.map((author) => {
    let booksByAuthor = getBooksByAuthor(books, author)
    const borrowCount = booksByAuthor.reduce((acc, book) => acc += book.borrows.length, 0)
    let {
      name : {
        first,
        last
      }
    } = author;
    const newAuthor = {
      name : `${first} ${last}`,
      count : borrowCount
    }
    return newAuthor
  })
  result.sort((author1, author2) => author2.count - author1.count)
  result.splice(5)
  return result
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
